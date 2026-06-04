import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Enterprise Solutions',
      excerpt: 'Discover how artificial intelligence is reshaping the modern workplace and driving unprecedented efficiency.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    },
    {
      title: '5 Strategies for Sustainable Tech Growth',
      excerpt: 'Learn the key principles for scaling your tech infrastructure without compromising on security or performance.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    },
    {
      title: 'Mastering Cloud Architecture in 2024',
      excerpt: 'A comprehensive guide to building resilient, cloud-native applications that stand the test of time.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
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

  return (
    <section className="py-20 bg-gradient-to-tr from-[#f8fafc] to-[#f1f5f9]">
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
            <motion.article
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
              }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-[0_20px_50px_rgba(79,70,229,0.15)] transition-all duration-500 overflow-hidden flex flex-col group cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-primary-600 shadow-sm">
                  {post.category}
                </span>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                  <h3 className="font-bold text-dark-900 text-lg mb-2 group-hover:text-primary-600 transition-colors">{post.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <button
                  onClick={() => {}}
                  className="inline-flex items-center text-dark-900 font-bold uppercase tracking-widest text-xs group-hover:text-primary-600 transition-colors mt-auto bg-transparent border-none cursor-pointer p-0"
                >
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <motion.button
            whileHover={{ x: 4, y: 4 }}
            className="w-full sm:w-auto px-8 py-4 bg-dark-900 text-white border-2 border-dark-900 shadow-[8px_8px_0_0_#4f46e5] hover:shadow-none transition-all duration-200 text-sm font-bold tracking-widest uppercase rounded-none"
          >
            View All Posts
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
