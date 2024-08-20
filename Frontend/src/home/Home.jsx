import React from 'react'
import Navbar from '../Component/Navbar'
import Banner from '../Component/Banner'
import Footer from '../Component/Footer'
import Freebook from '../Component/Freebook'

function Home() {
  return (
    <>
    <div>
      <Navbar/>
      <Banner/>
      <Freebook/>
      <Footer/>
    </div>
    </>
  )
}

export default Home
