import React from "react";
import { Phone, X, Clock, Headphones, Mail } from "lucide-react";

const CallCenter = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  // Array of positions for floating icons
  const floatingIcons = Array.from({ length: 8 }).map((_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    size: Math.floor(Math.random() * (24 - 16 + 1) + 16),
    opacity: Math.random() * (0.4 - 0.1) + 0.1,
  }));

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />

      {/* Floating Icons */}
      {floatingIcons.map((icon, index) => (
        <div
          key={index}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 animate-pulse pointer-events-none"
          style={{
            top: icon.top,
            left: icon.left,
            animationDelay: icon.delay,
            opacity: icon.opacity,
          }}
        >
          <Headphones size={icon.size} className="text-white" />
        </div>
      ))}

      <div className="relative w-[90vw] max-w-lg mx-auto">
        <div className="absolute inset-0 bg-black shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative bg-white shadow-lg sm:rounded-3xl p-8">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>

          <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="mb-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Headphones className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Contact Us</h2>
              </div>
              <p className="text-gray-600">We're here to help!</p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Phone */}
              <a
                href="tel:+962777777777"
                className="block p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-black" />
                  <div>
                    <p className="text-sm text-gray-600">Phone Support</p>
                    <p className="text-lg font-semibold text-black">
                      +962 777 777 777
                    </p>
                  </div>
                </div>
              </a>

              {/* Hours */}
              <div className="p-4 rounded-lg bg-gray-50">
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-black" />
                  <div>
                    <p className="text-sm text-gray-600">Working Hours</p>
                    <p className="text-lg font-semibold text-black">
                      Sun - Thu: 9AM - 6PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <a
                href="mailto:support@secondchance.com"
                className="block p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-black" />
                  <div>
                    <p className="text-sm text-gray-600">Email Support</p>
                    <p className="text-lg font-semibold text-black">
                      support@secondchance.com
                    </p>
                  </div>
                </div>
              </a>

              {/* Call Button */}
              <button
                onClick={() => (window.location.href = "tel:+962777777777")}
                className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-black/80 transition-colors flex items-center justify-center gap-2 group mt-4"
              >
                <Phone className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12" />
                <span>Call Us Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallCenter;
