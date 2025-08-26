import React, { useState } from 'react';
// import video from './videos/hero-video.mp4'; // Replace with your video file name
import { FaMapMarkedAlt, FaKey, FaBlog, FaBroom, FaHome } from "react-icons/fa";
import { CiMap } from "react-icons/ci";
import { KeyIcon , PencilSquareIcon , TrashIcon , HomeIcon  } from '@heroicons/react/24/outline';
import StatsSection from '../components/StatCard.jsx';
import PropertyCard from '../components/PropertyCard.jsx';
import IconCard from '../components/IconCard.jsx';
import { PiSunglasses , PiPersonSimpleSwim } from "react-icons/pi";
import { VscChecklist } from "react-icons/vsc";
import TestimonialCard from '../components/testimonials.jsx';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Link } from "react-router-dom";

<PropertyCard />,
<IconCard />,
<TestimonialCard />

const testimonials = [
  {
    id: 1,
    image: "https://media.scurto.net/cdn-cgi/image/width=800/2044/media/17939.jpg",
    title: "Beachside I 4234",
    rating: 5,
    date: "Thursday, August 21, 2025",
  },
  {
    id: 2,
    image: "https://media.scurto.net/cdn-cgi/image/width=800/2044/media/17939.jpg",
    title: "Beachside II 4234",
    rating: 5,
    date: "Thursday, August 21, 2025",
  },
  {
    id: 3,
    image: "https://media.scurto.net/cdn-cgi/image/width=800/2044/media/17939.jpg",
    title: "Beachside III 4234",
    rating: 5,
    date: "Thursday, August 21, 2025",
  },
];
const properties = [
 {
   id: 1,
   imageUrl: "https://media.scurto.net/cdn-cgi/image/width=300/2044/media/7367.jpg", // Placeholder image for demonstration
   title: "Harbour Point 807",
   description: "1-bedroom, sleeps 4",
 },
 {
   id: 2,
   imageUrl: "https://media.scurto.net/cdn-cgi/image/width=300/2044/media/9121.jpg",
   title: "Crystal Dunes 505",
   description: "3-bedroom, sleeps 10",
 },
 {
   id: 3,
   imageUrl: "https://media.scurto.net/cdn-cgi/image/width=300/2044/media/10248.jpg",
   title: "Summit 0913",
   description: "2-bedroom, sleeps 4",
 },
 {
   id: 4,
   imageUrl: "https://media.scurto.net/cdn-cgi/image/width=300/2044/media/17722.jpg",
   title: "Beach Manor 0309",
   description: "2-bedroom, sleeps 6",
 },
  {
   id: 5,
   imageUrl: "https://media.scurto.net/cdn-cgi/image/width=300/2044/media/16711.jpg",
   title: "Beach Manor 0309",
   description: "2-bedroom, sleeps 6",
 },
];
const cardData = [
 {
   id: 1,
   icon: <PiSunglasses size={60} className='text-[#000]'/>,
   title: "Vacation Rentals",
   description: "Our platform ensures your data is safe with top-notch security measures.",
 },
 {
   id: 2,
   icon: <CiMap size={60} className='text-[#000]'/>,
   title: "Specials",
   description: "Experience lightning-fast speeds and a seamless user experience.",
 },
 {
   id: 3,
   icon: <VscChecklist size={60} className='text-[#000]'/>,
   title: "Beach Checklist",
   description: "Our team is always available to help you with any questions or issues.",
 },
 {
   id: 4,
   icon: <PiPersonSimpleSwim size={60} className='text-[#000]'/>,
   title: "Things to Do",
   description: "Our architecture is designed to grow with your needs, from small to large.",
 },
];
const Hero = () => {

   const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Calculate the indices for the three visible cards
  const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (currentIndex + 1) % testimonials.length;

  return (
          <>
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-[100vh] object-cover z-0"
        src="https://media.scurto.net/2044/uploads/videos/homepage-video.mp4"
        autoPlay
        loop
        muted
      />

      {/* Overlay to darken the video */}
      <div className="absolute top-0 left-0 w-full h-full  opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-2xl sm:text-5xl md:text-4x5 font-bold leading-tight drop-shadow-lg pt-90 font-serif-subheading">
          Worry Less, Relax More
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-lg font-serif-subheading">
          with Gibson Beach Rentals
        </p>
      </div>
    </section>
     <section className="bg-blue-100 py-12 px-6 md:px-16">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-4xl">
          Destin, Miramar Beach, & Panama City Beach Florida – Vacation Rental Condo And Homes
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          Gibson Beach Rentals, Inc. is a short-term vacation rental management company offering rental
          properties for guests seeking places to stay in the Destin, Sandestin, Miramar Beach, and
          Panama City Beach areas. Enjoy your next Emerald Coast getaway at one of our premier
          properties located inside the Sandestin Golf & Beach Resort, Tops’l Beach & Racquet Resort,
          Silver Shells Beach Resort and Spa, all along Hwy 98. Or try one of our many available
          properties located inside of Tidewater Beach Resort, Calypso Beach Resort & Towers, or Aqua
          Beach Resort. All of our properties are conveniently located in the Gulf Coast region of the
          Florida Panhandle. Our Northwest Florida beaches showcase beautiful blues and greens of the
          warm Gulf water, the finest, whitest sand you can imagine, and miles of sunshine and good
          memories.
        </p>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Let Gibson Beach Rentals help you create the perfect getaway for you, your family, and
          friends. Spend your next vacation on the beautiful Emerald Coast of Florida, featuring some
          of the most breathtaking beaches in the world. Let’s get started making your Northwest Florida
          dream vacation a reality. View all of our available properties here at{" "}
          <a href="#" className="text-blue-600 font-semibold underline">
            Beach Rentals
          </a>.
        </p>
      </div>

      {/* Icons Section */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto text-center">
        <div className="flex flex-col items-center">
          <div className="w-34 h-34 border-2 border-gray-400 rounded-full flex items-center justify-center mb-3 hover:bg-[#3d3dbc]  hover:text-[#fff] transition">
            <CiMap  className="text-5xl " />
          </div>
          <p className="font-medium text-gray-800">Area Guide</p>
        </div>

        <div className="flex flex-col items-center">
<div className="w-34 h-34 border-2 border-gray-400 rounded-full flex items-center justify-center mb-3 hover:bg-[#3d3dbc]  hover:text-[#fff] transition">
            <KeyIcon className="h-10 w-10 " />
          </div>
          <p className="font-medium text-gray-800">Contact Free Check-in</p>
        </div>

        <div className="flex flex-col items-center">
<div className="w-34 h-34 border-2 border-gray-400 rounded-full flex items-center justify-center mb-3 hover:bg-[#3d3dbc]  hover:text-[#fff] transition">
            <PencilSquareIcon className="h-10 w-10 " />
          </div>
          <p className="font-medium text-gray-800">Our Blog</p>
        </div>

        <div className="flex flex-col items-center">
<div className="w-34 h-34 border-2 border-gray-400 rounded-full flex items-center justify-center mb-3 hover:bg-[#3d3dbc]  hover:text-[#fff] transition">
            <TrashIcon  className="h-10 w-10 " />
          </div>
          <p className="font-medium text-gray-800">Professionally Cleaned</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-34 h-34 border-2 border-gray-400 rounded-full flex items-center justify-center mb-3 hover:bg-[#3d3dbc]  hover:text-[#fff] transition">
            <HomeIcon  className="h-10 w-10 " />
          </div>
          <p className="font-medium text-gray-800">Property Management</p>
        </div>
        
      </div>
    </section>
    
    <StatsSection />
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-5xl">
            Featured Properties
          </h2>
        </div>

        {/* Property Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              imageUrl={property.imageUrl}
              title={property.title}
              description={property.description}
            />
          ))}
        </div>
      </div>
    </div>
     <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-5xl">
          Plan Your Perfect Vacation
        </h2>
      </div>

      {/* Responsive Grid of Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardData.map((card) => (
          <IconCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            // description={card.description}
          />
        ))}
      </div>
    </div>

  <div className="min-h-screen bg-gray-200 py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-5xl">
          Guest Testimonials
        </h2>
      </div>

      <div className="relative w-full max-w-6xl flex justify-center items-center">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-20 p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-gray-900 focus:outline-none transition-transform duration-300 transform hover:scale-110"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 z-20 p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-gray-900 focus:outline-none transition-transform duration-300 transform hover:scale-110"
        >
          <ChevronRight size={32} />
        </button>

        {/* Testimonial Cards */}
        <div className="flex items-center space-x-4 w-full justify-center">
          <div className="hidden sm:block w-full max-w-sm">
            <TestimonialCard testimonial={testimonials[prevIndex]} isCentered={false} />
          </div>
          <div className="w-full max-w-sm">
            <TestimonialCard testimonial={testimonials[currentIndex]} isCentered={true} />
          </div>
          <div className="hidden sm:block w-full max-w-sm">
            <TestimonialCard testimonial={testimonials[nextIndex]} isCentered={false} />
          </div>
        </div>
      </div>
    </div>
     <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="order-2 md:order-1 text-gray-800">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-4xl">
              <span className="text-2xl lg:text-3xl">🌴</span> The Ultimate Guide to a Summer Getaway on Florida's Emerald Coast
            </h2>
            <p className="text-base md:text-lg mt-6 leading-relaxed">
              Summer is the perfect time to experience the magic of Florida's Emerald Coast. With its sugar-white sands, emerald waters, and endless sunshine, Destin, Miramar Beach, and Panama City Beach offer unforgettable experiences for every traveler. Whether you're planning a family vacation, a romantic retreat, or a solo adventure, here's how to make <span className="underline cursor-pointer font-semibold hover:text-blue-600 transition-colors duration-200">Continue reading</span>
            </p>
            <p className="text-sm text-gray-500 italic">
              Published on Tuesday, April 29, 2025
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="order-1 md:order-2">
            <img
              src="https://media.scurto.net/cdn-cgi/image/width=1280/2044/media/17833-gibson-logo-waves.png"
              alt="Gibson Beach Rentals"
              className="w-full h-auto rounded-lg transform transition-transform duration-900 hover:scale-110 shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>

    </>
    
  );
};

export default Hero;