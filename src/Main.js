import React, { useEffect } from 'react'
import { Switch, Route, useLocation } from "react-router-dom"
import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import { Portfolio, About, Blog, Contact } from './components'
import Footer from './components/layout/Footer'
import Modal from './components/Modal'
import './styling/Main.css'

const Main = () => {
    let location = useLocation()
    let background = location.state && location.state.background

    useEffect(() => {
        location.pathname.length > 11 
        ? document.querySelector('html').classList.add('scroll-lock') 
        : document.querySelector('html').classList.remove('scroll-lock') 
    })

    return (
        <div className='site'>
            <Header />
                <Nav />
                <Switch location={background || location}>
                    <Route path="/portfolio" children={<Portfolio />} />
                    <Route path="/about" children={<About />} />
                    <Route path="/blog" children={<Blog />} />
                    <Route path="/contact" children={<Contact />} />
                </Switch>
            <Footer />

            {background && <Route path="/portfolio/:id" children={<Modal />} />}
        </div>
    );
}

export default Main