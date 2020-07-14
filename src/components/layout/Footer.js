import React from 'react'
import { Icon } from 'react-icons-kit' 
import { envelopeO } from 'react-icons-kit/fa/envelopeO'
import { tumblr } from 'react-icons-kit/fa/tumblr'
import { instagram } from 'react-icons-kit/fa/instagram'

const Footer = () => {
    return (
        <ul className="social-links__list">
            <li className="social-links__item">
                <a className="social-links__link" href="https://www.facebook.com/">
                    <Icon className="social-links__icon" icon={envelopeO} size={8} />
                </a>
            </li>
            <li className="social-links__item">
                <a className="social-links__link" href="https://www.tumblr.com/">
                    <Icon className="social-links__icon" icon={tumblr} size={8} />
                </a>
            </li>
            <li className="social-links__item">
                <a className="social-links__link" href="https://www.instagram.com/">
                <Icon className="social-links__icon" icon={instagram} size={8} />
                </a>
            </li>
        </ul>
    )
}

export default Footer