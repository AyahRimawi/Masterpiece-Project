import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import SearchBar from "../../components/Navbar/SearchBar";
import FooterBar from "../../components/Footer/FooterBar";
import TrackOrder from "../../components/Navbar/TrackOrder";
import { useParams } from "react-router-dom";
import Reviews from "./ReviewsComponent";
import RelatedProducts from "./RelatedProductsComponent";
import useCartStore from "../CartPage/CartStore";

const DetailsPage = () => {
  const [productData, setProductData] = useState(null);
  const [activeImg, setActiveImage] = useState("");
  const [amount, setAmount] = useState(1);
  const [activeTab, setActiveTab] = useState("reviews");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [availableSizes, setAvailableSizes] = useState([]);
  // const navigate = useNavigate();
  const { id } = useParams();
  const { addToCart } = useCartStore();

  useEffect(() => {
    fetchProductData();
  }, [id]);

  const fetchProductData = async () => {
    try {
      const response = await axios.get(`/api/product/getVariantById/${id}`);
      setProductData(response.data);
      setActiveImage(response.data.currentVariant.overviewPicture);
      setSelectedColor(response.data.currentVariant.color);
      setSelectedSize(response.data.currentVariant.size[0]);
      setAvailableSizes(response.data.availableSizes);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  const handleColorChange = async (color) => {
    setSelectedColor(color);
    try {
      const response = await axios.get(
        `/api/product/getSizesForColor/${productData._id}/${color}`
      );
      setAvailableSizes(response.data.availableSizes);
      setSelectedSize(response.data.availableSizes[0]);

      const newVariant = productData.variants.find(
        (v) =>
          v.color === color && v.size.includes(response.data.availableSizes[0])
      );
      if (newVariant) {
        setActiveImage(newVariant.overviewPicture);
      }
    } catch (error) {
      console.error("Error fetching available sizes:", error);
    }
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

const handleAddToCart = async () => {
  if (!productData) return;

  const currentVariant =
    productData.variants.find(
      (v) => v.color === selectedColor && v.size.includes(selectedSize)
    ) || productData.currentVariant;

  try {
    await addToCart({
      productId: productData._id,
      variantId: currentVariant._id,
      quantity: amount,
    });
    toast.success("Item added to cart successfully!");
  } catch (error) {
    console.error("Error adding item to cart:", error);
    toast.error(
      error.response?.data?.message ||
        "Failed to add item to cart. Please try again."
    );
  }
};

  if (!productData) return <div>Loading...</div>;

  const currentVariant =
    productData.variants.find(
      (v) => v.color === selectedColor && v.size.includes(selectedSize)
    ) || productData.currentVariant;

  
  return (
    <div className="bg-white min-h-screen">
      <TrackOrder />
      <SearchBar />
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-1/2 p-4 sm:p-8">
              <motion.img
                key={activeImg}
                src={activeImg}
                alt="Active product image"
                className="w-full h-64 sm:h-96 object-cover rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
              <div className="mt-4 flex justify-center space-x-4">
                {[currentVariant.overviewPicture, ...currentVariant.images].map(
                  (image, index) => (
                    <motion.img
                      key={index}
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-md cursor-pointer object-cover ${
                        activeImg === image ? "ring-2 ring-[#193db0]" : ""
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveImage(image)}
                    />
                  )
                )}
              </div>
            </div>

            {/* Product Details Section */}
            <div className="lg:w-1/2 p-4 sm:p-8">
              <div className="mb-4">
                <span className="text-[#193db0] font-semibold text-sm uppercase tracking-wide">
                  {currentVariant.shein_code}
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold mt-2 text-gray-800">
                  {productData.name}
                </h1>
              </div>
              <p className="text-gray-600 mb-6">{productData.description}</p>
              <div className="flex items-center mb-6">
                <span className="text-2xl sm:text-3xl font-bold text-gray-800">
                  JD {currentVariant.price.toFixed(2)}
                </span>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 mb-2">Colors:</h3>
                <div className="flex space-x-2">
                  {productData.availableColors.map((color) => (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded-full border ${
                        selectedColor === color ? "ring-2 ring-[#193db0]" : ""
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                      onClick={() => handleColorChange(color)}
                    />
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 mb-2">Sizes:</h3>
                <div className="flex space-x-2">
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      className={`px-3 py-1 border rounded-md ${
                        selectedSize === size
                          ? "bg-[#193db0] text-white"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => handleSizeChange(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-xl mr-1">★</span>
                <span className="font-semibold">
                  {productData.averageRating.toFixed(1)}
                </span>
              </div>
              <div className="flex items-center mb-6">
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button
                    className="px-3 sm:px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                    onClick={() => setAmount((prev) => Math.max(prev - 1, 1))}
                  >
                    -
                  </button>
                  <span className="px-3 sm:px-4 py-2 border-x">{amount}</span>
                  <button
                    className="px-3 sm:px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                    onClick={() =>
                      setAmount((prev) =>
                        Math.min(prev + 1, currentVariant.quantity)
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                className="w-full bg-[#193db0] text-white font-semibold py-3 rounded-lg hover:bg-[#142d80] transition-colors"
                disabled={amount > currentVariant.quantity}
              >
                Add to Cart
              </button>
              <div className="mt-6 text-sm text-gray-500">
                <p>Category: {productData.category}</p>
                <p>Subcategory: {productData.subCategory}</p>
                <p>Available quantity: {currentVariant.quantity}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <div className="flex border-b">
            <button
              className={`px-4 py-2 ${
                activeTab === "reviews"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "related"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("related")}
            >
              Related Products
            </button>
          </div>
          <div className="mt-4">
            {activeTab === "reviews" ? (
              <Reviews productId={productData._id} />
            ) : (
              <RelatedProducts
                category={productData.category}
                subCategory={productData.subCategory}
              />
            )}
          </div>
        </div>
      </div>
      <FooterBar />
    </div>
  );
};

export default DetailsPage;
