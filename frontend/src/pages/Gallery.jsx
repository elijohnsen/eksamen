import React, { useEffect, useState } from "react";
import useRequestData from "../hooks/useRequestData";
import Lightbox from "../components/Lightbox";

const Gallery = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      await makeRequest("http://localhost:4444/gallery");
    };

    fetchImages();
  }, []);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const images = data || [];

  return (
    <div className="">
      <article
        className="animate-slow-pan-focus relative h-36 bg-cover bg-center lg:h-48 xl:h-72"
        style={{
          backgroundImage: "url('/src/assets/images/gallery/banner-gallery.jpg')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="rubrik text-center text-white">Galleri</h1>
        </div>
      </article>
      <section className="flex min-h-80 flex-col text-white">
        <div className="my-3 flex flex-grow items-center bg-primarycolor">
          <div className="mycontainer py-4">
          
            <div className="mb-8 mt-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {images.map((gallery) => (
                <div key={gallery._id}>
                  <img
                    className="h-3/4 w-full cursor-pointer object-cover"
                    src={`/src/assets/images/spaceship/${gallery.image}`}
                    alt={gallery.image}
                    onClick={() =>
                      openLightbox(
                        `/src/assets/images/spaceship/${gallery.image}`,
                      )
                    }
                  />
                  <div className="pl-1 font-medium">{gallery.imagetext}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Lightbox image={selectedImage} onClose={closeLightbox} />
      </section>
    </div>
  );
};

export default Gallery;
