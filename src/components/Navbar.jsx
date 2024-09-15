'use client'
import { LucideAlignLeft } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <div>
                <header className="bg-white shadow-md">
                    <div className="container mx-auto flex justify-between items-center py-4 px-6">
                        <div className="flex items-center">
                            <h3 className='mr-3'>logo</h3>
                            <span className="text-orange-500 text-xl font-bold">Real Estate</span>
                        </div>
                        <nav className="hidden md:flex space-x-6">
                            <Link href="/">
                                <button className="text-gray-700">Home</button>
                            </Link>
                            <Link href="/Listing">
                                <button className="text-gray-700">Listing</button>
                            </Link>
                            <Link href="/Agents">
                                <button className="text-gray-700">Agents</button>
                            </Link>
                            <Link href="/Property/1">
                                <button className="text-gray-700">Property</button>
                            </Link>
                            <Link href="/Blogs">
                                <button className="text-gray-700">Blogs</button>
                            </Link>
                            <Link href="/AboutUs">
                                <button className="text-gray-700">About Us</button>
                            </Link>
                        </nav>
                        <div className="hidden md:flex items-center space-x-4">
                            <button className="text-gray-700"><i className="fas fa-search"></i> Search</button>
                            <Link href="/Login">
                                <button className="bg-black text-white px-4 py-2 rounded">Log in</button>
                            </Link>
                        </div>
                        <div className="md:hidden">
                            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
                                <LucideAlignLeft />
                            </button>
                        </div>

                    </div>
                    {menuOpen && (
                        <div className="md:hidden bg-white shadow-md">
                            <nav className="flex flex-col space-y-4 p-4">
                                <Link href="/">
                                    <button className="text-gray-700">Home</button>
                                </Link>
                                <Link href="/Listing">
                                    <button className="text-gray-700">Listing</button>
                                </Link>
                                <Link href="/Agents">
                                    <button className="text-gray-700">Agents</button>
                                </Link>
                                <Link href="/Property/1">
                                    <button className="text-gray-700">Property</button>
                                </Link>
                                <Link href="/Blogs">
                                    <button className="text-gray-700">Blogs</button>
                                </Link>
                                <Link href="/AboutUs">
                                    <button className="text-gray-700">About Us</button>
                                </Link>
                                <button className="text-gray-700"><i className="fas fa-search"></i> Search</button>
                                <Link href="/Login">
                                    <button className="bg-black text-white px-4 py-2 rounded">Log in</button>
                                </Link>
                            </nav>
                        </div>
                    )}
                </header>
            </div>
        </>
    )
}

export default Navbar

