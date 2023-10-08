import generouted from '@generouted/react-router/plugin'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  cacheDir: path.resolve(__dirname, '../../node_modules/.vite/downloader-web'),

  server: {
    port: 4200,
    host: 'localhost',
    fs: {
      // Allow serving files from one level up to the project root
      allow: [
        path.resolve(
          __dirname,
          '../../node_modules/**/@fontsource/roboto/files/roboto-latin-300-normal.woff2',
        ),
        path.resolve(
          __dirname,
          '../../node_modules/**/@fontsource/roboto/files/roboto-latin-400-normal.woff2',
        ),
        path.resolve(
          __dirname,
          '../../node_modules/**/@fontsource/roboto/files/roboto-latin-500-normal.woff2',
        ),
        path.resolve(
          __dirname,
          '../../node_modules/**/@fontsource/roboto/files/roboto-latin-700-normal.woff2',
        ),
      ],
    },
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    tsconfigPaths(),
    react(),
    nxViteTsPaths(),
    generouted({
      source: {
        routes: path.resolve(__dirname, 'src/pages/**/[\\w[-]*.{jsx,tsx}'),
        modals: path.resolve(__dirname, 'src/pages/**/[+]*.{jsx,tsx}'),
      },
      output: 'apps/downloader-web/src/router.ts',
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  // test: {
  //   globals: true,
  //   cache: { dir: '../../node_modules/.vitest' },
  //   environment: 'jsdom',
  //   include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  // },
})
