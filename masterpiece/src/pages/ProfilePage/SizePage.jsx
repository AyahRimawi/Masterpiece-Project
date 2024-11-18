import React, { useState } from "react";

const SizePage = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [weightStatus, setWeightStatus] = useState("");
  const [size, setSize] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setWeightStatus("Underweight");
        setSize("Small (S)");
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setWeightStatus("Normal weight");
        setSize("Medium (M)");
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setWeightStatus("Overweight");
        setSize("Large (L)");
      } else {
        setWeightStatus("Obese");
        setSize("X-Large (XL)");
      }
    }
  };

  return (
    <div className="bg-white mt-24 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-md w-full">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-transparent bg-clip-text bg-[#000] mb-6">
          My Size
        </h2>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="weight"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Weight (kg)
            </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-[#30313374] transition duration-200"
              placeholder="Enter your weight"
            />
          </div>
          <div>
            <label
              htmlFor="height"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Height (cm)
            </label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-[#000] transition duration-200"
              placeholder="Enter your height"
            />
          </div>
          <button
            onClick={calculateBMI}
            className="w-full bg-[#000] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#000] transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50"
          >
            Calculate
          </button>
        </div>
        {bmi && (
          <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-inner">
            <h3 className="text-lg sm:text-xl font-bold text-[#000] mb-3">
              Results
            </h3>
            <div className="space-y-2">
              <p className="text-gray-700">
                BMI: <span className="font-semibold text-[#000]">{bmi}</span>
              </p>
              <p className="text-gray-700">
                Weight Status:{" "}
                <span className="font-semibold text-[#000]">
                  {weightStatus}
                </span>
              </p>
              <p className="text-gray-700">
                Recommended Size:{" "}
                <span className="font-semibold text-[#000]">{size}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SizePage;
