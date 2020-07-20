import React, { useState } from 'react'
import { Icon } from 'react-icons-kit' 
import { envelopeO } from 'react-icons-kit/fa/envelopeO'
import { tumblr } from 'react-icons-kit/fa/tumblr'
import { instagram } from 'react-icons-kit/fa/instagram'
import '../../styling/Contact.css'

const Contact = () => {
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ emailAddress, setEmailAddress ] = useState('')
    const [ subject, setSubject ] = useState('')
    const [ message, setMessage ] = useState('')
    
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
                <form className="email-form">
                    <label className="email-field">
                        <span className="email-field__label">
                            Name *
                        </span>
                        <div className="email-field__name-container">
                            <div className="email-field__name">
                                <input 
                                    className="email-field__input"
                                    type="text" 
                                    value={firstName.value} 
                                    onChange={setFirstName} 
                                />
                                <span className="email-field__subtitle">
                                    First Name
                                </span>
                            </div>
                            <div className="email-field__name">
                                <input
                                    className="email-field__input"  
                                    type="text"
                                    value={lastName.value}
                                    onChange={setLastName}
                                />
                                <span className="email-field__subtitle">
                                    Last Name
                                </span>
                            </div>
                        </div>
                    </label> 
                    <label className="email-field">
                        <span className="email-field__label">
                            Email Address *
                        </span>
                        <input
                            className="email-field__input"
                            type="text"
                            value={emailAddress.value}
                            onChange={setEmailAddress}
                        />
                    </label>
                    <label className="email-field">
                    <span className="email-field__label">
                        Subject *
                    </span>
                        <input 
                            className="email-field__input"  
                            type="text"
                            value={subject.value}
                            onChange={setSubject}
                        />
                    </label>
                    <label className="email-field">
                        <span className="email-field__label">
                            Message *
                        </span>
                        <textarea
                            className="email-field__input"
                            value={message.value}
                            onChange={setMessage}
                        />
                    </label>
                    <input 
                        className="email-field__submit" 
                        type="submit" 
                        value="Submit" 
                    />      
                </form>
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
        </div>
    )
}

export default Contact