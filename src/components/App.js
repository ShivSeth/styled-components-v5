import React, { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from 'components/pages/Home'
import Login from 'components/pages/Login'
const GlobalStyle = createGlobalStyle`
  body{
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Kaushan Script', cursive;
  }
`

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
