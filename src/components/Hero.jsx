import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative bg-[#f5f5f5] pt-16">
      {/* Right Image Full Bleed on Desktop */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="hidden lg:block absolute top-16 right-0 w-1/2 bottom-0 bg-[#cccccc] overflow-hidden"
      >
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
              Lorem ipsum dolor sit amet constreteur
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3 bg-[#111] text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              Button
            </motion.button>
          </motion.div>

          {/* Right Image on Mobile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:hidden w-full h-[300px] bg-[#cccccc] relative overflow-hidden mt-8"
          >
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
