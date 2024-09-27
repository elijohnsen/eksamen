import React from "react";

const BannerSection = () => {
  return (
    <article
      className="animate-slow-pan-focus relative  h-36 bg-cover bg-center lg:h-48 xl:h-72"
      style={{
        backgroundImage:
          "url('/src/assets/images/travels/banner-ture.jpg')",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="rubrik capitalize text-white">ture</h1>
      </div>
    </article>
  );
};

export default BannerSection;
