import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Features = () => {
  const trustPoints = [
    'Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.',
    'Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.',
    'Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.',
    'Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.',
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-display text-dark-900 mb-4">
            Why our clients trust us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed. Suspendisse lobortis vitae quis vehicula
            <br />
            pellentesque sit id. Urna posuere consequat velit vulputate faucibus pretium arcu accumsan sit. Vel venenatis sapien.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Collage Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative aspect-square w-full max-w-[450px] mx-auto "
          >
            <div className="absolute top-0 left-0 w-[60%] aspect-square bg-[#d9d9d9]">
            </div>
            <div className="absolute top-[15%] right-0 w-[35%] h-[50%] bg-[#d9d9d9]">
            </div>
            <div className="absolute bottom-0 left-[15%] w-[50%] h-[35%] bg-[#d9d9d9]">
            </div>
          </motion.div>

          {/* Right - Trust Points */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <CheckCircle className="w-5 h-5 text-[#4a7268] flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 font-medium text-sm leading-relaxed">{point}</p>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto mt-8 px-8 py-3 bg-[#111] text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              Button
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
