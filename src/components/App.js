import React, { Fragment, useState } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LightTheme from 'themes/light'
import DarkTheme from 'themes/dark'
import Home from 'components/pages/Home'
import Login from 'components/pages/Login'
const GlobalStyle = createGlobalStyle`
  body{
    background: ${(p) => p.theme.bodyBackgroundColor};
    min-height: 100vh;
    margin: 0;
    color: ${(p) => p.theme.bodyFontColor};
    font-family: 'Kaushan Script', cursive;
  }
`

function App() {
  const [theme, setTheme] = useState(LightTheme)

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          console.log('clicked')
          setTheme((s) => (s.id === 'dark' ? DarkTheme : LightTheme))
        },
      }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
