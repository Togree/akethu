
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MainContent from "@/components/Main";
import Navbar from "@/components/Navbar";

import Offers from "@/components/Offers";
import Products from "@/components/Products";

const Main = () => {
  return (
    <div className="scroll-smooth">
        <Navbar />
      <MainContent />
      <Offers />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
