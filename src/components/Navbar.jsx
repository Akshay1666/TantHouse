import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md px-6 md:px-12 py-4">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-black tracking-wide">
            Tent <span className="text-yellow-500">House</span>
          </h1>
          <p className="text-xs text-gray-500">
            Premium Event Decoration Services
          </p>
        </div>


        {/* CTA Button */}
        <a
          href="tel:+919050680061"
          className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg hover:bg-yellow-500 hover:text-black transition font-semibold"
        >
          <FaPhoneAlt />
          Book Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;