import React from "react";

const BannerSection = () => {
  return (
    <article
      className="relative h-36 lg:h-48 xl:h-72 bg-cover bg-center animate-slow-pan-focus"
      style={{ backgroundImage: "url('/src/assets/images/spaceship/banner-spaceship.jpg')" }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="rubrik capitalize text-white">rumfærgen</h1>
      </div>
    </article>
  );
};

export default BannerSection;
