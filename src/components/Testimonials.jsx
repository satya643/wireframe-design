import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Jacqueline Wright',
      role: 'Cofounder at Innovate',
      image: 'https://i.pravatar.cc/150?img=1',
      text: 'Working with this team has completely transformed our operational efficiency. Their strategic insights and technical execution are truly unparalleled in the industry.',
    },
    {
      name: 'David Chen',
      role: 'CTO at TechFlow',
      image: 'https://i.pravatar.cc/150?img=11',
      text: 'The level of professionalism and the quality of the deliverables exceeded our highest expectations. They are not just vendors; they are true strategic partners.',
    },
    {
      name: 'Sarah Johnson',
      role: 'CEO at MarketScope',
      image: 'https://i.pravatar.cc/150?img=5',
      text: 'Since implementing their solutions, we have seen a 40% increase in productivity. The intuitive design and robust features have made adoption incredibly easy for our team.',
    },
    {
      name: 'Michael Torres',
      role: 'Product Manager',
      image: 'https://i.pravatar.cc/150?img=8',
      text: 'Their agile approach and dedication to solving complex problems have been instrumental in our successful product launch. I highly recommend their services to any scaling startup.',
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
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-[#fcfcfc]">
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
              whileHover={{ scale: 1.1, backgroundColor: '#4f46e5', color: 'white', boxShadow: '0 0 15px rgba(79, 70, 229, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="flex-shrink-0 p-3 rounded-full bg-white border border-gray-100 text-gray-500 hover:border-transparent transition-all shadow-sm hover:shadow-xl z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Testimonials Cards */}
            <div className="w-full flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {displayedTestimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, boxShadow: '0 20px 50px rgba(79,70,229,0.12)' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col relative overflow-hidden group transition-all duration-500"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-50 to-transparent rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-700"></div>
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
                      className="w-14 h-14 rounded-full border-2 border-primary-50 object-cover mr-4 shadow-sm"
                    />
                    <div>
                      <h4 className="font-bold text-dark-900 uppercase tracking-widest text-xs">{testimonial.name}</h4>
                      <p className="text-gray-500 text-xs font-semibold uppercase">{testimonial.role}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Right Arrow */}
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: '#4f46e5', color: 'white', boxShadow: '0 0 15px rgba(79, 70, 229, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="flex-shrink-0 p-3 rounded-full bg-white border border-gray-100 text-gray-500 hover:border-transparent transition-all shadow-sm hover:shadow-xl z-10"
            >
              <ChevronRight className="w-6 h-6" />
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
