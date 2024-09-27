import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../layout/Navbar";

const ADMINNavbar = () => {
  return (
    <div className="">
      <Navbar />
      <nav className="border-t-4 border-gray-100 bg-gray-50">
        <ul className="mycontainer flex justify-around space-x-3 py-4 font-semibold">
        <li className="w-20 text-center">
            <NavLink
              to="/admin"
              end
              className={({ isActive }) =>
                isActive
                  ? "rounded-full bg-primarycolor px-3 py-1 text-white"
                  : "rounded-full px-3 py-1 hover:text-gray-400"
              }
            >
              ADMIN
            </NavLink>
          </li>
        <li className="w-20 text-center">
            <NavLink
              to="rumfaergen"
              className={({ isActive }) =>
                isActive
                  ? "w-full rounded-full bg-primarycolor px-6 py-1 text-white"
                  : "rounded-full px-3 py-1 hover:text-gray-400"
              }
            >
              Rumfærgen
            </NavLink>
          </li>
          <li className="w-20 text-center">
            <NavLink
              to="ture"
              className={({ isActive }) =>
                isActive
                  ? "w-full rounded-full bg-primarycolor px-6 py-1 text-white"
                  : "rounded-full px-3 py-1 hover:text-gray-400"
              }
            >
              Ture
            </NavLink>
          </li>
       
          <li className="w-20 text-center">
            <NavLink
              to="kontakt"
              className={({ isActive }) =>
                isActive
                  ? "rounded-full bg-primarycolor px-3 py-1 text-white"
                  : "rounded-full px-3 py-1 hover:text-gray-400"
              }
            >
              Kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ADMINNavbar;
