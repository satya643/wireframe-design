import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const stats = [
    { value: '12K', label: 'Clients' },
    { value: '55%', label: 'Annual growth' },
    { value: '5k', label: 'No of projects' },
    { value: '80%', label: 'Positive ratings' },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-[#f8f9fa] to-[#eef2ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold font-display text-dark-900 mb-4">
            Our business strategy has helped many
            <br />
            businesses across the globe
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive suite of services is designed to tackle your most complex challenges, enabling sustainable growth and maximizing your ROI across all digital channels.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4 mb-16 bg-gradient-to-r from-primary-900 to-dark-900 rounded-2xl px-8 py-10 shadow-xl border border-primary-800 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center w-full sm:w-1/2 md:w-auto mb-6 md:mb-0 md:flex-1 relative z-10"
              >
                <p className="text-primary-200 font-medium mb-2 text-sm md:text-base tracking-widest uppercase">{stat.label}</p>
                <p className="text-white font-display font-bold text-4xl md:text-5xl drop-shadow-lg">
                  {stat.value}
                </p>
              </motion.div>
              {index < stats.length - 1 && (
                <div className="hidden md:block w-px h-16 bg-primary-700/50"></div>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Large Creative Horizontal Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full h-64 sm:h-72 md:h-96 rounded-none shadow-[12px_12px_0_0_#4f46e5] flex items-center justify-center relative overflow-hidden group border-4 border-dark-900"
        >
          <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
          <img src="/images/service_large.jpg" alt="Creative Dashboard" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
