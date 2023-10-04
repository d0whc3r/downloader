import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil'

import { QueueStore } from '@web/types/store'

import { queueIdStore, queueStore } from './store'

export const useQueueIds = () => useRecoilValue(queueIdStore)

export function useDeleteQueue() {
  return useRecoilCallback<[id: string], void>(({ set, reset }) => (id) => {
    set(queueIdStore, (oldQueue) =>
      oldQueue.filter((queueId) => queueId !== id),
    )
    reset(queueStore(id))
  })
}

export function useQueue(id: string) {
  // const [ids, setIds] = useRecoilState(queueIdStore)
  // if (!ids.includes(id)) {
  //   setIds((oldIds) => [...oldIds, id])
  // }

  return useRecoilState(queueStore(id))
}

export function useCreateQueue(id: string) {
  return useRecoilCallback<[queue: QueueStore], void>(({ set }) => (queue) => {
    set(queueIdStore, (oldQueue) => [...new Set(oldQueue.concat(id))])
    set(queueStore(id), queue)
  })
}
