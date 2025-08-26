import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PanamaCityBeach = () => {
  const navigate = useNavigate();

  // Sorting state
  const [sortOption, setSortOption] = useState("Default");

  
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const rentals = [
    {
      id: 1,
      name: "Tidewater 2204",
      reviews:9,
      rating: 4.8,
      bedrooms: 3,
      bathrooms: 3,
      guests: 8,
      images: [
        "https://media.scurto.net/cdn-cgi/image/width=800/2044/media/10420.jpg",
        "https://media.scurto.net/cdn-cgi/image/width=800/2044/media/10443.jpg",
        "https://media.scurto.net/cdn-cgi/image/width=800/2044/media/10422.jpg",
      ],
      link: "/rentals/tidewater-2204",
    },
    {
      id: 2,
      name: "Tidewater 2613",
      reviews:5,
      rating: 5.0,
      bedrooms: 3,
      bathrooms: 2,
      guests: 6,
      images: [
        "https://media.scurto.net/cdn-cgi/image/width=800/2044/media/10445.jpg",
        "https://media.scurto.net/cdn-cgi/image/width=800/2044/media/10465.jpg",
        "https://media.scurto.net/cdn-cgi/image/width=800/2044/media/10450.jpg",
      ],
      link: "/rentals/tidewater-2613",
    },
    {
      id: 3,
      name: "Shores of Panama 1630",
      reviews:5,
      rating: 5.0,
      bedrooms: 4,
      bathrooms: 4,
      guests: 12,
      images: [
        "https://media.scurto.net/cdn-cgi/image/width=800/2044/media/17587.jpg",
        "https://media.scurto.net/cdn-cgi/image/width=800/2044/media/17454.jpg",
        "https://media.scurto.net/cdn-cgi/image/width=800/2044/media/17588.jpg",
      ],
      link: "/rentals/shores-of-panama-1630",
    },
    {
      id: 4,
      name: "Tidewater 1616",
      reviews: 0,
      rating: 0,
      bedrooms: 2,
      bathrooms: 2,
      guests: 4,
      images: [
        "https://media.scurto.net/cdn-cgi/image/width=800/2044/media/17306.jpg",
        "https://media.scurto.net/cdn-cgi/image/width=800/2044/media/16893.jpg",
        "https://media.scurto.net/cdn-cgi/image/width=800/2044/media/17307.jpg",
      ],
      link: "/summit",
    },
  ];

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // ✅ Next image (needs id)
  const nextImage = (id) => {
    setCurrentImageIndex((prevState) => {
      const images = rentals.find((r) => r.id === id).images;
      const currentIndex = prevState[id] !== undefined ? prevState[id] : 0;
      const nextIndex = (currentIndex + 1) % images.length;
      return { ...prevState, [id]: nextIndex };
    });
  };

  // ✅ Prev image (needs id)
  const prevImage = (id) => {
    setCurrentImageIndex((prevState) => {
      const images = rentals.find((r) => r.id === id).images;
      const currentIndex = prevState[id] !== undefined ? prevState[id] : 0;
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      return { ...prevState, [id]: prevIndex };
    });
  };

  return (
    <>
      {/* Banner */}
      <section
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-white text-center px-4 md:px-12 lg:px-24"
        style={{
          backgroundImage:
            'url("https://media.scurto.net/cdn-cgi/image/width=1920/2044/media/6866-miramar-beach-vacation-rentals-by-gibson-beach-rentals.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-[#00000021] bg-opacity-60 z-0"></div>
        <div className="relative z-10 max-w-5xl">
          <h1 className="text-2xl sm:text-5xl md:text-4x5 font-[300] leading-tight drop-shadow-lg pt-90 font-serif-subheading">
            Miramar Beach Vacation Rentals
          </h1>
        </div>
      </section>
         <section className="bg-gray-100 py-16 px-4 md:px-12 lg:px-24 text-center">
      <div className="max-w-7xl mx-auto">
       
        <p className="text-black text-base md:text-lg leading-relaxed">
        Welcome to Panama City Beach, a vibrant and sun-soaked paradise along the Gulf of Mexico, where the sugar-white sands and lively atmosphere make it an ideal destination for families and couples alike. Panama City Beach boasts a perfect blend of family-friendly fun and romantic allure, ensuring a diverse range of experiences for every visitor.
        </p>
        <br />
        <br />
        <p className="text-black text-base md:text-lg leading-relaxed mt-4">
         Families can dive into excitement at Gulf World Marine Park, an interactive and educational destination that brings marine life up close. The young ones can splash around at Shipwreck Island Waterpark, enjoying thrilling water attractions and creating lasting memories. For those seeking on-land adventures, Pier Park becomes a family-friendly hub during the day, offering shopping, dining, and entertainment options.
        </p>
        <br />
        <br />
         <p className="text-black text-base md:text-lg leading-relaxed">
        As the sun sets, Panama City Beach transforms into a romantic haven. Couples can enjoy intimate dinners at beachfront restaurants, relishing the breathtaking sunset views over the Gulf of Mexico. The beachfront nightlife comes alive with live music and vibrant energy, creating an atmosphere of romance and relaxation.
        </p>
        <br />
        <br />
        <p className="text-black text-base md:text-lg leading-relaxed mt-4">
         Panama City Beach is not just about the beaches; it's a destination that caters to every preference. Whether it's the family-friendly daytime activities, the romantic beachside dinners, or the lively nightlife, Panama City Beach promises an inclusive and memorable vacation experience for everyone.
        </p>
        
      </div>
    </section>

      {/* Listings */}
      <div className="bg-gray-100 min-h-screen p-4 md:p-8">
        <div className="max-w-7xl mx-auto w-full">
          {/* Sort */}
          <div className="flex justify-start items-center mb-6">
            <label htmlFor="sort-by" className="text-gray-700 font-medium mr-2">
              Sorted by
            </label>
            <select
              id="sort-by"
              value={sortOption}
              onChange={handleSortChange}
              className="py-2 px-4 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
            >
              <option value="Default">Default</option>
              <option value="Name">Name</option>
              <option value="Bedrooms">Bedrooms</option>
              <option value="Sleeps">Sleeps</option>
              <option value="Price">Price</option>
            </select>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rentals.map((rental) => (
              <div
                key={rental.id}
                className="relative bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 cursor-pointer"
                onClick={() => navigate(rental.link)} // ✅ go to fixed route
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image slider */}
                  <div className="relative w-full md:w-1/2 flex-shrink-0">
                    <img
                      className="w-full h-64 md:h-full object-cover"
                      src={rental.images[currentImageIndex[rental.id] ?? 0]}
                      alt={rental.name}
                    />

                    {/* Prev */}
                    <button
                      type="button"
                      className="absolute top-1/2 left-2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors z-10"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        prevImage(rental.id);
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    {/* Next */}
                    <button
                      type="button"
                      className="absolute top-1/2 right-2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors z-10"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        nextImage(rental.id);
                      }}
                    >
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between w-full md:w-1/2">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-bold text-gray-800">{rental.name}</h3>
                        <div className="flex items-center text-yellow-400">
                          <span className="mr-1">★</span>
                          <span className="font-semibold">{rental.rating}</span>
                          <span className="text-gray-500 text-sm ml-1">
                            ({rental.reviews} reviews)
                          </span>
                        </div>
                      </div>
                      <div className="text-gray-600 text-sm">
                        <p>
                          {rental.bedrooms}-bedroom · {rental.bathrooms}-bathroom ·{" "}
                          {rental.guests} guests
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PanamaCityBeach;
