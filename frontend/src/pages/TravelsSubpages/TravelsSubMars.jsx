import React, { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import SomeMenuNavTop from "../../components/layout/Navbar/SomeLogos/SomeMenuNavTop";
import Countdown from "../../components/Travels/Countdown";

const TravelsSubMars = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:4444/tours/617f80a6066b123e4c7c941a");
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return null;

  return (
    <section>
      <div className="mycontainer mx-5 mt-20 mb-7 flex flex-col space-y-12 md:mx-auto lg:flex-row lg:space-x-16 lg:space-y-0">
        {/* Billeddel */}
        <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:px-0 lg:w-1/2 lg:flex-col lg:space-y-7">
          <img
            className="w-full object-cover transition-transform duration-500 group-hover:scale-110 md:w-1/2 md:pr-2 lg:h-96 lg:w-full lg:pr-0"
            src={`/src/assets/images/travels/${data.image1}`}
            alt={`${data.destination} billede 1`}
          />
          <img
            className="w-full object-cover transition-transform duration-500 group-hover:scale-110 md:w-1/2 md:pl-2 lg:h-96 lg:w-full lg:pl-0"
            src={`/src/assets/images/travels/${data.image2}`}
            alt={`${data.destination} billede 2`}
          />
        </div>

        {/* tekstdel */}
        <article className="relative pt-12 text-center md:pt-0 lg:w-1/2">
          {/* PRISSÆTNINGEN I HØJRE TOP */}
          <div className="cut-corner absolute right-0 top-0 w-36 bg-primarycolor py-1 lg:py-3">
            <p className="text-2xl uppercase text-white">{data.price}</p>
          </div>
          <div className=" ">
            <div className="mx-auto flex h-12 w-14 justify-center lg:justify-normal border-b-4 border-primarycolor md:w-20 lg:mx-0 lg:my-auto">
              <h1 className="text-center text-xl font-extrabold">
                {data.destination}
              </h1>
            </div>
            <div className="space-y-7 pb-10 pt-3 text-center lg:text-left">
              <h2>{data.title}</h2>
              <p
                dangerouslySetInnerHTML={{ __html: data.content }}
                className=""
              ></p>
            </div>
            <div className="mx-auto w-full border-y-2 pb-3 pt-5">
              <div className="flex flex-col space-y-10 md:flex-row">
                <div className="pr-6 text-left space-y-2 w-2/2  md:w-1/2 mx-auto">
                  <p>
                    <span className="font-bold">Destination: </span>
                    {data.destination}
                  </p>
                  <p>
                    <span className="font-bold">Pris: </span>
                    {data.price}
                  </p>
                  <p>
                    <span className="font-bold">Afstand fra jorden: </span>
                    {data.distance}
                  </p>
                  <p>
                    <span className="font-bold">Flyvetid: </span>
                    {data.traveltime}
                  </p>
                  <p>
                    <span className="font-bold text-primarycolor">Næste afgang: </span>
                    {new Date(data.spacelaunch).toLocaleDateString()}
                  </p>
                </div>
                {/* altid 5 = fyldte stjerner gives ekvivalent med tallet i rating */}
                <div className="flex group md:w-1/2 items-center justify-center">
                  <div className="flex  flex-col items-center text-center">
                    <h3 className="font-bold group-hover:text-primarycolor transition duration-500 text-white ">Tidligere kunder har givet turen:</h3>
                    <p>
                      {Array.from({ length: 5 }, (_, index) => {
                        const star = index < data.rating ? "★" : "☆";
                        return (
                          <span key={index} className="text-4xl ">
                            {star}
                          </span>
                        );
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-7 py-6 lg:justify-normal">
              <button className="rounded-full  uppercase hover:bg-primarycolor transition duration-400 hover:text-white">
                share
              </button>
              <SomeMenuNavTop />
            </div>
          </div>
        </article>
      </div>
        {/* Countdown Del*/}
        <div>
            <Countdown targetDate={data.spacelaunch} /> 
          </div>
    </section>
  );
};

export default TravelsSubMars;
