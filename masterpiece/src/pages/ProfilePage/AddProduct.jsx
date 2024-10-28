import React, { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import axios from "axios";

const AddProduct = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    subCategory: "",
    variants: [
      {
        shein_code: "",
        color: "",
        size: [],
        price: "",
        quantity: "",
        overviewPicture: "",
        images: [],
      },
    ],
  });

  // تعريف التصنيفات
  const categories = {
    Women: ["Pants", "Dress", "Shirt", "Skirt", "Pajamas"],
    Men: ["Pants", "Shirt", "Suit", "Pajamas"],
    Kids: ["Boy", "Girl", "Baby"],
    Dresses: ["Evening Dresses", "Hijab Dresses"],
  };

  const availableColors = [
    "Black",
    "White",
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Purple",
    "Pink",
    "Gray",
    "Brown",
    "Navy",
    "Beige",
  ];

  const availableSizes = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];

  // Welcoming messages for the animation
  const welcomeMessages = [
    "Welcome to SecondChance",
    "Give Your Clothes a New Life",
    "Join Our Sustainable Fashion Movement",
    "Transform Unwanted Items into Opportunities",
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const handleInputChange = (e, variantIndex = 0) => {
    const { name, value } = e.target;
    if (name.includes("variant.")) {
      const fieldName = name.split(".")[1];
      const newVariants = [...formData.variants];
      newVariants[variantIndex] = {
        ...newVariants[variantIndex],
        [fieldName]: value,
      };
      setFormData({ ...formData, variants: newVariants });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSizeChange = (size, variantIndex = 0) => {
    const newVariants = [...formData.variants];
    const currentSizes = newVariants[variantIndex].size;

    if (currentSizes.includes(size)) {
      newVariants[variantIndex].size = currentSizes.filter((s) => s !== size);
    } else {
      newVariants[variantIndex].size = [...currentSizes, size];
    }

    setFormData({ ...formData, variants: newVariants });
  };

  const handleImagesChange = (e, variantIndex = 0, isOverview = false) => {
    const files = isOverview ? [e.target.files[0]] : Array.from(e.target.files);

    if (files.length > 0) {
      const newVariants = [...formData.variants];

      files.forEach((file) => {
        const imageUrl = URL.createObjectURL(file);
        if (isOverview) {
          newVariants[variantIndex].overviewPicture = imageUrl;
        } else {
          newVariants[variantIndex].images = [
            ...newVariants[variantIndex].images,
            imageUrl,
          ];
        }
      });

      setFormData({ ...formData, variants: newVariants });
    }
  };

  const submitProduct = async () => {
    try {
      Swal.fire({
        title: "Submitting Product",
        html: `
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 border-t-4 border-b-4 border-[#193db0] rounded-full animate-spin"></div>
            <p class="mt-4 text-gray-600">Your product is being submitted for approval...</p>
          </div>
        `,
        showConfirmButton: false,
        allowOutsideClick: false,
      });

      const response = await axios.post("/api/product/addProduct", formData);

      if (response.data.success) {
        Swal.fire({
          icon: "success",
          title: "Product Submitted!",
          text: "Your product is now waiting for admin approval.",
          confirmButtonColor: "#193db0",
        });
        setStep(1);
        setFormData({
          name: "",
          description: "",
          category: "",
          subCategory: "",
          variants: [
            {
              shein_code: "",
              color: "",
              size: [],
              price: "",
              quantity: "",
              overviewPicture: "",
              images: [],
            },
          ],
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: error.response?.data?.message || "Something went wrong",
        confirmButtonColor: "#193db0",
      });
    }
  };

  const renderProductForm = () => (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-4">
        {/* Product Basic Info */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#193db0] focus:border-[#193db0]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#193db0] focus:border-[#193db0]"
            required
          />
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#193db0] focus:border-[#193db0]"
              required
            >
              <option value="">Select Category</option>
              {Object.keys(categories).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subcategory
            </label>
            <select
              name="subCategory"
              value={formData.subCategory}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#193db0] focus:border-[#193db0]"
              required
              disabled={!formData.category}
            >
              <option value="">Select Subcategory</option>
              {formData.category &&
                categories[formData.category].map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* Variants */}
        {formData.variants.map((variant, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 space-y-4"
          >
            <h3 className="text-lg font-medium text-[#193db0]">
              Variant Details
            </h3>

            {/* SHEIN Code */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                SHEIN Code (Optional)
              </label>
              <input
                type="text"
                name={`variant.shein_code`}
                value={variant.shein_code}
                onChange={(e) => handleInputChange(e, index)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#193db0] focus:border-[#193db0]"
              />
            </div>

            {/* Color */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Color
              </label>
              <select
                name={`variant.color`}
                value={variant.color}
                onChange={(e) => handleInputChange(e, index)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#193db0] focus:border-[#193db0]"
                required
              >
                <option value="">Select Color</option>
                {availableColors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>

            {/* Sizes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Available Sizes
              </label>
              <div className="flex flex-wrap gap-2">
                {availableSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => handleSizeChange(size, index)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                      ${
                        variant.size.includes(size)
                          ? "bg-[#193db0] text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Price & Quantity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price (USD)
                </label>
                <input
                  type="number"
                  name={`variant.price`}
                  value={variant.price}
                  onChange={(e) => handleInputChange(e, index)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#193db0] focus:border-[#193db0]"
                  required
                  min="0"
                  step="0.01"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  name={`variant.quantity`}
                  value={variant.quantity}
                  onChange={(e) => handleInputChange(e, index)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#193db0] focus:border-[#193db0]"
                  required
                  min="1"
                />
              </div>
            </div>

            {/* Images */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Main Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImagesChange(e, index, true)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#193db0] focus:border-[#193db0]"
                  required
                />
                {variant.overviewPicture && (
                  <img
                    src={variant.overviewPicture}
                    alt="Overview"
                    className="mt-2 w-32 h-32 object-cover rounded-md"
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Images
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImagesChange(e, index)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#193db0] focus:border-[#193db0]"
                  multiple
                />
                <div className="mt-2 grid grid-cols-4 gap-2">
                  {variant.images.map((img, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={img}
                      alt={`Additional ${imgIndex + 1}`}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div className="flex justify-end space-x-4">
        <motion.button
          type="button"
          onClick={() => setStep(2)}
          className="px-6 py-2 border border-[#193db0] text-[#193db0] rounded-lg hover:bg-gray-50 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Back
        </motion.button>
        <motion.button
          type="button"
          onClick={submitProduct}
          className="px-6 py-2 bg-[#193db0] text-white rounded-lg hover:bg-[#142d8a] transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Submit Product
        </motion.button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-4xl mx-auto">
        {step === 1 && (
          <motion.div
            className="text-center py-12"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeInUp}
          >
            {welcomeMessages.map((message, index) => (
              <motion.h2
                key={index}
                className="text-3xl font-bold text-[#193db0] mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.5 }}
              >
                {message}
              </motion.h2>
            ))}
            <motion.button
              className="mt-8 px-8 py-3 bg-[#193db0] text-white rounded-lg hover:bg-[#142d8a] transition-all"
              onClick={() => setStep(2)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        )}

        {/* Instructions Step */}
        {step === 2 && (
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h3 className="text-2xl font-bold text-[#193db0] mb-6">
              Important Instructions
            </h3>
            <motion.ul className="space-y-4">
              <motion.li variants={fadeInUp} className="flex items-center">
                <span className="mr-3">📝</span>
                Please fill out the form accurately with all required
                information
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-center">
                <span className="mr-3">📸</span>
                Upload a main product image and additional photos for better
                visibility
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-center">
                <span className="mr-3">🏷️</span>
                Include the SHEIN product code if applicable
              </motion.li>
              <motion.li
                variants={fadeInUp}
                className="flex items-center text-red-500"
              >
                <span className="mr-3">ℹ️</span>
                Note: A 5% platform fee will be applied to each sale
              </motion.li>
            </motion.ul>
            <motion.button
              className="mt-8 px-8 py-3 bg-[#193db0] text-white rounded-lg hover:bg-[#142d8a] transition-all"
              onClick={() => setStep(3)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Continue to Form
            </motion.button>
          </motion.div>
        )}

        {/* Product Form Step */}
        {step === 3 && (
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            {renderProductForm()}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AddProduct;