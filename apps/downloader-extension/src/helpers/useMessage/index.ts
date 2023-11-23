export const messages = {
  send: chrome.runtime.sendMessage,
  listen: chrome.runtime.onMessage.addListener,
  remove: chrome.runtime.onMessage.removeListener,
}

export function useMessage() {
  return messages
}
