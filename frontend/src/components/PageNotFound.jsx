import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
      <div className="text-center mx-auto">
        <div className="flex justify-center mb-4">
          <img src="/sadface.svg" alt="Sad-Smiley-Face" className="" />
        </div>
        <h1 className="text-8xl font-extrabold mb-4">OOH NOO!</h1>
        <p className="text-2xl font-semibold mb-4">Page Not Found</p>
        <p className="mb-6 text-lg">
          Sorry, the page you are looking for could not be found :(
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
