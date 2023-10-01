import { useMatch } from 'react-router-dom'

import { useParams } from '../../../router'

export default function Id() {
  // const { params } = useMatch('/posts/$id')

  const path = useParams('/posts/:id')
  const match = useMatch('/posts/:id')

  return (
    <h1>
      Id - {JSON.stringify(path)} -- {path.id} -- MATCH: {JSON.stringify(match)}
    </h1>
  )
}
