import React, { useEffect } from "react";
import useRequestData from "../../../hooks/useRequestData";
import SomeMenuFooter from "./SomeLogos/SomeMenuFooter";

const FooterSub = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:4444/footer");
  }, []);

  return (
    <aside className="bg-secondarydark">
      <div className="mycontainer bg-secondarydark py-6 text-center text-gray-500 lg:flex lg:flex-row-reverse lg:items-center lg:py-3">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && <div className="lg:w-4/12">CVR: {data.cvr}</div>}
        <menu className="mx-auto flex flex-grow">
          <SomeMenuFooter />
        </menu>
        <div className="font-medium lg:w-4/12">
          <p>2021 Venture. All rights reserved</p>
        </div>
      </div>

      <button
        className="fixed bottom-2 right-4 flex h-12 w-12 items-center justify-center bg-primarycolor lg:right-8"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-5/12 fill-white"
        >
          <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
        </svg>
      </button>
    </aside>
  );
};

export default FooterSub;
