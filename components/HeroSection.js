'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, Sparkles, TrendingUp, Zap, 
  CheckCircle2, Award, BookOpen, Users, Brain, Star, Target, Trophy
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from '@/components/MagneticButton';

export default function HeroSection() {
  const [hoveredStat, setHoveredStat] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const achievements = [
    { icon: CheckCircle2, text: '50K+ Active Students', color: '#10B981' },
    { icon: TrendingUp, text: '95% Success Rate', color: '#10B981' },
    { icon: Trophy, text: 'Top Ranked Platform', color: '#10B981' },
    { icon: Award, text: 'Expert Guidance', color: '#10B981' },
    { icon: Brain, text: 'AI-Powered Learning', color: '#10B981' },
  ];

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.15]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#10B981"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Glowing Orbs with Mouse Parallax */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
          backgroundColor: 'rgba(16, 185, 129, 0.3)',
        }}
        className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        style={{
          x: mousePosition.x * -0.02,
          y: mousePosition.y * -0.02,
          backgroundColor: 'rgba(16, 185, 129, 0.2)',
        }}
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl"
      />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{ 
            backgroundColor: '#10B981',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-32">
        <div className="max-w-6xl mx-auto text-center">
          {/* Scrolling Achievement Badges */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 overflow-hidden"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
          >
           
          </motion.div>

          {/* Premium Badge with Pulse */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div 
              className="inline-flex items-center gap-3 px-8 py-4 text-white rounded-full text-sm font-black mb-8 shadow-2xl relative overflow-hidden cursor-pointer"
              style={{
                background: 'linear-gradient(90deg, #10B981 0%, #047857 100%)',
              }}
              data-cursor="pointer"
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
                }}
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />

              <Sparkles className="w-5 h-5 relative z-10" />
              <span className="relative z-10">🎉 Join 50,000+ Future Doctors</span>

              {/* Pulse rings */}
              <motion.span
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: '#10B981', opacity: 0.75 }}
                animate={{ scale: [1, 1.5], opacity: [0.75, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.span
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: '#10B981', opacity: 0.75 }}
                animate={{ scale: [1, 1.5], opacity: [0.75, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Main Headline with Letter Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black mb-6 leading-[1.05]"
          >
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="inline-block"
              style={{
                background: 'linear-gradient(90deg, #000000 0%, #10B981 50%, #000000 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Crack NEET
            </motion.span>
            <br />
            <span className="text-gray-800">Like a Pro</span>
          </motion.h1>

          {/* Animated Subheadline with Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            <div className="flex flex-wrap justify-center gap-3 items-center mb-4">
              <motion.span
                whileHover={{ scale: 1.1, color: '#10B981' }}
                className="inline-flex items-center gap-2 cursor-pointer"
                data-cursor="pointer"
              >
                <Zap className="w-5 h-5" style={{ color: '#10B981' }} />
                AI-powered tests
              </motion.span>
              <span style={{ color: '#10B981' }}>•</span>
              <motion.span
                whileHover={{ scale: 1.1, color: '#10B981' }}
                className="inline-flex items-center gap-2 cursor-pointer"
                data-cursor="pointer"
              >
                <TrendingUp className="w-5 h-5" style={{ color: '#10B981' }} />
                Real-time analytics
              </motion.span>
              <span style={{ color: '#10B981' }}>•</span>
              <motion.span
                whileHover={{ scale: 1.1, color: '#10B981' }}
                className="inline-flex items-center gap-2 cursor-pointer"
                data-cursor="pointer"
              >
                <Users className="w-5 h-5" style={{ color: '#10B981' }} />
                Expert guidance
              </motion.span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl font-bold mb-12"
            style={{ color: '#10B981' }}
          >
            Your success is our mission 🚀
          </motion.p>

          {/* Magnetic CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <MagneticButton
              size="lg"
              className="group relative text-white rounded-2xl px-12 py-8 text-lg font-black transition-all duration-300 w-full sm:w-auto overflow-hidden"
              style={{
                background: 'linear-gradient(90deg, #10B981 0%, #047857 100%)',
                boxShadow: '0 20px 60px rgba(16, 185, 129, 0.4)',
              }}
            >
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)',
                }}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
              <span className="relative z-10 flex items-center gap-3">
                <BookOpen className="w-6 h-6" strokeWidth={2.5} />
                Start Free Test
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
                </motion.div>
              </span>
            </MagneticButton>

            <MagneticButton
              size="lg"
              variant="outline"
              className="border-2 border-black text-black hover:bg-black hover:text-white rounded-2xl px-12 py-8 text-lg font-black transition-all duration-300 w-full sm:w-auto"
            >
              <span className="flex items-center gap-3">
                 Watch Demo
              </span>
            </MagneticButton>
          </motion.div>

          {/* Interactive Stats Cards with Icons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
          >
            {[
              { number: '50K+', label: 'Students', icon: Users, color: '#10B981' },
              { number: '1000+', label: 'Questions', icon: BookOpen, color: '#10B981' },
              { number: '95%', label: 'Success', icon: Target, color: '#10B981' },
              { number: '4.9★', label: 'Rating', icon: Star, color: '#10B981' },
            ].map((stat, index) => {
              const Icon = stat.icon;
              const isHovered = hoveredStat === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{
                    y: -15,
                    scale: 1.05,
                  }}
                  onHoverStart={() => setHoveredStat(index)}
                  onHoverEnd={() => setHoveredStat(null)}
                  className="relative bg-white border-2 border-gray-200 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                  style={{
                    borderColor: isHovered ? stat.color : '#E5E7EB',
                    boxShadow: isHovered ? `0 20px 60px ${stat.color}40` : '0 10px 30px rgba(0, 0, 0, 0.1)',
                  }}
                  data-cursor="pointer"
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(135deg, ${stat.color}10 0%, transparent 100%)`,
                    }}
                  />

                  {/* Icon */}
                  <motion.div
                    animate={{ y: -5, scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 mb-3"
                  >
                    <Icon
                      className="w-8 h-8 mx-auto"
                      style={{ color: isHovered ? stat.color : '#6B7280' }}
                      strokeWidth={2.5}
                    />
                  </motion.div>

                  <div 
                    className="relative z-10 text-4xl font-black mb-2 transition-colors"
                    style={{ color: isHovered ? stat.color : '#000000' }}
                  >
                    {stat.number}
                  </div>
                  <div className="relative z-10 text-sm text-gray-600 font-semibold group-hover:text-gray-800 transition-colors">
                    {stat.label}
                  </div>

                  {/* Hover glow effect */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 rounded-3xl"
                        style={{
                          boxShadow: `inset 0 0 20px ${stat.color}20`,
                        }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        
      </motion.div>
    </section>
  );
}
