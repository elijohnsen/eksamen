import React, { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import { Link } from "react-router-dom";

const AboutUsSection = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:4444/about");
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section>
      <div className="mycontainer flex flex-col pb-10 pt-14 lg:flex-row lg:items-stretch">
        <div className="flex w-full px-3 lg:w-1/2 lg:pr-0">
          <img
            className="w-full object-cover"
            src="/src/assets/images/front/about/om-os.jpg"
            alt="About us"
          />
        </div>
        <div className="flex flex-col justify-center space-y-8 px-3 py-6 text-center lg:w-1/2 lg:pl-12 lg:text-left">
          <h1 className="rubrik">Lidt om os</h1>
          <div className="lg:border-b-2">
            <h2 className="mx-auto mb-[-2px] mt-[-2px] w-96 whitespace-nowrap border-y-2 border-primarycolor text-3xl font-bold uppercase text-primarycolor lg:mx-0 lg:w-60 lg:border-t-0 lg:text-xl">
              {data?.title}
            </h2>
          </div>

          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: data?.content }}
          />
          <Link to="kontakt">
            <button className="btn mx-auto w-48 lg:mx-0">
              <p>Kontakt os</p>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
