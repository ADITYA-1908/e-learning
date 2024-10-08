import { motion } from 'framer-motion';
import React from 'react';

const AboutMe = () => {
  return (
    <div className="bg-[#081b29] text-white min-h-screen flex flex-col items-center justify-center p-8">
      <motion.h1 
        className="text-5xl font-bold mt-16 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About <span className="text-blue-400">Me</span>
      </motion.h1>
      <div className="relative w-64 h-64 mb-8">
        <motion.div 
          className="absolute inset-0 rounded-full"
          style={{ 
            border: '4px solid transparent',
            borderLeftColor: '#00abf0',
            borderRightColor: '#00abf0'
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute inset-2 bg-[#081b29] rounded-full overflow-hidden"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src="/adi_subham.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      <motion.h2 
        className="text-3xl font-semibold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Hi, I am <span className="text-blue-400">Aditya</span>
      </motion.h2>
      <motion.p 
        className="text-center font-bold max-w-2xl mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        A final-year Computer Science student at NIST University, Berhampur. 
        I'm passionate about web development, blockchain, and Java programming, with a focus on Full Stack development. 
        I enjoy creating responsive web applications using React, Node.js, and Firebase. I am a core member of the Data Science Club, 
        and love exploring new tech domains and solving problems. My hobbies include coding, cooking, and reading novels.
        I'm dedicated to innovation and crafting impactful digital experiences that thrive on the internet.
      </motion.p>
    </div>
  );
};

export default AboutMe;