import React from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  const imgs = [
    "/Home1.webp",
    "/Home1.webp",
    "/Home1.webp",
    "/birthday.webp",
    "/food.webp",
    "/dj.jpg",
  ];

  return (
    <section
      id="gallery"
      className="px-6 md:px-12 py-14 bg-gradient-to-b from-white to-gray-100"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-yellow-500 font-semibold tracking-[3px] uppercase text-sm">
          Our Work
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
          Event Gallery
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Explore our beautiful setups for weddings, birthdays, DJ nights,
          catering events and premium tent decorations.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {imgs.map((img, i) => (
          <motion.div
            key={i}
            className="group relative overflow-hidden rounded-2xl shadow-lg"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={img}
              alt={`Gallery ${i + 1}`}
              className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
              <p className="text-white text-lg font-semibold tracking-wide">
                Tent House Event
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <a
          href="tel:+919050680061"
          className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition"
        >
          Book Your Event Now
        </a>
      </div>
    </section>
  );
};

export default Gallery;