import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <Hero />
    <div className="container">
      <Title  subTtitle='Our PROGRAM' title='What We Offer' />
      <Programs/>
      <About />
      <Title  subTtitle='Gallery' title='Campus Photos' />
      <Campus/>
      <Title  subTtitle='TESTIMONIALS' title='What Students Say' />
      <Testimonials />
      <Title  subTtitle='Contact Us' title='Get In Touch' />
      <Contact/>
      <Footer/>
    </div>
    </>
  )
}

export default App
