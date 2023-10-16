import { crx } from '@crxjs/vite-plugin'
import generouted from '@generouted/react-router/plugin'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import manifest from './manifest.config'

export default defineConfig(() => {
  const isDev = process.env.NODE_ENV === 'development'

  return {
    root: path.resolve(__dirname),
    cacheDir: path.resolve(
      __dirname,
      '../../node_modules/.vite/downloader-web',
    ),

    server: {
      port: 4200,
      host: 'localhost',
      fs: {
        // Allow serving files from one level up to the project root
        allow: [
          path.resolve(
            __dirname,
            '../../node_modules/@fontsource/roboto/files/roboto-latin-300-normal.woff2',
          ),
          path.resolve(
            __dirname,
            '../../node_modules/@fontsource/roboto/files/roboto-latin-400-normal.woff2',
          ),
          path.resolve(
            __dirname,
            '../../node_modules/@fontsource/roboto/files/roboto-latin-500-normal.woff2',
          ),
          path.resolve(
            __dirname,
            '../../node_modules/@fontsource/roboto/files/roboto-latin-700-normal.woff2',
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
        output: path.resolve(__dirname, 'src/router.ts'),
      }),
      crx({ manifest }),
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

    define: {
      'process.env.WS_PORT': JSON.stringify(process.env.WS_PORT),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    },

    build: {
      sourcemap: isDev,
      minify: !isDev,
      // rollupOptions: {
      //   treeshake: true,
      //   // External packages that should not be bundled into your library.
      //   external: [],
      //   input: {
      //     index: path.resolve(__dirname, 'index.html'),
      //     background: path.resolve(__dirname, 'src/background/index.ts'),
      //     content: path.resolve(__dirname, 'src/content/index.ts'),
      //   },
      //   output: [
      //     {
      //       format: 'esm',
      //       entryFileNames: ({ isEntry, name }) => {
      //         return isEntry && name !== 'index'
      //           ? '[name].js'
      //           : '[name]-[hash].js'
      //       },
      //     },
      //   ],
      // },
    },
  }
})
