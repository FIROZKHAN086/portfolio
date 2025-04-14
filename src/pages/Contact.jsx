import { useState, useEffect } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import Lenis from '@studio-freight/lenis';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      },
    },
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email',
      value: 'firozkhan192006@gmail.com',
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: 'Phone',
      value: '+1 234 567 890',
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Location',
      value: 'Rajsthan , (India)',
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] -top-48 -left-48 bg-purple-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] -bottom-48 -right-48 bg-blue-600/20 rounded-full blur-[100px] animate-pulse delay-700"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-5xl font-['Poppins'] font-bold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent mb-6">
            <TypeAnimation
              sequence={[
                'Get in Touch',
                2000,
                'Contact Me',
                2000,
                'Let\'s Connect',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-gray-400"
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "rgba(139, 92, 246, 0.9)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-4 rounded-lg font-medium shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                className="flex items-center space-x-6 backdrop-blur-lg bg-white/5 p-6 rounded-xl border border-white/10 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-violet-500 to-fuchsia-500 p-4 rounded-lg text-white">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-gray-300 text-sm font-medium">{info.title}</h3>
                  <p className="text-white text-lg">{info.value}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={itemVariants}
              className="backdrop-blur-lg bg-white/5 p-8 rounded-xl border border-white/10"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-4">
                Let's Create Something Amazing
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm always excited to collaborate on new projects and bring innovative ideas to life. Whether you have a specific project in mind or just want to explore possibilities, I'm here to help turn your vision into reality.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;