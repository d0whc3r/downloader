import { WebSocketClient } from '@ext/helpers/websocket'

console.log('BACKGROUND LOADED!')

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log({ message, sender, sendResponse })
  const wsClient = WebSocketClient.getInstance()
  wsClient.sendMessage({ message })
})
