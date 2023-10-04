import { CreateStyled } from '@emotion/styled'
import * as yup from 'yup'

export async function isUrl(text?: string) {
  const schema = yup.object({
    text: yup.string().url(),
  })
  try {
    const result = await schema.validate({ text })
    return !!result.text
  } catch {
    return false
  }
}

export const transientOptions: Parameters<CreateStyled>[1] = {
  shouldForwardProp: (propName: string) => !propName.startsWith('$'),
}

export function uuid4() {
  let d = new Date().getTime()
  let d2 =
    (typeof performance !== 'undefined' &&
      performance.now &&
      performance.now() * 1000) ||
    0
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = Math.random() * 16
    if (d > 0) {
      r = (d + r) % 16 | 0
      d = Math.floor(d / 16)
    } else {
      r = (d2 + r) % 16 | 0
      d2 = Math.floor(d2 / 16)
    }
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}
