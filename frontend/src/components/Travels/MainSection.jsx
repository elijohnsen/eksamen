import React, { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import { Link } from "react-router-dom";
import Countdown from "./Countdown";

const WhyUsSection = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:4444/tours");
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const sortedData = data?.sort(
    (a, b) => new Date(a.spacelaunch) - new Date(b.spacelaunch),
  );

  const soonestLaunchDate = sortedData?.[0]?.spacelaunch;

  return (
    <section className="">
      <div className="w-full bg-primarydark">
        {soonestLaunchDate && <Countdown targetDate={soonestLaunchDate} />}
      </div>
      <div className="mycontainer space-y-4 md:space-y-8   pt-12 ">
        {sortedData?.map((tour) => (
          <div key={tour._id} className="px-7  ">
            <Link className="group" to={`/ture/${tour.destination}`}>
              <div className="flex flex-col px-2 md:px-0 lg:flex-row lg:space-x-8 lg:border-2 lg:border-gray-100 xl:space-x-14">
                <div className="relative flex w-full overflow-hidden lg:w-1/2 lg:pr-0">
                  <img
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={`/src/assets/images/travels/${tour.image1}`}
                    alt={`${tour.destination} billede`}
                  />
                  {/* GRØN PRISSEDDEL på billede - fra sm og til lg */}
                  <div className="cut-corner absolute right-0 top-0 w-32 bg-primarycolor py-1 text-center lg:hidden  lg:py-3">
                    <p className="text-2xl text-white">{tour.price}</p>
                  </div>
                </div>

                <div className="relative flex flex-col justify-center space-y-4 py-5 lg:w-1/2 lg:text-left">
                {/* GRØN PRISSEDDEL på tekstfelt - kun fra lg og + */}
                  <div className="cut-corner absolute right-0 top-0 hidden w-32 bg-primarycolor py-1 lg:flex lg:py-3">
                    <p className="mx-auto text-2xl text-white">{tour.price}</p>
                  </div>
                  <h2 className="text-2xl font-medium md:text-2xl lg:mx-0 lg:w-80 lg:text-left lg:text-xl">
                    {tour.title}
                  </h2>

                  <div
                    className="prose line-clamp-3 lg:pr-10 md:px-0"
                    dangerouslySetInnerHTML={{ __html: tour.content }}
                  />

                  <button className="bb w-52 py-4 hover:bg-primarycolor">
                    Se mere
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUsSection;
