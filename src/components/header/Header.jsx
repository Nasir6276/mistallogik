import React from 'react'
import './header.css'
import Typewriter from 'typewriter-effect';
import 'aos/dist/aos.css';

import logik from '../../img/Rectangle 132.png'
import awwward from '../../img/Group.png'
import interaction from '../../img/image 3 (1).png'
import udemy from '../../img/udemy-2 1.png'
import ibm from '../../img/Vector (2).png'

const Header = () => {
  return (
    <div className='ml_header'>
        <div className="ml_header-container">
            <h1>
                <Typewriter 
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        strings: Greetings
                    }}
                />
                 👋
            </h1>
            <h1>I’m Abubakar Sadeeq Ismail</h1>
            <p>Let me show you around, Shall we?👇</p>
            <img src={logik} className='ml_mistallogik' alt="Mistallogik" />
            <h3>
                My Superpower is crafting beautiful & functional products that people love to use and I ensure to maintain a 
                certain level of accesibility in my designs My Superpower is crafting beautiful & functional products that people 
                love to use and I ensure to maintain a certain level of accesibility in my designs.
            </h3>
            <div className="ml_header-cert">
                <div className="ml_header-cert_brand">
                    <p>Cerrtified by:</p>
                    <div className="ml_header-cert-images">
                        <img src={interaction} alt="interaction" />
                        <img src={ibm} alt="ibm" />
                        <img src={udemy} alt="udemy" />
                        <img src={awwward} alt="awwward" />
                    </div>
                </div>
                <a href="#resume">My Resume</a>
            </div>
            <hr />
        </div>
    </div>
  )
}

const Greetings = [
    'Hello',
    'Hola',
    'Salam',
    'Zdravo',
    'Zdravei',
    'Hai',
    'Ahoj',
    'Tere',
    'Moi',
    'Bula',
    'Salut',
    'Bok',
    'Szia',
    'Hi',
]

export default Header