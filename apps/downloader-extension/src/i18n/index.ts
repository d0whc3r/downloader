import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import * as en from './en'

export const defaultNS = 'common'
export const resources = {
  en,
} as const
export const defaultLang: keyof typeof resources = 'en'

export function initI18n() {
  return i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      defaultNS,
      lng: defaultLang,
      fallbackLng: defaultLang,

      interpolation: {
        escapeValue: false,
      },
    })
}

export { I18nextProvider } from 'react-i18next'
