import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const Navbar = () => {
  const [isSliderOpen, setSliderOpen] = useState(false);
  const { signOut, user } = useContext(LoginContext);

  const toggleSlider = () => {
    setSliderOpen(!isSliderOpen);
  };

  const handleLogout = () => {
    signOut();
  };

  const logoLink = user ? "/admin" : "/";

  return (
    <header>
      <nav>
        <div className="mycontainer flex items-center justify-between px-2 py-2">
          {/* DEL 1/3: Logo */}
          <div className="w-2/12">
            <Link to={logoLink}>
              <img
                src="/logo-placeholder.webp"
                alt="icon"
                className="w-16 rounded-lg bg-white transition duration-300 hover:bg-blue-400"
              />
            </Link>
          </div>

          {/* DEL 2/3: Navigationslinks og Logout Knappen */}
          <div className="mx-auto w-8/12">
            <div className="mx-auto w-1/3 md:hidden">
              {user && (
                <button
                  onClick={() => {
                    handleLogout();
                  }}
                  className="w-full rounded bg-red-500 py-3 text-center text-white transition duration-300 hover:bg-red-800"
                >
                  Logout
                </button>
              )}
            </div>
            <ul className="hidden justify-center space-x-2 font-semibold md:flex">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-full bg-blue-400 px-3 py-1 text-white"
                      : "rounded-full px-3 py-1 hover:text-gray-400"
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
                      ? "rounded-full bg-blue-400 px-3 py-1 text-white"
                      : "rounded-full px-3 py-1 hover:text-gray-400"
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
                      ? "rounded-full bg-blue-400 px-3 py-1 text-white"
                      : "rounded-full px-3 py-1 hover:text-gray-400"
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
                      ? "rounded-full bg-blue-400 px-3 py-1 text-white"
                      : "rounded-full px-3 py-1 hover:text-gray-400"
                  }
                >
                  More
                </NavLink>
              </li>
              {/* Logout Knappen - kun synlig på små skærme og hvis logget ind */}
              {user && (
                <li className="md:hidden">
                  <button
                    onClick={handleLogout}
                    className="rounded-full bg-red-500 px-3 py-1 text-white hover:bg-red-700"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* DEL 3/3: Slider Knappen */}
          <div className="flex w-2/12 justify-end">
            <div className="mx-auto hidden w-40 md:flex">
              {user && (
                <button
                  onClick={handleLogout}
                  className="w-full rounded bg-red-500 py-3 text-center text-white transition duration-300 hover:bg-red-800"
                >
                  Logout
                </button>
              )}
            </div>
            <button
              role="button"
              className="rounded-lg bg-gray-500 p-2 transition duration-300 hover:bg-red-200 md:hidden"
              onClick={toggleSlider}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 fill-current text-white"
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* Slider */}
      {isSliderOpen && (
        <div className="relative">
          {/* Slider-Overlay */}
          <div
            className="fixed inset-0 z-10 bg-black opacity-75"
            onClick={toggleSlider}
          ></div>

          <div className="absolute -top-20 left-0 z-20 h-auto w-full bg-green-700 font-bold uppercase">
            <div>
              {/* Luk Slider Knappen */}
              <div className="flex w-full justify-end pr-3 pt-3">
                <button
                  className="h-14 w-14 rounded-lg bg-red-800 text-center text-white transition duration-300 hover:bg-red-400"
                  onClick={toggleSlider}
                >
                  <p className="text-2xl">X</p>
                </button>
              </div>
              <ul className="flex flex-col items-center space-y-2 py-2 font-semibold">
                <li className="flex w-full flex-col items-center transition duration-150 hover:bg-red-800 hover:text-white">
                  <Link
                    to="/"
                    className="w-full py-4 text-center"
                    onClick={toggleSlider}
                  >
                    Home
                  </Link>
                </li>
                <li className="flex w-full flex-col items-center transition duration-150 hover:bg-red-800 hover:text-white">
                  <Link
                    to="/about"
                    className="w-full py-4 text-center"
                    onClick={toggleSlider}
                  >
                    About
                  </Link>
                </li>
                <li className="flex w-full flex-col items-center transition duration-150 hover:bg-red-800 hover:text-white">
                  <Link
                    to="/feature"
                    className="w-full py-4 text-center"
                    onClick={toggleSlider}
                  >
                    Feature
                  </Link>
                </li>
                <li className="flex w-full flex-col items-center transition duration-150 hover:bg-red-800 hover:text-white">
                  <Link
                    to="/service"
                    className="w-full py-4 text-center"
                    onClick={toggleSlider}
                  >
                    Service
                  </Link>
                </li>
                <li className="flex w-full flex-col items-center transition duration-150 hover:bg-red-800 hover:text-white q q">
                  <Link
                    to="/contact"
                    className="w-full py-4 text-center"
                    onClick={toggleSlider}
                  >
                    Contact
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
