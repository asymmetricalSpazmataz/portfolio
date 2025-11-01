"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import MorphingPolygon from "./MorphingPolygon";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-emerald-900/20 to-green-900/20"></div>
      
      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>

      {/* Morphing polygons */}
      <MorphingPolygon color="rgba(0, 255, 100, 0.15)" outline={true} delay={0} />
      <MorphingPolygon delay={2} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">Heather</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-4">
              Full Stack Developer & Designer
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              I create beautiful, functional, and user-friendly websites and applications
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <FaTwitter />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-teal-500 text-teal-500 rounded-full font-semibold hover:bg-teal-500 hover:text-white transition-all duration-300"
            >
              View Work
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="text-gray-400 hover:text-primary transition-colors">
          <HiArrowDown className="text-4xl animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

