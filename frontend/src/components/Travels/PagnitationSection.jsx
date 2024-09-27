import React from "react";

const PagnitationSection = () => {
  return (
    <div className="flex">
      <div className="mx-auto flex space-x-3 py-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full  shadow-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
          </svg>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full border shadow-inner">
          1
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full border shadow-inner">
          2
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full border shadow-inner">
          3
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full border shadow-inner">
          4
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full border shadow-inner">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PagnitationSection;
