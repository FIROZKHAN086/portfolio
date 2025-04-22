import React from "react";
import { motion } from "framer-motion";

const Message = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-teal-500 via-blue-500 to-purple-500 px-6 py-20 flex justify-center items-center">
      <motion.div
        className="bg-white/80 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg max-w-2xl w-full"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to My Portfolio!</h2>
        <p className="text-gray-700 text-lg mb-6">
          Hi! I'm a passionate Full Stack Developer focused on creating modern web applications. Scroll down to explore my skills, projects and journey in web development.
        </p>
        <div className="p-4 bg-blue-200 rounded-lg shadow-inner text-gray-800">
          <p>
            <strong>What you'll find below:</strong>
            <ul className="mt-2 list-disc list-inside">
              <li>My technical skills and expertise</li>
              <li>Featured projects and applications</li>
              <li>Development tools I work with</li>
              <li>Contact information to connect</li>
            </ul>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Message;
