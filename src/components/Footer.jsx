import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const socialIcons = [Facebook, Twitter, Linkedin, Instagram];

  const footerLinks = [
    { title: 'Heading', items: ['Link here', 'Link here', 'Link here', 'Link here'] },
    { title: 'Heading', items: ['Link here', 'Link here', 'Link here', 'Link here'] },
    { title: 'Heading', items: ['Link here', 'Link here', 'Link here', 'Link here'] },
  ];

  return (
    <footer className="bg-gray-100">
      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-dark-900 text-white rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-1">
              Need more information?
            </h3>
            <p className="text-gray-400 text-sm">
              Write your concern to us and our specialist will get back to you.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto px-8 py-3 bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors whitespace-nowrap border border-gray-300"
          >
            Button
          </motion.button>
        </motion.div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-4">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12">
          {/* Brand / Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-3"
          >
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-12 h-12 rounded-full mb-4 object-cover"
            />
            <p className="text-sm text-gray-500 leading-relaxed">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sintelle officia consequat.
            </p>
          </motion.div>

          {/* Footer Link Columns */}
          {footerLinks.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="col-span-1 md:col-span-2"
            >
              <h4 className="font-semibold text-dark-900 mb-4 text-sm">{section.title}</h4>
              <ul className="space-y-2 text-sm">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a href="/" className="text-gray-500 hover:text-dark-900 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Connect with us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-3"
          >
            <h4 className="font-semibold text-dark-900 mb-4 text-sm">Connect with us</h4>
            <div className="flex gap-3">
              {socialIcons.map((Icon, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-gray-300 text-gray-600 hover:bg-gray-400 hover:text-white flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="border-t border-gray-200 py-6 text-center text-sm text-gray-400"
      >
        <p>© 2024 Your Company. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
