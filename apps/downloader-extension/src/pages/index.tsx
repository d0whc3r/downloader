import { useMessage } from '@ext/helpers/useMessage'

export const Loader = () => 'Route loader'
export const Action = () => 'Route action'
export const Catch = () => <div>Something went wrong...</div>

export const Pending = () => <div>Loading...</div>

export default function Home() {
  const { send } = useMessage()

  const handleClick = () => {
    send({ msg: 'Hello from extension!' })
  }

  return (
    <div>
      <p>This is the application root</p>
      <button onClick={handleClick}>Send message</button>
    </div>
  )
}
