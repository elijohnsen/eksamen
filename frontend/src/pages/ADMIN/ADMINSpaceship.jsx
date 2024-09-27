import React, { useState } from "react";

import { Link } from "react-router-dom";

import SpaceshipMenu from "./ADMIN-Spaceship/SpaceshipMenu";

const AdminSpaceship = () => {
  {
  }

  return (
    <article className=" ">
      <div className="bg-blue-100">
        <div className="mycontainer flex justify-between space-y-1 px-5 py-3">
          <div className="w-10">
            <Link to="/admin" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className=""
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </Link>
          </div>
          <div className="flex flex-grow flex-col items-center space-y-2 md:flex-row md:justify-between md:space-y-0 md:px-20">
            <h1 className="text-center text-3xl text-gray-800">
              Rumfærgen ADMIN
            </h1>
            <div className="flex justify-center space-x-5"></div>
          </div>
          <div className="w-10"></div>
        </div>
      </div>
      <div className="">
        <SpaceshipMenu />
      </div>
    </article>
  );
};

export default AdminSpaceship;
