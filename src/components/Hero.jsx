import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('Home1.jpg')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* TEXT CONTENT */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Make Your Events Grand & Memorable
        </h1>

        <p className="mb-6 text-lg md:text-xl text-gray-200">
          Stylish tents, lighting & decoration for every occasion.
        </p>

        <button className="bg-orange-500 px-8 py-3 rounded-lg font-semibold hover:scale-110 transition">
          Book Now
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;