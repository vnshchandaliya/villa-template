import React from "react";
import { Link } from "react-router-dom"; // 👈 import Link

const StatCard = ({ heading, value, description, bgImage, path }) => {
  return (
    <Link
      to={path} // 👈 routing
      className="
        relative flex-1 min-h-[350px] md:min-h-[300px] 
        overflow-hidden rounded-2xl shadow-lg m-4 
        cursor-pointer group block
      "
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition" />

      {/* Text */}
      <div className="relative flex flex-col justify-end h-full p-6 text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          {heading}
        </h3>
        {value && (
          <p className="text-4xl md:text-5xl font-extrabold mb-1">
            {value}
          </p>
        )}
        {description && (
          <p className="text-sm font-light uppercase tracking-wide">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
};

const StatsSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          heading="Vacation Rentals"
          bgImage="https://www.gibsonbeachrentals.com/images/assets/vacation-rentals.jpg"
          path="/rentals" // 👈 route
        />
        <StatCard
          heading="Area Guide"
          bgImage="https://www.gibsonbeachrentals.com/images/assets/area-guide.jpg"
          path="/area-guide"
        />
        <StatCard
          heading="Property Management"
          bgImage="https://www.gibsonbeachrentals.com/images/assets/property-management.jpg"
          path="/property-management"
        />
        <StatCard
          heading="Specials"
          bgImage="https://www.gibsonbeachrentals.com/images/assets/activities.jpg"
          path="/specials"
        />
      </div>
    </section>
  );
};

export default StatsSection;
