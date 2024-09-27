import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-white py-8 text-white bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="mb-8 md:mb-0">
                            <h2 className="text-orange-500 text-xl font-bold mb-2 flex items-center">
                                <i className="fas fa-home mr-2"></i> Real Estate
                            </h2>
                            <p>59 Beverly Hill Ave, Brooklyn Town,</p>
                            <p>New York, NY 5630, CA, US</p>
                            <p>+1 (123) 456-7890</p>
                            <p>info@mail.com</p>
                            <div className="flex space-x-4 mt-4">
                                <a href="#" className="text-orange-500"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="text-orange-500"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="text-orange-500"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="text-orange-500"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#" className="text-orange-500"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
                            <div>
                                <h3 className="text-gray-800 font-bold mb-2">Features</h3>
                                <ul>
                                    <li><a href="#" className="text-gray-600">Home v1</a></li>
                                    <li><a href="#" className="text-gray-600">Home v2</a></li>
                                    <li><a href="#" className="text-gray-600">About</a></li>
                                    <li><a href="#" className="text-gray-600">Contact</a></li>
                                    <li><a href="#" className="text-gray-600">Search</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-gray-800 font-bold mb-2">Information</h3>
                                <ul>
                                    <li><a href="#" className="text-gray-600">Listing v1</a></li>
                                    <li><a href="#" className="text-gray-600">Listing v2</a></li>
                                    <li><a href="#" className="text-gray-600">Property Details</a></li>
                                    <li><a href="#" className="text-gray-600">Agent List</a></li>
                                    <li><a href="#" className="text-gray-600">Agent Profile</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-gray-800 font-bold mb-2">Documentation</h3>
                                <ul>
                                    <li><a href="#" className="text-gray-600">Blog</a></li>
                                    <li><a href="#" className="text-gray-600">FAQ</a></li>
                                    <li><a href="#" className="text-gray-600">Privacy Policy</a></li>
                                    <li><a href="#" className="text-gray-600">License</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-gray-800 font-bold mb-2">Others</h3>
                                <ul>
                                    <li><a href="#" className="text-gray-600">Log in</a></li>
                                    <li><a href="#" className="text-gray-600">Enter OTP</a></li>
                                    <li><a href="#" className="text-gray-600">New Password</a></li>
                                    <li><a href="#" className="text-gray-600">Reset Password</a></li>
                                    <li><a href="#" className="text-gray-600">Create Account</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-8 text-gray-600">
                        © 2022. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
