import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqs = [
    {
      question: 'Lorem ipsum dolor sit amet consectetur',
      answer: 'Lorem ipsum dolor sit amet consectetur. Pulvinar et mattis ut sed. Curabitur cursus et felis sed augue. Vitae venenatis at.',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur',
      answer: 'Lorem ipsum dolor sit amet consectetur. Pulvinar et mattis ut sed. Curabitur cursus et felis sed augue. Vitae venenatis at.',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur',
      answer: 'Lorem ipsum dolor sit amet consectetur. Pulvinar et mattis ut sed. Curabitur cursus et felis sed augue. Vitae venenatis at.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-72 sm:h-80 bg-gray-300 rounded-3xl flex items-center justify-center overflow-hidden"
          >
            <div className="text-gray-500">Image</div>
          </motion.div>

          {/* Right - FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-display text-dark-900 mb-8">
              Frequently asked questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  layout
                  className="bg-gray-50 rounded-lg overflow-hidden"
                >
                  <motion.button
                    onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <p className="font-semibold text-dark-900">{faq.question}</p>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      className="flex-shrink-0 ml-4"
                    >
                      {expandedIndex === index ? (
                        <Minus className="w-5 h-5 text-dark-900" />
                      ) : (
                        <Plus className="w-5 h-5 text-dark-900" />
                      )}
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-gray-200 px-6 py-4"
                      >
                        <p className="text-gray-600">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
