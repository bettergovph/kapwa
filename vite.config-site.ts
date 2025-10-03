import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
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
  optimizeDeps: {
    exclude: ['storybook'],
  },
  plugins: [react(), tailwindcss()],
});
