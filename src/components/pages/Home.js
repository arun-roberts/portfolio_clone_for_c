import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

const Home = () => {
    return (
        <>
            <h1>This is where the home goes</h1>
            <Link to="/portfolio">Portfolio</Link>
        </>
    )
}

export default Home