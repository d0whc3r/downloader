import { parseMessage } from './messages'

console.log('BACKGROUND LOADED!')

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (sender.id !== chrome.runtime.id) {
    // accept only messages from this extension
    return
  }

  parseMessage({ message, sender, sendResponse })
  // const wsClient = WebSocketClient.getInstance()
  // wsClient.sendMessage({ message })
})

chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
  const tabId = details.tabId
  const currentUrl = details.url

  console.log('NAVIGATION', { tabId, currentUrl, details })
})

chrome.webRequest.onCompleted.addListener(
  (details) => {
    console.log('WEBREQUEST', details)
    const { url, type, method } = details
    const validTypes: chrome.webRequest.ResourceType[] = [
      'xmlhttprequest',
      'media',
      'other',
    ]
    const validFrame: chrome.webRequest.ResourceType[] = [
      'main_frame',
      'sub_frame',
    ]
    if (
      method.toUpperCase() === 'GET' &&
      [...validTypes, ...validFrame].includes(type)
    ) {
      const urlObject = new URL(url)
      const containsm3u8 =
        urlObject.pathname.toLowerCase().endsWith('.m3u8') ||
        urlObject.search.toLowerCase().includes('.m3u8')
      if (containsm3u8 || validFrame.includes(type)) {
        console.log('URL', {
          pathname: urlObject.pathname,
          search: urlObject.search,
          type,
          url,
        })
      }
    }
    // console.log('WEBREQUEST', details)
  },
  { urls: ['http://*/*', 'https://*/*'] },
)
