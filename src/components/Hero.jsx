import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('Home1.webp')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Small Tag */}
        <p className="uppercase tracking-[4px] text-sm md:text-base text-yellow-400 mb-4">
          Premium Tent House Services
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
          Make Every Event
          <span className="block text-yellow-400">
            Grand & Memorable
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
          Beautiful tents, luxury decoration, wedding setups, birthday themes,
          lighting, catering arrangements and complete event management for all
          occasions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+919050680061"
            className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Call Now to Book
          </a>

          <a
            href="#services"
            className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
          >
            Explore Services
          </a>
        </div>

        {/* Extra Trust Points */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 text-sm md:text-base">
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
            ✔ Wedding Setup
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
            ✔ Birthday Themes
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
            ✔ DJ & Lighting
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
            ✔ Affordable Price
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;