import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const socialIcons = [
    { icon: Facebook, href: 'https://facebook.com', color: 'hover:bg-[#1877F2] hover:border-[#1877F2]' },
    { icon: Twitter, href: 'https://twitter.com', color: 'hover:bg-[#1DA1F2] hover:border-[#1DA1F2]' },
    { icon: Linkedin, href: 'https://linkedin.com', color: 'hover:bg-[#0A66C2] hover:border-[#0A66C2]' },
    { icon: Instagram, href: 'https://instagram.com', color: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:border-transparent' }
  ];

  const footerLinks = [
    { title: 'Company', items: ['About Us', 'Careers', 'Our Story', 'Contact'] },
    { title: 'Services', items: ['Web Development', 'UI/UX Design', 'Cloud Hosting', 'SEO Optimization'] },
    { title: 'Resources', items: ['Blog', 'Help Center', 'Guidelines', 'Community'] },
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
            whileHover={{ x: 4, y: 4 }}
            className="w-full md:w-auto px-8 py-4 bg-white text-dark-900 border-2 border-dark-900 shadow-[8px_8px_0_0_#4f46e5] hover:shadow-none transition-all duration-200 text-sm font-bold tracking-widest uppercase rounded-none"
          >
            Contact Us
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
              <h4 className="font-bold text-dark-900 mb-6 text-sm uppercase tracking-widest relative inline-block">
                {section.title}
                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-600"></span>
              </h4>
              <ul className="space-y-3 text-sm">
                {section.items.map((item, i) => (
                  <motion.li key={i} whileHover={{ x: 5 }}>
                    <button
                      onClick={() => {}}
                      className="text-gray-500 hover:text-primary-600 font-medium transition-colors flex items-center gap-2 bg-transparent border-none cursor-pointer p-0"
                    >
                      <span className="w-1.5 h-1.5 rounded-none bg-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item}
                    </button>
                  </motion.li>
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
            <h4 className="font-bold text-dark-900 mb-6 text-sm uppercase tracking-widest relative inline-block">
              Connect with us
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-600"></span>
            </h4>
            <div className="flex gap-4">
              {socialIcons.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 2, y: 2 }}
                    className={`w-12 h-12 rounded-none bg-white border-2 border-dark-900 shadow-[4px_4px_0_0_#4f46e5] text-dark-900 hover:shadow-none hover:text-white flex items-center justify-center transition-all duration-200 ${social.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
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

