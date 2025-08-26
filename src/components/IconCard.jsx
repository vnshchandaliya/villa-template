import React from 'react'


const IconCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-20 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 transform">
      <div className="flex items-center justify-center p-3  text-blue-600 mb-4 text-[#000]">
        {icon}
      </div>
      <h3 className="text-[1.40rem] font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default IconCard
