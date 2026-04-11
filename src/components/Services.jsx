import { motion } from "framer-motion";

const services = [
  {
    name: "Birthday",
    image: "birthday.webp",
    desc: "Colorful birthday decorations, balloons setup, theme party arrangements, cake table setup, lighting and music for kids & adults."
  },
  {
    name: "Wedding",
    image: "Home2.webp",
    desc: "Luxury wedding tents, stage decoration, flower setup, seating arrangements, catering counters and complete marriage event planning."
  },
  {
    name: "Corporate",
    image: "Home1.webp",
    desc: "Professional event setup for meetings, conferences, launches, seminars, branding backdrop, chairs, tables and sound system."
  },
  {
    name: "Festival",
    image: "Home2.webp",
    desc: "Tent setup for religious events, fairs, local functions, festival lighting, decoration and crowd seating arrangements."
  }
];

const Services = () => {
  return (
    <section className="px-6 md:px-10 py-12 bg-gray-100">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-10">
        Our Services
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={s.image}
              alt={s.name}
              className="w-full h-44 object-cover"
            />

            <div className="p-5 text-center">
              <h3 className="text-xl font-bold mb-3">{s.name}</h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {s.desc}
              </p>

              <a
                href="tel:+919050680061"
                className="inline-block mt-5 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;