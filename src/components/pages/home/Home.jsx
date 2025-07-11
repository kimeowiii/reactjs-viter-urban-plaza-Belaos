import React from 'react'
import Header from '../../partials/Header'
import App from '../../../App'
import Banner from './banner/Banner'
import Footer from '../../partials/Footer'
import Stores from './stores/Stores'
import Services from './services/Services'
import Contact from './contact/Contact'

const Home = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <Stores/>
      <Services/>
     <Contact/>
      <Footer/>
    </>
  )
}

export default Home
