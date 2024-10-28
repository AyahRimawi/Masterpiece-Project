import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const UserProducts = () => {
  const [products, setProducts] = useState({
    pending: [],
    active: [],
    sold: [],
  });

  useEffect(() => {
    fetchUserProducts();
  }, []);

  const fetchUserProducts = async () => {
    try {
      const response = await axios.get("/api/product/getUserProducts");
      if (response.data.success) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const ProductCard = ({ product, status }) => (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img
          src={product.variants[0]?.overviewPicture}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div
          className={`absolute top-2 right-2 px-3 py-1 rounded-full text-white ${
            status === "Pending"
              ? "bg-yellow-500"
              : status === "Active"
              ? "bg-green-500"
              : "bg-blue-500"
          }`}
        >
          {status}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#193db0] mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-2">
          {product.description.substring(0, 100)}...
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-500">
            {product.variants.length} variants
          </span>
          <span className="text-sm font-medium text-[#193db0]">
            ${product.variants[0]?.price}
          </span>
        </div>
      </div>
    </motion.div>
  );

  const ProductSection = ({ title, products, status }) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#193db0] mb-6">{title}</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="w-full py-8"
      >
        {products.map((product) => (
          <SwiperSlide key={product._id} className="w-80">
            <ProductCard product={product} status={status} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-6xl mx-auto">
        <ProductSection
          title="Pending Approval"
          products={products.pending}
          status="Pending"
        />
        <ProductSection
          title="Active Listings"
          products={products.active}
          status="Active"
        />
        <ProductSection
          title="Sold Products"
          products={products.sold}
          status="Sold"
        />
      </div>
    </div>
  );
};

export default UserProducts;
