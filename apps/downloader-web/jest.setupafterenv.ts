import { useState } from 'react'

let id = 0

export function useId() {
  const [currentId] = useState(() => id++)
  return `:r${currentId}:`
}

beforeEach(async () => {
  jest.clearAllMocks()
  id = 0
  jest.spyOn(await import('react'), 'useId').mockImplementation(useId)
})
