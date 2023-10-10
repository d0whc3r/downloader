import { Config } from '@ext/helpers/config'
import { BufferLike, SendMessageProps } from '@ext/types/websocket'

export class WebSocketClient {
  private static instance: WebSocketClient | null = null
  private websocket: WebSocket | null = null
  private isConnected = false
  private messageQueue: BufferLike[] = []
  private readonly url = `ws://localhost:${Config.WS_PORT}`
  private readonly connectionRetryMs = 1_000

  private constructor() {
    this.connectWebSocket()
  }

  public static getInstance(): WebSocketClient {
    if (!WebSocketClient.instance) {
      WebSocketClient.instance = new WebSocketClient()
    }
    return WebSocketClient.instance
  }

  public sendMessage({ message }: SendMessageProps) {
    if (this.isConnected) {
      this.websocket?.send(message)
    } else {
      this.messageQueue.push(message)
    }
  }

  private connectWebSocket() {
    this.websocket = new WebSocket(this.url)

    this.websocket.addEventListener('open', () => {
      this.isConnected = true
      console.log('[+] Connected to WebSocket')

      this.sendPendingMessages()
    })

    this.websocket.addEventListener('message', (event) => {
      console.log('[>] Message received:', event.data)
    })

    this.websocket.addEventListener('close', (event) => {
      this.isConnected = false
      if (event.code === 1000) {
        console.log('[-] WebSocket connection closed')
      } else {
        console.error(
          '[!] WebSocket connection closed unexpectedly. Trying to reconnect...',
        )
        setTimeout(() => this.connectWebSocket(), this.connectionRetryMs)
      }
    })

    this.websocket.addEventListener('error', (error) => {
      console.error('[!] Websocket error:', error)
    })
  }

  private sendPendingMessages() {
    if (this.isConnected) {
      while (this.messageQueue.length > 0) {
        const message = this.messageQueue.shift()
        if (message) {
          this.websocket?.send(message)
        }
      }
    }
  }
}
