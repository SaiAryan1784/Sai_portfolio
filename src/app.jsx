import React from 'react'
import Header from './components/header/header'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Contact from './components/contact/contact'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Footer from './components/footer/footer'
import Nav from './components/nav/nav'

const app = () => {
  return (
    <>
    <Header />
    <Nav />
    < About/>
    < Experience/>
    {/* < Services/> */}
    <Portfolio/>
    {/* < Testimonials/> */}
    < Contact/>
    < Footer/>
    </>
  )
}

export default app