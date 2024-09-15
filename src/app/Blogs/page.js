import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <div className='h-[60vh] w-screen bg-slate-100 text-pink-700 flex flex-col items-center justify-center'>
                <h2 className='text-xl'>
                    Real Estate Blogs .</h2>
                <h2 className='text-6xl'>Coming Soon !</h2>
            </div>
            <Footer />
        </>
    )
}

export default page
