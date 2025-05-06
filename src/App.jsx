import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ImageGallery from "./Pages/ImageGallery";
import Header from "./Pages/Header";
import Navbar from "./Pages/Navbar";
import ProductCard from "./Pages/ProductCard";
import Footer from "./Pages/Footer";
import HollowBlocks from "./Pages/HollowBlocks";
import PaverBlocks from "./Pages/PaverBlocks";
import MoledRings from "./Pages/MoledRings";
import MoldedPillars from "./Pages/MoldedPillars";
import Testimonial from "./Pages/Testimonial";
import QuiltedImageList from "./Pages/QuiltedImageList";
import KRSProducts from "./Pages/KRSProducts";
// import ProductDetails from "./Pages/ProductDetails"; // New Component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<QuiltedImageList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/testimonials' element={<Testimonial/>}/>
        <Route path="/home" element={<Header/>}/>
        
        {/* All Products Page */}
        <Route path="/products" element={<KRSProducts />} />
        
        {/* Individual Product Pages */}
        <Route path="/products/hollow-blocks" element={<HollowBlocks />} />
        <Route path="/products/paver-blocks" element={<PaverBlocks />} />
        <Route path="/products/molded-rings" element={<MoledRings />} />
        <Route path="/products/molded-pillars" element={<MoldedPillars />} />

        {/* Dynamic Route for Product Details */}
        {/* <Route path="/products/:productName" element={<ProductDetails />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
