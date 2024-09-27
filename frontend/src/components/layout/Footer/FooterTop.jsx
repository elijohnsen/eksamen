import React, { useEffect } from "react";
import useRequestData from "../../../hooks/useRequestData";
import { Link } from "react-router-dom";

const FooterTop = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:4444/footer");
  }, []);

  return (
    <section className="bg-primarydark text-white">
      <div className="mycontainer flex flex-col space-y-5 py-12 lg:flex-row lg:space-y-0">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && (
          <article className="mx-auto flex h-60 w-96 flex-col space-y-10 text-center lg:text-left">
            <h3 className="text-2xl uppercase">Kontakt</h3>
            <div className="flex flex-col items-center space-y-4 lg:block">
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="26"
                  className="current-fill fill-primarycolor"
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>

                <p className="w-64 text-left text-lg">{data.phone}</p>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="26"
                  className="current-fill fill-primarycolor"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
                <p className="w-64 text-left text-lg">{data.email}</p>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="26"
                  className="current-fill fill-primarycolor"
                >
                  <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8l176 0 0 176c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" />
                </svg>
                <p className="w-64 text-left text-lg">{data.address}</p>
              </div>
            </div>
          </article>
        )}
        <div className="flex-grow"></div>
        <aside className="mx-auto w-5/6 space-y-10 md:w-4/6 md:px-10 lg:w-96">
          <h3 className="text-center text-2xl uppercase lg:text-left">
            hurtige links
          </h3>
          <div className="space-y-5 text-lg capitalize lg:flex lg:flex-row lg:space-y-0">
            <ul className="flex justify-evenly lg:w-1/2 lg:flex-col lg:space-y-4">
              <li className="group flex items-center">
                <Link to="/rumfaergen">
                  <div className="flex space-x-2">
                    <div className="mt-2 h-3 w-3 rounded bg-primarycolor"></div>
                    <p className="group-hover:text-primarycolor">rumfærgen</p>
                  </div>
                </Link>
              </li>
              <li className="group flex items-center">
                <Link to="/ture">
                  <div className="flex space-x-2">
                    <div className="mt-2 h-3 w-3 rounded bg-primarycolor"></div>
                    <p className="group-hover:text-primarycolor">ture</p>
                  </div>
                </Link>
              </li>
              <li className="group flex items-center space-x-2">
                <Link to="/team ">
                  <div className="flex space-x-2">
                    <div className="mt-2 h-3 w-3 rounded bg-primarycolor"></div>
                    <p className="group-hover:text-primarycolor"> vores team</p>
                  </div>
                </Link>
              </li>
            </ul>
            <ul className="flex justify-center space-x-5 md:space-x-8 md:px-0 lg:w-1/2 lg:flex-col lg:justify-normal lg:space-x-0 lg:space-y-4">
              <li className="group">
                <Link to="/galleri">
                  <div className="flex space-x-2">
                    <div className="mt-2 h-3 w-3 rounded bg-primarycolor"></div>
                    <p className="group-hover:text-primarycolor">galleri</p>
                  </div>
                </Link>
              </li>
              <li className="group">
                <Link to="/rumfaergen">
                  <div className="flex space-x-2">
                    <div className="mt-2 h-3 w-3 rounded bg-primarycolor group-hover:text-primarycolor"></div>
                    <p className="group-hover:text-primarycolor">rumfærgen</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <button className="btn mx-auto flex lg:mx-0">
            <Link to="/kontakt" className="">
              <p className="capitalize">kontakt</p>
            </Link>
          </button>
        </aside>
      </div>
    </section>
  );
};

export default FooterTop;
