import { promises as fs, existsSync } from 'fs';
import { join, resolve } from 'path';
import { ALLOWED_SUBDIRECTORIES } from '../src/constants.js';

// Helper function to find the correct extension (.ts or .tsx) for an entry point
function getEntryPointExtension(dirPath) {
  if (existsSync(join(dirPath, 'index.tsx'))) {
    return '.tsx';
  }
  if (existsSync(join(dirPath, 'index.ts'))) {
    return '.ts';
  }
  return null; // No entry point found
}

async function generateComponentExports() {
  console.log('🔧 Generating component exports and updating package.json...\n');

  const projectRoot = process.cwd();
  const packageJsonPath = join(projectRoot, 'package.json');
  const packageJsonData = await fs.readFile(packageJsonPath, 'utf8');
  const packageJson = JSON.parse(packageJsonData);

  const exportsMap = {};
  const typesVersionsMap = {};
  const componentExports = [];

  // Add main entry point
  console.log('📦 Adding main entry points:');
  exportsMap['.'] = {
    import: './dist/index.js',
    require: './dist/index.cjs',
    types: './dist/index.d.ts',
  };
  typesVersionsMap['.'] = ['./dist/index.d.ts'];
  console.log('  ✓ . (main)');

  // Add utils entry point
  exportsMap['./utils'] = {
    import: './dist/utils.js',
    require: './dist/utils.cjs',
    types: './dist/utils.d.ts',
  };
  typesVersionsMap['utils'] = ['./dist/utils.d.ts'];
  console.log('  ✓ ./utils\n');

  // Scan components
  console.log('🔍 Scanning components in src/kapwa/...');
  const componentsSrcDir = resolve('src', 'kapwa');

  if (existsSync(componentsSrcDir)) {
    const componentFolders = await fs.readdir(componentsSrcDir);

    for (const componentName of componentFolders) {
      const componentPath = join(componentsSrcDir, componentName);
      const stat = await fs.stat(componentPath);

      if (stat.isDirectory()) {
        // 1. Find the extension for the main component entry point
        const mainExt = getEntryPointExtension(componentPath);
        if (!mainExt) {
          console.log(`  ⚠️  Skipping ${componentName} (no index file)`);
          continue;
        }

        console.log(`  ✓ ${componentName}`);

        // Main component export
        const mainSubpathKey = `./${componentName}`;
        exportsMap[mainSubpathKey] = {
          import: `./dist/${componentName}/index${mainExt}.js`,
          require: `./dist/${componentName}/index${mainExt}.cjs`,
          types: `./dist/${componentName}/index.d.ts`,
        };
        typesVersionsMap[componentName] = [
          `./dist/${componentName}/index.d.ts`,
        ];
        componentExports.push(`export * from './kapwa/${componentName}';`);

        // 2. Scan for sub-directory entry points (hooks, types, utils)
        for (const subDir of ALLOWED_SUBDIRECTORIES) {
          const subDirPath = join(componentPath, subDir);
          const subDirExt = getEntryPointExtension(subDirPath);

          if (subDirExt) {
            console.log(`    └─ ${componentName}/${subDir}`);
            const subpathKey = `./${componentName}/${subDir}`;
            const typesVersionKey = `${componentName}/${subDir}`;

            exportsMap[subpathKey] = {
              import: `./dist/${componentName}/${subDir}/index${subDirExt}.js`,
              require: `./dist/${componentName}/${subDir}/index${subDirExt}.cjs`,
              types: `./dist/${componentName}/${subDir}/index.d.ts`,
            };
            typesVersionsMap[typesVersionKey] = [
              `./dist/${componentName}/${subDir}/index.d.ts`,
            ];
          }
        }
      }
    }
  }

  // Update package.json
  console.log('\n📝 Updating package.json...');
  packageJson.exports = exportsMap;
  packageJson.typesVersions = { '*': typesVersionsMap };
  await fs.writeFile(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2) + '\n',
    'utf8'
  );
  console.log('  ✓ Added exports field');
  console.log('  ✓ Added typesVersions field');

  // Generate index.ts file
  console.log('\n📄 Generating src/index.ts...');
  const srcDir = join(projectRoot, 'src');
  try {
    await fs.mkdir(srcDir, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') throw error;
  }

  let indexFileContent =
    '// This file is auto-generated - do not edit directly\n\n';
  indexFileContent += "// Utilities\nexport * from './lib/utils';\n\n";
  indexFileContent += '// Components\n';
  indexFileContent += componentExports.join('\n');
  indexFileContent += '\n';

  const indexFilePath = join(srcDir, 'index.ts');
  await fs.writeFile(indexFilePath, indexFileContent, 'utf8');
  console.log(
    `  ✓ Generated with ${componentExports.length} component exports`
  );

  console.log('\n✅ Done!\n');
}

(async () => {
  try {
    await generateComponentExports();
  } catch (error) {
    console.error('❌ An error occurred:', error);
    process.exit(1);
  }
})();
