import '@testing-library/jest-dom'
import { TextDecoder, TextEncoder } from 'util'

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder as unknown as any

const timeout30Secs = 30_000
jest.setTimeout(timeout30Secs)

beforeEach(() => {
  expect.hasAssertions()
})
