import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/Home1.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl text-center font-bold text-white mb-10">
          Contact Us
        </h2>

        {/* Glass Form */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl">
          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-white-400"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-white-400"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-white-400"
            />

            <button className="w-full bg-black hover:bg-yellow-500 text-white transition py-3 rounded-lg font-semibold text-lg">
              Book Now
            </button>

          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;