import { motion } from 'framer-motion';
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Projects = () => {
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

  const projects = [
    {
      title: 'Movie App ',
      description: 'A full-featured Movie App  with payment integration and admin dashboard.',
      image: './src/assets/img/Img.png',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: '#',
      live: 'https://filmy-vila.vercel.app/',
    },
    {
      title: 'E-commerce Platform', 
      description: 'A collaborative E-clication with real-time updates.',
      image: './src/assets/img/Img1.png',
      technologies: ['React', 'Node js', 'Tailwind CSS'],
      github: '#',
      live: 'https://r-bangels.vercel.app/',
    },
    {
      title: 'E-commerce Platform|| Clothing Store',
      description: 'A collaborative E-clication with real-time updates. clothing store',
      image: './src/assets/img/Img2.png', 
      technologies: ['React', 'Node js', 'Tailwind CSS', 'MongoDB', 'Express'],
      github: '#',
      live: 'https://clothing-rust.vercel.app/',
    },
    {
      title: 'Food Delivery App',
      description: 'A collaborative Food Delivery App with real-time updates.',
      image: './src/assets/img/Img3.png',
      technologies: ['html', 'css', 'javascript'],
      github: '#',
      live: 'https://zoapto.netlify.app/',
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
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
                'My Projects',
                2000,
                'Featured Work',
                2000,
                'Portfolio',
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

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                transition: { 
                  duration: 0.4,
                  ease: "easeOut"
                }
              }}
              className="backdrop-blur-lg bg-white/5 rounded-2xl overflow-hidden shadow-xl 
                         hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] 
                         transform perspective-1000 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transform 
                           group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                              opacity-0 group-hover:opacity-90 transition-opacity duration-500
                              flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white text-lg font-semibold"
                  >
                    View Project Details
                  </motion.div>
                </div>
              </div>
              <motion.div 
                className="p-8 transform group-hover:translate-y-[-10px] transition-transform duration-300"
              >
                <h3 className="text-2xl font-['Poppins'] font-bold text-transparent bg-clip-text 
                             bg-gradient-to-r from-violet-400 to-fuchsia-400 mb-4
                             group-hover:bg-gradient-to-r group-hover:from-fuchsia-400 group-hover:to-violet-400
                             transition-all duration-500">
                  {project.title}
                </h3>
                <p className="text-gray-300 font-['Quicksand'] mb-6 
                            group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{ scale: 1.1 }}
                      className="bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 
                               text-violet-300 px-4 py-1.5 rounded-full text-sm font-medium 
                               backdrop-blur-sm hover:from-violet-500/30 hover:to-fuchsia-500/30 
                               transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex space-x-6">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      y: -5 
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-violet-400 hover:text-violet-300"
                  >
                    <FaGithub size={24} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      y: -5 
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-violet-400 hover:text-violet-300"
                  >
                    <FaExternalLinkAlt size={24} />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;