import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='flex items-center justify-center py-3 min-h-screen bg-slate-100'>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-black">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Create Account</h1>
                    <i className="fas fa-times cursor-pointer"></i>
                </div>
                <div className="space-y-4">
                    <div className="flex space-x-4">
                        <div className="flex items-center border rounded-lg p-2 w-full">
                            <i className="fas fa-user text-gray-400"></i>
                            <input type="text" placeholder="user / email address" className="ml-2 w-full outline-none" />
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="flex items-center border rounded-lg p-2 w-full">
                            <i className="fas fa-lock text-gray-400"></i>
                            <input type="password" placeholder="Password" className="ml-2 w-full outline-none" />
                            <i className="fas fa-eye text-gray-400 cursor-pointer"></i>
                        </div>

                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="terms" className="mr-2" />
                        <label htmlFor="terms" className="text-sm text-gray-600">I agree to all Terms & Conditions</label>
                    </div>
                    <button className="w-full bg-black text-white py-2 rounded-lg">Create Account</button>
                    <button className="w-full border py-2 rounded-lg flex items-center justify-center space-x-2">
                        <i className="fab fa-google"></i>
                        <span>Create Account with Google</span>
                    </button>
                </div>
                <div className="text-center mt-6 text-sm text-gray-600">
                    Have an account? <Link href="/Login" className="text-black font-semibold">Log in</Link>
                </div>
            </div>
        </div>
    )
}

export default page
