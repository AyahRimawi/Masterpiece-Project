import React, { useState } from "react";
import Lottie from "react-lottie-player";
import messageAnimation from "../../json/messageAnimation.json";
import groupChatAnimation from "../../json/groupChatAnimation.json";
import phoneAnimation from "../../json/phoneAnimation.json";
import ContactForm from "./ContactForm";
import AboutUs from "./AboutUs";
import CallCenter from "./CallCenter";


export function Payment() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
const [isCallCenterOpen, setIsCallCenterOpen] = useState(false);

  const cards = [
    {
      title: "Contact Us",
      animation: messageAnimation,
      gradient: "from-gray-100 via-gray-50 to-white",
      onClick: () => setIsContactOpen(true),
    },
    {
      title: "About Us",
      animation: groupChatAnimation,
      gradient: "from-gray-100 via-gray-50 to-white",
      onClick: () => setIsAboutOpen(true), // إضافة onClick للـ About Us
    },
    {
      title: "Call Center",
      animation: phoneAnimation,
      gradient: "from-gray-100 via-gray-50 to-white",
      onClick: () => setIsCallCenterOpen(true), // يمكنك إضافة وظيفة أخرى هنا
    },
  ];

  const Card = ({ title, animation, gradient, onClick }) => (
    <div
      className="relative transform transition-all duration-500 hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      {/* Card Container */}
      <div
        className={`
          relative flex flex-col items-center justify-center
          h-[220px] w-[280px] md:w-[260px] lg:w-[280px]
          rounded-xl
          bg-gradient-to-br ${gradient}
          border-2 border-black
          shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
          hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
          transition-all duration-300
          overflow-hidden
          group
        `}
      >
        {/* Animation Container */}
        <div className="relative w-24 h-24 mb-3 transform transition-transform duration-500 group-hover:scale-110">
          <Lottie
            animationData={animation}
            play
            loop
            className="w-full h-full"
          />
        </div>

        {/* Title with Shine Effect */}
        <h2
          className="relative text-2xl font-bold text-black 
          transition-all duration-300
          group-hover:text-transparent group-hover:bg-clip-text
          group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-gray-600
          after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px]
          after:bg-black after:transform after:scale-x-0
          after:transition-transform after:duration-300
          group-hover:after:scale-x-100"
        >
          {title}
        </h2>

        {/* Shine Animation */}
        <div
          className="absolute top-0 -inset-full h-full w-1/2
          transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent
          opacity-0 group-hover:opacity-100 group-hover:animate-[shine_1s_ease-in-out_infinite]"
        />
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-[350px] bg-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {cards.map((card, index) => (
            <div key={index} className="w-full flex justify-center">
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      <ContactForm isOpen={isContactOpen} setIsOpen={setIsContactOpen} />
      <AboutUs isOpen={isAboutOpen} setIsOpen={setIsAboutOpen} />
      <CallCenter isOpen={isCallCenterOpen} setIsOpen={setIsCallCenterOpen} />

      <style>{`
        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 200%;
          }
        }
      `}</style>
    </div>
  );
}
