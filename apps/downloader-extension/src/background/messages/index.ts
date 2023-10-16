import { MessageInfo } from '@ext/types/message'

export function parseMessage({ message, sender, sendResponse }: MessageInfo) {
  console.log({ message, sender, sendResponse })
}
