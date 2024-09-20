import React from "react";
import { Link } from "react-router-dom";

const AdminFront = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <div className="space-y-10">
        <div className="mx-auto rounded-lg bg-gray-800 bg-opacity-75 px-10 py-8 text-center shadow-lg md:p-14">
          <div className="mb-6 flex justify-center">
            <img
              src="/wave.svg"
              alt="Waving-Hand-illustration"
              className="h-24 w-24"
            />
          </div>
          <h1 className="mb-4 text-6xl font-bold">Welcome Admin!</h1>
          <p className="text-xl">You are now logged in!.</p>
        </div>
        <section className="flex items-center justify-between px-6 text-center">
          <Link
            to="edit"
            className="hover:scale-102 flex h-40 w-5/12 transform items-center justify-center rounded-lg border border-red-600 bg-gradient-to-r from-red-400 to-red-600 text-white shadow-md transition-transform duration-200 hover:shadow-lg"
          >
            <h3 className="text-2xl font-semibold">gå til edit</h3>
          </Link>
          <Link
            to="settings"
            className="hover:scale-102 flex h-40 w-5/12 transform items-center justify-center rounded-lg border border-red-600 bg-gradient-to-r from-red-400 to-red-600 text-white shadow-md transition-transform duration-200 hover:shadow-lg"
          >
            <h3 className="text-2xl font-semibold">gå til settings</h3>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AdminFront;
