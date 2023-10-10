import generouted from '@generouted/react-router/plugin'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(() => {
  const isDev = process.env.NODE_ENV === 'development'

  return {
    cacheDir: path.resolve(
      __dirname,
      '../../node_modules/.vite/downloader-web',
    ),

    plugins: [
      generouted({
        source: {
          routes: path.resolve(__dirname, 'src/pages/**/[\\w[-]*.{jsx,tsx}'),
          modals: path.resolve(__dirname, 'src/pages/**/[+]*.{jsx,tsx}'),
        },
        output: path.resolve(__dirname, 'src/router.ts'),
      }),
      tsconfigPaths(),
      react(),
      nxViteTsPaths(),
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
      minify: isDev ? false : 'esbuild',
      lib: {
        entry: path.resolve(__dirname, 'src/background/index.ts'),
        fileName: 'background',
        name: 'background',
        formats: ['cjs'],
      },
      rollupOptions: {
        treeshake: true,
        // External packages that should not be bundled into your library.
        external: [],
        input: {
          index: path.resolve(__dirname, 'index.html'),
          background: path.resolve(__dirname, 'src/background/index.ts'),
        },
        output: {
          entryFileNames: ({ name }) =>
            name === 'background' ? '[name].js' : '[name]-[hash].js',
        },
      },
    },
  }
})
