import React from 'react'
import Footer from '../../Component/Footer/Footer'
import Navbar from '../../Component/Navbar/Navbar'
import Faq from './Componenet/Faq'
import Hero from './Componenet/Hero'
import Hero1 from './Componenet/Hero1'
import MainPage from './Componenet/MainPage'

const Home = () => {
  return (
    <>
    <Navbar/>
    <MainPage/>
    <Hero/>
    <Hero1/>
    <Faq/>
    <Footer/>
    </>
  )
}

export default Home