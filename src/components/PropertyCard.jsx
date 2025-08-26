import React from 'react'

const PropertyCard = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden  cursor-pointer">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover object-center transition-transform duration-300 hover:scale-105 transform"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};  

export default PropertyCard
