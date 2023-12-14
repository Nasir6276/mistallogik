import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Project from '../../components/project/Project'
import Contact from '../../components/contact/Contact'
import './home.css'

import AOS from 'aos'

const Home = () => {
  const [theme, setTheme] = useState(false);

  const [active, setActive] = useState('ml_navbar-items')
  const [toggleIcon, setToggleIcon] = useState('ml_navbar-toggler')

  const navToggle = () => {
      active === 'ml_navbar-items' 
      ? setActive('ml_navbar-items ml_navbar-active') 
      : setActive('ml_navbar-items')

      // Toggle icon
      toggleIcon === 'ml_navbar-toggler'
      ? setToggleIcon('ml_navbar-toggler toggle')
      : setToggleIcon('ml_navbar-toggler')
  }

  AOS.init()
  return (
    <>
        <div className='ml_navbar'>
          <a href="#home" className='ml_navbar-brand'>Mistallogik</a>
          <div className="ml_navbar-section">
              <ul className={active}>
                  <li className='ml_navbar-item'><a href="#work" className='ml_navbar-link'>Works</a></li>
                  <li className='ml_navbar-item'><a href="#resume" className='ml_navbar-link'>Resume</a></li>
                  <li className='ml_navbar-item'><a href="#articles" className='ml_navbar-link'>Articles</a></li>
                  <li className='ml_navbar-item'><a href="#talk" className='ml_navbar-link'>Let’s Talk</a></li>
              </ul>
              <p>O</p>
          </div>
          <div onClick={navToggle} className={toggleIcon}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
          </div>
        </div>
        <Header />
        <Project />
        <Contact />
    </>
  )
}

export default Home