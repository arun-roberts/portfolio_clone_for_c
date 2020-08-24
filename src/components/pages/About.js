import React, { useEffect } from 'react'
import portrait from '../images/celia.jpg'

const About = ({ ghostAbout, clearAbout }) => {
    useEffect(clearAbout, []);

    return (
        <div className="about-section absolute">
            <figure className="about-section__figure">
                <img className="about-section__image" src={portrait} alt="Celia Dowzer" />
            </figure>
            <p className="about-section__text">
                Celia is a a food stylist based in Melbourne, Australia. Originally from a background as an international scientist, Celia has worked as a freelance food stylist for advertising and packaging, stills and motion for the past twenty years. 
                <br/>
                <br/>
                As well as creating images which showcase the joy and beauty of real food, Celia is focused on bringing clients ideas to life by combining science, creativity and a passion for detail.
                <br/>
                <br/>
                FOOD ON FILM collaborates with other freelance creatives - art directors, producers, photographers, videographers, stylists and assistants to offer food styling services, including access to a props pantry, studio and prop sourcing and customised recipe development and recipe testing.
                <br/>
                <br/>
                FOOD ON FILM are passionate about working as socially and environmentally sustainably as possible in what has traditionally been an industry producing a lot of food waste. We recycle, use worm farms, compost, donate to food banks and use local produce when possible to minimise your footprint.
                <br/>
                <br/>
                Reach out to FOOD ON FILM to assist your team with your next project OR let us create a crew for you. We’d love to hear from you!
                <br/>
                <br/>
                Bringing your ideas to life!!
            </p>
            <div className="ghost-div--about" style={{ background: `${ ghostAbout === true ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)'}` }}></div>
        </div>
    )
}

export default About