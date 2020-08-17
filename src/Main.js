import React from 'react'
import { Switch, Route } from "react-router-dom"
import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import { Portfolio, About, Contact } from './components'
import Footer from './components/layout/Footer'
import './styling/Main.css'

const Main = () => {
    return (
        <div className='site'>
            <Header />
                <Nav />
                <Switch>
                    <Route path="/portfolio" children={<Portfolio />} />
                    <Route path="/about" children={<About />} />
                    <Route path="/contact" children={<Contact />} />
                </Switch>
            <Footer />
        </div>
    );
}

export default Main