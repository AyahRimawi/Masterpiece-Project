import React from "react";
import { ShoppingBag, X, Heart, Truck, Shield } from "lucide-react";

const AboutUs = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  // Array of positions for floating bags
  const floatingBags = Array.from({ length: 12 }).map((_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    size: Math.floor(Math.random() * (24 - 16 + 1) + 16),
    opacity: Math.random() * (0.4 - 0.1) + 0.1,
  }));

  const features = [
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Easy Shopping",
      description: "Browse through diverse fashion categories",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Payment",
      description: "Safe transactions via PayPal",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Quick and reliable shipping",
    },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />

      {/* Floating Bags */}
      {floatingBags.map((bag, index) => (
        <div
          key={index}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 animate-pulse pointer-events-none"
          style={{
            top: bag.top,
            left: bag.left,
            animationDelay: bag.delay,
            opacity: bag.opacity,
          }}
        >
          <ShoppingBag size={bag.size} className="text-white" />
        </div>
      ))}

      <div className="relative w-full max-w-lg mx-auto">
        <div className="absolute inset-0 bg-black shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative bg-white shadow-lg sm:rounded-3xl p-6 sm:p-10 overflow-y-auto max-h-[90vh] scrollbar-hide">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>

          <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <ShoppingBag className="w-8 h-8" />
                <h2 className="text-3xl font-bold">SecondChance</h2>
              </div>
              <p className="text-gray-600">
                Sustainable Fashion Resale Platform
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="mb-2 text-black">{feature.icon}</div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="text-center mb-8">
              <p className="text-gray-600 leading-relaxed">
                We're revolutionizing fashion resale by connecting sellers with
                buyers, promoting sustainability, and giving clothes a second
                chance at life.
              </p>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-black/80 transition-colors flex items-center justify-center gap-2 group">
              <span>Join Our Community</span>
              <Heart className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
