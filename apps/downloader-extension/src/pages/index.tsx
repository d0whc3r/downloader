import { useMessage } from '../helpers/useMessage'

export const Loader = () => 'Route loader'
export const Action = () => 'Route action'
export const Catch = () => <div>Something went wrong...</div>

export const Pending = () => <div>Loading...</div>

export default function Home() {
  const { send } = useMessage()

  const handleClick = () => {
    send({ msg: 'Hello from extension!' })
  }

  const handleClick2 = () => {
    chrome.runtime.connect(chrome.runtime.id)
  }

  return (
    <div>
      <p>This is the application root</p>
      <button onClick={handleClick2}>Connect</button>
      <button onClick={handleClick}>Send message</button>
    </div>
  )
}
