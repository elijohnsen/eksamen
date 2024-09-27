import React, { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";

const WhyUsSection = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:4444/spacecraft");
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section>
      <div className="mycontainer  flex flex-col pb-10 pt-20  lg:flex-row">
        <div className="flex w-full px-5 lg:w-1/2 lg:pr-0">
          <img
            className="w-full object-cover"
            src={`/src/assets/images/front/about/${data?.image}`}
            alt="WhyUs image"
          />
        </div>
        <div className="flex flex-col justify-center space-y-6 px-2 pt-14  lg:w-1/2 lg:pl-12 lg:pt-0 lg:text-left">
          <h1 className="text-center  text-6xl  opacity-25 lg:text-left lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Hvorfor vælge os
          </h1>
          <div className="lg:border-b-2">
            <h2 className="mx-auto py-2 mb-[-2px] mt-[-2px] w-[19em] md:w-[16em]   border-y-2 border-primarycolor text-center text-2xl font-bold uppercase text-primarycolor lg:mx-0 md:text-2xl lg:w-80 lg:border-t-0 lg:text-left lg:text-xl">
              {data?.title}
            </h2>
          </div>

          <div
            className="prose px-3 md:px-0"
            dangerouslySetInnerHTML={{ __html: data?.content }}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
