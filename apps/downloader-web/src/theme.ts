import '@fontsource/roboto/latin-300.css'
import '@fontsource/roboto/latin-400.css'
import '@fontsource/roboto/latin-500.css'
import '@fontsource/roboto/latin-700.css'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#346c8f',
    },
    secondary: {
      main: '#8f5734',
    },
  },
})

export default theme
