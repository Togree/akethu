import  { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

import Contact from "./components/Contact";
import Offers from "./components/Offers";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setPageLoaded] = useState(false); // Track first page load

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Set pageLoaded to true after the component mounts
  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <Navbar handleMenuToggle={handleMenuToggle} menuOpen={menuOpen} />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from--100 to-white">
  {/* Hero Section */}
  <motion.section
    className="my-12 text-center"
    initial={{ opacity: 0, y: -50 }} // Initial state before animation
    animate={{ opacity: 1, y: 0 }} // Animate to this state
    transition={{ duration: 0.8, ease: "easeInOut" }} // Animation settings
  >
    <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
      Real-time location for the safety of your vehicle
    </h1>
    <p className="font-normal text-md sm:text-lg lg:text-xl max-w-2xl mx-auto">
      Real-time location tracking offers peace of mind by constantly
      monitoring your vehicle's whereabouts. With instant updates, you can
      respond promptly to any safety concerns, such as theft or accidents.
    </p>
  </motion.section>

  <motion.a
    href="javascript:void(0)"
    className="my-4 py-2 px-4 text-center text-white font-medium bg-green-600 duration-150 hover:bg-green-500 active:bg-green-700 rounded-lg shadow-lg hover:shadow-none"
    initial={{ opacity: 0, scale: 0.8 }} // Initial animation values
    animate={{ opacity: 1, scale: 1 }} // Animate to these values
    transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }} // Animation settings
  >
    Let's get started
  </motion.a>
</main>

      <Offers />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;