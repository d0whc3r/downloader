import { ThemeProvider } from '@emotion/react'
import { Routes } from '@generouted/react-router'
import { CssBaseline } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { initI18n } from './i18n'
import { PersistantStore } from './providers'
import theme from './theme'

void initI18n()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PersistantStore>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </PersistantStore>
  </React.StrictMode>,
)
