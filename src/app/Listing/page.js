import CardHolder from '@/components/CardHolder'
import Filter from '@/components/Filter'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Filter/>
      <CardHolder/>
      {/* Note : add map view */}
      <Footer/>
    </div>
  )
}

export default page
