import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-200">
      <div className="mycontainer pb-4">
        <nav className="flex md:items-center lg:items-start lg:justify-between lg:space-x-16 xl:space-x-36">
          <div className="w-1/2 lg:flex md:w-8/12 lg:w-6/12 justify-between whitespace-nowrap">
            <ul className="space-y-3 pb-4">
              <h3 className="font-bold">Services</h3>
              <li>
                <Link to="group" className="group">
                  <span className="group-hover:text-white">
                    email marketing
                  </span>
                </Link>
              </li>
              <li>
                <Link to="" className="group">
                  <span className="group-hover:text-white">campaigns</span>
                </Link>
              </li>
              <li>
                <Link to="" className="group">
                  <span className="group-hover:text-white">branding</span>
                </Link>
              </li>
              <li>
                <Link to="" className="group">
                  <span className="group-hover:text-white">offline</span>
                </Link>
              </li>
            </ul>

            <ul className="space-y-3">
              <h3 className="font-bold">Services</h3>
              <li>
                <Link to="group" className="group">
                  <span className="group-hover:text-white">
                    email marketing
                  </span>
                </Link>
              </li>
              <li>
                <Link to="" className="group">
                  <span className="group-hover:text-white">campaigns</span>
                </Link>
              </li>
              <li>
                <Link to="" className="group">
                  <span className="group-hover:text-white">branding</span>
                </Link>
              </li>
              <li>
                <Link to="" className="group">
                  <span className="group-hover:text-white">offline</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-1/2 md:flex justify-evenly lg:justify-between md:w-10/12 lg:w-6/12 whitespace-nowrap">
            <div className="space-y-1 pb-4 md:pb-0">
              <img
                src="/logo-placeholder.webp"
                alt="Company Logo"
                className="w-1/2 lg:w-4/6 xl:w-5/12"
              />
            </div>

            <ul className="space-y-3">
              <h3 className="font-bold">Services</h3>
              <li>
                <Link to="group" className="group">
                  <span className="group-hover:text-white">
                    email marketing
                  </span>
                </Link>
              </li>
              <li>
                <Link to="" className="group">
                  <span className="group-hover:text-white">campaigns</span>
                </Link>
              </li>
              <li>
                <Link to="" className="group">
                  <span className="group-hover:text-white">branding</span>
                </Link>
              </li>
              <li>
                <Link to="" className="group">
                  <span className="group-hover:text-white">offline</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
