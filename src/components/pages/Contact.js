import React, { useEffect } from 'react'
import { Icon } from 'react-icons-kit' 
import { envelopeO } from 'react-icons-kit/fa/envelopeO'
import { tumblr } from 'react-icons-kit/fa/tumblr'
import { instagram } from 'react-icons-kit/fa/instagram'
import '../../styling/Contact.css'


const Contact = ({ ghostContact, clearContact }) => {
    useEffect(clearContact, [ghostContact]);
    
    return (
        <div className="contact-container">
            <div className="contact-container__email">
                <h3 className="contact-header">Contact</h3>
                <p className="contact-text"> 
                    Do you have a question, comment or simply would like to say hello? Get in touch by email at info@carmelgohar.com or simply fill out your details in the form below.
                    <br/>
                    <br/>
                    Looking forward to hearing from you!
                </p>
            </div>
            <div className="contact-container__social">
                <h3 className="contact-header">Connect</h3>
                <ul className="social-links__list--contact">
                    <li className="social-links__item--contact">
                        <a className="social-links__link--contact" href="https://www.facebook.com/">
                            <Icon className="social-links__icon--contact" icon={envelopeO} size={14} />
                        </a>
                    </li>
                    <li className="social-links__item--contact">
                        <a className="social-links__link--contact" href="https://www.tumblr.com/">
                            <Icon className="social-links__icon--contact" icon={tumblr} size={15} />
                        </a>
                    </li>
                    <li className="social-links__item--contact">
                        <a className="social-links__link--contact" href="https://www.instagram.com/">
                        <Icon className="social-links__icon--contact" icon={instagram} size={16} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="ghost-div--contact" style={{ background: `${ ghostContact === true ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)'}` }}></div>
        </div>
    )
}

export default Contact