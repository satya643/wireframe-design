import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Jacqueline Wright',
      role: 'Cofounder',
      image: '/images/testimonial-person.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur. Elementum nid duis tortor sed. Suspendisse labortis vitae quis vehicula pellentesque sit id',
    },
    {
      name: 'Jacqueline Wright',
      role: 'Cofounder',
      image: '/images/testimonial-person.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur. Elementum nid duis tortor sed. Suspendisse labortis vitae quis vehicula pellentesque sit id',
    },
    {
      name: 'Sarah Johnson',
      role: 'CEO at TechCorp',
      image: '/images/testimonial-person.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur. Elementum nid duis tortor sed. Suspendisse labortis vitae quis vehicula pellentesque sit id',
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      image: '/images/testimonial-person.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur. Elementum nid duis tortor sed. Suspendisse labortis vitae quis vehicula pellentesque sit id',
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 2) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);
  };

  const displayedTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our happy clients
          </h2>
        </motion.div>

        {/* Testimonials Grid with Navigation */}
        <div className="max-w-6xl mx-auto">
          <div className="relative flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-8">
            {/* Left Arrow */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="flex-shrink-0 p-2 rounded-full bg-white border-2 border-gray-300 text-gray-600 hover:border-gray-400 transition-colors shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Testimonials Cards */}
            <div className="w-full flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {displayedTestimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col"
                >
                  {/* Quote Text */}
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 flex-1">
                    {testimonial.text}
                  </p>

                  {/* Author Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                    className="flex items-center gap-3"
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Right Arrow */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="flex-shrink-0 p-2 rounded-full bg-white border-2 border-gray-300 text-gray-600 hover:border-gray-400 transition-colors shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map(
              (_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index * 2)}
                  animate={{
                    width: currentIndex === index * 2 ? 24 : 8,
                    backgroundColor:
                      currentIndex === index * 2 ? '#6b7280' : '#d1d5db',
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-2 rounded-full transition-all"
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
