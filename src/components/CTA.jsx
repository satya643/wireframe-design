import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-16 bg-black text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-3xl font-bold font-display mb-2">
              Need more information?
            </h3>
            <p className="text-gray-300">
              Write your concern to us and our specialist will get back to you
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Button
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
