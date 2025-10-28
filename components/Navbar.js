// components/Navbar.js - UPDATED
'use client';

import { useState, useEffect } from 'react';
import { Menu, X, FileText, Search, Bell, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import MagneticButton from '@/components/MagneticButton';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const navLinks = [
    { label: 'Mock Tests', href: '/mock-tests', icon: FileText },
  ];

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 300, damping: 30 }}
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-lg' 
            : 'bg-white/80 backdrop-blur-md'
        }`}
        style={{
          borderBottom: scrolled ? '1px solid rgba(16, 185, 129, 0.1)' : '1px solid rgba(0, 0, 0, 0.05)',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/">
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-3 cursor-pointer">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #10B981 0%, #047857 100%)',
                    }}
                  >
                    <Trophy className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span 
                      className="text-2xl font-black transition-colors"
                      style={{ color: scrolled ? '#10B981' : '#000000' }}
                    >
                      NEET
                    </span>
                    <span className="text-xs font-bold text-gray-600">Mock Tests</span>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link key={link.label} href={link.href}>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -2 }}
                      className="group flex items-center gap-2 text-sm font-bold text-gray-700 transition-colors relative cursor-pointer"
                      onMouseEnter={(e) => e.currentTarget.style.color = '#10B981'}
                      onMouseLeave={(e) => e.currentTarget.style.color = scrolled ? '#374151' : '#4B5563'}
                    >
                      <Icon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={2.5} />
                      {link.label}
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5"
                        style={{ backgroundColor: '#10B981' }}
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/test-instructions/1">
                <MagneticButton
                  size="sm"
                  className="text-white rounded-2xl px-8 py-3 text-sm font-black"
                  style={{
                    background: 'linear-gradient(90deg, #10B981 0%, #047857 100%)',
                    boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)',
                  }}
                >
                  <span className="flex items-center gap-2">
                    Start Practice
                  </span>
                </MagneticButton>
              </Link>
            </div>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all"
              style={{
                backgroundColor: isOpen ? '#10B981' : '#F3F4F6',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <X className="w-6 h-6 text-white" strokeWidth={2.5} />
                ) : (
                  <Menu className="w-6 h-6 text-gray-800" strokeWidth={2.5} />
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Tablet Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm top-20"
                onClick={() => setIsOpen(false)}
              />
              
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                className="absolute top-full left-4 right-4 mt-2 bg-white rounded-3xl shadow-2xl overflow-hidden"
                style={{ border: '2px solid rgba(16, 185, 129, 0.2)' }}
              >
                <div className="p-6 space-y-2">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <Link key={link.label} href={link.href}>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-4 px-6 py-4 text-base font-bold text-gray-700 hover:bg-gray-50 rounded-2xl transition-all cursor-pointer"
                        >
                          <div 
                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                          >
                            <Icon className="w-5 h-5" style={{ color: '#10B981' }} strokeWidth={2.5} />
                          </div>
                          {link.label}
                        </motion.div>
                      </Link>
                    );
                  })}
                  
                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <Link href="/test-instructions/1">
                      <Button
                        className="w-full text-white rounded-2xl py-6 text-base font-black"
                        style={{
                          background: 'linear-gradient(90deg, #10B981 0%, #047857 100%)',
                        }}
                        onClick={() => setIsOpen(false)}
                      >
                        Start Practice
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-lg"
        style={{
          paddingTop: 'env(safe-area-inset-top)',
          borderBottom: '1px solid rgba(16, 185, 129, 0.1)',
        }}
      >
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/">
              <motion.div className="flex items-center gap-2.5" whileTap={{ scale: 0.95 }}>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
                  style={{ background: 'linear-gradient(135deg, #10B981 0%, #047857 100%)' }}
                >
                  <Trophy className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-xl font-black" style={{ color: '#10B981' }}>NEET</span>
                  <span className="text-[10px] font-bold text-gray-500">Mock Tests</span>
                </div>
              </motion.div>
            </Link>

            <div className="flex items-center gap-2">
              <Link href="/mock-tests">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                >
                  <FileText className="w-5 h-5" style={{ color: '#10B981' }} strokeWidth={2.5} />
                </motion.button>
              </Link>

              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: isOpen ? 'linear-gradient(135deg, #10B981 0%, #047857 100%)' : 'rgba(16, 185, 129, 0.1)',
                }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <X className="w-5 h-5 text-white" strokeWidth={2.5} />
                  ) : (
                    <Menu className="w-5 h-5" style={{ color: '#10B981' }} strokeWidth={2.5} />
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed inset-0 bg-white z-50"
              style={{ top: 'calc(env(safe-area-inset-top) + 64px)' }}
            >
              <div className="h-full overflow-y-auto px-4 py-6">
                <div className="space-y-2 mb-6">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <Link key={link.label} href={link.href}>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + index * 0.05 }}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-4 p-4 rounded-2xl transition-all active:scale-95"
                          style={{ backgroundColor: 'rgba(16, 185, 129, 0.05)' }}
                        >
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                          >
                            <Icon className="w-6 h-6" style={{ color: '#10B981' }} strokeWidth={2.5} />
                          </div>
                          <div className="font-black text-black text-base">{link.label}</div>
                        </motion.div>
                      </Link>
                    );
                  })}
                </div>

                <Link href="/test-instructions/1">
                  <Button
                    className="w-full text-white rounded-2xl py-6 text-lg font-black"
                    style={{
                      background: 'linear-gradient(90deg, #10B981 0%, #047857 100%)',
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    Start Practice
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
