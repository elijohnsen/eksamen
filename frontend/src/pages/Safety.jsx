import React from "react";

const More = () => {
  return (
    <section>
      <article
        className="animate-slow-pan-focus relative h-36 bg-cover bg-center lg:h-48 xl:h-72"
        style={{
          backgroundImage: "url('/src/assets/images/gallery/banner-gallery.jpg')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="rubrik text-center text-white">Sikkerhed</h1>
        </div>
      </article>
      <div className="mycontainer">
      </div>
    </section>
  );
};

export default More;
