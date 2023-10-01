import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import generouted from '@generouted/react-router/plugin'

export default defineConfig({
  cacheDir: '../../node_modules/.vite/downloader-web',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [react(), nxViteTsPaths(), generouted({
    source: {
      routes: 'apps/downloader-web/src/pages/**/[\\w[-]*.{jsx,tsx}',
      modals: 'apps/downloader-web/src/pages/**/[+]*.{jsx,tsx}'
    },
    output: 'apps/downloader-web/src/router.ts'
  })],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  test: {
    globals: true,
    cache: { dir: '../../node_modules/.vitest' },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
})
