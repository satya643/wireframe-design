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
            whileHover={{ x: 4, y: 4 }}
            className="px-8 py-4 bg-white text-black border-2 border-white shadow-[8px_8px_0_0_#4f46e5] hover:shadow-none transition-all duration-200 text-sm font-bold tracking-widest uppercase rounded-none whitespace-nowrap"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
