import React, { useState } from "react";
import { motion } from "framer-motion";
import TrackOrder from "../components/Navbar/TrackOrder";
import SearchBar from "../components/Navbar/SearchBar";
import FooterBar from "../components/Footer/FooterBar";

const ProductPage = () => {
  const [images, setImages] = useState({
    img1: "https://i.imgur.com/6xGVorA_d.webp?maxwidth=760&fidelity=grand",
    img2: "https://i.imgur.com/0qaR8Fj_d.webp?maxwidth=760&fidelity=grand",
    img3: "https://i.imgur.com/ZkZmF2C_d.webp?maxwidth=760&fidelity=grand",
  });

  const [activeImg, setActiveImage] = useState(images.img1);
  const [amount, setAmount] = useState(1);

  return (
    <div className="bg-gray-100 min-h-screen">
      <TrackOrder />
      <SearchBar />
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-1/2 p-8">
              <motion.img
                key={activeImg}
                src={activeImg}
                alt="Active product"
                className="w-full h-96 object-fit rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
              <div className="mt-4 flex justify-center space-x-4">
                {Object.values(images).map((image, index) => (
                  <motion.img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-20 h-20 rounded-md cursor-pointer object-fit ${
                      activeImg === image ? "ring-2 ring-[#193db0]" : ""
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveImage(image)}
                  />
                ))}
              </div>
            </div>

            {/* Product Details Section */}
            <div className="md:w-1/2 p-8">
              <div className="mb-4">
                <span className="text-[#193db0] font-semibold text-sm uppercase tracking-wide">
                  Floral Print Skirt
                </span>
                <h1 className="text-4xl font-bold mt-2 text-gray-800">
                  Rose Skirt
                </h1>
              </div>
              <p className="text-gray-600 mb-6">
                Elevate your wardrobe with our charming Floral Print Skirt.
                Crafted from high-quality, breathable fabric, this skirt
                combines elegance with comfort. Its vibrant floral pattern adds
                a touch of playful sophistication, making it perfect for both
                casual outings and special occasions.
              </p>
              <div className="flex items-center mb-6">
                <span className="text-3xl font-bold text-gray-800">
                  JD 17.99
                </span>
                <span className="ml-2 text-sm text-green-500 font-semibold">
                  20% OFF
                </span>
              </div>
              <div className="flex items-center mb-6">
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button
                    className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                    onClick={() => setAmount((prev) => Math.max(prev - 1, 1))}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x">{amount}</span>
                  <button
                    className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                    onClick={() => setAmount((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button className="w-full bg-[#193db0] text-white font-semibold py-3 rounded-lg hover:bg-[#142d80] transition-colors">
                Add to Cart
              </button>
              <div className="mt-6 text-sm text-gray-500">
                <p>Free shipping on orders over JD 50</p>
                <p>30-day easy returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBar />
    </div>
  );
};

export default ProductPage;
