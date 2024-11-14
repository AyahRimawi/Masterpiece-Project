// // LuckyWheel.jsx
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { X } from "lucide-react";

// const LuckyWheel = ({ isOpen, onClose, onSpin }) => {
//   const [isSpinning, setIsSpinning] = useState(false);
//   const [rotation, setRotation] = useState(0);
//   const [spinsLeft, setSpinsLeft] = useState(2);
//   const [result, setResult] = useState(null);

//   const prizes = [
//     { text: "Try Again", color: "#FF6B6B", degree: 0 },
//     { text: "3% OFF", color: "#4ECDC4", degree: 90 },
//     { text: "Better Luck", color: "#FF6B6B", degree: 180 },
//     { text: "5% OFF", color: "#45B7D1", degree: 270 },
//   ];

//   const spinWheel = () => {
//     if (isSpinning || spinsLeft <= 0) return;

//     setIsSpinning(true);
//     const randomRotations = Math.floor(Math.random() * 5) + 5;
//     const randomDegree = Math.floor(Math.random() * 360);
//     const totalRotation = randomRotations * 360 + randomDegree;

//     setRotation((prevRotation) => prevRotation + totalRotation);

//     setTimeout(() => {
//       setIsSpinning(false);
//       setSpinsLeft((prev) => prev - 1);

//       const normalizedDegree = randomDegree % 360;
//       let prize;
//       if (normalizedDegree >= 315 || normalizedDegree < 45) prize = "Try Again";
//       else if (normalizedDegree >= 45 && normalizedDegree < 135)
//         prize = "3% OFF";
//       else if (normalizedDegree >= 135 && normalizedDegree < 225)
//         prize = "Better Luck";
//       else prize = "5% OFF";

//       setResult(prize);

//       if (prize === "3% OFF" || prize === "5% OFF") {
//         const discount = prize === "3% OFF" ? 0.03 : 0.05;
//         onSpin(discount);
//       }
//     }, 5000);
//   };

//   if (!isOpen) return null;

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
//     >
//       <motion.div
//         initial={{ scale: 0.8 }}
//         animate={{ scale: 1 }}
//         className="bg-white rounded-xl p-8 max-w-lg w-full mx-4 relative"
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
//         >
//           <X className="w-6 h-6" />
//         </button>

//         <div className="text-center mb-6">
//           <h2 className="text-2xl font-bold text-gray-800">Try Your Luck!</h2>
//           <p className="text-gray-600 mt-2">
//             You have {spinsLeft} {spinsLeft === 1 ? "spin" : "spins"} remaining
//           </p>
//         </div>

//         <div className="relative w-64 h-64 mx-auto">
//           <motion.div
//             style={{
//               rotate: rotation,
//               transition: isSpinning
//                 ? "all 5s cubic-bezier(0.17, 0.67, 0.12, 0.99)"
//                 : "none",
//             }}
//             className="w-full h-full rounded-full relative overflow-hidden border-4 border-gray-200"
//           >
//             {prizes.map((prize, index) => (
//               <div
//                 key={index}
//                 className="absolute w-1/2 h-1/2 origin-bottom-right"
//                 style={{
//                   transform: `rotate(${index * 90}deg)`,
//                   backgroundColor: prize.color,
//                 }}
//               >
//                 <div className="absolute inset-0 flex items-center justify-center transform -rotate-45 text-white font-medium">
//                   {prize.text}
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4">
//             <div className="w-4 h-4 bg-white rotate-45 transform origin-center" />
//           </div>
//         </div>

//         <div className="mt-8 text-center">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={spinWheel}
//             disabled={isSpinning || spinsLeft <= 0}
//             className={`px-6 py-3 rounded-lg font-medium ${
//               isSpinning || spinsLeft <= 0
//                 ? "bg-gray-200 text-gray-500"
//                 : "bg-[#193db0] text-white hover:bg-[#142d80]"
//             } transition-colors`}
//           >
//             {isSpinning ? "Spinning..." : "Spin Now!"}
//           </motion.button>

//           {result && (
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="mt-4 text-lg font-medium text-gray-800"
//             >
//               You got: {result}!
//             </motion.p>
//           )}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default LuckyWheel;



// LuckyWheel.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const LuckyWheel = ({ isOpen, onClose, onSpin, totalAmount }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [spinsLeft, setSpinsLeft] = useState(2);
  const [currentDiscount, setCurrentDiscount] = useState(0);

  useEffect(() => {
    if (totalAmount < 50) {
      onClose();
      onSpin(0); // Reset any existing discount
    }
  }, [totalAmount, onClose, onSpin]);

  const prizes = [
    { text: "Try Again", color: "#FF6B6B", degree: 0 },
    { text: "3% OFF", color: "#4ECDC4", degree: 90 },
    { text: "Better Luck", color: "#FF6B6B", degree: 180 },
    { text: "5% OFF", color: "#45B7D1", degree: 270 },
  ];

  const spinWheel = () => {
    if (isSpinning || spinsLeft <= 0) return;

    setIsSpinning(true);
    const randomRotations = Math.floor(Math.random() * 5) + 5;
    const randomDegree = Math.floor(Math.random() * 360);
    const totalRotation = randomRotations * 360 + randomDegree;

    setRotation((prevRotation) => prevRotation + totalRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setSpinsLeft((prev) => prev - 1);

      const normalizedDegree = randomDegree % 360;
      let discount = 0;

      if (normalizedDegree >= 45 && normalizedDegree < 135) {
        discount = 0.03; // 3% OFF
      } else if (normalizedDegree >= 225 && normalizedDegree < 315) {
        discount = 0.05; // 5% OFF
      }

      // Override any previous discount with the new one
      setCurrentDiscount(discount);
      onSpin(discount);
    }, 5000);
  };

  // Close wheel and reset discount if spins are exhausted
  useEffect(() => {
    if (spinsLeft === 0) {
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  }, [spinsLeft, onClose]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-[9999]"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-xl p-8 max-w-lg w-full mx-4 relative"
      >
        <button
          onClick={() => {
            onClose();
            setSpinsLeft(0); // Forfeit remaining spins when closing manually
          }}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Try Your Luck!</h2>
          <p className="text-gray-600 mt-2">
            You have {spinsLeft} {spinsLeft === 1 ? "spin" : "spins"} remaining
          </p>
        </div>

        <div className="relative w-64 h-64 mx-auto">
          <motion.div
            style={{
              rotate: rotation,
              transition: isSpinning
                ? "all 5s cubic-bezier(0.17, 0.67, 0.12, 0.99)"
                : "none",
            }}
            className="w-full h-full rounded-full relative overflow-hidden border-4 border-gray-200"
          >
            {prizes.map((prize, index) => (
              <div
                key={index}
                className="absolute w-1/2 h-1/2 origin-bottom-right"
                style={{
                  transform: `rotate(${index * 90}deg)`,
                  backgroundColor: prize.color,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center transform -rotate-45 text-white font-medium">
                  {prize.text}
                </div>
              </div>
            ))}
          </motion.div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4">
            <div className="w-4 h-4 bg-white rotate-45 transform origin-center" />
          </div>
        </div>

        <div className="mt-8 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={spinWheel}
            disabled={isSpinning || spinsLeft <= 0}
            className={`px-6 py-3 rounded-lg font-medium ${
              isSpinning || spinsLeft <= 0
                ? "bg-gray-200 text-gray-500"
                : "bg-[#193db0] text-white hover:bg-[#142d80]"
            } transition-colors`}
          >
            {isSpinning ? "Spinning..." : "Spin Now!"}
          </motion.button>

          {currentDiscount > 0 && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-lg font-medium text-gray-800"
            >
              You got: {(currentDiscount * 100)}% OFF!
            </motion.p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LuckyWheel;