import { useState, useEffect } from "react";
import { X, Menu, ChevronDown, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; // useLocation ko import kiya gaya hai

export default function Navbar() {
  const [showBanner, setShowBanner] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  // useLocation hook ka istemal current URL path ko track karne ke liye
  const location = useLocation();

  // useEffect to automatically close the menu when the page changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]); // `pathname` jab bhi change hoga, yeh effect run hoga

  // This useEffect handles both background change and the hide/show animation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setIsScrolled(currentScrollPos > 100);
      
      if (currentScrollPos > 150) {
        setIsNavbarVisible(isScrollingUp);
      } else {
        setIsNavbarVisible(true);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      <div className={`
        w-full fixed z-50 transition-all duration-900 ease-in-out
        ${isNavbarVisible ? 'top-0' : '-top-[90px]'}
        ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}
      `}>
        {/* 🔹 Top Banner */}
        {showBanner && (
          <div className="bg-[#0a2342] text-white shadow-2xl text-center py-6 px-4 flex items-center justify-between">
            <p className="flex-1 text-sm font-medium">
              Save 10% on Labor Day and Fall Rates! – 🌞 Book Now 👉{" "}
              <Link to="/book" className="underline font-semibold">
                Click Here
              </Link>
            </p>
            <button
              onClick={() => setShowBanner(false)}
              className="ml-4 text-white hover:text-gray-300"
            >
              <X size={18} />
            </button>
          </div>
        )}

        {/* 🔹 Main Navbar Content */}
        <div className="relative flex flex-col items-center justify-center px-6 py-4 pt-20">
          <div className="w-full flex justify-between items-center mb-4">
            <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 pb-20">
              <img
                src="https://www.gibsonbeachrentals.com/images/logo.png"
                alt="Gibson Beach Rentals"
                className="h-20 md:h-15 "
              />
            </Link>
            
            <button
              onClick={() => setIsOpen(true)}
              className="ml-auto text-[#0a2342] hover:text-gray-600 focus:outline-none cursor-pointer"
            >
              <Menu size={39} />
            </button>
          </div>

          <div className={`flex justify-center px-4 py-1 w-full shadow-lg rounded-4xl md:w-[33%] transition-colors duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/80 backdrop-blur-lg'}`}>
            <div className="flex items-center space-x-4 w-full ">
              <div className="flex-10 text-center">
                <p className="text-[#000] text-[15px]">No Dates</p>
              </div>
              <div className="flex-10 text-center border-x border-gray-300 px-4">
                <p className="text-gray-700 text-[15px]">4 guests</p>
              </div>
              <div className="flex-2 text-center border-r border-gray-300 pr-4">
                <p className="text-[#000] text-[15px]">bedrooms</p>
              </div>
              <div className="flex- text-center ">
                <p className="text-[#000] text-[15px]">No filters added</p>
              </div>
              <button className="bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full flex-shrink-0 cursor-pointer">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Sidebar Menu (Slide from Right) */}
      <div
        className={`fixed top-0 right-0 h-full w-83 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-6 py-4 ">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-800 hover:text-gray-600 cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu Links with Dropdowns */}
        <ul className="flex flex-col space-y-4 p-6 text-[#0a2342] uppercase font-semibold font-raleway text-[20px]">
          <li>
            <button
              className="flex justify-between w-full items-center font-semibold hover:text-[#103562] font-raleway text-[20px] uppercase"
              onClick={() => toggleDropdown("rentals")}
            >
              <Link to="/rentals/">Rentals</Link> <ChevronDown size={25} className={`transform transition-transform ${openDropdown === "rentals" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "rentals" && (
              <ul className="ml-4 mt-2 space-y-2 font-semibold text-[#103562] font-raleway text-[1.2rem] uppercase">
               
                <li className="border-b border-dotted"><Link to="/vacation">specials</Link></li>
                <li className="border-b border-dotted"><Link to="/long-term">Policies</Link></li>
                <li className="border-b border-dotted"><Link to="/vacation-faq">General Informtion & FAQ</Link></li>
                <li className="border-b border-dotted"><Link to="/long-term">Viwe all</Link></li>
              </ul>
            )}
          </li>
          <li className="border-t border-dotted">
            <button
              className="flex justify-between w-full items-center hover:text-blue-500 uppercase"
              onClick={() => toggleDropdown("guide")}
            >
              Area Guide <ChevronDown size={25} className={`transform transition-transform ${openDropdown === "guide" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "guide" && (
              <ul className="ml-4 mt-2 space-y-2 font-semibold text-[#103562] font-raleway text-[1.2rem] uppercase ">
                {/* अब `onClick` की ज़रूरत नहीं है */}
                <li className="border-b border-dotted"><Link to="/local">Local Events</Link></li>
                <li className="border-b border-dotted"><Link to="/dining">BEACHES TIPS & FAQ'S</Link></li>
                <li className="border-b border-dotted"><Link to="/local-guide">Guide Map</Link></li>
              </ul>
            )}
          </li>
          {/* Main navigation links */}
          <li className="border-t border-dotted">
            <Link to="/property" className="hover:text-blue-500">
              Property Management
            </Link>
          </li>
          <li className="border-t border-dotted">
            <Link to="/real-estate" className="hover:text-blue-500">
              Real Estate
            </Link>
          </li>
          <li className="border-t border-dotted">
            <Link to="/blog" className="hover:text-blue-500">
              Blog
            </Link>
          </li>
          <li className="border-t border-dotted">
            <Link to="/contact-us" className="hover:text-blue-500">
              Contact Us
            </Link>
          </li>
          <li className="border-t border-dotted">
            <a href="tel:(881) 05151515" className="hover:text-blue-500">
              (881) 05151515
            </a>
          </li>
          <li className="border-t border-dotted pt-5">
            <Link to="/user-profile">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </Link>
          </li>
          <div className="border-b border-dotted"></div>
        </ul>
      </div>

      {/* 🔹 Dark Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40"
        />
      )}
    </>
  );
}