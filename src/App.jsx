import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Navbar from './components/Navbar'
import Hero from './pages/Home'
import Footer from './components/Foooter'
import Rentals from './pages/Rentals';
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/contact';
import PanamaCityBeach from './pages/PanamaCityBeach';
import Tidewater2204 from './pages/Tidewater2204';

// import BeachManor from './pages/BeachManor';


function App() {


  return (
    <>
    <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/rentals" element={<Rentals />}/>
        <Route path="/area-guide/destinations/panama-city-beach"element ={<PanamaCityBeach />}/>
        <Route path="/rentals/tidewater-2204" element={<Tidewater2204 />}/>
        <Route path="/contact-us" element={<Contact />}/>
      </Routes>

      <Footer />
    </>
  )
}

export default App
