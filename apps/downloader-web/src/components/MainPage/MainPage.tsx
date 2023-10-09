import { useWebsocket } from '@web/helpers/useWebsocket'

export function MainPage() {
  const { sendMessage } = useWebsocket()
  const handleClick = () => {
    sendMessage({ message: 'HELLO from web/electron!' })
  }

  return (
    <div>
      <p>SAMPLE</p>
      <button onClick={handleClick}>Send message</button>
    </div>
  )
}
