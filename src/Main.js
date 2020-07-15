import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import { Portfolio, About, Blog, Contact } from './components'
import Footer from './components/layout/Footer'
import './styling/Main.css'

  const Main = () => {
    return (
        <div className='site'>
            <Header />
            <Router>
                <Nav />
                <Switch>
                    <Route path="/portfolio">
                        <Portfolio />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/blog">
                        <Blog />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </div>
    );
}

export default Main