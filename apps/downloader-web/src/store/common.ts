import { DefaultValue } from 'recoil'
import { syncEffect } from 'recoil-sync'

export function genericSyncEffect<T>(storeKey: string) {
  return syncEffect<T>({
    storeKey,
    syncDefault: true,
    refine: (value) => {
      return {
        type: 'success',
        value: value as T,
        warnings: [],
      }
    },
  })
}

export function isDefaultValue(value: unknown): value is DefaultValue {
  return value instanceof DefaultValue
}
