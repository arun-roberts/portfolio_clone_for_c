import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <h1>This is the header</h1>
            <Link to="/">Home</Link>
        </>
    )
}

export default Header