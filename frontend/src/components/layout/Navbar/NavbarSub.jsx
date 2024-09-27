import React, { useState } from "react";
import SomeMenuNavSub from "./SomeLogos/SomeMenuNavSub";
import { NavLink } from "react-router-dom";

const NavbarSub = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownTimer, setDropdownTimer] = useState(null);

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimer);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setDropdownOpen(false);
    }, 500);
    setDropdownTimer(timer);
  };

  return (
    <div>
      {/* SUB Nav */}
      <nav className="w-full bg-primarydark">
        <div className="mycontainer hidden justify-between text-white md:flex">
          <div className="py-4">
            <ul className="space-x-2 xl:space-x-3 2xl:space-x-8 2xl:text-lg">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `rounded-b-sm px-6 py-4 lg:px-8 ${
                    isActive
                      ? "border-t-4 border-t-primarycolor bg-menuactivecolor text-white"
                      : "hover:text-gray-400"
                  }`
                }
              >
                Hjem
              </NavLink>
              <NavLink
                to="/rumfaergen"
                className={({ isActive }) =>
                  `rounded-b-sm px-4 py-4 ${
                    isActive
                      ? "border-t-4 border-t-primarycolor bg-menuactivecolor text-white"
                      : "hover:text-gray-400"
                  }`
                }
              >
                Rumfærgen
              </NavLink>
              <div
                className="relative inline-block"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  to="/ture"
                  className={({ isActive }) =>
                    `rounded-b-sm px-4 py-4 ${
                      isActive
                        ? "border-t-4 border-t-primarycolor bg-menuactivecolor text-white"
                        : "hover:text-gray-400"
                    }`
                  }
                >
                  Ture
                </NavLink>
                {isDropdownOpen && (
                  <div className="absolute left-0 top-8 z-10 mt-2 w-48 bg-white shadow-lg">
                    <ul className="py-2">
                      <li>
                        <NavLink
                          to="/ture/månen"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                          Månen
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/ture/mars"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                          Mars
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <NavLink
                to="/galleri"
                className={({ isActive }) =>
                  `rounded-b-sm px-4 py-4 ${
                    isActive
                      ? "border-t-4 border-t-primarycolor bg-menuactivecolor text-white"
                      : "hover:text-gray-400"
                  }`
                }
              >
                Galleri
              </NavLink>
              <NavLink
                to="/sikkerhed"
                className={({ isActive }) =>
                  `rounded-b-sm px-4 py-4 ${
                    isActive
                      ? "border-t-4 border-t-primarycolor bg-menuactivecolor text-white"
                      : "hover:text-gray-400"
                  }`
                }
              >
                Sikkerhed
              </NavLink>
              <NavLink
                to="/kontakt"
                className={({ isActive }) =>
                  `rounded-b-sm px-4 py-4 ${
                    isActive
                      ? "border-t-4 border-t-primarycolor bg-menuactivecolor text-white"
                      : "hover:text-gray-400"
                  }`
                }
              >
                Kontakt
              </NavLink>
            </ul>
          </div>
          {/* SUBNAV - SOME logo menu - visible from xl  */}
          <div className="hidden px-3 xl:flex">
            <SomeMenuNavSub />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarSub;
