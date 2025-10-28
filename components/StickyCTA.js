'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Mobile Sticky CTA Bar */}
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-black text-white p-4 shadow-lg border-t border-white/10"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="font-bold text-sm">Start Your NEET Prep</div>
                <div className="text-xs text-gray-400">Free trial available</div>
              </div>
              <Button
                size="sm"
                className="bg-white text-black hover:bg-gray-100 rounded-md px-6 shrink-0"
              >
                Get Started
              </Button>
            </div>
          </motion.div>

          {/* Desktop Scroll to Top Button */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={scrollToTop}
            className="hidden md:flex fixed bottom-8 right-8 z-40 w-12 h-12 bg-black text-white rounded-full items-center justify-center shadow-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </>
      )}
    </AnimatePresence>
  );
}
