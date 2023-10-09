import { Server } from 'ws'

import { environment } from '@elct/environments/environment'
import {
  ErrorCallback,
  MessageCallback,
  SendMessageProps,
} from '@elct/types/websocket'

export class WebSocket {
  private constructor() {}

  private static _instance: Server | null = null

  public static get instance() {
    if (!this._instance) {
      this._instance = new Server({
        port: environment.wsPort,
        host: '0.0.0.0',
      })
      this._instance.on('connection', (ws) => {
        ws.ping(new Date())
      })
    }
    return this._instance
  }

  public static sendMessage({ message, clientId, onError }: SendMessageProps) {
    console.log('SEND SOCKET MESSAGE', message)
    this.instance.clients.forEach((client) => {
      const idInClient = 'id' in client
      if (
        !clientId ||
        !idInClient ||
        (clientId && idInClient && clientId === client.id)
      ) {
        client.send(message, onError)
      }
    })
  }

  public static onMessage(cb: MessageCallback) {
    this.instance.on('message', cb)
  }

  public static onError(cb: ErrorCallback) {
    this.instance.on('error', cb)
  }
}
