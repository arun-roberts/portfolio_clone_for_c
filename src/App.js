import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { CSSTransition } from 'react-transition-group'
import Home from './components/pages/Home'
import Main from './Main'


const App = () => {
    return (
        <Router>
          <Switch>
            <Route path={['/portfolio', '/about', '/contact', '/motion', '/inthekitchen']} >
                <Main />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
    );
}

export default App