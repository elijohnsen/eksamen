import React, { useEffect, useState } from "react";
import useRequestData from "../hooks/useRequestData";

const Safety = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:4444/safety");
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data || !data.content) {
    return <p>No data available</p>;
  }

  return (
    <section>
      <article
        className="animate-slow-pan-focus relative h-36 bg-cover bg-center lg:h-48 xl:h-72"
        style={{
          backgroundImage:
            "url('/src/assets/images/gallery/banner-gallery.jpg')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="rubrik text-center text-white">Sikkerhed</h1>
        </div>
      </article>

      <section className="flex min-h-80 flex-col text-white">
        <div className="my-3 flex flex-grow items-center bg-primarycolor">
          <div className="mycontainer py-4">
            <div className="mb-8 mt-5 grid grid-cols-2">
                <img src="src/assets/images/spaceship/spaceship1.jpg"/>
              <div key={data._id}>
                <h2>{data.title}</h2>
                <div
                  className=" font-medium"
                  dangerouslySetInnerHTML={{ __html: data.content }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Safety;
