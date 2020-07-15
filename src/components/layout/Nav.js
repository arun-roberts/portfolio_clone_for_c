import React from 'react'
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <>
            <nav className='main-nav'>
                <ul className='main-nav__list'>
                    <li className='main-nav__item'>
                        <Link className="main-nav__link" to="/portfolio">Portfolio</Link>
                    </li>
                    <li className='main-nav__item'>
                        <Link className="main-nav__link" to="/about">About</Link>
                    </li>
                    <li className='main-nav__item'>
                        <Link className="main-nav__link" to="/blog">Blog</Link>
                    </li>
                    <li className='main-nav__item'>
                        <Link className="main-nav__link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )   
}

export default Nav