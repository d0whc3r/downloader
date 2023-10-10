declare global {
  interface Window {
    electron: {
      getAppVersion: () => void
      platform: string
      ipcRenderer: typeof import('electron').ipcRenderer
    }
  }
}

export function useIpc() {
  return window.electron.ipcRenderer
}
