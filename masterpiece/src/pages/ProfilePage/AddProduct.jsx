import React, { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Info,
  FormInput,
  CheckCircle2,
  X,
  Package,
  Upload,
  DollarSign,
  Palette,
  Box,
  Tag,
  ListPlus,
} from "lucide-react";

// FormStepper Component remains unchanged
const FormStepper = ({ currentStep, onStepClick }) => {
  const steps = [
    {
      key: 1,
      label: "Welcome",
      icon: Info,
      description: "Start your journey",
    },
    {
      key: 2,
      label: "Instructions",
      icon: FormInput,
      description: "Read guidelines",
    },
    {
      key: 3,
      label: "Product Details",
      icon: CheckCircle2,
      description: "Fill product information",
    },
  ];

  return (
    <div className="w-full py-6 px-4 md:px-6 mb-8">
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-gray-200 rounded-full" />
        <div
          className="absolute left-0 top-1/2 h-1 -translate-y-1/2 bg-[#000] rounded-full transition-all duration-500"
          style={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
          }}
        />

        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep - 1;
            const isActive = index === currentStep - 1;
            const Icon = step.icon;

            return (
              <div
                key={step.key}
                onClick={() => onStepClick(step.key)}
                className={`flex flex-col items-center ${
                  index === 0
                    ? "items-start"
                    : index === steps.length - 1
                    ? "items-end"
                    : "items-center"
                } cursor-pointer group`}
              >
                <div
                  className={`
                    flex h-12 w-12 items-center justify-center rounded-full
                    border-4 transition-all duration-500 
                    ${
                      isCompleted || isActive
                        ? "border-gray-200 bg-gray-400 text-white"
                        : "border-gray-300 bg-white text-gray-400"
                    }
                    ${isActive ? "ring-4 ring-black" : ""}
                    group-hover:scale-110
                  `}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <div
                  className={`mt-3 text-center ${
                    index === 0
                      ? "text-left"
                      : index === steps.length - 1
                      ? "text-right"
                      : "text-center"
                  }`}
                >
                  <p
                    className={`text-sm font-semibold mb-1
                    ${
                      isCompleted || isActive
                        ? "text-gray-600"
                        : "text-gray-500"
                    }
                    group-hover:text-black
                  `}
                  >
                    {step.label}
                  </p>
                  <p className="text-xs text-gray-500 hidden md:block">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Image Preview Component
const ImagePreview = ({ src, onRemove }) => (
  <div className="relative group">
    <img
      src={src}
      alt="Preview"
      className="w-24 h-24 object-cover rounded-md"
    />
    {onRemove && (
      <button
        onClick={onRemove}
        className="absolute top-1 right-1 p-1 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <X className="w-4 h-4" />
      </button>
    )}
  </div>
);

// Image Upload Button Component
const ImageUploadButton = ({
  onChange,
  multiple = false,
  accept = "image/*",
  className = "",
}) => (
  <div className={`flex items-center justify-center w-full ${className}`}>
    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <Upload className="w-8 h-8 mb-2 text-gray-500" />
        <p className="text-sm text-gray-500">
          {multiple
            ? "Click to upload multiple images"
            : "Click to upload an image"}
        </p>
      </div>
      <input
        type="file"
        className="hidden"
        onChange={onChange}
        accept={accept}
        multiple={multiple}
      />
    </label>
  </div>
);

const AddProduct = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    subCategory: "",
    averageRating: 0, // أضف هذا السطر
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

  // Categories definition
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

  // Welcome messages for animation
  const welcomeMessages = [
    "Welcome to SecondChance",
    "Give Your Clothes a New Life",
    "Join Our Sustainable Fashion Movement",
    "Transform Unwanted Items into Opportunities",
  ];

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

  const handleImagesChange = async (
    e,
    variantIndex = 0,
    isOverview = false
  ) => {
    const files = isOverview ? [e.target.files[0]] : Array.from(e.target.files);

    if (files.length > 0) {
      Swal.fire({
        title: "Uploading Images",
        text: "Please wait while we upload your images...",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      try {
        const newVariants = [...formData.variants];
        const uploadPromises = files.map(async (file) => {
          const formDataFile = new FormData();
          formDataFile.append("image", file);

          // تحديث المسار للتوافق مع الباكيند
          const response = await axios.post("/api/upload/image", formDataFile, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });

          return response.data.url;
        });

        const uploadedUrls = await Promise.all(uploadPromises);

        if (isOverview) {
          newVariants[variantIndex].overviewPicture = uploadedUrls[0];
        } else {
          newVariants[variantIndex].images = [
            ...newVariants[variantIndex].images,
            ...uploadedUrls,
          ];
        }

        setFormData({ ...formData, variants: newVariants });
        Swal.close();

        toast.success(
          isOverview
            ? "Main image uploaded successfully!"
            : "Additional images uploaded successfully!"
        );
      } catch (error) {
        console.error("Error uploading images:", error);
        Swal.fire({
          icon: "error",
          title: "Upload Failed",
          text: "Failed to upload images. Please try again.",
        });
      }
    }
  };

  const handleRemoveImage = (variantIndex, imageIndex, isOverview = false) => {
    const newVariants = [...formData.variants];
    if (isOverview) {
      newVariants[variantIndex].overviewPicture = "";
    } else {
      newVariants[variantIndex].images = newVariants[
        variantIndex
      ].images.filter((_, index) => index !== imageIndex);
    }
    setFormData({ ...formData, variants: newVariants });
  };
  const submitProduct = async () => {
    try {
      // Show loading state
      Swal.fire({
        title: "Submitting Product",
        html: `
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 border-t-4 border-b-4 border-[#000] rounded-full animate-spin"></div>
          <p class="mt-4 text-gray-600">Your product is being submitted for approval...</p>
        </div>
      `,
        showConfirmButton: false,
        allowOutsideClick: false,
      });

      // Basic validation
      if (!formData.name || !formData.category || !formData.subCategory) {
        throw new Error("Please fill in all required fields");
      }

      // Validate variants
      if (!formData.variants || formData.variants.length === 0) {
        throw new Error("At least one variant is required");
      }

      for (const variant of formData.variants) {
        if (
          !variant.color ||
          variant.size.length === 0 ||
          !variant.price ||
          !variant.quantity
        ) {
          throw new Error("Please complete all variant details");
        }
        if (!variant.overviewPicture) {
          throw new Error("Each variant must have a main image");
        }
      }

      // Format the data before sending
      const productData = {
        name: formData.name,
        description: formData.description,
        category: formData.category,
        subCategory: formData.subCategory,
        averageRating: formData.averageRating, // تأكد من إرسال التقييم
        variants: formData.variants.map((variant) => ({
          shein_code: variant.shein_code || "",
          color: variant.color,
          size: variant.size,
          price: parseFloat(variant.price),
          quantity: parseInt(variant.quantity),
          overviewPicture: variant.overviewPicture,
          images: variant.images || [],
        })),
      };

      console.log("Sending product data:", productData); // Debug log

      // Get token from localStorage
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Authentication required");
      }

      const response = await axios.post(
        "/api/product/addProduct",
        productData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        Swal.fire({
          icon: "success",
          title: "Product Submitted!",
          text: "Your product is now waiting for admin approval.",
          confirmButtonColor: "#193db0",
        });

        // Reset form
        setStep(1);
        setFormData({
          name: "",
          description: "",
          category: "",
          subCategory: "",
          averageRating: 0, // أضف هذا السطر
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
      console.error("Submit error:", error); // Debug log
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text:
          error.response?.data?.message ||
          error.message ||
          "Something went wrong",
        confirmButtonColor: "#000",
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
        {/* Basic Product Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#000] focus:border-[#000]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#000] focus:border-[#000]"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#000] focus:border-[#000]"
            required
          />
        </div>
        {/* Rating Section */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Rating (0-5 stars)
          </label>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              {[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((rating) => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, averageRating: rating });
                  }}
                  className={`px-2 py-1 rounded ${
                    formData.averageRating === rating
                      ? "bg-slate-200 text-black"
                      : "bg-gray-100 text-gray-600"
                  } text-sm hover:bg-blue-50 transition-colors`}
                >
                  {rating}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((fullStar) => (
                <div key={fullStar} className="relative">
                  {/* Empty Star (background) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d1d5db"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>

                  {/* Filled Star (overlay) */}
                  <div
                    className="absolute top-0 left-0 overflow-hidden"
                    style={{
                      width: `${Math.min(
                        100,
                        Math.max(
                          0,
                          (formData.averageRating - (fullStar - 1)) * 100
                        )
                      )}%`,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#FFD700"
                      stroke="#FFD700"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </div>
                </div>
              ))}
              <span className="ml-2 text-sm text-gray-600">
                {formData.averageRating
                  ? `${formData.averageRating} stars`
                  : "No rating"}
              </span>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Subcategory
          </label>
          <select
            name="subCategory"
            value={formData.subCategory}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#000] focus:border-[#000]"
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
        {/* Variants */}
        {formData.variants.map((variant, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 space-y-4 bg-gray-50"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-[#000] flex items-center">
                <Package className="mr-2 h-5 w-5" />
                Variant Details
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#000] focus:border-[#000]"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#000] focus:border-[#000]"
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
                          ? "bg-[#000] text-white"
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
                  Price (JD)
                </label>
                <input
                  type="number"
                  name={`variant.price`}
                  value={variant.price}
                  onChange={(e) => handleInputChange(e, index)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#000] focus:border-[#000]"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#000] focus:border-[#000]"
                  required
                  min="1"
                />
              </div>
            </div>

            {/* Images Section */}
            <div className="space-y-4">
              {/* Main Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Main Image (Required)
                </label>
                {!variant.overviewPicture ? (
                  <ImageUploadButton
                    onChange={(e) => handleImagesChange(e, index, true)}
                    multiple={false}
                  />
                ) : (
                  <div className="space-y-2">
                    <ImagePreview
                      src={variant.overviewPicture}
                      onRemove={() => handleRemoveImage(index, 0, true)}
                    />
                  </div>
                )}
              </div>

              {/* Additional Images */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Images
                </label>
                <ImageUploadButton
                  onChange={(e) => handleImagesChange(e, index)}
                  multiple={true}
                  className="mb-4"
                />
                <div className="grid grid-cols-4 gap-2">
                  {variant.images.map((img, imgIndex) => (
                    <ImagePreview
                      key={imgIndex}
                      src={img}
                      onRemove={() => handleRemoveImage(index, imgIndex)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end space-x-4 pt-6">
        <motion.button
          type="button"
          onClick={() => setStep(2)}
          className="px-6 py-2 border border-[#000] text-[#000] rounded-lg hover:bg-gray-50 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Back
        </motion.button>
        <motion.button
          type="button"
          onClick={submitProduct}
          className="px-6 py-2 bg-[#000] text-white rounded-lg transition-colors"
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
        {/* Stepper */}
        <FormStepper currentStep={step} onStepClick={setStep} />

        {/* Content */}
        <div className="mt-8">
          {step === 1 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {welcomeMessages.map((message, index) => (
                <motion.h2
                  key={index}
                  className="text-3xl font-bold text-[#000] mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.5 }}
                >
                  {message}
                </motion.h2>
              ))}
              <motion.button
                className="mt-8 px-8 py-3 border border-black bg-black text-white rounded-lg  transition-all"
                onClick={() => setStep(2)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-2xl font-bold text-[#000] mb-6">
                Important Instructions
              </h3>
              <motion.ul className="space-y-4">
                <motion.li className="flex items-center">
                  <span className="mr-3">📝</span>
                  Please fill out the form accurately with all required
                  information
                </motion.li>
                <motion.li className="flex items-center">
                  <span className="mr-3">📸</span>
                  Upload clear images of your product from multiple angles
                </motion.li>
                <motion.li className="flex items-center">
                  <span className="mr-3">🏷️</span>
                  Include the SHEIN product code if applicable
                </motion.li>
                <motion.li className="flex items-center text-red-500">
                  <span className="mr-3">ℹ️</span>
                  Note: A 5% platform fee will be applied to each sale
                </motion.li>
              </motion.ul>
              <motion.button
                className="mt-8 px-8 py-3  rounded-lg hover:bg-gray-600  bg-black text-white transition-all"
                onClick={() => setStep(3)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Continue to Form
              </motion.button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {renderProductForm()}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
