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
    // img4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  const [amount, setAmount] = useState(1);

  return (
    <>
      <TrackOrder />
      <SearchBar />
      <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center md:mr-16 ml-16 mt-8 mb-8">
        <div className="flex flex-col gap-4 lg:w-2/4">
          <motion.img
            key={activeImg} // This ensures the animation resets when the image changes
            src={activeImg}
            alt="Active product"
            className="w-full h-full aspect-square object-fit rounded-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="flex flex-row justify-between h-24">
            {Object.values(images).map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-24 h-24 rounded-md cursor-pointer object-fit"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveImage(image)}
              />
            ))}
          </div>
        </div>
        {/* ABOUT */}
        <div className="flex flex-col gap-6 lg:w-2/4">
          <div>
            <span className="text-[#193db0] font-semibold">
              Floral Print Skirt
            </span>
            <h1 className="text-3xl font-bold">Rose Skirt</h1>
          </div>
          <p className="text-gray-700">
            Elevate your wardrobe with our charming Floral Print Skirt. Crafted
            from high-quality, breathable fabric, this skirt combines elegance
            with comfort. Its vibrant floral pattern adds a touch of playful
            sophistication, making it perfect for both casual outings and
            special occasions.
          </p>
          <h6 className="text-2xl font-semibold">JD 17.99</h6>
          <div className="flex flex-row items-center gap-12">
            <div className="flex flex-row items-center">
              <button
                className="bg-gray-200 py-2 px-5 rounded-lg text-[#193db0] text-3xl"
                onClick={() => setAmount((prev) => Math.max(prev - 1, 1))}
              >
                -
              </button>
              <span className="py-4 px-6 rounded-lg">{amount}</span>
              <button
                className="bg-gray-200 py-2 px-4 rounded-lg text-[#193db0] text-3xl"
                onClick={() => setAmount((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button className="bg-[#193db0] text-white font-semibold py-3 px-16 rounded-xl h-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <FooterBar />
    </>
  );
};

export default ProductPage;
