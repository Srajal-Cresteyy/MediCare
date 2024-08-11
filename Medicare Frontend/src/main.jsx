import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material'
import { red, green, grey } from '@mui/material/colors'
import { alpha } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#3055eb',
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
)
