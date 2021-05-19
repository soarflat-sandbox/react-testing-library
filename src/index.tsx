import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from '@/App'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/register">
        <p>Register</p>
      </Route>
      <Route exact path="/login">
        <p>Login</p>
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root'),
)
