import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import SomeMenuNavTop from "./SomeLogos/SomeMenuNavTop";
import SomeMenuSlider from "./SomeLogos/SomeMenuSlider";
import { LoginContext } from "../../../context/LoginContext";

const NavbarTop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Get signOut and user from the LoginContext
  const { signOut, user } = useContext(LoginContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      setIsDropdownOpen(false);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    if (isOpen) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <header className="shadow-md shadow-slate-100">
      <nav className="bg-white">
        <div className="mycontainer md:py-3 flex">
          {/* BURGERMENU - i lille skærm */}
          <div>
            <button
              role="button"
              className="p-4 md:hidden"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex flex-grow items-center justify-between bg-white">
           
            <Link to={user ? "/admin" : "/"} className="">
              <img src="/logo.png" alt="icon" className="w-56 rounded-lg" />
            </Link>

            {/* Logout button - only visible if a user is logged in */}
            {user && (
              <div className="pr-5 md:pr-20">
                <button
                  className="whitespace-nowrap bg-red-600 px-6 py-2 text-white hover:bg-red-400"
                  onClick={signOut}
                >
                  Log ud
                </button>
              </div>
            )}
          </div>

          {/* Some Menu (visible from medium screens) */}
          <div className="hidden justify-end md:flex xl:hidden">
            <aside className="flex">
              <SomeMenuNavTop />
            </aside>
          </div>
        </div>
      </nav>

      {/* Slide-in Menu */}
      <div
        className={`top-19 fixed left-0 h-full w-3/4 transform bg-white text-black shadow-lg shadow-gray-400 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-10`}
      >
        {/* Menu Content */}
        <nav className="border-r-2 border-t-2">
          <aside className="mx-auto border-b-2 py-6">
            <SomeMenuSlider />
          </aside>
          <ul className="font-bold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-4 py-6 text-xl capitalize ${
                    isActive
                      ? "bg-primarycolor text-white"
                      : "hover:text-gray-400"
                  }`
                }
                onClick={closeMenu}
              >
                hjem
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/rumfaergen"
                className={({ isActive }) =>
                  `block px-4 py-6 text-xl capitalize ${
                    isActive
                      ? "bg-primarycolor text-white"
                      : "hover:text-gray-400"
                  }`
                }
                onClick={closeMenu}
              >
                rumfærgen
              </NavLink>
            </li>

            {/* Dropdown for Ture */}
            <li className="">
              <button
                onClick={toggleDropdown}
                className={`block w-full p-4 py-6 text-left text-xl capitalize ${
                  isDropdownOpen
                    ? "bg-primarycolor text-white"
                    : "hover:text-gray-400"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="">ture</div>
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="16"
                      className={`${isDropdownOpen ? "fill-white" : ""} `}
                    >
                      <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                    </svg>
                  </div>
                </div>
              </button>
              {isDropdownOpen && (
                <ul className="w-full capitalize">
                  <li>
                    <Link
                      to="/ture/maanen"
                      className="block py-6 pl-16 text-lg hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      månen
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ture/mars"
                      className="block py-6 pl-16 text-lg hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      mars
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink
                to="/galleri"
                className={({ isActive }) =>
                  `block px-4 py-6 text-xl capitalize ${
                    isActive
                      ? "bg-primarycolor text-white"
                      : "hover:text-gray-400"
                  }`
                }
                onClick={closeMenu}
              >
                galleri
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/sikkerhed"
                className={({ isActive }) =>
                  `block px-4 py-6 text-xl capitalize ${
                    isActive
                      ? "bg-primarycolor text-white"
                      : "hover:text-gray-400"
                  }`
                }
                onClick={closeMenu}
              >
                sikkerhed
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/kontakt"
                className={({ isActive }) =>
                  `block px-4 py-6 text-xl capitalize ${
                    isActive
                      ? "bg-primarycolor text-white"
                      : "hover:text-gray-400"
                  }`
                }
                onClick={closeMenu}
              >
                kontakt
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavbarTop;
