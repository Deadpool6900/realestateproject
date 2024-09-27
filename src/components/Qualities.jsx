import { LucideDollarSign, LucideEye, LucideHome, LucidePanelsTopLeft, LucideSearch, LucideSmile } from 'lucide-react'
import React from 'react'

const Qualities = () => {
    return (
        <div>
            <div className="bg-white text-slate-800 min-h-screen flex flex-col items-center">
                <div className="flex flex-col md:flex-row items-center justify-center mt-10 space-y-4 md:space-y-0 md:space-x-4">
                    <div className="bg-orange-100 p-8 rounded-lg shadow-md w-full md:w-1/2">
                        <h2 className="text-2xl font-bold mb-4">Simple & easy way to find your dream Appointment</h2>
                        <p className="text-black mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button className="bg-black text-white px-4 py-2 rounded">Get Started</button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full md:w-1/2 ">
                        <div className="bg-orange-100 p-4 rounded-lg shadow-md flex items-center h-40">
                            <LucideSearch />
                            <span>Search your location</span>
                        </div>
                        <div className="bg-orange-100 p-4 rounded-lg shadow-md flex items-center">
                            <LucideEye />
                            <span>Visit Appointment</span>
                        </div>
                        <div className="bg-orange-100 p-4 rounded-lg shadow-md flex items-center">
                            <LucideHome />
                            <span>Get your dream house</span>
                        </div>
                        <div className="bg-orange-100 p-4 rounded-lg shadow-md flex items-center">
                            <LucideSmile />
                            <span>Enjoy your Appointment</span>
                        </div>
                    </div>
                </div>
                <div className="bg-orange-50 w-full py-10 mt-10 text-black">
                    <div className="flex flex-col md:flex-row justify-around items-center">
                        <div className="text-center mb-6 md:mb-0">
                            <div className="bg-white p-4 rounded-full shadow-md inline-block mb-2">
                                <LucideDollarSign/>
                            </div>
                            <h3 className="text-2xl font-bold text-black">$15.4M</h3>
                            <p className="text-black">Owned from Properties transactions</p>
                        </div>
                        <div className="text-center mb-6 md:mb-0">
                            <div className="bg-white p-4 rounded-full shadow-md inline-block mb-2">
                                <LucideHome />
                            </div>
                            <h3 className="text-2xl font-bold text-black">25K+</h3>
                            <p className="text-black">Properties for Buy & sell Successfully</p>
                        </div>
                        <div className="text-center mb-6 md:mb-0">
                            <div className="bg-white p-4 rounded-full shadow-md inline-block mb-2">
                                <LucideSmile />

                            </div>
                            <h3 className="text-2xl font-bold text-black">$15.4M</h3>
                            <p className="text-black">Owned from Properties transactions</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-white p-4 rounded-full shadow-md inline-block mb-2">
                                <i className="fas fa-smile text-orange-500 text-2xl"></i>
                                <LucidePanelsTopLeft/>
                            </div>
                            <h3 className="text-2xl font-bold text-black">600+</h3>
                            <p className="text-black">Reagular Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Qualities
