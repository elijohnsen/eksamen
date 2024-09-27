import React from "react";
import GallerySection from "../components/Spaceship/GallerySection";
import BannerSection from "../components/Spaceship/BannerSectionSpaceship";
import WhyUsSection from "../components/Spaceship/WhyUsSection"

const Spaceship = () => {
  return (
    <section className="">
    
      <BannerSection/>
      <WhyUsSection/>
      <GallerySection />
    </section>
  );
};

export default Spaceship;
