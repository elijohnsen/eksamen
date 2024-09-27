import React, { useEffect, useState } from "react";
import useRequestData from "../../hooks/useRequestData";

const GallerySection = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();
  const [currentIndex, setCurrentIndex] = useState(0); 

  useEffect(() => {
    const fetchImages = async () => {
      await makeRequest("http://localhost:4444/gallery");
    };

    fetchImages();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const images = data ? data.slice(0, 4) : [];

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="">
      <h2 className="rubrik text-center">Galleri</h2>
      <div className="mb-8  mt-5  flex md:space-x-2 lg:space-x-5">
        {images.map((gallery, index) => (
          <div
            key={gallery._id}
            className={`w-full ${
              index === currentIndex ? "" : "hidden md:block"
            }`}
          >
            <img
              className="w-full object-cover"
              src={`/src/assets/images/spaceship/${gallery.image}`}
              alt={gallery.image}
            />
          </div>
        ))}
      </div>
      <div className="mb-8 mt-12 flex justify-center space-x-4 md:hidden">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-6 w-6 ${
              index === currentIndex ? "bg-primarycolor" : "bg-gray-400"
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Billede nr. ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
