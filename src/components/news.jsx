import Image from 'next/image'
import React from 'react'

const News = () => {
    return (
        <div>

            <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">News & Consult</h1>
                    <a href="#" className="text-orange-500">Explore All <i className="fas fa-arrow-right"></i></a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <Image src="../images/648c6fbc2b4da9c936d70d0468d6d880.jpg" alt="Tall building with unique architecture" className="rounded-lg mb-4" />
                        <h2 className="text-xl font-bold mb-2">9 Easy-to-Ambitious DIY Projects to Improve Your Home</h2>
                        <a href="#" className="text-orange-500">Read the Article <i className="fas fa-arrow-right"></i></a>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <Image src="https://placehold.co/600x400" alt="Modern living room with large windows" className="rounded-lg mb-4" />
                        <h2 className="text-xl font-bold mb-2">Serie Shophouse Launch In July, Opportunity For Investors</h2>
                        <a href="#" className="text-orange-500">Read the Article <i className="fas fa-arrow-right"></i></a>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <Image src="https://placehold.co/600x400" alt="Suburban house with a well-maintained lawn" className="rounded-lg mb-4" />
                        <h2 className="text-xl font-bold mb-2">Looking for a New Place? Use This Time to Create Your Wishlist</h2>
                        <a href="#" className="text-orange-500">Read the Article <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="bg-gray-200 text-black p-8 rounded-lg text-center">
                    <h2 className="text-2xl font-bold mb-4">For Recent Update, News.</h2>
                    <p className="mb-4">We helps businesses customize, automate and scale up their ad production and delivery.</p>
                    <div className="flex justify-center">
                        <input type="email" placeholder="Enter your Email" className="p-2 rounded-l-lg border border-gray-400" />
                        <button className="bg-black text-white p-2 rounded-r-lg">Subscribe</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default News
