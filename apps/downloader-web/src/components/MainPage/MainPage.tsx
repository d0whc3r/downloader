import { useQueueIds } from '@web/store'

export function MainPage() {
  const queueIds = useQueueIds()

  return <div>{queueIds.join(' -- ')}</div>
}
