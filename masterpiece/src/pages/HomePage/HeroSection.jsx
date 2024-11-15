// HeroSection.js
import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070",
    collection: "SUMMER 2024",
    title: "Elegant Essentials",
    subtitle: "Discover timeless pieces for your wardrobe",
  },
  {
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071",
    collection: "PREMIUM LINE",
    title: "Urban Style",
    subtitle: "Contemporary fashion for modern lifestyle",
  },
  {
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070",
    collection: "NEW ARRIVALS",
    title: "Luxury Collection",
    subtitle: "Exclusive designs for distinguished taste",
  },
];

const HeroSection = ({ setBasicActive, navigateWithFilter }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = () => {
    window.scrollTo(0, 0);
    if (navigateWithFilter) {
      navigateWithFilter("tab2", "all");
    } else {
      setBasicActive("tab2");
    }
  };

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <div className="min-h-screen w-full bg-white py-8 px-6 md:px-12 lg:px-12 flex items-center">
      <div className="w-full h-[85vh] relative bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="h-full w-full flex flex-row-reverse relative">
          <div className="w-3/4 h-full relative rounded-l-2xl overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
                  style={{
                    backgroundImage: `url('${slide.image}')`,
                    transform: isTransitioning ? "scale(1.05)" : "scale(1)",
                  }}
                />
              </div>
            ))}

            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-white" />

            <div className="absolute bottom-8 right-8 flex space-x-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors"
                disabled={isTransitioning}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors"
                disabled={isTransitioning}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="absolute bottom-8 left-8 flex space-x-2">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 transition-all duration-300 ${
                    currentSlide === index ? "w-8 bg-white" : "w-2 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="absolute inset-0 z-10">
            <div className="h-full flex items-center ml-16 max-w-2xl">
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 transform -rotate-90 text-gray-200/20 text-9xl font-bold opacity-50 whitespace-nowrap pointer-events-none">
                FASHION
              </div>

              <div className="space-y-6">
                <span className="text-red-500 font-medium tracking-wide">
                  {slides[currentSlide].collection}
                </span>

                <h1 className="text-6xl font-bold text-gray-900 leading-tight transition-all duration-500">
                  {slides[currentSlide].title}
                </h1>

                <p className="text-gray-600 text-xl max-w-lg">
                  {slides[currentSlide].subtitle}
                </p>

                <div className="flex space-x-4 pt-8">
                  <button
                    onClick={handleNavigate}
                    className="bg-black text-white px-8 py-4 flex items-center space-x-2 hover:bg-gray-900 transition-colors rounded-lg"
                  >
                    <span>Shop Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleNavigate}
                    className="border border-black px-8 py-4 hover:bg-black hover:text-white transition-all rounded-lg"
                  >
                    View Collection
                  </button>
                </div>

                <div className="pt-12">
                  <p className="text-gray-500 mb-4">Follow Us</p>
                  <div className="flex space-x-6">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-black transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-black transition-colors"
                    >
                      Facebook
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-black transition-colors"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
