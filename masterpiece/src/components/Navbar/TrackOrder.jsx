import React from "react";
import tracking from "../../assets/tracking.png"; 


const TrackOrder = () => {

  return (
    <>
      <nav className="relative flex w-full flex-wrap items-center justify-between bg-[rgba(217,217,217,0.34)] py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-2 mb-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div>
            <a className="mx-2 my-1 flex items-center lg:mb-0 lg:mt-0" href="#">
              <img
                className="me-2"
                src={tracking}
                style={{ height: "30px" }}
                alt="TE Logo"
                loading="lazy"
              />

              <span className="text-[#A3A7AB] font-cursive mt-2 items-center dark:text-white">
                Track Order
              </span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default TrackOrder;
