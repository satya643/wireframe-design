import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Humans are much more smarter than AI',
      excerpt: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'Humans are much more smarter than AI',
      excerpt: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'Humans are much more smarter than AI',
      excerpt: 'Lorem ipsum dolor sit amet consectetur',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-display text-dark-900">Latest blog</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <p className="text-gray-500">Image</p>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-dark-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <a href="/" className="text-dark-900 font-semibold text-sm hover:text-primary-600">
                  learn more →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <button className="w-full sm:w-auto px-8 py-3 bg-[#111] text-white text-sm font-semibold hover:bg-gray-800 transition-colors">
            Button
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
