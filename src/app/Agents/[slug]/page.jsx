import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
    return (
        <>
        <Navbar/>
            <div className='bg-slate-100'>
                <div className="max-w-7xl mx-auto p-4 bg-slate-100">
                    <div className="relative">
                        <img src="https://placehold.co/1200x300" alt="Background" className="w-full h-64 object-cover" />
                        <div className="absolute top-4 left-4 flex items-center">
                            <img src="https://placehold.co/100x100" alt="Profile" className="w-24 h-24 rounded-full border-4 border-white" />
                            <div className="ml-4">
                                <h1 className="text-2xl font-bold">Bruno Fernandes</h1>
                                <div className="flex items-center text-sm text-gray-600">
                                    <i className="fas fa-star text-yellow-500"></i>
                                    <i className="fas fa-star text-yellow-500"></i>
                                    <i className="fas fa-star text-yellow-500"></i>
                                    <i className="fas fa-star text-yellow-500"></i>
                                    <i className="fas fa-star-half-alt text-yellow-500"></i>
                                    <span className="ml-2">4.5 review</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600 mt-1">
                                    <i className="fas fa-phone-alt mr-2"></i>
                                    <span>(123) 456-7890</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600 mt-1">
                                    <i className="fas fa-envelope mr-2"></i>
                                    <span>bruno@relasto.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-4">
                        <button className="bg-black text-white px-4 py-2 rounded">For rent</button>
                        <button className="border border-black text-black px-4 py-2 rounded">Review</button>
                        <button className="bg-black text-white px-4 py-2 rounded">Contact</button>
                    </div>
                    <div className="flex justify-center space-x-4 mt-4">
                        <button className="text-black px-4 py-2">For sale</button>
                        <button className="text-black px-4 py-2">About</button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {Array(6).fill().map((_, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src="https://placehold.co/400x300" alt="House" className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <div className="flex items-center text-gray-600 text-sm mb-2">
                                        <i className="fas fa-map-marker-alt mr-2"></i>
                                        <span>2861 62nd Ave, Oakland, CA 94605</span>
                                    </div>
                                    <div className="flex items-center text-gray-600 text-sm mb-2">
                                        <i className="fas fa-bed mr-2"></i>
                                        <span>3 Bed Room</span>
                                        <i className="fas fa-bath ml-4 mr-2"></i>
                                        <span>1 Bath</span>
                                    </div>
                                    <div className="flex items-center text-gray-600 text-sm mb-2">
                                        <i className="fas fa-ruler-combined mr-2"></i>
                                        <span>1,032 sqft</span>
                                        <i className="fas fa-users ml-4 mr-2"></i>
                                        <span>Family</span>
                                    </div>
                                    <div className="flex justify-between items-center mt-4">
                                        <button className="bg-black text-white px-4 py-2 rounded">View Details</button>
                                        <span className="text-lg font-bold">$649,900</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page
