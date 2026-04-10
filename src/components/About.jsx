import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="p-10 grid md:grid-cols-2 gap-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <img
        src="Home2.jpg"
className="rounded-lg h-64 w-60"      />
      <div>
        <h2 className="text-3xl font-bold mb-4">
          Why Choose Our Tent House?
        </h2>
        <ul>
          <li>✔ High-quality tents</li>
          <li>✔ Beautiful decoration</li>
          <li>✔ Affordable pricing</li>
          <li>✔ On-time service</li>
        </ul>
      </div>
    </motion.section>
  );
};

export default About;