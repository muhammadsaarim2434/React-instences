import React from 'react'
import Headers from '../components/Headers'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Plans from '../components/Plans'
import Views from '../components/Views'
import Feedbaack from '../components/Feedbaack'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Headers/>
    <About/>
    <Services/>
    <Portfolio/>
    <Plans/>
    <Views/>
    <Feedbaack/>
    <Footer/>
    </>
  )
}

export default Home