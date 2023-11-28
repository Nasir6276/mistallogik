import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='ml_contact'>
        <div className="ml_contact-container">
            <div className="ml_contact-text">
                <h1>Now, Let's talk about you!</h1>
                <h3>
                    If you have a project or an idea you want to build out or upgrade, or simply 
                    an opportunity to be a part of your team, you could drop me a message.
                </h3>
                <p>Mistallogik@gmail.com   //  +234(816)4544565</p>
                <div className="ml_contact-socials">
                    <a href="#social">Linkedin</a>
                    <a href="#social">Twitter (X)</a>
                    <a href="#social">Instagram</a>
                    <a href="#social">Medium</a>
                </div>
            </div>
            <div className="ml_contact-card">
                <p>Contact</p>
            </div>
        </div>
    </div>
  )
}

export default Contact