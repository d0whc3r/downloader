import { RawData } from 'ws'

export type BufferLike =
  | string
  | Buffer
  | DataView
  | number
  | ArrayBufferView
  | Uint8Array
  | ArrayBuffer
  | SharedArrayBuffer
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | ReadonlyArray<any>
  | ReadonlyArray<number>
  | { valueOf(): ArrayBuffer }
  | { valueOf(): SharedArrayBuffer }
  | { valueOf(): Uint8Array }
  | { valueOf(): ReadonlyArray<number> }
  | { valueOf(): string }
  | { [Symbol.toPrimitive](hint: string): string }

export type ErrorCallback = (err?: Error) => void
export type MessageCallback = (data: RawData, isBinary: boolean) => void

export type SendMessageProps = {
  message: BufferLike
  onError?: ErrorCallback
}
