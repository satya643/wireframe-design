import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    { name: 'Amazon', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Google', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Microsoft', image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { name: 'Netflix', image: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
    { name: 'IBM', image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 uppercase tracking-wider">Trusted By Industry Leaders</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-20"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
              }}
              whileHover={{ scale: 1.1, rotate: [-2, 2, -2, 0], filter: 'drop-shadow(0px 10px 15px rgba(99, 102, 241, 0.4))' }}
              className="flex items-center justify-center cursor-pointer opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
