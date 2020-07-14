import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
  import Header from './components/Header'
  import Nav from './components/Nav'
  import Portfolio from './components/Portfolio'
  import About from './components/About'
  import Blog from './components/Blog'
  import Contact from './components/Contact'
  import Footer from './components/Footer'

  const Main = () => {
    return (
        <>
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
        </>
    );
}

export default Main