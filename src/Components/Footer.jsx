import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-4">
              FIROZ KHAN
            </h3>
            <p className="text-gray-300 font-['Quicksand']">
              Creating innovative web solutions with passion and precision.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="text-center">
            <h4 className="text-xl font-semibold mb-4 text-violet-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="text-center md:text-right">
            <h4 className="text-xl font-semibold mb-4 text-violet-400">Connect With Me</h4>
            <div className="flex justify-center md:justify-end space-x-6">
              <motion.a
                href="https://github.com/FIROZKHAN086"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "#8b5cf6" }}
                className="text-gray-300 hover:text-violet-400 transition-colors duration-300"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "#8b5cf6" }}
                className="text-gray-300 hover:text-violet-400 transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/khan____0086/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "#8b5cf6" }}
                className="text-gray-300 hover:text-violet-400 transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </motion.a>
              <motion.a
                href="mailto:firozkhankhan192006@gmail.com"
                whileHover={{ y: -3, color: "#8b5cf6" }}
                className="text-gray-300 hover:text-violet-400 transition-colors duration-300"
              >
                <FaEnvelope size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-700 text-center"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} FIROZ KHAN. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
