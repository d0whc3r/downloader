import { atom, atomFamily, selector } from 'recoil'

import { configStore } from '@web/store/config/store'
import { QueueStatus, QueueStore } from '@web/types/store'

import { genericSyncEffect } from '../common'

export const QUEUE_STORE_KEY = 'queueStore'
export const QUEUE_STORE_ID_KEY = `${QUEUE_STORE_KEY}/id`

export const queueStore = atomFamily<QueueStore, string>({
  key: QUEUE_STORE_KEY,
  default: selector({
    key: `${QUEUE_STORE_KEY}/default`,
    get: ({ get }): QueueStore => {
      const config = get(configStore)
      return {
        thumbnail: undefined,
        headers: undefined,
        url: '',
        title: '',
        description: undefined,
        duration: undefined,
        size: undefined,
        status: QueueStatus.PENDING,
        output: config.output,
        subtitles: {
          enabled: false,
          language: [],
        },
        info: {
          views: undefined,
          likes: undefined,
          rating: undefined,
          uploader: undefined,
          extractor: '',
        },
      }
    },
  }),
  effects: [genericSyncEffect(QUEUE_STORE_KEY)],
})

export const queueIdStore = atom({
  key: QUEUE_STORE_ID_KEY,
  default: [],
  effects: [genericSyncEffect<string[]>(QUEUE_STORE_ID_KEY)],
})

// import { atom, selectorFamily } from 'recoil'
//
// import { QueueStore } from '@web/types/store'
//
// import { genericSyncEffect, isDefaultValue } from '../common'
//
// export const QUEUE_STORE_KEY = 'queueStore'
//
// const defaultQueueStoreValue: QueueStore[] = []
//
// export const queueStore = atom({
//   key: QUEUE_STORE_KEY,
//   default: defaultQueueStoreValue,
//   effects: [genericSyncEffect(QUEUE_STORE_KEY, defaultQueueStoreValue)],
// })
//
// export const queueByIdSelector = selectorFamily<QueueStore | undefined, string>(
//   {
//     key: 'queueByIdSelector',
//     get:
//       (id) =>
//         ({ get }) => {
//           return get(queueStore).find((q) => q.id === id)
//         },
//     set:
//       (id) =>
//         ({ get, set }, newQueue) => {
//           if (!newQueue || isDefaultValue(newQueue)) {
//             return
//           }
//           const parsedQueue = { ...newQueue, id }
//
//           const queueStores = get(queueStore)
//
//           const queueIndex = queueStores.findIndex((q) => q.id === id)
//
//           const allQueues = [...queueStores]
//           if (queueIndex >= 0) {
//             allQueues[queueIndex] = parsedQueue
//           } else {
//             allQueues.push(parsedQueue)
//           }
//
//           set(queueStore, allQueues)
//         },
//   },
// )
