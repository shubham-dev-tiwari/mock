'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function AnimatedButton({ children, className, variant, ...props }) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        y: -2,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        type: 'spring', 
        stiffness: 400, 
        damping: 17 
      }}
      className="inline-block w-full"
    >
      <Button 
        className={className} 
        variant={variant}
        {...props} 
        data-cursor="pointer"
      >
        {children}
      </Button>
    </motion.div>
  );
}
