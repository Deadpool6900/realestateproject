import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PropertyInfo from '@/components/PropertyInfo'
import React from 'react'

const page = () => {
  return (
    <div className='bg-white'>
      <Navbar/>
      <PropertyInfo/>
      <Footer/>
    </div>
  )
}

export default page
