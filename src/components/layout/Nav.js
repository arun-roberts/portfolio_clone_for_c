import React from 'react'
import { NavLink } from "react-router-dom"

const Nav = ({ fillGhosts }) => {
    return (
        <>
            <nav className='main-nav'>
                <ul className='main-nav__list'>
                    <li className='main-nav__item'>
                        <NavLink 
                            activeClassName="main-nav__link--active" 
                            className="main-nav__link" 
                            to="/portfolio"
                            onClick={fillGhosts}
                        >
                            Portfolio
                        </NavLink>
                    </li>
                    <li className='main-nav__item'>
                        <NavLink 
                            activeClassName="main-nav__link--active" 
                            className="main-nav__link" 
                            to="/motion"
                            onClick={fillGhosts}
                        >
                            Motion
                        </NavLink>
                    </li>
                    <li className='main-nav__item'>
                        <NavLink 
                            activeClassName="main-nav__link--active" 
                            className="main-nav__link" 
                            to="/inthekitchen"
                            onClick={fillGhosts}
                        >
                            In the kitchen
                        </NavLink>
                    </li>
                    <li className='main-nav__item'>
                        <NavLink 
                            activeClassName="main-nav__link--active" 
                            className="main-nav__link" 
                            to="/about"
                            onClick={fillGhosts}
                        >
                            About
                        </NavLink>
                    </li>
                    <li className='main-nav__item'>
                        <NavLink 
                            activeClassName="main-nav__link--active" 
                            className="main-nav__link" 
                            to="/contact"
                            onClick={fillGhosts}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <hr className="line line--full"/>
            </nav>
        </>
    )   
}

export default Nav