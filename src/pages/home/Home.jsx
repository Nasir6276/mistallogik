import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Project from '../../components/project/Project'
import Contact from '../../components/contact/Contact'

const Home = () => {
  return (
    <>
        <Navbar />
        <Header />
        <Project />
        <Contact />
    </>
  )
}

export default Home