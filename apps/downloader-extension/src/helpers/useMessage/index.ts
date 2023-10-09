export function useMessage() {
  return {
    send: chrome.runtime.sendMessage,
    listen: chrome.runtime.onMessage.addListener,
  }
}
