import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="px-6 md:px-12 py-12 grid md:grid-cols-2 gap-10 items-center bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Image */}
      <img
        src="Home1.webp"
        alt="Tent House Service"
        className="rounded-2xl shadow-lg w-full h-[420px] object-cover"
      />

      {/* Content */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Why Choose Our Swastik Event?
        </h2>

        <p className="text-gray-600 mb-6 leading-relaxed">
          We provide complete tent house solutions for all types of events.
          From small family functions to grand weddings, our team ensures
          beautiful decoration, quality setup, and timely service.
        </p>

        <ul className="space-y-3 text-gray-700">
          <li>✔ High-quality tents for every event</li>
          <li>✔ Wedding stage & flower decoration</li>
          <li>✔ Birthday party setup & theme decoration</li>
          <li>✔ Tables, chairs & sofa arrangements</li>
          <li>✔ DJ, lighting & sound system available</li>
          <li>✔ Catering setup & food counter decoration</li>
          <li>✔ Affordable pricing packages</li>
          <li>✔ Fast booking & on-time service</li>
        </ul>

       <a href="tel:+919050680061">
  <button className="mt-8 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
    Call Now to Book
  </button>
</a>
      </div>
    </motion.section>
  );
};

export default About;