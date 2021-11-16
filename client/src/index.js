import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './App'
import { UserProvider } from './context/userContext/userContext'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme'

ReactDOM.render(
    <React.StrictMode>
        <UserProvider>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </UserProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
