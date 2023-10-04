// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link, Route, Routes } from 'react-router-dom'

import Action from './action/action'
import styles from './app.module.scss'
import NxWelcome from './nx-welcome'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<div>This is the application root</div>} />
      <Route path="/action/*" element={<Action />} />
    </Routes>
  )
}

export default App
