'use client'
import React from 'react';
import { useState } from 'react';

export default function PropertySearch() {
    const [selectedTab, setSelectedTab] = useState('buy');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
            {/* Tabs for Buy, Sell, Rent */}
            <div className="flex justify-between border-b-2 border-gray-300 mb-4">
                {['buy', 'sell', 'rent'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => handleTabClick(tab)}
                        className={`w-full py-2 ${selectedTab === tab
                                ? 'border-b-4 border-black font-bold text-black'
                                : 'text-gray-500'
                            } transition duration-200`}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            {/* Input Fields */}
            <div className="space-y-4">
                <div className="relative">
                    <input
                        type="text"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="City/Street"
                    />
                    <span className="absolute right-3 top-3 text-gray-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1 8a1 1 0 112 0v2a1 1 0 11-2 0v-2zM10 8a1 1 0 11-2 0 1 1 0 012 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </div>

                <div className="relative">
                    <select
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                        defaultValue="Property Type"
                    >
                        <option value="Property Type" disabled>
                            Property Type
                        </option>
                        <option value="Apartment">Apartment</option>
                        <option value="House">House</option>
                        <option value="Villa">Villa</option>
                    </select>
                    <span className="absolute right-3 top-3 text-gray-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.292 7.292a1 1 0 011.416 0L10 10.586l3.292-3.294a1 1 0 011.416 1.416l-4 4a1 1 0 01-1.416 0l-4-4a1 1 0 010-1.416z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </div>

                <div className="relative">
                    <select
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                        defaultValue="Price Range"
                    >
                        <option value="Price Range" disabled>
                            Price Range
                        </option>
                        <option value="100k-200k">$100k - $200k</option>
                        <option value="200k-500k">$200k - $500k</option>
                        <option value="500k+">$500k+</option>
                    </select>
                    <span className="absolute right-3 top-3 text-gray-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.292 7.292a1 1 0 011.416 0L10 10.586l3.292-3.294a1 1 0 011.416 1.416l-4 4a1 1 0 01-1.416 0l-4-4a1 1 0 010-1.416z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </div>

                {/* Search Button */}
                <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300">
                    Search
                </button>
            </div>
        </div>
    );
}
