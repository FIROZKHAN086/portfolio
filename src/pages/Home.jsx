import React, { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowDown, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import Message from '../Components/Message';

const AbstractScene = () => {
  return (
    <>
      <Environment preset="sunset" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
      />
      
      {/* Abstract floating geometry */}
      <Float speed={4} rotationIntensity={2} floatIntensity={3}>
        <mesh position={[-4, 2, -5]}>
          <torusKnotGeometry args={[1, 0.3, 128, 16]} />
          <meshStandardMaterial 
            color="#4c1d95"
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[4, -2, -3]}>
          <octahedronGeometry args={[1.5]} />
          <meshStandardMaterial 
            color="#7c3aed"
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>

      <Float speed={3} rotationIntensity={1.5} floatIntensity={2.5}>
        <mesh position={[0, 0, -2]}>
          <dodecahedronGeometry args={[1.2]} />
          <meshStandardMaterial 
            color="#8b5cf6"
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>
    </>
  );
};

const HomePage = () => {
  const [show, setShow] = useState(false);

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  const Gettouch = () => {
    window.scrollTo({
      top: "80%", // Adjust the vertical position for smooth scroll
      behavior: "smooth"
    });
  };

  const toggleMessage = () => {
    setShow(!show); // Toggle the message visibility
  };

  const nameArray = "FIROZ KHAN".split("");

  return (
    <div className="relative pt-20 min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      {/* Modern 3D Background Canvas */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Suspense fallback={null}>
            <AbstractScene />
            <OrbitControls 
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.h2 
            className="text-indigo-300 text-2xl md:text-3xl font-medium mb-6 font-['Quicksand']"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to my world
          </motion.h2>
          
          <div className="flex justify-center mb-8">
            <motion.div
              className="flex space-x-2 md:space-x-4 text-5xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 font-['Montserrat']"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {nameArray.map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10"
          >
            <h3 className="text-3xl md:text-5xl font-['Raleway'] font-light backdrop-blur-sm">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                The Coder || Developer
              </span>
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto font-['Poppins'] leading-relaxed backdrop-blur-sm"
          >
            Creating immersive digital experiences with cutting-edge technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMessage}
              className="px-10 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full text-lg font-semibold shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 backdrop-blur-lg"
            >
              Explore Work
              {show && <Message />}
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={Gettouch}
              className="px-10 cursor-pointer py-4 bg-gradient-to-r from-transparent to-transparent border-2 border-violet-500 text-white rounded-full text-lg font-semibold hover:bg-violet-500/10 transition-all duration-300 backdrop-blur-lg"
            >
              Get in Touch
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-12 flex justify-center gap-6"
          >
            <motion.a 
              whileHover={{ y: -3 }}
              href="https://github.com/FIROZKHAN086" 
              target="_blank"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              whileHover={{ y: -3 }}
              href="#" 
              className="text-gray-400 hover:text-white text-2xl"
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <Link to="about" smooth={true} duration={800} className="cursor-pointer">
            <FaArrowDown className="text-white text-3xl" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
