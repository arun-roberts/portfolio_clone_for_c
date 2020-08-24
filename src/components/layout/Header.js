import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Link className="main-link" to="/">
                <h2 className='main-header'>Food on Film</h2>
            </Link>
            <h3 className='main-subheader'>Creative Stylists</h3>

        </>
    )
}

export default Header