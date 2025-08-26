import React from 'react'
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PropertyCard from '../components/PropertyCard';
import { Link } from "react-router-dom";

<PropertyCard />

const destinations = [
  {
    path: "/area-guide/destinations/panama-city-beach/",
    title: "Panama City Beach Vacation Rentals",
    image:
      "https://media.scurto.net/cdn-cgi/image/width=800/2044/media/6866-miramar-beach-vacation-rentals-by-gibson-beach-rentals.jpg",
  },
  {
    path: "/destin",
    title: "Destin Vacation Rentals",
    image:
      "https://media.scurto.net/cdn-cgi/image/width=800/2044/media/6864-panama-city-beach-vacation-rentals-by-gibson-beach-rentals.jpg",
  },
  {
    path: "/miramar-beach",
    title: "Miramar Beach Vacation Rentals",
    image:
      "https://media.scurto.net/cdn-cgi/image/width=800/2044/media/6865-destin-area-beach-vacation-rentals-by-gibson-beach-rentals.jpg",
  },
];
 const properties = [
    {
      id: 1,
      imageUrl: "https://media.scurto.net/cdn-cgi/image/width=300/2044/media/6863-sandestingolfandbeachresortvacationrentalsbygibsonbeachrentals.jpg", // Placeholder image for demonstration
      title: "Sandestin®Golf and Beach Resort Vacation Rentals",
      description: "1-bedroom, sleeps 4",
    },
    {
      id: 2,
      imageUrl: "https://media.scurto.net/cdn-cgi/image/width=300/2044/media/6928-topslresort.jpg",
      title: "Tops'L Beach & Racquet Resort Vacation Rentals",
      description: "3-bedroom, sleeps 10",
    },
    {
      id: 3,
      imageUrl: "https://media.scurto.net/cdn-cgi/image/width=300/2044/media/6659-destinharbor_04.jpg",
      title: "https://media.scurto.net/cdn-cgi/image/width=300/2044/media/6659-destinharbor_04.jpg",
      description: "2-bedroom, sleeps 4",
    },
    {
      id: 4,
      imageUrl: "https://media.scurto.net/cdn-cgi/image/width=300/2044/media/6659-destinharbor_04.jpg",
      title: "Vacation Rentals In Miramar Beach, Florida",
      description: "2-bedroom, sleeps 6",
    },
     {
      id: 5,
      imageUrl: "https://media.scurto.net/cdn-cgi/image/width=300/2044/media/6858-panama-city-beach-vacation-rentals-by-gibson-beach-rentals.jpg",
      title: "Vacation Rentals In Panama City Beach, Florida",
      description: "2-bedroom, sleeps 6",
    },
  ];

const Rentals = () => {
    const trackRef = useRef(null);

  const scrollByCards = (dir = 1) => {
    const el = trackRef.current;
    if (!el) return;
    const vw = el.clientWidth;
    const perView = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const amount = Math.round(vw / perView);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };
  return (
    <>
     <section
                  className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center px-40"
                  style={{
                    backgroundImage: `url("https://media.scurto.net/cdn-cgi/image/width=1920/2044/media/6899-4566.jpg")`,
                  }}
                >
                  <div className="absolute inset-0 bg-[#00000066] bg-opacity-60 z-0"></div>
          
                  <div className="relative z-10 max-w-5xl">
                   
                   
                  </div>
                
                </section> 
                <section className="bg-gray-100 py-16 px-4 md:px-12 lg:px-24 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-4xl mb-6">
          Emerald Coast Vacation Rentals
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Come stay with us in the most beautiful area of the Florida coastal panhandle! 
          From our crystal white sands and tropical emerald waters to year-round activities 
          and events, you will not be disappointed. We are a property management company 
          in the great Miramar Beach area, more popularly known as Sandestin, and featuring 
          properties in Miramar Beach, Destin, and Panama City Beach.
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
          We don’t strive to be the biggest, but instead, the best. Gibson is with you through 
          every step of planning your trip with extremely useful information about our area and a 
          cheery, helpful staff at your service! Experience the WOW! factor with every one of our 
          vacation homes as we treat them like our own with our best-of-the-best housekeeping and 
          the utmost quality property care.
        </p>
      </div>
    </section>
          <section className="w-full bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-neutral-800">
          Search by Destination
        </h2>

        <div className="relative mt-8">
          {/* Left arrow */}
          <button
            onClick={() => scrollByCards(-1)}
            className="hidden md:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white shadow-md items-center justify-center hover:shadow-lg"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none]"
          >
            <div className="flex gap-6 lg:gap-8 pr-4">
              {destinations.map((d) => (
                <Link
                  key={d.path}
                  to={d.path}
                  className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-[48%] lg:w-[31%]"
                >
                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="aspect-[16/10] w-full overflow-hidden rounded-t-xl">
                      <img
                        src={d.image}
                        alt={d.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-[22px] leading-snug font-semibold text-[#0b2a4a]">
                        {d.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scrollByCards(1)}
            className="hidden md:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white shadow-md items-center justify-center hover:shadow-lg"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>

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
          //     description={property.description}
            />
          ))}
        </div>
      </div>
    </div>
     
 </>
  )
}

export default Rentals
