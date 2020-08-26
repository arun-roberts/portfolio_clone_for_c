import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <hr className="line line--full"/>
            <hr className="line line--half"/>
            <Link className="main-link" to="/">
                <h2 className='main-header'>Food on Film</h2>
            </Link>

        </>
    )
}

export default Header