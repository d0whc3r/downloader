/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly WS_PORT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
