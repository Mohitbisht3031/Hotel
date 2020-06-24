import React from "react"
import "./App.css"
import "tachyons"
import { BrowserRouter, Switch, Route } from "react-router-dom"
//components
import Nav from "./Nav"
import Home from "./Home"

import SignIn from "./SignIn"
import Register from "./Register"

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route path="/Signin" exact>
          <SignIn />
        </Route>
        <Route path="/Register" exact>
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
