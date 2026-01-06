
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyled from './styles/GlobalStyles.js'
import { ThemeProvider } from 'styled-components'
import { standardTheme } from './styles/themes/standard.js'
import { ToastContainer } from 'react-toastify'
import { Routers } from "./routes/index.jsx"
import AppProvider from './hooks/index.jsx'
import { Elements } from '@stripe/react-stripe-js'
import stripePromise from "./config/stripeConfig.js"



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <ThemeProvider theme={standardTheme}>
        <GlobalStyled />
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <Routers />
          </Elements>
        </BrowserRouter>
        <ToastContainer />
      </ThemeProvider>
    </AppProvider>
  </StrictMode>
)


