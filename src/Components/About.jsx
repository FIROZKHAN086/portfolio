import React, { Suspense, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaMobile, FaServer } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import Lenis from '@studio-freight/lenis';

const BackgroundScene = () => {
  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      
      {/* Floating geometric shapes */}
      <Float speed={1.5} rotationIntensity={2} floatIntensity={3}>
        <mesh position={[-5, 2, -10]}>
          <torusGeometry args={[2, 0.5, 16, 100]} />
          <meshStandardMaterial 
            color="#4c1d95"
            roughness={0.1}
            metalness={0.8}
            emissive="#4c1d95"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[5, -2, -5]}>
          <icosahedronGeometry args={[1.5]} />
          <meshStandardMaterial 
            color="#7c3aed"
            roughness={0.2} 
            metalness={0.8}
            emissive="#7c3aed"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>

      <Float speed={1} rotationIntensity={1.5} floatIntensity={2.5}>
        <mesh position={[0, 3, -8]}>
          <octahedronGeometry args={[1.2]} />
          <meshStandardMaterial 
            color="#8b5cf6"
            roughness={0.2}
            metalness={0.8}
            emissive="#8b5cf6"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>
    </>
  );
};

const About = () => {
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

    // Add event listener to scroll smoothly using Lenis
    const handleScroll = () => {
      lenis.scrollTo(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const skills = [
    { name: 'Frontend Development', icon: <FaCode />, level: 90 },
    { name: 'Backend Development', icon: <FaServer />, level: 85 },
    { name: 'Database Management', icon: <FaDatabase />, level: 80 },
    { name: 'Full Stack Development', icon: <FaCode />, level: 90 },
    { name: 'Web applications', icon: <FaCode />, level: 80 },
    { name: 'Mobile Development', icon: <FaMobile />, level: 60 },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] relative">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <Suspense fallback={null}>
            <BackgroundScene />
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
                'About Me',
                2000,
                'My Skills',
                2000,
                'My Journey',
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
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <motion.div 
            className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 shadow-xl"
            whileHover={{
              boxShadow: "0 0 25px rgba(139, 92, 246, 0.3)",
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <TypeAnimation
              sequence={[
                "I'm a passionate Full Stack Developer with a strong focus on creating beautiful, functional, and user-friendly applications. With years of experience in web development, I specialize in building modern web applications using cutting-edge technologies.",
                1000,
                "My approach to development combines technical expertise with creative problem-solving to deliver exceptional results. I'm constantly learning and adapting to new technologies to stay at the forefront of web development.",
                1000,
              ]}
              wrapper="p"
              speed={50}
              repeat={Infinity}
              className="text-gray-200 text-lg font-['Inter'] leading-relaxed"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <motion.span 
                      className="text-2xl text-gradient bg-gradient-to-r from-violet-400 to-fuchsia-400"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      {skill.icon}
                    </motion.span>
                    <span className="text-white font-['Poppins'] font-medium">{skill.name}</span>
                  </div>
                  <span className="text-fuchsia-300 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: index * 0.2 }}
                    className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-2.5 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
