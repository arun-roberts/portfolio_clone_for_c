import React, { useState } from 'react'
import { Switch, Route } from "react-router-dom"
import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import { Portfolio, About, Contact, Motion, InTheKitchen } from './components'
import Footer from './components/layout/Footer'
import './styling/Main.css'

const Main = () => {
    const [ ghostContact, clearGhostContact ] = useState(true) 
    const [ ghostAbout, clearGhostAbout ] = useState(true)
    const [ ghostMotion, clearGhostMotion ] = useState(true)
    const clearContact = () => clearGhostContact(false)
    const clearAbout = () => clearGhostAbout(false)
    const clearMotion = () => clearGhostMotion(false)
    const fillGhosts = () => {
        clearGhostContact(true)
        clearGhostAbout(true)
        clearGhostMotion(true)
    }

    return (
        <>
        <div className='site'>
            <Header />
            <Nav fillGhosts={fillGhosts} />
                <Switch>
                    <Route path="/portfolio" children={<Portfolio />} />
                    <Route 
                        path="/about" 
                        children={<About ghostAbout={ghostAbout} clearAbout={clearAbout} />} 
                    />
                    <Route 
                        path="/contact" 
                        children={<Contact ghostContact={ghostContact} clearContact={clearContact} />} 
                    />
                    <Route 
                        path="/motion" 
                        children={<Motion ghostMotion={ghostMotion} clearMotion={clearMotion} />} 
                    />
                    <Route path="/inthekitchen" children={<InTheKitchen />} />
                </Switch>
            <Footer />
        </div>
        </>
    );
}

export default Main