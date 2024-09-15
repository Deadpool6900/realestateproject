import React from 'react'

const Filter = () => {
    return (
        <div>
            <div className="p-4 md:p-8 bg-white">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">Find Property</h1>
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                    <div className="flex items-center border rounded-lg p-2 bg-white w-full md:w-auto">
                        <input type="text" placeholder="Enter your address" className="outline-none px-2 flex-grow" />
                        <i className="fas fa-search text-gray-500"></i>
                    </div>
                    <select className="border rounded-lg p-2 bg-white w-full md:w-auto">
                        <option>BL</option>
                    </select>
                    <select className="border rounded-lg p-2 bg-white w-full md:w-auto">
                        <option>$15000 - $18000</option>
                    </select>
                    <select className="border rounded-lg p-2 bg-white w-full md:w-auto">
                        <option>Bed - 3</option>
                    </select>
                    <button className="border rounded-lg p-2 bg-white flex items-center w-full md:w-auto">
                        More <i className="fas fa-plus ml-2"></i>
                    </button>
                    <button className="bg-black text-white rounded-lg p-2 flex items-center w-full md:w-auto">
                        Search <i className="fas fa-search ml-2"></i>
                    </button>
                </div>
                <div className="flex flex-wrap mt-4 space-x-2">
                    <span className="border rounded-full px-4 py-2 bg-white flex items-center mb-2">
                        Bathrooms 2+ <i className="fas fa-times ml-2"></i>
                    </span>
                    <span className="border rounded-full px-4 py-2 bg-white flex items-center mb-2">
                        Square Feet 750 - 2000 sq. ft <i className="fas fa-times ml-2"></i>
                    </span>
                    <span className="border rounded-full px-4 py-2 bg-white flex items-center mb-2">
                        Year Built 5 - 15 <i className="fas fa-times ml-2"></i>
                    </span>
                    <span className="border rounded-full px-4 py-2 bg-white flex items-center mb-2">
                        For Sale By Agent <i className="fas fa-times ml-2"></i>
                    </span>
                    <span className="border rounded-full px-4 py-2 bg-white flex items-center mb-2">
                        New Construction <i className="fas fa-times ml-2"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Filter
