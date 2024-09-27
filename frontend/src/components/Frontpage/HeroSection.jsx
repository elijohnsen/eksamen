import React, { useState, useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";

const HeroSection = () => {
  const apiUrl = "http://localhost:4444/banner";
  const { makeRequest, isLoading, data, error } = useRequestData();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    makeRequest(apiUrl);
  }, []);

  const slides = data || [];

  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 9000);

    return () => clearInterval(interval);
  }, [slides.length, currentIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="relative z-0 overflow-hidden text-white">
      <div className="relative h-[54em] md:h-[40em] lg:h-[35em] xl:h-[46em]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 h-full w-full transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateY(${(index - currentIndex) * 100}%)`,
            }}
          >
            <img
              src={`/src/assets/images/front/hero/${slide.image}`}
              alt={slide.title}
              className="h-full w-full  object-cover"
            />
            <div className="mycontainer absolute inset-0 flex items-center lg:justify-normal">
              <div className="w-full space-y-6 bg-black/70 p-4 lg:w-3/4 xl:w-4/6 2xl:w-1/2">
                <h2 className="text-2xl font-medium uppercase opacity-80 lg:text-3xl">
                  {slide.title}
                </h2>
                <div className="pr-20 md:pr-0">
                  <h1 className="h-48 text-5xl leading-relaxed xl:text-7xl">
                    {slide.content}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigations-knapper */}
      <div className="absolute right-4 top-1/2 flex -translate-y-1/2 transform flex-col space-y-2 lg:right-28 xl:right-36 2xl:right-52">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-4 w-4 ${
              currentIndex === index
                ? "bg-primarycolor"
                : "bg-gray-300/60"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
