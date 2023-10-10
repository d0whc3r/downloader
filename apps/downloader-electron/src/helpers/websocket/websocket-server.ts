import * as WebSocket from 'ws'

import { environment } from '@elct/environments/environment'
import { SendMessageProps } from '@elct/types/websocket'

export class WebSocketServer {
  private static instance: WebSocketServer | null = null
  private server: WebSocket.Server

  private constructor() {
    this.server = new WebSocket.Server({ port: environment.wsPort })
    this.server.on('connection', (ws) => {
      console.log('[+] Client connected')

      ws.on('message', (message) => {
        console.log('[>] Message received', message)
      })

      ws.on('close', () => {
        console.log('[-] Client disconnected')
      })
    })
  }

  public static getInstance(): WebSocketServer {
    if (!WebSocketServer.instance) {
      WebSocketServer.instance = new WebSocketServer()
    }
    return WebSocketServer.instance
  }

  public sendMessage({ message, onError }: SendMessageProps) {
    this.server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message, (err) => {
          if (err) {
            onError?.(err)
          }
        })
      }
    })
  }
}
