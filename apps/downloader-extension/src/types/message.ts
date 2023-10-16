export enum MessageType {
  VIDEO_FOUND = 'VIDEO_FOUND',
}

export type MessageVideoContent = {
  url: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers: Record<string, any>
}

export type MessageContent<T = MessageVideoContent> = {
  type: MessageType
  content: T
}

export type MessageInfo<M = MessageContent> = {
  message: M
  sender: chrome.runtime.MessageSender
  sendResponse: <T>(response: T) => void
}
