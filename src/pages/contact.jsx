import React, { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";

// The main App component for the contact form.
const Contact = () => {
    // State to hold the form data.
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobilePhone: '',
        homeAddress: '',
        comments: '',
        dogCount: 0,
    });
    // State to hold the form submission status or error messages.
    const [status, setStatus] = useState('');

    // Handle input changes for all form fields.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submission.
    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple validation check for demonstration.
        if (formData.firstName.trim() === '' || formData.email.trim() === '') {
            setStatus('Please fill out all required fields.');
            return;
        }
        // Log the form data to the console for demonstration purposes.
        console.log('Form Submitted:', formData);
        setStatus('Form submitted successfully!');
        
        // Reset the form after a short delay for a better user experience.
        setTimeout(() => {
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                mobilePhone: '',
                homeAddress: '',
                comments: '',
                dogCount: 0,
            });
            setStatus('');
        }, 3000);
    };

    // Array of dog icons for the "Human check" section.
    const dogIcons = Array.from({ length: 8 }, (_, i) => (
        <span key={i} className="text-gray-600 text-3xl md:text-4xl">
            🐾
        </span>
    ));

    return (
          <>
           <section className="bg-[#c9d6df] py-24 md:py-32 flex items-center justify-center mt-70">
      {/* The heading for the section.
          The text size scales with the viewport width for responsiveness. */}
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#000 ] text-center">
        Free Rental Evaluation
      </h2>
    </section>
        <div className="min-h-screen  p-4 md:p-8 flex items-center justify-center">
            <div className="max-w-7xl mx-auto w-full bg-white rounded-xl  overflow-hidden lg:flex">
                {/* Left side: Contact Information */}
                <div className="flex flex-col lg:flex-row lg:gap-12 justify-center pt-49">
          
          {/* Address Section */}
          <div className="flex-2 mb-8 lg:mb-0">
            <div className="flex items-start">
              <span className="text-[#000] text-3xl mr-4"><IoLocationOutline /></span>
              <div>
                <p className="font-semibold text-xl text-gray-800">Address</p>
                <p className="text-gray-600 mt-2">80 S Geronimo St, Suite 6</p>
                <p className="text-gray-600">Miramar Beach, FL 32550</p>
              </div>
            </div>
          </div>

          {/* Phone Numbers Section */}
          <div className="flex-2">
            <div className="flex items-start">
              <span className="text-[#000] text-3xl mr-4"><MdLocalPhone /></span>
              <div>
                <p className="font-semibold text-xl text-gray-800">Phone Numbers</p>
                <div className="mt-2">
                  <p className="text-gray-600">Office: (850) 837-1653</p>
                  <p className="text-gray-600 mt-2">Toll-Free: (866) 369-0292</p>
                </div>
              </div>
            </div>
          </div>

        </div>

                {/* Right side: Contact Form */}
                <div className="lg:w-2/3 p-8 md:p-12">
                    <form onSubmit={handleSubmit}>
                        {/* Name fields */}
                        <div className="mb-6">
                            <label htmlFor="firstName" className="block text-gray-700 text-sm font-semibold mb-2">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                placeholder="First Name"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="lastName" className="block text-gray-700 text-sm font-semibold mb-2">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                placeholder="Last Name"
                            />
                        </div>

                        {/* Email field */}
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                placeholder="Email Address"
                            />
                        </div>

                        {/* Phone fields */}
                        <div className="mb-6">
                            <label htmlFor="mobilePhone" className="block text-gray-700 text-sm font-semibold mb-2">Mobile Phone</label>
                            <input
                                type="tel"
                                id="mobilePhone"
                                name="mobilePhone"
                                value={formData.mobilePhone}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                placeholder="Mobile Phone"
                            />
                        </div>

                        {/* Address and Comments fields */}
                        <div className="mb-6">
                            <label htmlFor="homeAddress" className="block text-gray-700 text-sm font-semibold mb-2">Home Address</label>
                            <input
                                type="text"
                                id="homeAddress"
                                name="homeAddress"
                                value={formData.homeAddress}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                placeholder="Address"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="comments" className="block text-gray-700 text-sm font-semibold mb-2">Comments</label>
                            <textarea
                                id="comments"
                                name="comments"
                                value={formData.comments}
                                onChange={handleChange}
                                rows="4"
                                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                                placeholder="Comments"
                            ></textarea>
                        </div>

                        {/* "Human Check" section */}
                        <div className="flex flex-col items-center justify-center text-center mt-12 mb-6">
                            <p className="text-gray-700 text-base mb-2">Human check: how many dogs are below?</p>
                            <div className="flex gap-2 mb-4">
                                {dogIcons}
                            </div>
                            <select
                                id="dogCount"
                                name="dogCount"
                                value={formData.dogCount}
                                onChange={handleChange}
                                className="w-24 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            >
                                {Array.from({ length: dogIcons.length + 1 }, (_, i) => (
                                    <option key={i} value={i}>{i}</option>
                                ))}
                            </select>
                        </div>

                        {/* Status message display */}
                        {status && (
                            <div className="text-center mt-4 text-sm font-medium text-cyan-600">
                                {status}
                            </div>
                        )}
                        
                        {/* Submit button */}
                        <div className="mt-8">
                            <button
                                type="submit"
                                className="w-full py-3 rounded-full bg-cyan-700 text-white font-semibold hover:bg-cyan-800 transition-colors"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <section className="bg-[#c9d6df] py-16 px-4 md:px-12 lg:px-24 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-4xl mb-6">
         Contact Gibson Beach Rentals
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
        Gibson Beach Rentals wants you to experience the luxury of one of our beautiful vacation properties, located in the Destin, Miramar Beach, Florida panhandle area. We manage places to stay like vacation condos, townhomes, and villas in the most prestigious, luxurious resorts along the Emerald Coast. Choose from properties inside one of our beautiful complexes including: Beach Manor, Beachside I, Beachside II, Beachwalk Villas, Elation, Emerald Waters, Crystal Dunes, Silver Shells, Harbour Point, Market Street Inn, Summit, Augusta Village, Heron Walk, Luau II, North Shore, Pilot House, Tivoli, The Tides, or Westwinds. We have a little bit of everything to suit your needs.
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
       Gibson Beach Rentals wants you to experience the luxury of one of our beautiful vacation properties, located in the Destin, Miramar Beach, Florida panhandle area. We manage places to stay like vacation condos, townhomes, and villas in the most prestigious, luxurious resorts along the Emerald Coast. Choose from properties inside one of our beautiful complexes including: Beach Manor, Beachside I, Beachside II, Beachwalk Villas, Elation, Emerald Waters, Crystal Dunes, Silver Shells, Harbour Point, Market Street Inn, Summit, Augusta Village, Heron Walk, Luau II, North Shore, Pilot House, Tivoli, The Tides, or Westwinds. We have a little bit of everything to suit your needs.
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">We can also assist you if you have real estate inquiries or if you are interested in our property management services as an Owner yourself.</p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">Fill out the quick form below and a member of our team will be in touch soon!</p>
      </div>
    </section>
    <div className="bg-gray-100 min-h-screen p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full bg-white rounded-xl shadow-lg overflow-hidden p-8 md:p-12">
        {/* Main content container with a responsive grid layout. */}
        {/* On mobile, it's a single column (`flex-col`). On medium screens and up, it becomes two columns (`md:flex-row`). */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-8">
          {/* Text content area */}
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About the Owners</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              ESTABLISHED IN 2003, by owners Larry and Joanna Gibson, GBR prides itself in providing the type of service that keeps owners and guests coming back for years to come. As vacation property owners themselves, the Gibsons couldn't find a company that delivered the level of service every owner and guest deserves.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              In order to fill the void left by the other rental management companies in the area and to provide better rental experience for owners and guests, Larry and Joanna founded Gibson Beach Rentals bringing their special interest in vacation rentals to their guests and owners. To this day, Gibson Beach Rentals continues to be rewarded by clients who are looking to get more out of their management company.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Gibson Beach Rentals' units are located within the Panama City Beach, Destin, Miramar Beach-area's most popular properties.
            </p>
            <p className="text-gray-600 leading-relaxed font-semibold italic">
              Let Gibson Beach Rentals help you enjoy your vacation on the beautiful Emerald Coast. worry less; relax more.
            </p>
          </div>
          
          {/* Image container */}
          {/* The image is on top on mobile (`order-1`) and on the right on larger screens (`md:order-2`). */}
          <div className="flex-none w-full md:w-1/3 flex justify-center items-start mb-8 md:mb-0 order-1 md:order-2">
            <img 
              className="w-full h-auto rounded-xl shadow-lg"
              src="https://media.scurto.net/2044/Uploads/owners-244x300.png"
              alt="Owners Larry and Joanna Gibson" 
            />
          </div>
        </div>
      </div>
    </div>
        </>
    );
};

export default Contact;
