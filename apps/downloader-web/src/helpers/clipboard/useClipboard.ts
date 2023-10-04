import { useEffect, useState } from 'react'

export function useClipboard() {
  const [state, setState] = useState('')

  const setClipboardContent = () => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported')
      return false
    }
    navigator.clipboard
      .readText()
      .then((text) => {
        setState(text)
      })
      .catch((error) => {
        setState('')
      })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setClipboardContent()
    }, 300)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [])

  const writeState = async (text: string) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported')
      return false
    }
    try {
      await navigator.clipboard.writeText(text)
      setState(text)
      return true
    } catch (error) {
      console.warn('Clipboard copy failed', error)
      setState('')
      return false
    }
  }

  return [state, writeState] as const
}
