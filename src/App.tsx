import React, { useState } from "react";

import Contact from "./components/Contact";
import Offers from "./components/Offers";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      {/* <Navbar handleMenuToggle={handleMenuToggle} menuOpen={menuOpen} /> */}

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="my-12 text-center">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Real-time location for the safety of your vehicle
          </h1>
          <p className="font-normal text-md sm:text-lg lg:text-xl max-w-2xl mx-auto">
            Real-time location tracking offers peace of mind by constantly
            monitoring your vehicle's whereabouts. With instant updates, you can
            respond promptly to any safety concerns, such as theft or accidents.
          </p>
        </section>
      </main>
      <Offers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
