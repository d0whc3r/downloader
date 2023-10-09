import { WebSocketInstance } from '../helpers/websocket'

console.log('BACKGROUND LOADED!')

chrome.runtime.onConnect.addListener((info) => {
  console.log('CONNECTED!!!', info)
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log({ message, sender, sendResponse })
  WebSocketInstance.sendMessage({ message })
})

WebSocketInstance.onMessage((msg) => {
  console.log('RECEIVED message', msg)
})
