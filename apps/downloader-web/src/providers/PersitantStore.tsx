import { ReactNode, Suspense } from 'react'
import { DefaultValue, RecoilRoot } from 'recoil'
import { RecoilSync, RecoilSyncOptions } from 'recoil-sync'

import { CONFIG_STORE_KEY } from '@web/store/config/store'

export function PersistantStore({ children }: { children: ReactNode }) {
  const read: RecoilSyncOptions['read'] = (itemKey: string) => {
    try {
      const jsonValue = window.localStorage.getItem(itemKey)
      return jsonValue != null ? JSON.parse(jsonValue) : new DefaultValue()
    } catch (error) {
      console.error('recoil-sync read error', itemKey, error)
    }
  }

  const write: RecoilSyncOptions['write'] = ({ diff }) => {
    for (const [key, value] of diff) {
      try {
        const jsonValue = JSON.stringify(value)
        window.localStorage.setItem(key, jsonValue)
      } catch (error) {
        console.error('recoil-sync write error', key, value, error)
      }
    }
  }

  const syncTree = (keys: string[], index = 0) => {
    if (index >= keys.length) {
      return children
    }

    return (
      <RecoilSync storeKey={keys[index]} read={read} write={write}>
        {syncTree(keys, index + 1)}
      </RecoilSync>
    )
  }

  const storeKeys = [CONFIG_STORE_KEY]

  return (
    <RecoilRoot>
      <Suspense>{syncTree(storeKeys)}</Suspense>
    </RecoilRoot>
  )
}
