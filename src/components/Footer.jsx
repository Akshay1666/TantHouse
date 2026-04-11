import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">TentHouse</h2>
          <p className="text-gray-400">
            We provide best tent and event services for weddings, birthdays & more.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FaPhone /> +91 9050680061
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 mt-2">
            <FaMapMarkerAlt /> Jawalamukhi, Himachal Pradesh, India
          </p>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Location</h3>
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Jawalamukhi,Himachal%20Pradesh&output=embed"
            className="w-full h-40 rounded-lg border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Social Media */}
      <div className="flex justify-center gap-6 mt-8 text-xl">
        <a href="#" className="hover:text-blue-500">
          <FaFacebook />
        </a>
        <a href="#" className="hover:text-pink-500">
          <FaInstagram />
        </a>
        <a href="#" className="hover:text-blue-400">
          <FaTwitter />
        </a>
      </div>

      {/* Bottom */}
      <div className="text-center mt-6 text-gray-400 text-sm">
        © 2026 TentHouse. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;