import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Link className="main-link" to="/">
                <h2 className='main-header'>Celia Dowzer</h2>
            </Link>
            <h3 className='main-subheader'>Creative Stylist</h3>

        </>
    )
}

export default Header