import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqs = [
    {
      question: 'How long does a typical implementation take?',
      answer: 'Depending on the complexity of your requirements, a standard implementation takes between 2 to 4 weeks. We ensure a seamless transition with minimal disruption to your daily operations.',
    },
    {
      question: 'Do you offer ongoing technical support?',
      answer: 'Yes, we provide 24/7 technical support for all our enterprise clients. Our dedicated team is always available to resolve issues and provide guidance on best practices.',
    },
    {
      question: 'Can your platform integrate with our existing tools?',
      answer: 'Absolutely. Our solutions are built with flexibility in mind, offering robust APIs and native integrations with popular CRMs, marketing platforms, and internal tools.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* Left - Image */}
            <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-[400px] sm:h-[500px] bg-gray-200 rounded-none shadow-[12px_12px_0_0_#4f46e5] border-4 border-dark-900 flex items-center justify-center overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
            <img src="/images/faq.jpg" alt="FAQ Support" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
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
                  className="bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden mb-4 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 group"
                >
                  <motion.button
                    onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                    className={`w-full p-6 text-left flex items-center justify-between transition-colors duration-300 ${expandedIndex === index ? 'bg-primary-50' : 'hover:bg-gray-50'}`}
                  >
                    <p className={`font-semibold text-lg transition-colors ${expandedIndex === index ? 'text-primary-700' : 'text-dark-900 group-hover:text-primary-600'}`}>{faq.question}</p>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0, backgroundColor: expandedIndex === index ? '#4f46e5' : '#f3f4f6', color: expandedIndex === index ? '#ffffff' : '#4b5563' }}
                      className="flex-shrink-0 ml-4 p-2 rounded-full transition-colors duration-300"
                    >
                      {expandedIndex === index ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
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
