import React, { useState } from "react";

import { Link } from "react-router-dom";
import KontaktDelete from "./ADMIN-Contact/KontaktDelete";
import ContactMenu from "./ADMIN-Contact/ContactMenu";

const AdminContact = () => {
  {
    /* HER kan ændres hvilken en af de to sider, der først vises = false/true */
  }
  const [showEditDelete, setShowEditDelete] = useState(false);

  return (
    <article className=" ">
      <div className="bg-blue-100">
        <div className="mycontainer flex justify-between space-y-1 px-5 py-3">
          <div className="w-10">
            <Link to="/admin">
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
            <h1 className="text-center text-3xl text-gray-800">Contact ADMIN</h1>
            <div className="flex justify-center space-x-5">
              <button
                className={`rounded-lg px-4 py-2 font-semibold text-white transition duration-300 ${!showEditDelete ? "bg-primarycolor" : "bg-gray-300 text-gray-800 hover:bg-gray-400"}`}
                onClick={() => setShowEditDelete(false)}
              >
                Opret
              </button>
              <button
                className={`rounded-lg px-4 py-2 font-semibold text-white transition duration-300 ${showEditDelete ? "bg-primarycolor" : "bg-gray-300 text-gray-800 hover:bg-gray-400"}`}
                onClick={() => setShowEditDelete(true)}
              >
                Rediger
              </button>
            </div>
          </div>
          <div className="w-10"></div>
        </div>
      </div>
      <div className="">
        {showEditDelete ? <KontaktDelete /> : <ContactMenu />}
      </div>
    </article>
  );
};

export default AdminContact;
