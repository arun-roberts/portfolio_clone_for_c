import React from 'react'
import { Link } from "react-router-dom"
import '../../styling/Home.css'

const Home = () => {
    return (
        <div className="home" >
            <main className='home-container'>
                <div className='home-container__content'>
                    <h1 id="home-header">Celia Dowzer</h1>
                    <h3 className="home-subheader">Creative Styling</h3>
                    
                    <Link className="home-button" to="/portfolio">Portfolio</Link>
                </div>
            </main>
            
            <ul className="slideshow">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default Home