import React from "react";
import Navbar from "../Navbar";
import { NavLink } from "react-router-dom";

const ADMINNavbar = () => {
  return (
    <div className="">
      <Navbar />
      <nav className=" bg-gray-50 border-t-2 border-gray-400 border-opacity-10">
        <ul className="mycontainer  py-4 font-semibold flex justify-around space-x-3">
          <li className=" w-20 text-center">
            <NavLink
              to="edit"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-800 text-white w-full rounded-full py-1 px-6"
                  : "rounded-full hover:text-gray-400 py-1 px-3"
              }
            >
              Edit
            </NavLink>
          </li>
          <li className=" w-20 text-center">
            <NavLink
              to="/admin"
              end
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-800 text-white rounded-full py-1 px-3"
                  : "rounded-full hover:text-gray-400 py-1 px-3"
              }
            >
              ADMIN
            </NavLink>
          </li>
          <li className=" w-20 text-center">
            <NavLink
              to="settings"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-800 text-white rounded-full py-1 px-3"
                  : "rounded-full hover:text-gray-400 py-1 px-3"
              }
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ADMINNavbar;
