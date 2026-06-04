import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Features = () => {
  const trustPoints = [
    'Industry-leading security protocols protecting your data.',
    '24/7 dedicated customer support and technical assistance.',
    'Seamless integration with your existing workflow and tools.',
    'Regular updates and continuous performance optimizations.',
  ];

  return (
    <section id="features" className="py-20 bg-[#fafafa]">
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
            We combine industry expertise with innovative technology to deliver solutions that drive measurable results. Our proven methodologies ensure your business stays ahead of the curve.
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
            <motion.div whileHover={{ scale: 1.05 }} className="absolute top-0 left-0 w-[60%] aspect-square bg-white rounded-3xl shadow-2xl overflow-hidden z-20 border-4 border-white">
              <img src="/images/feature1.png" alt="Feature 1" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="absolute top-[10%] right-0 w-[45%] aspect-[4/5] bg-white rounded-3xl shadow-xl overflow-hidden z-10 border-4 border-white">
              <img src="/images/feature2.png" alt="Feature 2" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="absolute bottom-0 left-[20%] w-[55%] aspect-video bg-white rounded-3xl shadow-2xl overflow-hidden z-30 border-4 border-white">
              <img src="/images/feature3.png" alt="Feature 3" className="w-full h-full object-cover" />
            </motion.div>
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
              whileHover={{ x: 4, y: 4 }}
              className="w-full sm:w-auto mt-8 px-8 py-4 bg-dark-900 text-white border-2 border-dark-900 shadow-[8px_8px_0_0_#4f46e5] hover:shadow-none transition-all duration-200 text-sm font-bold tracking-widest uppercase rounded-none"
            >
              Explore Features
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
