# Vite Dual Build Setup: Library + Site

This document explains the architecture and configuration for bundling both a **component library** and a **static site (SPA)** in a single Vite project.

---

## 🎯 Overview

This project uses **two separate Vite configurations** to produce two distinct build outputs:

1. **Library Build** (`/dist`) - Reusable components for npm distribution
2. **Site Build** (`/site`) - Static SPA for hosting on platforms like Vercel/Netlify

### Output Structure

```
/dist                    → Component library (for npm consumers)
  /banner
    - index.tsx.js
    - index.tsx.cjs
    - index.d.ts
  /button
    - index.tsx.js
    - index.tsx.cjs
    - index.d.ts
  ...

/site                    → Static site build (for hosting)
  - index.html
  - assets/
    - *.js
    - *.css
```

---

## 📁 Project Structure

```
kapwa/
├── src/
│   ├── kapwa/              # Library components (exported)
│   │   ├── banner/
│   │   │   ├── index.tsx
│   │   │   └── Banner.stories.tsx
│   │   ├── button/
│   │   │   ├── index.tsx
│   │   │   └── Button.stories.tsx
│   │   └── ...
│   ├── components/         # Site-only components
│   │   ├── layout/
│   │   └── ui/
│   ├── pages/             # Site pages
│   ├── lib/               # Shared utilities
│   ├── main.tsx           # SPA entry point
│   └── App.tsx            # SPA root component
│
├── vite.config-lib.ts     # Library build configuration
├── vite.config-site.ts    # Site build configuration
├── tsconfig.lib.json      # TypeScript config for library
├── tsconfig.app.json      # TypeScript config for SPA
└── package.json           # Build scripts
```

### Key Principles

- **`/src/kapwa/`** - Components meant for library export
- **`/src/components/`, `/src/pages/`** - Site-specific code (not exported)
- Each component in `/src/kapwa/` has its own `index.tsx` for clean exports
- Storybook stories (`.stories.tsx`) are co-located but excluded from builds

---

## ⚙️ Configuration Files

### 1. `vite.config-lib.ts` - Library Build

**Purpose**: Builds reusable components to `/dist` for npm distribution.

```typescript
import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dts from 'vite-plugin-dts';
import { glob } from 'glob';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Auto-discover all component entry points
const entryPoints = glob
  .sync('./src/kapwa/**/index.ts?(x)')
  .reduce((acc, filePath) => {
    const outPath = filePath.replace(/^src\/kapwa\//, '');
    acc[outPath] = filePath;
    return acc;
  }, {});

export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: './tsconfig.lib.json',
      entryRoot: 'src/kapwa', // Strip src/kapwa/ from .d.ts output paths
    }),
  ],
  build: {
    minify: true,
    sourcemap: true,
    copyPublicDir: false, // Don't copy /public folder
    lib: {
      entry: entryPoints, // Multiple entry points
      formats: ['es', 'cjs'],
      name: 'Kapwa',
    },
    emptyOutDir: true,
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'tailwindcss',
        'tw-animate-css',
        '@tailwindcss/postcss',
        'postcss',
      ],
    },
  },
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, './src/components/ui'),
      '@layout': path.resolve(__dirname, './src/components/layout'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@kapwa': path.resolve(__dirname, './src/kapwa'),
    },
  },
});
```

**Key Features**:

- **Multi-entry**: Uses `glob` to auto-discover all `index.tsx` files in `/src/kapwa/`
- **Type Generation**: `vite-plugin-dts` generates `.d.ts` files
- **External Dependencies**: React, TailwindCSS marked as peer dependencies (not bundled)
- **No Public Assets**: `copyPublicDir: false` prevents copying Storybook build

---

### 2. `vite.config-site.ts` - Site Build

**Purpose**: Builds the SPA to `/site` for hosting.

```typescript
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, './site'),
  },
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, './src/components/ui'),
      '@layout': path.resolve(__dirname, './src/components/layout'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@kapwa': path.resolve(__dirname, './src/kapwa'),
    },
  },
  plugins: [react(), tailwindcss()],
});
```

**Key Features**:

- **Standard SPA Build**: Entry is `index.html` → `src/main.tsx`
- **TailwindCSS Plugin**: Processes styles for the site
- **Shared Aliases**: Same path aliases as library build

---

### 3. TypeScript Configurations

#### `tsconfig.lib.json` - Library

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "sourceMap": true,
    "outDir": "dist",
    "declaration": true,
    "jsx": "react-jsx",
    "paths": {
      "@lib/utils": ["./src/lib/utils.ts"]
    }
  },
  "include": ["src/kapwa/**/*.ts", "src/kapwa/**/*.tsx"],
  "exclude": ["src/kapwa/**/*.stories.tsx"] // Exclude Storybook
}
```

**Purpose**:

- Includes **only** `/src/kapwa/` files
- Excludes Storybook stories
- Generates type declarations

#### `tsconfig.app.json` - Site

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "paths": {
      "@ui/*": ["./src/components/ui/*"],
      "@layout/*": ["./src/components/layout/*"],
      "@pages/*": ["./src/pages/*"],
      "@lib/*": ["./src/lib/*"],
      "@kapwa/*": ["./src/kapwa/*"]
    }
  },
  "include": ["src"]
}
```

**Purpose**:

- Includes **all** of `/src/`
- Used for SPA development and build

---

## 🚀 Build Scripts

### `package.json`

```json
{
  "scripts": {
    "dev": "concurrently -n \"CLIENT,STORYBOOK\" \"npm run start:client\" \"npm run start:storybook\"",
    "start:client": "vite --config vite.config-site.ts",
    "start:storybook": "storybook dev -p 6006",

    "build-lib": "vite build --config vite.config-lib.ts && node scripts/generate-component-exports.mjs",
    "build-site": "vite build --config vite.config-site.ts",
    "build": "npm run build-lib && npm run build-site",
    "build:storybook": "storybook build -o ./public/storybook",

    "preview": "vite preview --config vite.config-site.ts"
  }
}
```

### Build Commands Explained

| Command                   | Purpose                           | Output              |
| ------------------------- | --------------------------------- | ------------------- |
| `npm run build-lib`       | Build component library           | `/dist`             |
| `npm run build-site`      | Build static site                 | `/site`             |
| `npm run build`           | Build both (lib first, then site) | `/dist` + `/site`   |
| `npm run build:storybook` | Build Storybook docs              | `/public/storybook` |

---

## 🔧 Post-Build Script

### `scripts/generate-component-exports.mjs`

This script runs after the library build to:

1. **Generate `src/index.ts`** - Barrel export file for all components
2. **Update `package.json`** - Add `exports` and `typesVersions` fields

#### What It Does

**1. Scans Component Directory**

```
src/kapwa/
  ├── banner/
  │   ├── index.tsx          ✓ Main component
  │   ├── types/
  │   │   └── index.ts       ✓ Sub-export
  │   └── hooks/
  │       └── index.ts       ✓ Sub-export
  └── button/
      └── index.tsx          ✓ Main component
```

**2. Generates `src/index.ts`**

```typescript
// This file is auto-generated - do not edit directly

// Utilities
export * from './lib/utils';

// Components
export * from './kapwa/banner';
export * from './kapwa/button';
```

**3. Updates `package.json` with Exports Map**

```json
{
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.cjs",
      "types": "./dist/index.d.ts"
    },
    "./utils": {
      "import": "./dist/utils.js",
      "require": "./dist/utils.cjs",
      "types": "./dist/utils.d.ts"
    },
    "./banner": {
      "import": "./dist/banner/index.tsx.js",
      "require": "./dist/banner/index.tsx.cjs",
      "types": "./dist/banner/index.d.ts"
    },
    "./banner/types": {
      "import": "./dist/banner/types/index.ts.js",
      "require": "./dist/banner/types/index.ts.cjs",
      "types": "./dist/banner/types/index.d.ts"
    },
    "./banner/hooks": {
      "import": "./dist/banner/hooks/index.ts.js",
      "require": "./dist/banner/hooks/index.ts.cjs",
      "types": "./dist/banner/hooks/index.d.ts"
    }
  },
  "typesVersions": {
    "*": {
      ".": ["./dist/index.d.ts"],
      "utils": ["./dist/utils.d.ts"],
      "banner": ["./dist/banner/index.d.ts"],
      "banner/types": ["./dist/banner/types/index.d.ts"],
      "banner/hooks": ["./dist/banner/hooks/index.d.ts"]
    }
  }
}
```

**4. Supports Sub-directory Exports**

The script scans for specific subdirectories defined in `src/constants.js`:

```javascript
export const ALLOWED_SUBDIRECTORIES = ['hooks', 'types', 'utils'];
```

If a component has these subdirectories with `index.ts(x)` files, they become importable:

```javascript
import { Banner } from '@bettergov/kapwa/banner';
import { useBanner } from '@bettergov/kapwa/banner/hooks';
import type { BannerProps } from '@bettergov/kapwa/banner/types';
```

#### Output Example

When you run `npm run build-lib`, you'll see:

```
🔧 Generating component exports and updating package.json...

📦 Adding main entry points:
  ✓ . (main)
  ✓ ./utils

🔍 Scanning components in src/kapwa/...
  ✓ banner
    └─ banner/types
    └─ banner/hooks
  ✓ button
  ✓ card

📝 Updating package.json...
  ✓ Added exports field
  ✓ Added typesVersions field

📄 Generating src/index.ts...
  ✓ Generated with 3 component exports

✅ Done!
```

**Purpose**:

- Enables **tree-shaking** for consumers
- Provides **multiple import styles**
- Automatically maintains **package.json exports** as components are added

---

## 🎨 Storybook Integration

### `.storybook/main.ts`

```typescript
export default {
  stories: ['../src/kapwa/**/*.stories.tsx'], // Only kapwa components
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'vite.config-site.ts', // Use site config
      },
    },
  },
};
```

**Key Points**:

- Storybook uses `vite.config-site.ts` (not library config)
- Stories are **co-located** with components in `/src/kapwa/`
- Stories are **excluded** from library build via `tsconfig.lib.json`
- Storybook builds to `/public/storybook` (separate from library)

---

## 📦 Publishing the Library

### `package.json` Entry Points

The `exports` and `typesVersions` fields are **automatically generated** by the post-build script. After running `npm run build-lib`, your `package.json` will include:

```json
{
  "name": "@bettergov/kapwa",
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.cjs",
      "types": "./dist/index.d.ts"
    },
    "./utils": {
      "import": "./dist/utils.js",
      "require": "./dist/utils.cjs",
      "types": "./dist/utils.d.ts"
    },
    "./banner": {
      "import": "./dist/banner/index.tsx.js",
      "require": "./dist/banner/index.tsx.cjs",
      "types": "./dist/banner/index.d.ts"
    },
    "./banner/types": {
      "import": "./dist/banner/types/index.ts.js",
      "require": "./dist/banner/types/index.ts.cjs",
      "types": "./dist/banner/types/index.d.ts"
    }
  },
  "typesVersions": {
    "*": {
      ".": ["./dist/index.d.ts"],
      "utils": ["./dist/utils.d.ts"],
      "banner": ["./dist/banner/index.d.ts"],
      "banner/types": ["./dist/banner/types/index.d.ts"]
    }
  }
}
```

### Import Styles for Consumers

Consumers can import your library in multiple ways:

```javascript
// 1. Barrel import (all components)
import { Banner, Button, Card } from '@bettergov/kapwa';

// 2. Individual component (tree-shakable)
import { Banner } from '@bettergov/kapwa/banner';

// 3. Component utilities
import { cn } from '@bettergov/kapwa/utils';

// 4. Component sub-exports
import { useBanner } from '@bettergov/kapwa/banner/hooks';
import type { BannerProps } from '@bettergov/kapwa/banner/types';
```

**Benefits**:

- ✅ **Tree-shakable** - Import only what you need
- ✅ **TypeScript Support** - Full type inference
- ✅ **ESM + CJS** - Works in modern and legacy projects
- ✅ **Automatic Updates** - Exports update when you add components

---

## 🔄 Development Workflow

### 1. **Develop Components**

```bash
npm run dev
```

- Starts Vite dev server (port 5173) with site config
- Starts Storybook (port 6006)
- Both run concurrently

### 2. **Add New Component**

```bash
src/kapwa/
  └── my-component/
      ├── index.tsx                  # Component implementation
      ├── MyComponent.stories.tsx    # Storybook stories
      ├── types/
      │   └── index.ts              # (Optional) Type definitions
      ├── hooks/
      │   └── index.ts              # (Optional) Custom hooks
      └── utils/
          └── index.ts              # (Optional) Component utilities
```

**Component auto-discovered** by glob pattern in `vite.config-lib.ts`

**Sub-directories** (types, hooks, utils) are automatically:

- ✅ Built as separate entry points
- ✅ Added to package.json exports
- ✅ Tree-shakable for consumers

Example usage after build:

```javascript
import { MyComponent } from '@bettergov/kapwa/my-component';
import { useMyComponent } from '@bettergov/kapwa/my-component/hooks';
import type { MyComponentProps } from '@bettergov/kapwa/my-component/types';
```

### 3. **Build for Production**

```bash
# Build library only
npm run build-lib

# Build site only
npm run build-site

# Build both
npm run build
```

### 4. **Preview Site**

```bash
npm run preview
```

---

## 🚫 Exclusions (`.gitignore`)

```
dist/        # Library build output
site/        # Site build output
public/storybook/   # Storybook build
```

Both `/dist` and `/site` are gitignored and generated fresh on each build.

---

## ⚠️ Common Pitfalls & Solutions

### Issue: Storybook assets appearing in `/dist`

**Cause**: Vite copies `/public` folder by default  
**Solution**: Set `copyPublicDir: false` in `vite.config-lib.ts`

### Issue: Type definitions in wrong directory (`/dist/kapwa/` instead of `/dist/`)

**Cause**: `vite-plugin-dts` preserving full source path  
**Solution**: Add `entryRoot: 'src/kapwa'` to dts plugin config

### Issue: External dependencies bundled in library

**Cause**: Missing from `rollupOptions.external`  
**Solution**: Add to external array in `vite.config-lib.ts`

### Issue: Path aliases not resolving

**Cause**: Different paths in Vite config vs tsconfig  
**Solution**: Ensure aliases match across:

- `vite.config-lib.ts`
- `vite.config-site.ts`
- `tsconfig.lib.json`
- `tsconfig.app.json`

---

## 🎯 Design Decisions

### Why Two Configs Instead of One?

Vite can't build both library mode and SPA mode simultaneously. The `--config` flag allows clean separation:

- Library build focuses on components, types, and tree-shakability
- Site build focuses on optimization, code-splitting, and hosting

### Why `/src/kapwa/` for Library Components?

Clear separation between:

- **Library code** (`/src/kapwa/`) - exported, versioned, published
- **Site code** (`/src/pages/`, `/src/components/`) - internal, not exported

### Why Multiple Entry Points?

Enables tree-shaking for consumers:

```javascript
// Only bundles Banner code
import { Banner } from '@bettergov/kapwa/banner';
```

---

## 📚 Related Files

- `vite.config-lib.ts` - Library build configuration
- `vite.config-site.ts` - Site build configuration
- `tsconfig.lib.json` - Library TypeScript config
- `tsconfig.app.json` - Site TypeScript config
- `scripts/generate-component-exports.mjs` - Export generation script
- `src/constants.js` - Defines allowed subdirectories for component sub-exports
- `.storybook/main.ts` - Storybook configuration

---

## 🔗 Additional Resources

- [Vite Library Mode](https://vitejs.dev/guide/build.html#library-mode)
- [vite-plugin-dts](https://github.com/qmhc/vite-plugin-dts)
- [TypeScript Project References](https://www.typescriptlang.org/docs/handbook/project-references.html)
