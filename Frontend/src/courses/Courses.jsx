import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Course from '../Component/Course'

function Courses() {
  return (
    <>
    <div>
      <Navbar />
      <div className='min-h-screen'>
      <Course />

      </div>
      <Footer />
    </div>
    </>
  )
}

export default Courses
