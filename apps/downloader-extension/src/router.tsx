import {
  Route,
  createHashRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import Home from '@ext/pages'
import AppLayout from '@ext/pages/_app'
import About from '@ext/pages/about'

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>,
  ),
)
