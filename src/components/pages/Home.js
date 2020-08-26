import React from 'react'
import { Link, Redirect } from "react-router-dom"
import { CSSTransition } from 'react-transition-group'
import '../../styling/Home.css'

const Home = () => {
    return (
        <div className="home" >
            <main className='home-container'>
                <div className='home-container__content'>
                    {/* <h1 id="home-header">FOOD ON FILM</h1> */}
                    
                    <Link id="home-header"to="/portfolio">FOOD ON FILM</Link>
                </div>
            </main>
            
            <ul className="slideshow">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            {/* <CSSTransition></CSSTransition> */}
        </div>
    )
}

export default Home