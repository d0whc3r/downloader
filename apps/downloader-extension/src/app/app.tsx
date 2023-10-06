import { Route, Routes } from 'react-router-dom'

import NxWelcome from './nx-welcome'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<div>This is the application root</div>} />
      <Route path="/action/*" element={<NxWelcome title="sample" />} />
    </Routes>
  )
}

export default App
