import React from 'react'
import {  Star } from 'lucide-react';

// Reusable Testimonial Card Component
const TestimonialCard = ({ testimonial, isCentered }) => {
  return (
    <div className={`
      relative
      bg-white
      rounded-xl
      shadow-lg
      p-4
      transition-all
      duration-500
      ease-in-out
      transform
      ${isCentered ? 'scale-105 z-10' : 'scale-95 z-0 opacity-70'}
      border border-gray-200
    `}>
      <div className="rounded-lg overflow-hidden mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.title}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="flex flex-col text-left">
        <h3 className="text-lg font-semibold text-gray-800">{testimonial.title}</h3>
        <div className="flex my-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} size={16} fill="gold" strokeWidth={1} className="text-yellow-400" />
          ))}
        </div>
        <p className="text-xs text-gray-500">
          Reviewed on {testimonial.date}
        </p>
        <a 
          href="#"
          className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
        >
          View Property
        </a>
      </div>
    </div>
  );
};
export default TestimonialCard
