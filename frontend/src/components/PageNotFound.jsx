import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section>
      <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
        <div className="mx-auto text-center">
          <div className="mb-4 flex justify-center">
            <img src="/sadface.svg" alt="Sad-Smiley-Face" className="" />
          </div>
          <h1 className="mb-4 text-6xl font-extrabold">ÅH NEJ!</h1>
          <p className="mb-4 text-2xl font-semibold">Siden blev ikke fundet</p>
          <p className="mb-14 text-lg">
            Undskyld! Vi kunne ikke finde siden, du ledte efter :(
          </p>
          <Link
            to="/"
            className="bb rounded-lg bg-green-400 px-8 py-3 font-bold text-purple-500 transition duration-300 hover:bg-purple-100"
          >
            Tilbage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
