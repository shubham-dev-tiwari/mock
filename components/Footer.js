'use client';

import { 
  Facebook, Twitter, Instagram, Youtube, Mail, Send,
  Sparkles, Trophy, Users, CheckCircle2,
  MapPin, Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState } from 'react';

const footerLinks = {
  Product: [
    { name: 'Features', href: '#features' },
    { name: 'Mock Tests', href: '#mock-tests' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ],
  Company: [
    { name: 'About Us', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ],
  Resources: [
    { name: 'Study Materials', href: '#materials' },
    { name: 'Test Series', href: '#series' },
    { name: 'Success Stories', href: '#testimonials' },
    { name: 'NEET Guide', href: '#guide' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Refund Policy', href: '#refund' },
    { name: 'Cookie Policy', href: '#cookies' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook', color: '#1877F2' },
  { icon: Twitter, href: '#', label: 'Twitter', color: '#1DA1F2' },
  { icon: Instagram, href: '#', label: 'Instagram', color: '#E4405F' },
  { icon: Youtube, href: '#', label: 'YouTube', color: '#FF0000' },
];

const achievements = [
  { icon: Users, value: '50K+', label: 'Students' },
  { icon: CheckCircle2, value: '95%', label: 'Success Rate' },
  { icon: Trophy, value: '#1', label: 'NEET Platform' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #10B981 1px, transparent 0)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Achievements Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12 border-b"
          style={{ borderColor: 'rgba(16, 185, 129, 0.2)' }}
        >
          <div className="grid grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="text-center cursor-pointer"
                >
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(4, 120, 87, 0.2) 100%)',
                      border: '2px solid rgba(16, 185, 129, 0.3)',
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: '#10B981' }} strokeWidth={2.5} />
                  </div>
                  <div className="text-3xl font-black mb-1" style={{ color: '#10B981' }}>
                    {achievement.value}
                  </div>
                  <div className="text-sm text-gray-400 font-semibold">{achievement.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #10B981 0%, #047857 100%)',
                  }}
                >
                  <Trophy className="w-7 h-7 text-white relative z-10" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-2xl font-black" style={{ color: '#10B981' }}>
                    NEET
                  </span>
                  <span className="text-sm font-bold text-gray-500">Mock Tests</span>
                </div>
              </div>

              <p className="text-gray-400 text-base leading-relaxed mb-6">
                Empowering NEET aspirants with AI-powered practice tools, real-time analytics, 
                and expert guidance to achieve their dreams.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4" style={{ color: '#10B981' }} strokeWidth={2.5} />
                  <span>Bangalore, India</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <Mail className="w-4 h-4" style={{ color: '#10B981' }} strokeWidth={2.5} />
                  <span>support@neetmock.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <Clock className="w-4 h-4" style={{ color: '#10B981' }} strokeWidth={2.5} />
                  <span>24/7 Support Available</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-all relative overflow-hidden group"
                      style={{
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        border: '2px solid rgba(16, 185, 129, 0.2)',
                      }}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 relative z-10 group-hover:text-white transition-colors" style={{ color: '#10B981' }} strokeWidth={2.5} />
                      
                      {/* Hover background */}
                      <motion.div
                        className="absolute inset-0"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        style={{ backgroundColor: social.color }}
                      />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Link Columns */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >
                  <h3 className="font-black text-white mb-6 text-lg">{category}</h3>
                  <ul className="space-y-3">
                    {links.map((link, linkIndex) => (
                      <motion.li
                        key={linkIndex}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors text-sm font-semibold flex items-center gap-2 group"
                        >
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileHover={{ opacity: 1, scale: 1 }}
                            className="w-1 h-1 rounded-full"
                            style={{ backgroundColor: '#10B981' }}
                          />
                          {link.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-3xl relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(4, 120, 87, 0.05) 100%)',
              border: '2px solid rgba(16, 185, 129, 0.2)',
            }}
          >
            {/* Decorative shine */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(16, 185, 129, 0.1) 50%, transparent 100%)',
              }}
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-6 h-6" style={{ color: '#10B981' }} strokeWidth={2.5} />
                  <h3 className="text-2xl font-black text-white">Stay Updated</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Get the latest NEET updates, study tips, and exclusive content delivered to your inbox.
                </p>
              </div>

              <form onSubmit={handleSubscribe} className="relative">
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={2.5} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border-2 border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#10B981] transition-all"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-4 rounded-2xl text-white font-black flex items-center gap-2"
                    style={{
                      background: 'linear-gradient(90deg, #10B981 0%, #047857 100%)',
                      boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)',
                    }}
                    disabled={subscribed}
                  >
                    {subscribed ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" strokeWidth={2.5} />
                        <span className="hidden sm:inline">Subscribed!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" strokeWidth={2.5} />
                        <span className="hidden sm:inline">Subscribe</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'rgba(16, 185, 129, 0.2)' }}
        >
          <p className="text-gray-400 text-sm font-semibold">
            © {new Date().getFullYear()} NEET Mock Tests. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-400 text-sm font-semibold">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{ color: '#EF4444' }}
            >
              ❤️
            </motion.span>
            <span>for NEET aspirants across India</span>
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 36 36'%3E%3Cpath fill='%23FF9933' d='M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z'/%3E%3Cpath fill='%23128807' d='M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4H4z'/%3E%3Cpath fill='%23fff' d='M0 13h36v10H0z'/%3E%3Ccircle cx='18' cy='18' r='2' fill='%23000088'/%3E%3C/svg%3E"
              alt="India"
              className="w-5 h-5 rounded"
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
