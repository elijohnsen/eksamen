import React from "react";
import { Link } from "react-router-dom";

const TravelsSection = () => {
  return (
    <section className="bg-mygray">
      <div className="mycontainer pb-6">
        <div className="mx-auto flex flex-col space-y-12 px-20 py-6 pt-20 md:flex-row md:space-x-5 md:space-y-0 lg:pt-0 xl:w-3/4">
          <Link to="/ture/månen" className=" overflow-hidden">
            <img
              className="transition-transform duration-500 hover:scale-110"
              src="/src/assets/images/front/travels/moon-btn.jpg"
              alt="Tur til månen"
            />
          </Link>
          <Link to="/ture/mars" className="overflow-hidden">
            <img
              className="transition-transform duration-500 hover:scale-110"
              src="/src/assets/images/front/travels/mars-btn.jpg"
              alt="Tur til Mars"
            />
          </Link>
        </div>

        <div className="mx-auto w-1/2 justify-center md:w-1/3 lg:w-1/4">
          <Link to="/ture" className="group flex justify-center space-x-4">
            <p className="py-4 font-medium group-hover:text-gray-400">
              Vores ture
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              viewBox="0 0 448 512"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TravelsSection;
