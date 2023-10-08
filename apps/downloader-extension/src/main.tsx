import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { router } from '@ext/router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
