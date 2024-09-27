import React from "react";

const Lightbox = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative">
        <img src={image} alt="Lightbox" className="w-[50em]" />
        <button
          onClick={onClose}
          className="absolute right-2 top-2 rounded bg-red-600 p-2 w-10 hover:bg-red-800 text-white"
        >
         X
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
