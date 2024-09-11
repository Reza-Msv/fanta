import React from "react";
import Hero from "./Components/Hero";
import { UpdateFollower } from "react-mouse-follower";
import Products from "./Components/products/Products";
import Banner from "./Components/Banner/Banner";
import BannerText from "./Components/Banner/BannerText";
import Blogs from "./Components/Blogs/Blogs";
import Faq from "./Components/FAQ/Faq";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 10,
          followSpeed: 1.5,
          scale: 1.5,
        }}
      >
        <Hero />
        <Products />
        <Banner />
        <BannerText />
        <Blogs />
        <Faq />
        <Footer />
      </UpdateFollower>
    </main>
  );
};

export default App;
