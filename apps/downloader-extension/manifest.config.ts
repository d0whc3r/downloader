import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest((env) => {
  const isDevelopment = env.mode === 'development'

  return {
    manifest_version: 3,
    name: isDevelopment ? 'Downloader - DEV' : 'Downloader',
    description: 'Download all kind of videos from anywhere',
    version: '0.0.1',
    permissions: ['activeTab', 'webRequest', 'webNavigation'],
    background: {
      service_worker: 'src/background/index.ts',
      type: 'module',
    },
    content_scripts: [
      {
        all_frames: true,
        match_about_blank: false,
        run_at: 'document_idle',
        js: ['src/content/index.ts'],
        matches: ['http://*/*', 'https://*/*'],
      },
    ],
    host_permissions: ['https://*/*'],
    action: {
      browser_style: true,
      default_icon: {
        '16': 'icons/16.png',
        '32': 'icons/32.png',
        '48': 'icons/48.png',
        '128': 'icons/128.png',
      },
      default_title: 'downloader-extension',
      default_popup: 'index.html',
    },
  }
})
