/**
 * This module is responsible on handling all the inter process communications
 * between the frontend to the electron backend.
 */
import { app, ipcMain } from 'electron'

import { environment } from '@elct/environments/environment'
import { WebSocket } from '@elct/helpers/websocket'
import { SendMessageProps } from '@elct/types/websocket'

export default class ElectronEvents {
  static bootstrapElectronEvents(): Electron.IpcMain {
    return ipcMain
  }
}

// Retrieve app version
ipcMain.handle('get-app-version', () => {
  console.log(`Fetching application version... [v${environment.version}]`)

  return environment.version
})

// Handle App termination
ipcMain.on('quit', (_, code) => {
  app.exit(code)
})

WebSocket.onMessage((msg) => {
  console.log('message received', msg)
})

ipcMain.on('send-message', (event, content: SendMessageProps) => {
  const onError: SendMessageProps['onError'] = (error) => {
    event.reply('send-message-error', error)
    content?.onError?.(error)
  }
  console.log('content!', content)

  WebSocket.sendMessage({ ...content, onError })
})
