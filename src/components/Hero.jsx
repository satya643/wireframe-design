import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-orange-50 to-indigo-50 pt-16">
      {/* Right Image Full Bleed on Desktop */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="hidden lg:block absolute top-16 right-0 w-1/2 bottom-0 bg-gray-200 overflow-hidden rounded-bl-[100px] shadow-2xl"
      >
        <img src="/images/hero.png" alt="Hero" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full relative z-10">
        <div className="flex flex-col lg:flex-row min-h-[400px] lg:min-h-[450px]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6 py-16 lg:py-0 lg:pr-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold font-display text-dark-900 leading-tight">
              Great design is
              <br className="hidden md:block" />
              invisible
            </h1>
            <p className="text-lg text-gray-600">
              Crafting intuitive digital experiences that empower businesses to scale globally with cutting-edge technology.
            </p>
            <motion.button
              whileHover={{ x: 4, y: 4 }}
              className="w-full sm:w-auto px-8 py-4 bg-dark-900 text-white border-2 border-dark-900 shadow-[8px_8px_0_0_#4f46e5] hover:shadow-none transition-all duration-200 text-sm font-bold tracking-widest uppercase rounded-none"
            >
              Start Your Journey
            </motion.button>
          </motion.div>

          {/* Right Image on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:hidden w-full h-[350px] bg-gray-200 relative overflow-hidden mt-8 rounded-3xl shadow-xl"
          >
            <img src="/images/hero.png" alt="Hero" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
