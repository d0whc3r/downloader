import {
  ErrorCallback,
  MessageCallback,
  SendMessageProps,
} from '../../types/websocket'
import { Config } from '../config'

export class WebSocketInstance {
  private static needRetry = false

  private constructor() {}

  private static _instance: WebSocket | null = null

  public static get instance() {
    if (!this._instance || this._instance?.readyState !== WebSocket.OPEN) {
      const url = `ws://localhost:${Config.WS_PORT}`
      console.log('OPEN CONNECTION', url)
      this._instance = new WebSocket(url)
      this._instance.onclose = () => {
        console.log('CLOSE CONNECTION')
        WebSocketInstance.needRetry = true
        WebSocketInstance.retryConnect()
      }
      this._instance.onopen = () => {
        console.log('CONNECTED')
        this.ping()
        this.needRetry = false
      }
    }
    return this._instance
  }

  public static ping() {
    console.log('ping?')
    this.instance?.send('ping')
  }

  public static retryConnect() {
    if (!this.needRetry) {
      return
    }
    setTimeout(() => {
      console.log('retry!')
      this.ping()
      this.retryConnect()
      chrome.runtime.reload()
    }, 1000)
  }

  public static sendMessage({ message, onError }: SendMessageProps) {
    console.log('SEND SOCKET MESSAGE', message)
    this.instance?.send(message)
  }

  public static onMessage(cb: MessageCallback) {
    this.instance?.addEventListener('message', cb)
  }

  public static onError(cb: ErrorCallback) {
    this.instance?.addEventListener('error', cb)
  }
}
