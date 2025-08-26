// src/components/PropertyListing.jsx
import React, { useState, useEffect } from 'react';
import { Bed, Bath, Users, Star, X } from "lucide-react";
import { Camera, FileText, MessageSquare, MapPin, Video } from "lucide-react";
import { LuTag } from "react-icons/lu"; 
import { LuSparkles } from "react-icons/lu";
const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.6639184723094!2d-86.42497132497604!3d30.38889990216947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88914355b8e4facd%3A0x3ed931f656e0623d!2s34990%20Emerald%20Coast%20Pkwy%20%23300%2C%20Destin%2C%20FL%2032541%2C%20USA!5e0!3m2!1sen!2sin!4v1755020767237!5m2!1sen!2sin" ;


const StarRating = ({ rating, totalStars = 5 }) => {
    return (
        <div className="flex items-center text-gray-500">
            {Array.from({ length: totalStars }, (_, index) => (
                <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={index < rating ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`w-5 h-5 transition-colors duration-200 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            ))}
        </div>
    );
};

export default function Tidewater2204() {
  const [photos] = useState([
    "https://media.scurto.net/cdn-cgi/image/width=1920/2044/media/10422.jpg",
    "https://media.scurto.net/cdn-cgi/image/width=1920/2044/media/10423.jpg",
    "https://media.scurto.net/cdn-cgi/image/width=1920/2044/media/10423.jpg",
    "https://media.scurto.net/cdn-cgi/image/width=1920/2044/media/10425.jpg",
    "https://media.scurto.net/cdn-cgi/image/width=1920/2044/media/10426.jpg",
    "https://media.scurto.net/cdn-cgi/image/width=1920/2044/media/10427.jpg",
    "https://media.scurto.net/cdn-cgi/image/width=1920/2044/media/10427.jpg",
    "https://media.scurto.net/cdn-cgi/image/width=1920/2044/media/10427.jpg",
  ]);

  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [showGallery, setShowGallery] = useState(false);

  return (
          <>
    <div className=" w-full max-w-7xl mx-auto p-4 pt-90  ">
      {/* Sticky Tabs */}
      <div className="sticky top-45 bg-white z-20 border-b ">
        <div className="flex flex-wrap gap-10 text-[#444] text-[15px] py-3">
          <button className="flex items-center gap-1 hover:text-blue-600">
          <Camera size={20} /> Photos
        </button>
        <button className="flex items-center gap-1 hover:text-blue-600">
          <FileText size={20} /> Details
        </button>
        <button className="flex items-center gap-1 hover:text-blue-600">
          <MessageSquare size={20} /> Reviews
        </button>
        <button className="flex items-center gap-1 hover:text-blue-600">
          <MapPin size={20} /> Location
        </button>
        <button className="flex items-center gap-1 hover:text-blue-600">
          <Video size={20} /> Virtual Tour
        </button>
        </div>
      </div>

      {/* Title & Info */}
      <div className="flex justify-between items-start mt-4 flex-wrap">
        <h2 className="text-2xl font-bold text-gray-800">Tidewater 2204</h2>
        <button className="text-gray-500 hover:text-red-500">♡ Save</button>
      </div>

      {/* Icons Info */}
      <div className="flex gap-6 text-gray-600 mt-2 flex-wrap">
        <span className="flex items-center gap-1">
          <Bed size={18} /> 1
        </span>
        <span className="flex items-center gap-1">
          <Bath size={18} /> 2
        </span>
        <span className="flex items-center gap-1">
          <Users size={18} /> 6
        </span>
        <span className="flex items-center gap-1">
          <Star className="text-yellow-500" size={18} /> 4.8
        </span>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-6">
        {/* Large Left Image */}
        <div
          className="md:col-span-2 row-span-2 cursor-pointer"
          onClick={() => setLightboxIndex(0)}
        >
          <img
            src={photos[0]}
            alt="Main"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Small Grid Images */}
        {photos.slice(1, 4).map((photo, idx) => (
          <img
            key={idx}
            src={photo}
            alt={`Photo-${idx}`}
            className="w-full h-40 md:h-full object-cover rounded-lg cursor-pointer"
            onClick={() => setLightboxIndex(idx + 1)}
          />
        ))}

        <div
          className="relative cursor-pointer"
          onClick={() => setShowGallery(true)}
        >
          <img
            src={photos[4]}
            alt="City View"
            className="w-full h-40 md:h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-[#0000006f] bg-opacity-40 flex items-center justify-center text-white font-semibold rounded-lg">
            View all {photos.length} photos →
          </div>
        </div>
      </div>

      {/* Lightbox Zoom */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white"
          >
            <X size={32} />
          </button>
          <img
            src={photos[lightboxIndex]}
            alt="Zoom"
            className="max-h-[90%] max-w-[90%] object-contain rounded-lg"
          />
        </div>
      )}

      {/* Full Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-95 overflow-y-auto z-50 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-lg font-semibold">
              All Photos ({photos.length})
            </h2>
            <button
              onClick={() => setShowGallery(false)}
              className="text-white"
            >
              <X size={28} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, idx) => (
              <img
                key={idx}
                src={photo}
                alt={`Gallery-${idx}`}
                className="w-full h-64 object-cover rounded-lg cursor-pointer"
                onClick={() => setLightboxIndex(idx)}
              />
            ))}
          </div>
        </div>
      )}
    
     <div className=" flex justify-center py-10 px-4 sm:px-6 lg:px-8 font-inter">
            <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-8">
                {/* Main Content Section */}
                <div className="bg-white p-6 rounded-xl  lg:w-2/3">
                    {/* Property Description Header */}
                    <div className="mb-8">
                        <h1 className="text-xl font-medium text-gray-800">
                            Unit 2204, located in the Tidewater building on the 22nd floor, is a gulf front, beachfront condo. Inside, you and your guests will sleep comfortably in 1 king bed, a hallway bunkbed with 2 twins, and a sleeper sofa.
                        </h1>
                    </div>

                    {/* Features & Discounts Section */}
                    <div className="space-y-4 mb-8">
                        {/* Repeat Guest Discount */}
                        <div className="flex items-center gap-3">
                            <LuTag size={25} className="text-black" />
                            <div>
                                <h2 className="font-[700] text-[20px] text-gray-800">Repeat Guest Discount</h2>
                                <p className=" font-[500] text-[15px] text-gray-600">Repeat Guest</p>
                            </div>
                        </div>
                        {/* Additional 10% Off */}
                        <div className="flex items-center gap-3">
                            <LuTag size={25} className="text-black" />
                            <div>
                                <h2 className="font-[700] text-[20px] text-gray-800">Additional 10% Off Reduced Late Summer and Fall Rates</h2>
                                <p className=" font-[500] text-[15px] text-gray-600">Late Summer & Fall Savings – Book Direct & Save More!</p>
                            </div>
                        </div>
                        {/* Basic Beach Umbrella Provided */}
                        <div className="flex items-center gap-3">
                            <LuSparkles size={25} className="text-[#444]" />
                            <div>
                                <h2 className="font-semibold text-gray-800">Basic Beach Umbrella Provided</h2>
                                <p className="text-sm text-gray-600">yes</p>
                            </div>
                        </div>
                        {/* Keyless Entry */}
                        <div className="flex items-center gap-3">
                            <LuSparkles size={25} className="text-[#444]" />
                            <div>
                                <h2 className="font-semibold text-gray-800">Keyless Entry</h2>
                                <p className="text-sm text-gray-600">yes</p>
                            </div>
                        </div>
                        {/* Snowbird Winter Rental */}
                        <div className="flex items-center gap-3">
                            <LuSparkles size={25} className="text-[#444]" />
                            <div>
                                <h2 className="font-semibold text-gray-800">Snowbird Winter Rental</h2>
                                <p className="text-sm text-gray-600">yes</p>
                            </div>
                        </div>
                    </div>

                    {/* About the Property Section */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">About the property</h2>
                        <p className="text-gray-600 mb-2">Welcome to Coastal Haven, a tranquil escape awaiting you at unit 2204 of Tidewater Beach Resort in Panama City Beach, FL. This inviting 1 bed, 2 bath condo provides a serene retreat with breathtaking Gulf views that will leave you in awe from the moment you step through the doors.</p>
                        <p className="text-gray-600 mb-2">Admire the panoramic views of the Gulf while unwinding on the plush seating in the spacious living area. The well-appointed kitchen features modern appliances and a breakfast bar, making it a joy to prepare meals with your loved ones.</p>
                        {/* <a href="#" className="text-teal-600 font-semibold hover:underline">Read full description</a> */}
                    </div>

                    {/* Features & Amenities List */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Features & amenities</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
                            <div>
                                <ul>
                                    <li className="mb-2">Basic Beach Umbrella Provided</li>
                                    <li className="mb-2">Snowbird Winter Rental</li>
                                    <li className="mb-2">Bedrooms: 1</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className="mb-2">Keyless Entry</li>
                                    <li className="mb-2">Internet Access</li>
                                    <li className="mb-2">Bathrooms: 2</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar (Calendar) */}
                <div className="bg-white p-6  lg:w-1/3 lg:h-2/3 shadow-lg  lg:sticky lg:top-20 h-min">
                    <Calendar />
                    <button className="w-full mt-1 bg-teal-500 text-white font-bold py-3 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50">
                        GET QUOTE
                    </button>
                    
                    <div className="mt-4">
                        <div className="flex items-center rounded-lg border border-gray-300 overflow-hidden">
                            <input type="text" placeholder="promo code" className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"/>
                            <button className="bg-gray-200 text-gray-600 font-medium px-4 py-2 hover:bg-gray-300">
                                Apply
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-center mt-6 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                            <path d="M14 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2M18 10h.01M22 10h.01M2 10h.01M10 22h.01M10 2h.01M22 6h.01M2 6h.01M18 14h.01M22 14h.01M2 14h.01M18 18h.01M22 18h.01M2 18h.01M10 10V4.5a2.5 2.5 0 0 0-5 0V10M10 10v6M10 10v-.5a2.5 2.5 0 0 0-5-0V10"></path>
                        </svg>
                        <a href="#" className="font-medium hover:underline">Have a question?</a>
                    </div>
                </div>
            </div>
        </div>
         <div className="min-h-screen  flex items-start justify-center p-4 sm:p-6 lg:p-8 font-sans">
            <div className="w-full max-w-3xl bg-white rounded-lg  overflow-hidden p-6 sm:p-8 lg:p-10">

                {/* Overall Rating Header */}
                <div className="flex items-center justify-center mb-6">
                    <StarRating rating={4} />
                    <span className="text-xl font-semibold text-gray-700 ml-2">4.8 (9 reviews)</span>
                </div>

                {/* Individual Review Section */}
                <div className="border-b border-gray-200 pb-6 mb-6">
                    {/* Reviewer Header */}
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900">Gulf Coast Jam</h2>
                            <p className="text-gray-500 mt-1">Seattle WA</p>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span className="text-xl font-medium text-gray-700">5</span>
                            <StarRating rating={1} totalStars={1} />
                        </div>
                    </div>

                    {/* Review Body */}
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Rented the condo while attending Gulf Coast Jam. Condo was great. Great location, could walk to the venue. Only downside was the elevator seemed to be having issues
                    </p>

                    {/* Management Response */}
                    <div className="bg-gray-50 border-l-4 border-gray-200 pl-4 py-3 pr-2 rounded-md">
                        <h3 className="font-bold text-gray-900 mb-2">Response from Gibson Beach Rentals, Inc.</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Thank you for sharing your experience! We're so glad to hear you enjoyed the condo and that the location worked perfectly for attending Gulf Coast Jam—being able to walk to the venue is definitely a big plus. We do apologize for the elevator issues you encountered during your stay. We understand how inconvenient that can be and have reported the matter to building management to ensure it's addressed promptly. We hope you had an amazing time at the event and would love to welcome you back for your next beach getaway!
                        </p>
                    </div>

                    {/* Submitted Date */}
                    <p className="text-xs text-gray-500 mt-4">Submitted on Jun 2, 2025</p>
                </div>

                {/* Another Review (for demonstration) */}
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h2 className="text-xl font-medium text-gray-900">Angie Reel</h2>
                    </div>
                    <div className="flex items-center space-x-1">
                        <span className="text-xl font-medium text-gray-700">4</span>
                        <StarRating rating={1} totalStars={1} />
                    </div>
                </div>

                {/* Add more reviews here if needed */}
            </div>
        </div>
         <div className="map-container">
                 <iframe
                   src={mapSrc}
                   width="100%"
                   height="600"
                   style={{ border: 0 }}
                   allowFullScreen={true}
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                   title="Google Maps Location"
                 ></iframe>
               </div>
        </div>
        
    </>
    
  );
}
const Calendar = () => {
    const [date, setDate] = useState(new Date());
    const [currentMonth, setCurrentMonth] = useState(date.getMonth());
    const [currentYear, setCurrentYear] = useState(date.getFullYear());
    
    // Hardcoded unavailable and selected dates from the image
    const unavailableDates = new Set([
        '2025-7-1', '2025-7-2', '2025-7-3', '2025-7-4', '2025-7-5', '2025-7-6', '2025-7-7', '2025-7-8', '2025-7-9', '2025-7-10',
        '2025-7-11', '2025-7-12', '2025-7-13', '2025-7-14', '2025-7-15', '2025-7-16', '2025-7-17', '2025-7-18', '2025-7-19', '2025-7-20',
        '2025-7-21', '2025-7-22', '2025-7-23', '2025-7-24', '2025-7-25', '2025-7-26', '2025-7-27', '2025-7-28', '2025-7-29', '2025-7-30',
        '2025-7-31',
        '2025-8-24', '2025-8-25', '2025-8-26', '2025-8-27', '2025-8-28', '2025-8-29', '2025-8-30'
    ]);
    const selectedDates = new Set(['2025-8-26', '2025-8-27', '2025-8-28', '2025-8-31', '2025-8-32', '2025-8-33', '2025-8-34']);

    const renderDays = () => {
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const days = [];
        const fullDate = `${currentYear}-${currentMonth + 1}`;

        // Add blank cells for the days before the 1st of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<td key={`empty-${i}`} className="py-2"></td>);
        }

        // Add the days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            const dateKey = `${currentYear}-${currentMonth + 1}-${i}`;
            let className = 'w-10 h-10 rounded-full flex items-center justify-center font-medium ';
            
            if (unavailableDates.has(dateKey)) {
                className += 'bg-gray-200 text-gray-400 cursor-not-allowed';
            } else if (selectedDates.has(dateKey)) {
                className += 'bg-blue-500 text-white cursor-pointer hover:bg-blue-600';
            } else {
                className += 'text-gray-700 cursor-pointer hover:bg-gray-200';
            }
            
            days.push(
                <td key={dateKey} className="py-2">
                    <div className={className}>{i}</div>
                </td>
            );
        }

        // Split days into rows of 7
        const weeks = [];
        let week = [];
        days.forEach((day, index) => {
            week.push(day);
            if ((index + firstDayOfMonth + 1) % 7 === 0 || index === days.length - 1) {
                weeks.push(<tr key={`week-${weeks.length}`}>{week}</tr>);
                week = [];
            }
        });

        return weeks;
    };

    const handlePrev = () => {
        setCurrentMonth(prevMonth => {
            if (prevMonth === 0) {
                setCurrentYear(prevYear => prevYear - 1);
                return 11;
            }
            return prevMonth - 1;
        });
    };

    const handleNext = () => {
        setCurrentMonth(prevMonth => {
            if (prevMonth === 11) {
                setCurrentYear(prevYear => prevYear + 1);
                return 0;
            }
            return prevMonth + 1;
        });
    };

    const monthName = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <button onClick={handlePrev} className="text-gray-500 hover:text-gray-800 font-bold">&lt;</button>
                <h3 className="text-lg font-semibold text-gray-800">{`${monthName} ${currentYear}`}</h3>
                <button onClick={handleNext} className="text-gray-500 hover:text-gray-800 font-bold">&gt;</button>
            </div>
            
            <table className="w-full text-center">
                <thead>
                    <tr className="text-gray-500 text-sm font-medium">
                        <th className="py-2">S</th>
                        <th className="py-2">M</th>
                        <th className="py-2">T</th>
                        <th className="py-2">W</th>
                        <th className="py-2">T</th>
                        <th className="py-2">F</th>
                        <th className="py-2">S</th>
                    </tr>
                </thead>
                <tbody>
                    {renderDays()}
                </tbody>
            </table>
            
            {/* <div className="mt-4 text-sm text-gray-500 text-center">
                <p className="mb-1">Use the calendar to select your arrival. Days marked in gray are unavailable. Days marked in blue are your selected dates.</p>
            </div> */}
        </div>
    );
};