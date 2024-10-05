import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import logo from "./assets/hero.jpg";
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
    <div className="">
      <Navbar handleMenuToggle={handleMenuToggle} menuOpen={menuOpen} />

      {/* Main Content */}
      <div className="h-[700px]">
        <img src={logo} alt="" className="relative w-screen h-screen" />
        <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from--100 to-white absolute top-0 right-0 left-0">
          {/* Hero Section */}
          <motion.section
            className="my-12 text-center"
            initial={{ opacity: 0, y: -50 }} // Initial state before animation
            animate={{ opacity: 1, y: 0 }} // Animate to this state
            transition={{ duration: 0.8, ease: "easeInOut" }} // Animation settings
          >
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-white">
              Real-time location for the safety of your vehicle
            </h1>
            <p className="font-normal text-md sm:text-lg lg:text-xl max-w-2xl mx-auto text-white">
              Real-time location tracking offers peace of mind by constantly
              monitoring your vehicle's whereabouts. With instant updates, you
              can respond promptly to any safety concerns, such as theft or
              accidents.
            </p>
          </motion.section>

          <motion.a
            href="javascript:void(0)"
            className="my-4 py-2 px-4 text-center text-white font-medium bg-red-600 duration-150 hover:bg-red-500 active:bg-red-700 rounded-lg shadow-lg hover:shadow-none"
            initial={{ opacity: 0, scale: 0.8 }} // Initial animation values
            animate={{ opacity: 1, scale: 1 }} // Animate to these values
            transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }} // Animation settings
          >
            Let's get started
          </motion.a>
        </main>
      </div>

      <Offers />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
