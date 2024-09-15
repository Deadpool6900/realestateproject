const PropertyCard = ({ image, address, bed, bath, sqft, type, price }) => (
    <div className="border rounded-lg overflow-hidden shadow-lg ">
        <img src={image} alt="House" className="w-full h-48 object-cover" />
        <div className="p-4">
            <div className="flex items-center mb-2">
                <i className="fas fa-map-marker-alt mr-2"></i>
                <span>{address}</span>
            </div>
            <div className="flex items-center mb-2">
                <i className="fas fa-bed mr-2"></i>
                <span>{bed}</span>
                <i className="fas fa-bath ml-4 mr-2"></i>
                <span>{bath}</span>
            </div>
            <div className="flex items-center mb-2">
                <i className="fas fa-ruler-combined mr-2"></i>
                <span>{sqft}</span>
                <i className="fas fa-users ml-4 mr-2"></i>
                <span>{type}</span>
            </div>
            <div className="flex justify-between items-center">
                <button className="bg-black text-white px-4 py-2 rounded">View Details</button>
                <span className="text-xl font-semibold">{price}</span>
            </div>
        </div>
    </div>
);

export default PropertyCard ;