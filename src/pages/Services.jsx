import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Zap,
  Monitor,
  Atom,
  ChevronRightCircle,
} from "lucide-react";

const services = [
  {
    title: "HTML/CSS Websites",
    description:
      "Clean, responsive websites using HTML5 and Tailwind CSS for lightning-fast layouts.",
    icon: <Monitor size={28} className="text-pink-400" />,
  },
  {
    title: "Backend Development",
    description:
      "Powerful backend APIs with Node.js, Express, and MongoDB for dynamic applications.",
    icon: <Server size={28} className="text-green-400" />,
  },
  {
    title: "Web Animations",
    description:
      "Sleek and modern animations using Framer Motion and GSAP for engaging user experience.",
    icon: <Zap size={28} className="text-yellow-300" />,
  },
  {
    title: "React Development",
    description:
      "Interactive, component-based frontend using React.js and modern state management.",
    icon: <Atom size={28} className="text-cyan-400" />,
  },
  {
    title: "Next.js Websites",
    description:
      "SEO-optimized, fast-loading apps with server-side rendering and API routes using Next.js.",
    icon: <ChevronRightCircle size={28} className="text-gray-300" />,
  },
  {
    title: "Full-Stack MERN Projects",
    description:
      "Complete web solutions using MongoDB, Express, React, and Node.js — all custom-built.",
    icon: <Code2 size={28} className="text-purple-400" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const Services = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-violet-900 to-black px-6 py-20 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-violet-400">Services</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-xl hover:shadow-violet-500/30 transition-all duration-300 hover:-translate-y-1"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-white/10 rounded-xl mr-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
