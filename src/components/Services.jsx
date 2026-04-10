import { motion } from "framer-motion";

const services = [
  {
    name: "Birthday",
    image: "Home1.jpg"
  },
  {
    name: "Wedding",
    image: "Home2.jpg"
  },
  {
    name: "Corporate",
    image: "Home1.jpg"
  },
  {
    name: "Festival",
    image: "Home2.jpg"
  }
];
const Services = () => {
  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-3xl text-center font-bold mb-6">Services</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1, rotate: 3 }}
            className="bg-white p-6 rounded shadow text-center"
          >
            <img src={s.image} alt={s.name} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="mt-2">{s.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;