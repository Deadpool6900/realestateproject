import React from 'react'

const PropertyInfo = () => {
    return (
        <div>
            <div className="max-w-5xl mx-auto p-6 bg-slate-50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                        <img src="https://placehold.co/600x400" alt="Living room with large windows and city view" className="w-full rounded-lg" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <img src="https://placehold.co/200x150" alt="Cozy corner with cushions" className="w-full rounded-lg" />
                        <img src="https://placehold.co/200x150" alt="Living room with a plant" className="w-full rounded-lg" />
                        <div className="relative col-span-2">
                            <img src="https://placehold.co/400x150" alt="Wall decor with mirrors" className="w-full rounded-lg" />
                            <div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded-lg shadow-md text-sm">3 more</div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="md:col-span-2">
                        <h1 className="text-2xl font-semibold">Trovilla Plan in Sereno Canyon - Estate Collection by Toll Brothers</h1>
                        <p className="text-gray-600">2861 62nd Ave, Oakland, CA 94605</p>
                        <div className="flex items-center space-x-4 mt-4">
                            <div className="bg-gray-100 p-4 rounded-lg text-center">
                                <p className="text-xl font-semibold">$649,900</p>
                                <p className="text-gray-500">Online / Cash Payment</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg text-center">
                                <p className="text-xl font-semibold">$850 / month</p>
                                <p className="text-gray-500">On EMI for 6 Months</p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-700">Well-constructed 1562 Sq Ft Home Is Now Offering To You In Uttara For Sale</p>
                        <p className="mt-2 text-gray-600">A slider is a great way to display a slideshow featuring images or videos, usually on your homepage. Adding sliders to your site is no longer difficult. You don’t have to know coding anymore. Just use a slider widget and it will automatically insert the slider on your web page. So, the Elementor slider widget would be a great tool to work with when building a WordPress site.</p>
                        <h2 className="mt-6 text-xl font-semibold">Local Information</h2>
                        <div className="flex space-x-4 mt-2">
                            <button className="bg-gray-100 px-4 py-2 rounded-lg">Map</button>
                            <button className="bg-gray-100 px-4 py-2 rounded-lg">Schools</button>
                            <button className="bg-gray-100 px-4 py-2 rounded-lg">Crime</button>
                            <button className="bg-gray-100 px-4 py-2 rounded-lg">Shop & Eat</button>
                        </div>
                        <div className="mt-4">
                            <img src="https://placehold.co/600x300" alt="Map showing local information" className="w-full rounded-lg" />
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Request for Visit</h2>
                        <form className="space-y-4">
                            <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded-lg" />
                            <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border rounded-lg" />
                            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border rounded-lg" />
                            <input type="date" className="w-full px-4 py-2 border rounded-lg" />
                            <textarea placeholder="Message" className="w-full px-4 py-2 border rounded-lg"></textarea>
                            <button type="submit" className="w-full bg-black text-white px-4 py-2 rounded-lg">Send Request</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="p-10 text-black lg:px-[200px]">
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h2 className="text-xl font-semibold mb-4">Home Highlights</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <ul className="list-disc list-inside">
                                <li className="flex justify-between"><span>Parking</span><span>No Info</span></li>
                                <li className="flex justify-between"><span>Outdoor</span><span>No Info</span></li>
                                <li className="flex justify-between"><span>A/C</span><span>No Info</span></li>
                                <li className="flex justify-between"><span>Year Built</span><span>2021</span></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="list-disc list-inside">
                                <li className="flex justify-between"><span>Parking</span><span>No Info</span></li>
                                <li className="flex justify-between"><span>Outdoor</span><span>No Info</span></li>
                                <li className="flex justify-between"><span>A/C</span><span>No Info</span></li>
                                <li className="flex justify-between"><span>Year Built</span><span>2021</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Agent Information</h2>
                    <div className="flex items-center">
                        <img src="https://placehold.co/100x100" alt="Agent's portrait" className="w-20 h-20 rounded-lg mr-4" />
                        <div>
                            <h3 className="text-lg font-semibold">Bruno Fernandes</h3>
                            <div className="flex items-center mb-2">
                                <i className="fas fa-star text-red-500"></i>
                                <i className="fas fa-star text-gray-400"></i>
                                <i className="fas fa-star text-gray-400"></i>
                                <i className="fas fa-star text-gray-400"></i>
                                <i className="fas fa-star text-gray-400"></i>
                                <span className="ml-2 text-sm text-gray-600">4 review</span>
                            </div>
                            <div className="text-sm text-gray-600">
                                <div className="flex items-center mb-1">
                                    <i className="fas fa-envelope mr-2"></i>
                                    <span>bruno@relasto.com</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-phone mr-2"></i>
                                    <span>+65 0231 965 965</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyInfo
