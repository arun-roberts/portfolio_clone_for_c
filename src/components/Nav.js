import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom"

const Nav = () => {
    return (
        <>
            <h1>The Nav</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )   
}

export default Nav