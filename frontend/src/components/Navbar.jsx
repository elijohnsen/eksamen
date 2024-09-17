import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isSliderOpen, setSliderOpen] = useState(false);

  const toggleSlider = () => {
    setSliderOpen(!isSliderOpen);
  };

  return (
    <header>
      <nav className="">
        <div className=" mycontainer px-2 py-2 flex justify-between items-center">
          <div className=" w-2/12 ">
            <Link to="/" className="">
              <img
                src="/logo-placeholder.webp"
                alt="icon"
                className="w-16 rounded-lg bg-white hover:bg-blue-400"
              />
            </Link>
          </div>
          <div className=" w-8/12  mx-auto">
            <ul className="hidden font-semibold  md:flex justify-center space-x-2">
              <li className="">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-400 text-white rounded-full py-1 px-3"
                      : "rounded-full hover:text-gray-400 py-1 px-3"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-400 text-white rounded-full py-1 px-3"
                      : "rounded-full hover:text-gray-400 py-1 px-3"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-400 text-white rounded-full py-1 px-3"
                      : "rounded-full hover:text-gray-400 py-1  px-3 "
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/more"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-400 text-white rounded-full py-1 px-3"
                      : "rounded-full hover:text-gray-400 py-1  px-3"
                  }
                >
                  More
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="w-2/12 flex justify-end">
            <button
              role="button"
              className="hover:bg-red-200 p-2 md:hidden bg-gray-500 rounded-lg"
              onClick={toggleSlider}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 fill-current text-white "
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* -- SLIDER-INDHOLD -- */}
      {isSliderOpen && (
        <div className="">
          {/* Overlay - mørk baggrund */}
          <div
            className="fixed inset-0 bg-black opacity-75 z-10"
            onClick={toggleSlider}
          ></div>

          <div className="w-full -mt-20 h-full pt-2 bg-green-700 z-20 font-bold uppercase relative">
            <div className="">
              {/* LUK slider - husk nyt billede*/}
              <div className="w-full flex  justify-end pr-2">
                <button
                  className=" text-white bg-red-800 text-center hover:bg-red-400 h-14 w-14  rounded-lg"
                  onClick={toggleSlider}
                >
                  <p className="text-2xl ">X</p>
                </button>
              </div>
              <ul className="flex py-2 flex-col items-center font-semibold space-y-2">
                <li className="hover:bg-red-800 hover:text-white w-full  flex flex-col items-center">
                  <Link
                    to="/"
                    className="w-full text-center py-4"
                    onClick={toggleSlider}
                  >
                    home
                  </Link>
                </li>
                <li className="hover:bg-red-800 hover:text-white w-full flex flex-col items-center">
                  <Link
                    to="/about"
                    className="w-full text-center py-4"
                    onClick={toggleSlider}
                  >
                    about
                  </Link>
                </li>
                <li className="hover:bg-red-800 hover:text-white w-full flex flex-col items-center">
                  <Link
                    to="/feature"
                    className="w-full text-center py-4"
                    onClick={toggleSlider}
                  >
                    feature
                  </Link>
                </li>
                <li className="hover:bg-red-800 hover:text-white w-full flex flex-col items-center">
                  <Link
                    to="/service"
                    className="w-full text-center py-4"
                    onClick={toggleSlider}
                  >
                    service
                  </Link>
                </li>
                <li className="hover:bg-red-800 hover:text-white w-full flex flex-col items-center">
                  <Link
                    to="/contact"
                    className="w-full text-center py-4"
                    onClick={toggleSlider}
                  >
                    contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
