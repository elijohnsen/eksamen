import React from "react";

//FORSIDENS SEKTIONER

import HeroSection from "../components/Frontpage/HeroSection";
import TravelsSection from "../components/Frontpage/TravelsSection";
import AboutUsSection from "../components/Frontpage/AboutUsSection";
import TeamSection from "../components/Frontpage/TeamSection";
import SubscripSection from "../components/Frontpage/SubscripSection";
import CountdownSection from "../components/Frontpage/CountdownSection";

const Frontpage = () => {
  return (
    <section>
     <div className="">
        <HeroSection/>
        <TravelsSection/>
        <CountdownSection/>
        <AboutUsSection/>
        <TeamSection/>
        <SubscripSection/>
     </div>
    </section>
  );
};

export default Frontpage;
