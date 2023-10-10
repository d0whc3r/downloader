import { SendMessageProps } from '@web/types/websocket'

import { useIpc } from '../useIpc'

export function useWebsocket() {
  const ipc = useIpc()

  const sendMessage = (message: SendMessageProps) =>
    ipc.send('send-message', message)

  return { sendMessage }
}
