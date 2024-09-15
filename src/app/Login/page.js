import { LucideEyeOff, LucideUser2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md w-96">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-slate-700">Log in</h2>
                    </div>
                    <div className="mb-4">
                        <div className="relative">
                            <LucideUser2 className='absolute left-2 top-2 text-gray-400' size={25}/>
                            <input type="text" placeholder="user / email address" className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-800 " />
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="relative">
                            <LucideEyeOff className='absolute left-3 top-3 text-gray-400' size={20}/>
                            <input type="password" placeholder="Password" className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-800" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="ml-2 text-sm text-slate-700">Remember</span>
                        </label>
                        <a href="#" className="text-sm text-gray-500">Forgot Password</a>
                    </div>
                    <button className="w-full bg-black text-white py-2 rounded-md mb-4">Log in</button>
                    <button className="w-full border border-gray-300 text-black py-2 rounded-md flex items-center justify-center">
                        <i className="fab fa-google mr-2"></i>
                        Log in with Google
                    </button>
                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-500">Don’t have an account?</p>
                        <Link href="/SignUp" className="text-sm text-black font-semibold">Create Account</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
