import { useParams } from '../../router'

export default function SplatAll() {
  const path = useParams('/splat/*')
  return <h1>All - {JSON.stringify(path)}</h1>
}
