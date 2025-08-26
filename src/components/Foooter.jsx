import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {      
  return (
      <footer className="bg-blue-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-200">Quick Links</h3>
            <div className="grid grid-cols-2 gap-y-2 text-sm text-white">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
              <a href="#" className="hover:text-white transition-colors">Directions</a>
              <a href="#" className="hover:text-white transition-colors">Guest Login</a>
              <a href="#" className="hover:text-white transition-colors">Owner Portal</a>
              <a href="#" className="hover:text-white transition-colors">Rental Policies</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <span className="col-span-2 mt-2 text-base">(866) 369-0292</span>
            </div>
          </div>

          {/* Site Search Section */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-xl font-semibold mb-4 text-gray-200">Site Search</h3>
            <div className="flex rounded-md bg-white ">
              <input
                type="text"
                placeholder="Site Search"
                className="w-full py-3  px-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
              />
              <button
                type="submit"
                className="px-4 py-3 bg-white rounded-md text-gray-800 hover:bg-gray-200 transition-colors focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Stay in the Loop Section */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-xl font-semibold mb-4 text-gray-200">Stay In the Loop</h3>
            <div className="flex rounded-md bg-white">
              <input
                type="email"
                placeholder="email address"
                className="w-full py-3 px-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500  text-white font-medium hover:bg-blue-600 transition-colors focus:outline-none"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <hr className="my-10 border-gray-700" />

        {/* Copyright and Social Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p className="text-center md:text-center mb-4 md:mb-0 text-[#fff]">
             <a href="#" className="hover:text-white text-ce transition-colors"> 2025 Copyright © & Powered by Digify America</a>
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors"><Facebook size={24} /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
