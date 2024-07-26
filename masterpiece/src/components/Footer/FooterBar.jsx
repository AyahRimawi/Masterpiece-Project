import React from "react";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import letter from "../../assets/letter.png";

export default function FooterBar() {
  return (
    <footer className="relative bg-white dark:bg-neutral-600 text-center text-neutral-800 dark:text-neutral-200">
      {/* Shadow element */}
      <div className="absolute inset-x-0 top-0 h-2 bg-white dark:bg-neutral-600 shadow-md shadow-neutral-400/40"></div>

      <div className="container pt-9 mx-auto flex flex-col items-center justify-center">
        {/* Icons section */}
        <div className="mb-9 flex justify-center gap-14 md:gap-20">
          <a className="text-neutral-800 dark:text-neutral-200" href="#">
            <img
              src={facebook}
              className="w-7 h-7 md:w-12 md:h-12"
              alt="Facebook"
              loading="lazy"
            />
          </a>
          <a className="text-neutral-800 dark:text-neutral-200" href="#">
            <img
              src={instagram}
              className="w-7 h-7 md:w-12 md:h-12"
              alt="Instagram"
              loading="lazy"
            />
          </a>
          <a className="text-neutral-800 dark:text-neutral-200" href="#">
            <img
              src={letter}
              className="w-7 h-7 md:w-12 md:h-12"
              alt="Letter"
              loading="lazy"
            />
          </a>
        </div>
      </div>

      {/* Copyright section */}
      <div className="bg-white dark:bg-neutral-700 md:p-2 mb-4 text-center md:text-xl text-[#193DB0] dark:text-neutral-200">
        © COPYRIGHT 2024 Shein JO: - ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}
