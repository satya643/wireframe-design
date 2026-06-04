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
    <section id="services" className="py-20 bg-gray-50">
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
            Lorem ipsum dolor sit amet consectetur. Elementum nid duis tortor sed. Suspendisse
            <br />
            labortis vitae quis vehicula pellentesque sit id
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4 mb-16 bg-[#fcfcfc] rounded-xl px-4 py-8 shadow-sm border border-gray-100"
        >
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center w-full sm:w-1/2 md:w-auto mb-6 md:mb-0 md:flex-1"
              >
                <p className="text-dark-900 font-bold mb-2 text-base md:text-lg">{stat.label}</p>
                <p className="text-gray-600 font-semibold text-sm">
                  {stat.value}
                </p>
              </motion.div>
              {index < stats.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-gray-200"></div>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Large Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full h-64 sm:h-72 md:h-80 bg-[#d9d9d9] flex items-center justify-center relative overflow-hidden"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
