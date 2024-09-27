import React from 'react'
import PropertyCard from './Card'
import { LucideArrowBigRight } from 'lucide-react'
import property_data from '@/DataBase/propertydetails'
import i2 from "../images/images.jpg";

const CardHolder = () => {
    return (
        <div>
            <div className="container mx-auto p-4 bg-white px-20 text-black ">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-semibold">Featured Properties</h1>
                    <a href="#" className="text-orange-500">Explore All <LucideArrowBigRight/></a>
                </div>
                <div className="flex space-x-4 mb-4">
                    <a href="#" className="text-black font-semibold">Resident Property</a>
                    <a href="#" className="text-gray-400">Commercial Property</a>
                    <a href="#" className="text-gray-400">Industrial Property</a>
                    <a href="#" className="text-gray-400">Agriculture Property</a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <PropertyCard
                        image="https://images.unsplash.com/photo-1495433324511-bf8e92934d90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        address="2861, Baner Road, Pune, Maharashtra 411045"
                        bed="3 Bed Room"
                        bath="1 Bath"
                        sqft="1,032 sqft"
                        type="Family"
                        price="₹ 1,20,00,000"
                    />

                    <PropertyCard
                        image={'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                        address="A-101, Oberoi Splendor, Goregaon East, Mumbai, Maharashtra 400063"
                        bed="2 Bed Room"
                        bath="2 Bath"
                        sqft="900 sqft"
                        type="Condo"
                        price="₹ 2,50,00,000"
                    />

                    <PropertyCard
                        image={'https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                        address="Plot No. 123, Sector 15, CBD Belapur, Navi Mumbai, Maharashtra 400614"
                        bed="4 Bed Room"
                        bath="2 Bath"
                        sqft="1,500 sqft"
                        type="Single Family Home"
                        price="₹ 3,50,00,000"
                    />

                    <PropertyCard
                        image={'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                        address="S-201, Kalpataru Harmony, Wakad, Pune, Maharashtra 411057"
                        bed="3 Bed Room"
                        bath="2 Bath"
                        sqft="1,200 sqft"
                        type="Apartment"
                        price="₹ 1,80,00,000"
                    />

                    <PropertyCard
                        image={'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                        address="B-101, Raheja Imperia, Bandra East, Mumbai, Maharashtra 400051"
                        bed="2 Bed Room"
                        bath="2 Bath"
                        sqft="800 sqft"
                        type="Condo"
                        price="₹ 2,00,00,000"
                    />
                </div>
            </div>
        </div>
    )
}

export default CardHolder
