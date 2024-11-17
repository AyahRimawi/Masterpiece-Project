import React from "react";

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>
        <img
          src={imageUrl}
          alt="Product"
          className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

export default ImageModal;
