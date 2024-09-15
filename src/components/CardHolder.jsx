import React from 'react'
import PropertyCard from './Card'

const CardHolder = () => {
    return (
        <div>
            <div className="container mx-auto p-4 bg-white px-20 ">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-semibold">Featured Properties</h1>
                    <a href="#" className="text-orange-500">Explore All <i className="fas fa-arrow-right"></i></a>
                </div>
                <div className="flex space-x-4 mb-4">
                    <a href="#" className="text-black font-semibold">Resident Property</a>
                    <a href="#" className="text-gray-400">Commercial Property</a>
                    <a href="#" className="text-gray-400">Industrial Property</a>
                    <a href="#" className="text-gray-400">Agriculture Property</a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <PropertyCard
                        image="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D"
                        address="2861 62nd Ave, Oakland, CA 94605"
                        bed="3 Bed Room"
                        bath="1 Bath"
                        sqft="1,032 sqft"
                        type="Family"
                        price="$649,900"
                    />
                    <PropertyCard
                        image="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D"
                        address="2861 62nd Ave, Oakland, CA 94605"
                        bed="3 Bed Room"
                        bath="1 Bath"
                        sqft="1,032 sqft"
                        type="Family"
                        price="$649,900"
                    />
                    <PropertyCard
                        image="https://placehold.co/600x400"
                        address="2861 62nd Ave, Oakland, CA 94605"
                        bed="3 Bed Room"
                        bath="1 Bath"
                        sqft="1,032 sqft"
                        type="Family"
                        price="$649,900"
                    />
                    <PropertyCard
                        image="https://placehold.co/600x400"
                        address="2861 62nd Ave, Oakland, CA 94605"
                        bed="3 Bed Room"
                        bath="1 Bath"
                        sqft="1,032 sqft"
                        type="Family"
                        price="$649,900"
                    />
                    <PropertyCard
                        image="https://placehold.co/600x400"
                        address="2861 62nd Ave, Oakland, CA 94605"
                        bed="3 Bed Room"
                        bath="1 Bath"
                        sqft="1,032 sqft"
                        type="Family"
                        price="$649,900"
                    />
                    <PropertyCard
                        image="https://placehold.co/600x400"
                        address="2861 62nd Ave, Oakland, CA 94605"
                        bed="3 Bed Room"
                        bath="1 Bath"
                        sqft="1,032 sqft"
                        type="Family"
                        price="$649,900"
                    />
                </div>
            </div>
        </div>
    )
}

export default CardHolder
