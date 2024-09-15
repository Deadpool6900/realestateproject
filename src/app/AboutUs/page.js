
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
    return (
        <div>
        <Navbar/>
            <main className="text-center py-16 bg-white">
                <h1 className="text-4xl font-bold text-gray-900">Reimagining real estate to make it easier to unlock.</h1>
                <p className="text-gray-600 mt-4">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 px-6 max-w-4xl mx-auto">
                    <img src="https://placehold.co/600x400" alt="Person working on a laptop with documents" className="w-full h-auto rounded" />
                    <img src="https://placehold.co/600x400" alt="Aerial view of a residential area" className="w-full h-auto rounded" />
                    <img src="https://placehold.co/600x400" alt="Modern dining room" className="w-full h-auto rounded" />
                    <img src="https://placehold.co/600x400" alt="Construction site with machinery" className="w-full h-auto rounded" />
                </div>
                <div className="bg-gray-50 py-12 mt-12">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <i className="fas fa-dollar-sign text-orange-500 text-3xl"></i>
                            <h2 className="text-2xl font-bold text-gray-900 mt-2">$15.4M</h2>
                            <p className="text-gray-600">Owned from Properties transactions</p>
                        </div>
                        <div>
                            <i className="fas fa-home text-orange-500 text-3xl"></i>
                            <h2 className="text-2xl font-bold text-gray-900 mt-2">25K+</h2>
                            <p className="text-gray-600">Properties for Buy & sell Successfully</p>
                        </div>
                        <div>
                            <i className="fas fa-dollar-sign text-orange-500 text-3xl"></i>
                            <h2 className="text-2xl font-bold text-gray-900 mt-2">$15.4M</h2>
                            <p className="text-gray-600">Owned from Properties transactions</p>
                        </div>
                        <div>
                            <i className="fas fa-users text-orange-500 text-3xl"></i>
                            <h2 className="text-2xl font-bold text-gray-900 mt-2">600+</h2>
                            <p className="text-gray-600">Regular Clients</p>
                        </div>
                    </div>
                </div>
            </main>
            <div className="container mx-auto p-8">
                <div className="flex flex-col items-center">
                    <img src="https://placehold.co/600x400" alt="Modern building with snow on the ground" className="rounded-lg mb-8" />
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">Our vision is simple.</h2>
                        <p className="text-gray-600 mb-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.
                            In a free hour, On the other hand, we denounce with righteous indignation and dislike men.
                        </p>
                        <p className="text-gray-800 font-bold">Kausar Pial</p>
                        <p className="text-gray-600">CEO at Static Mania</p>
                    </div>
                </div>
                <div className="mt-16">
                    <h2 className="text-center text-2xl font-bold mb-8">Relasto Team members</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center">
                        {[
                            { name: "Kausar Pial", title: "CEO", img: "https://placehold.co/150x150" },
                            { name: "Floyd Miles", title: "President of Sales", img: "https://placehold.co/150x150" },
                            { name: "Darlene Robertson", title: "Marketing Coordinator", img: "https://placehold.co/150x150" },
                            { name: "Guy Hawkins", title: "Marketing Coordinator", img: "https://placehold.co/150x150" },
                            { name: "Jerome Bell", title: "Marketing Coordinator", img: "https://placehold.co/150x150" }
                        ].map((member, index) => (
                            <div key={index} className="text-center">
                                <img src={member.img} alt={`Portrait of ${member.name}`} className="rounded-lg mb-4 h-[300px] w-[300px]" />
                                <p className="text-gray-800 font-bold">{member.name}</p>
                                <p className="text-gray-600">{member.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        <Footer/>
        </div>
    )
}

export default page
