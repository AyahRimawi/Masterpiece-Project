// import dressSection from "../../assets/dressSection.png";

// export function Dress() {
//   return (
//     <>
//       <div className="bg-gradient-to-b from-[#faf9fce5] via-[#99939b] to-[#312f3008]">
//         <div className="flex flex-col items-center justify-between ml-8 mr-12 mt-16 md:flex-row md:w-auto dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//           <div className="flex flex-col justify-between p-4 leading-normal w-auto mx-auto ">
//             <h3 className="mb-2 text-4xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
//               Dresses
//             </h3>
//             <button className="flex-1 w-32 mt-14 mx-auto duration-300 bg-[rgba(0,0,0)] border border-white text-white font-bold py-1 px-2 rounded hover:bg-white hover:text-black">
//               Shop Now
//             </button>
//           </div>
//           <div>
//             <img
//               className="object-fit w-full p-8 h-[400px] md:h-[400px] md:w-[700px]"
//               src={dressSection}
//               alt="Noteworthy technology acquisitions 2021"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useState, useEffect } from "react";
import dressSection from "../../assets/dressSection.png";

export function Dress() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText =
    "Elegance is not about being noticed, it's about being remembered.";

  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 3000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (text.length > 0) {
        const timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(true);
      }
    }
  }, [text, isTyping]);

  return (
    <div className="bg-gradient-to-b from-[#faf9fce5] via-[#99939b] to-[#312f3008]">
      <div className="flex flex-col items-center justify-between ml-8 mr-12 mt-16 md:flex-row md:w-auto dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal w-auto mx-auto">
          <h3 className="mb-2 text-4xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
            Dresses
          </h3>

          {/* Animated Text */}
          <div className="min-h-[60px] text-center my-4">
            <p className="text-lg text-gray-700 italic">
              {text}
              <span className="animate-blink ml-1">|</span>
            </p>
          </div>

          {/* Enhanced Button */}
          <button
            className="flex-1 w-32 mt-8 mx-auto duration-300 
            bg-[rgba(0,0,0)] border border-white text-white font-bold 
            py-1 px-2 rounded hover:bg-white hover:text-black
            relative overflow-hidden group"
          >
            <span className="relative z-10">Shop Now</span>
            <div
              className="absolute inset-0 w-0 bg-white transition-all duration-[400ms]
              group-hover:w-full"
            />
          </button>
        </div>

        <div>
          <img
            className="object-fit w-full p-8 h-[400px] md:h-[400px] md:w-[700px]"
            src={dressSection}
            alt="Noteworthy technology acquisitions 2021"
          />
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );
}
