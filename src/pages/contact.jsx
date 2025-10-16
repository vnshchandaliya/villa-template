import React, { useState } from 'react';


const servicesList = [
  "Tour Packages",
  "Hotel Bookings",
  "Flight Bookings",
  "Visa Assistance",
  "Visa Filling",
  "Insurance Services",
  "Appointment Booking",
  "Okay to Board",
  "Itinerary Tickets",
  "Attestation & Appostile Services"
];

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Brazil", "Brunei", "Bulgaria", "Cambodia", "Canada", "Chile", "China", "Colombia", "Comoros", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    
    selectedService: '', 
    destination: '',
    startDate: '',
    endDate: '',
    adults: 1,
    children: 0,
    hotelCategory: '',
    message: ''
  });

  const [showThankYouModal, setShowThankYouModal] = useState(false);


  const googleSheetUrl = "https://script.google.com/macros/s/AKfycbwJqQcgpRCj0ptODnmKw-m7Vp1DbqRaGY8Ypk4__58mGD1kwnMTUt5HBuSZiz-YnILo8w/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
   // const handleServiceChange = (e) => {
  //   setFormData(prevState => ({
  //     ...prevState,
  //     serviceType: e.target.value
  //   }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = new FormData();
    
    
    dataToSend.append('formType', 'General Form'); 

    dataToSend.append('Your Name', formData.name);
    dataToSend.append('Mobile No', formData.mobile);
    dataToSend.append('Email ID', formData.email);
    dataToSend.append('Type of Services', formData.selectedService);
    dataToSend.append('Destination', formData.destination);
    dataToSend.append('Start Date', formData.startDate);
    dataToSend.append('End Date', formData.endDate);
    dataToSend.append('Number of People', `Adults: ${formData.adults}, Children: ${formData.children}`);
    dataToSend.append('Hotel Category', formData.hotelCategory);
    dataToSend.append('Message', formData.message);
    dataToSend.append('Timestamp', new Date().toLocaleString());

    try {
        const response = await fetch(googleSheetUrl, {
            method: 'POST',
            body: dataToSend,
        });

        if (response.ok) {
            setShowThankYouModal(true);
            setTimeout(() => {
                setShowThankYouModal(false);
                window.location.href = '/'; 
            }, 3000); 
        } else {
            const result = await response.text();
            console.error('Submission failed:', result);
            
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        
    }
  };

  return (
    <>
      <h1 className="text-5xl sm:text-5xl pt-27 text-center md:text-7xl lg:text-9xl font-extrabold bg-gray-100 text-gray-300">
        Contact Us
      </h1>
      
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="max-w-6xl w-full rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section - Reach Out */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-3xl font-bold text-gray-700 mb-4 border-b-2 border-red-500 pb-2">
              Reach Out
            </h2>
            <div className="flex items-center space-x-3">
              <span className="text-red-500">📞</span>
              <div>
                <p className="font-semibold">Phone</p>
                <p>+91-8920800296</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-red-500">📧</span>
              <div>
                <p className="font-semibold">Emails & Support</p>
                {/* <p>info.vcteamr@gmail.com</p> */}
                <p>support@vcteam.in</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-red-500">📍</span>
              <div>
                <p className="font-semibold">Address</p>
                <p>(HEAD OFFICE) OFFICE NO - T-04, 3RD FLOOR, C-124, C-BLOCK, SECTOR -02, NOIDA, UTTAR PRADESH-201301</p>
              <p className='mt-4'>(BRANCH OFFICE) OFFICE No. 570F, 5th Floor, Block: D&E, CCC (Chandigarh City Center) VIP Road, Zirakpur, Punjab-  140603</p>
              </div>
            </div>
          </div>

          {/* Right Section - General Form */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-gray-700 mb-4 border-b-2 border-red-500 pb-2 text-center uppercase">
              Inquiry Form
            </h2>
            <form  onSubmit={handleSubmit} className="flex flex-col space-y-4">
              
            
              <input type="hidden" name="formType" value="General Form" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="YOUR NAME*"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="tel"
                  name="mobile"
                  placeholder="MOB NO.*"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="EMAIL ID*"
                required
                value={formData.email}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              
              <select
                name="selectedService" 
                required 
                value={formData.selectedService}
                onChange={handleChange} 
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">TYPE OF SERVICES: *</option>
                {servicesList.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
              

              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">DESTINATION (all country list)</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  name="startDate"
                  placeholder="START DATE"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="date"
                  name="endDate"
                  placeholder="END DATE"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="number"
                  name="adults"
                  placeholder="NO OF PEOPLE (adults)"
                  min="1"
                  value={formData.adults}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="number"
                  name="children"
                  placeholder="NO OF PEOPLE (child)"
                  min="0"
                  value={formData.children}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <select
                name="hotelCategory"
                value={formData.hotelCategory}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">HOTEL CATEGORY</option>
                <option value="1 Star">1 Star</option>
                <option value="2 Star">2 Star</option>
                <option value="3 Star">3 Star</option>
                <option value="4 Star">4 Star</option>
                <option value="5 Star">5 Star</option>
              </select>

              <textarea
                name="message"
                placeholder="MESSAGE BOX"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-red-500 text-white font-bold py-3 px-8 rounded-full hover:bg-red-600 transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Thank You Modal */}
      {showThankYouModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-sm w-full">
            <div className="text-green-500 text-6xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Thank you!</h2>
            <p className="text-gray-600 mb-4">Your form has been submitted successfully.</p>
            <p className="text-sm text-gray-500">You will be redirected to the homepage in 3 seconds...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
