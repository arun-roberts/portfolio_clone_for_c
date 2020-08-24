import React from 'react'
import portrait from '../images/celia.jpg'

const About = ({ ghostAbout, clearGhostAbout }) => {


    return (
        <div className="about-section absolute">
            <figure className="about-section__figure">
                <img className="about-section__image" src={portrait} alt="Celia Dowzer" />
            </figure>
            <p className="about-section__text">
                
            </p>
            <div className="ghost-div--about" style={{ background: `${ ghostAbout === true ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)'}` }}></div>
        </div>
    )
}

export default About