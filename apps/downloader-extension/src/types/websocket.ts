export type BufferLike = string | ArrayBufferLike | Blob | ArrayBufferView
export type ErrorCallback = (err?: Event) => void
export type MessageCallback = (data: MessageEvent) => void

export type SendMessageProps = {
  message: BufferLike
  onError?: ErrorCallback
}
