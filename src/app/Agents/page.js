import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
    const agents = [
        { name: "Bruno Fernandes", rating: 4.5, image: "https://placehold.co/300x300?text=Agent+1" },
        { name: "Bruno Fernandes", rating: 4.5, image: "https://placehold.co/300x300?text=Agent+2" },
        { name: "Bruno Fernandes", rating: 4.5, image: "https://placehold.co/300x300?text=Agent+3" },
        { name: "Bruno Fernandes", rating: 4.5, image: "https://placehold.co/300x300?text=Agent+4" },
        { name: "Bruno Fernandes", rating: 4.5, image: "https://placehold.co/300x300?text=Agent+5" },
        { name: "Bruno Fernandes", rating: 4.5, image: "https://placehold.co/300x300?text=Agent+6" },
        { name: "Bruno Fernandes", rating: 4.5, image: "https://placehold.co/300x300?text=Agent+7" },
        { name: "Bruno Fernandes", rating: 4.5, image: "https://placehold.co/300x300?text=Agent+8" },
    ];
    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Some Nearby Good Agents</h1>
                <div className="flex items-center mb-6">
                    <input type="text" placeholder="Enter your address" className="border rounded p-2 flex-grow mr-2" />
                    <button className="bg-white border rounded p-2 flex items-center">
                        <i className="fas fa-search mr-2"></i> Search
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {agents.map((agent, index) => (
                        <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
                            <img src={agent.image} alt={`Agent ${index + 1}`} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-lg font-bold">{agent.name}</h2>
                                <div className="flex items-center mb-2">
                                    <i className="fas fa-star text-red-500"></i>
                                    <i className="fas fa-star text-red-500"></i>
                                    <i className="fas fa-star text-red-500"></i>
                                    <i className="fas fa-star text-red-500"></i>
                                    <i className="fas fa-star-half-alt text-red-500"></i>
                                    <span className="ml-2">{agent.rating} review</span>
                                </div>
                                <button className="border rounded p-2 w-full">View Profile</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default page
