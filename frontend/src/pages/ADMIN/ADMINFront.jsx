import React from "react";
import { Link } from "react-router-dom";

const AdminFront = () => {
  return (
    <section className="">
      <div className="mycontainer space-y-8 py-20">
        {/* VELKOMSTBESKED */}
        <div className="py-6 text-center text-white">
          <div className="mb-6 flex justify-center">
            <img
              src="/wave.svg"
              alt="Waving-Hand-illustration"
              className="w-16"
            />
          </div>
          <div className="space-y-5">
            <h1 className="text-2xl font-bold leading-snug">
              Hejsa, Rumkaptajn!
            </h1>
            <p className="text-xl">
              Nu er du logget ind. <br /> Herfra kan du ændre sidernes indhold:
            </p>
          </div>
        </div>
        {/* MENU til redigeringssiderne */}
        <article className="flex flex-col items-center justify-between space-y-4 px-6 text-center md:flex-row md:space-x-10 md:space-y-0">
          <Link
            to="rumfaergen"
            className="flex h-20 w-full items-center justify-center rounded-lg border border-red-600 bg-gradient-to-r from-red-400 to-red-600 text-white shadow-md transition-transform duration-200 hover:to-red-950 hover:shadow-lg md:w-1/3"
          >
            <h3 className="text-2xl font-semibold">Rumfærgen</h3>
          </Link>
          <Link
            to="ture"
            className="flex h-20 w-full items-center justify-center rounded-lg border border-red-600 bg-gradient-to-r from-red-400 to-red-600 text-white shadow-md transition-transform duration-200 hover:from-red-600 hover:shadow-lg md:w-1/3"
          >
            <h3 className="text-2xl font-semibold">Ture</h3>
          </Link>
          <Link
            to="kontakt"
            className="flex h-20 w-full items-center justify-center rounded-lg border border-red-600 bg-gradient-to-r from-red-400 to-red-600 text-white shadow-md transition-transform duration-200 hover:to-red-950  hover:shadow-lg md:w-1/3"
          >
            <h3 className="text-2xl font-semibold">Kontakt</h3>
          </Link>
        </article>
      </div>
    </section>
  );
};

export default AdminFront;
