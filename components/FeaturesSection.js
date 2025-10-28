'use client';

import { useState, useRef } from 'react';
import { 
  Clock, BarChart3, Brain, Target, Award, Zap, BookOpen, Users,
  Sparkles, Rocket, Star, ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    icon: Clock,
    title: 'Timed Mock Tests',
    description: 'Experience real exam conditions with precisely timed full-length tests',
    gradientFrom: '#10B981',
    gradientTo: '#047857',
    stats: '50+ Tests',
    benefits: ['Exam-like interface', 'Auto-submit', 'Time tracking'],
  },
  {
    icon: BarChart3,
    title: 'AI-Powered Analytics',
    description: 'Track your progress with intelligent performance insights',
    gradientFrom: '#000000',
    gradientTo: '#374151',
    stats: 'Real-time',
    benefits: ['Score trends', 'Weak areas', 'Improvement tips'],
  },
  {
    icon: Brain,
    title: 'Adaptive Learning',
    description: 'Smart AI adapts question difficulty based on your performance',
    gradientFrom: '#10B981',
    gradientTo: '#047857',
    stats: 'AI-Powered',
    benefits: ['Personalized', 'Dynamic difficulty', 'Smart practice'],
  },
  {
    icon: Target,
    title: 'Goal Tracking',
    description: 'Set targets and monitor your improvement journey daily',
    gradientFrom: '#1F2937',
    gradientTo: '#111827',
    stats: 'Custom Goals',
    benefits: ['Daily targets', 'Progress tracking', 'Milestone rewards'],
  },
  {
    icon: Award,
    title: 'Leaderboards',
    description: 'Compete with peers nationwide and climb the rankings',
    gradientFrom: '#10B981',
    gradientTo: '#047857',
    stats: 'National Rank',
    benefits: ['All India rank', 'State rank', 'Batch comparison'],
  },
  {
    icon: BookOpen,
    title: 'Study Material',
    description: 'Access comprehensive notes, formulas, and video lectures',
    gradientFrom: '#000000',
    gradientTo: '#374151',
    stats: '1000+ Topics',
    benefits: ['PDF notes', 'Video lectures', 'Quick revision'],
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: '24/7 doubt solving by NEET toppers and experts',
    gradientFrom: '#10B981',
    gradientTo: '#047857',
    stats: '24/7 Available',
    benefits: ['Live chat', 'Video calls', 'Response in 2hrs'],
  },
  {
    icon: Rocket,
    title: 'Quick Revision',
    description: 'Smart flashcards and MCQ practice for last-minute prep',
    gradientFrom: '#1F2937',
    gradientTo: '#111827',
    stats: 'On-the-go',
    benefits: ['Flashcards', 'Quick MCQs', 'Formula sheets'],
  },
];

export default function SwipeableFeaturesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const constraintsRef = useRef(null);

  const handleDragEnd = (event, info) => {
    const threshold = 50;
    
    if (info.offset.x < -threshold && currentIndex < features.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (info.offset.x > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #10B981 1px, transparent 0)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-white rounded-full text-xs sm:text-sm font-black mb-6 sm:mb-8 shadow-lg cursor-pointer"
            style={{
              background: 'linear-gradient(90deg, #10B981 0%, #047857 100%)',
              boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)',
            }}
          >
            <Zap className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
            <span>Powerful Features</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-4 sm:mb-6 px-4 leading-tight">
            Everything You Need
            <br />
            <span 
              style={{
                background: 'linear-gradient(90deg, #10B981 0%, #047857 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              In One Platform
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Built specifically for NEET aspirants with features that actually help you improve
          </p>
        </motion.div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group cursor-pointer"
              >
                <div
                  className="rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${feature.gradientFrom} 0%, ${feature.gradientTo} 100%)`,
                  }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)',
                    }}
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  />

                  {/* Icon with backdrop */}
                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mb-5 lg:mb-6"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" strokeWidth={2.5} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl lg:text-2xl font-black text-white mb-3">
                      {feature.title}
                    </h3>

                    <p className="text-sm lg:text-base text-white/90 mb-4 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Stats */}
                    <div 
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-4"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <Star className="w-4 h-4 text-white" strokeWidth={2.5} />
                      <span className="text-white">{feature.stats}</span>
                    </div>

                    {/* Benefits - Show on hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-2 pt-4"
                          style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}
                        >
                          {feature.benefits.map((benefit, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center gap-2 text-sm text-white/90"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-white" />
                              <span>{benefit}</span>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Arrow indicator */}
                    <motion.div
                      className="absolute bottom-6 right-6"
                      animate={{ x: isHovered ? 5 : 0 }}
                    >
                      <ChevronRight className="w-5 h-5 text-white/70" strokeWidth={2.5} />
                    </motion.div>
                  </div>

                  {/* Decorative corner */}
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Card Stack */}
        <div className="md:hidden" ref={constraintsRef}>
          <div className="relative">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              className="space-y-4"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = index === currentIndex;
                const isPast = index < currentIndex;
                
                return (
                  <motion.div
                    key={index}
                    animate={{
                      scale: isActive ? 1 : 0.95,
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : isPast ? -20 : 20,
                      display: isActive ? 'block' : 'none',
                    }}
                    transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
                  >
                    <div
                      className="rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${feature.gradientFrom} 0%, ${feature.gradientTo} 100%)`,
                        minHeight: '450px',
                      }}
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)',
                        }}
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                      />

                      {/* Large icon background - decorative */}
                      <div className="absolute -bottom-8 -right-8 opacity-5">
                        <Icon className="w-40 h-40 sm:w-48 sm:h-48" strokeWidth={1} />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 flex flex-col h-full">
                        {/* Icon and Stats row */}
                        <div className="flex items-start justify-between mb-6">
                          <div
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center"
                            style={{
                              backgroundColor: 'rgba(255, 255, 255, 0.2)',
                              backdropFilter: 'blur(10px)',
                            }}
                          >
                            <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.5} />
                          </div>

                          {/* Stats badge */}
                          <div
                            className="px-4 py-2 rounded-full"
                            style={{
                              backgroundColor: 'rgba(255, 255, 255, 0.2)',
                              backdropFilter: 'blur(10px)',
                            }}
                          >
                            <div className="flex items-center gap-2">
                              <Star className="w-4 h-4 text-white" strokeWidth={2.5} />
                              <span className="text-sm font-bold text-white">{feature.stats}</span>
                            </div>
                          </div>
                        </div>

                        {/* Title and Description */}
                        <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 sm:mb-4 leading-tight">
                          {feature.title}
                        </h3>

                        <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed">
                          {feature.description}
                        </p>

                        {/* Benefits */}
                        <div className="space-y-3 sm:space-y-4 mb-6">
                          <div className="text-xs sm:text-sm font-bold text-white/70 uppercase tracking-wide mb-3">
                            What you get
                          </div>
                          {feature.benefits.map((benefit, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center gap-3 p-3 sm:p-4 rounded-xl"
                              style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                              }}
                            >
                              <div className="w-2 h-2 rounded-full flex-shrink-0 bg-white" />
                              <span className="text-sm sm:text-base text-white font-semibold">
                                {benefit}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Learn more button */}
                        <motion.button
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-4 rounded-xl font-bold text-base sm:text-lg flex items-center justify-center gap-2 mt-auto"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(10px)',
                            color: '#FFFFFF',
                          }}
                        >
                          <span>Explore Feature</span>
                          <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
                        </motion.button>
                      </div>

                      {/* Decorative gradient blob */}
                      <div 
                        className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 rounded-full blur-3xl"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {features.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="rounded-full transition-all"
                style={{
                  width: index === currentIndex ? '32px' : '8px',
                  height: '8px',
                  backgroundColor: index === currentIndex ? '#10B981' : '#E5E7EB',
                }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Card counter */}
          <div className="text-center mt-4">
            <span className="text-sm font-bold text-gray-600">
              {currentIndex + 1} of {features.length}
            </span>
          </div>

          {/* Swipe hint */}
          <AnimatePresence>
            {currentIndex === 0 && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-gray-500 text-sm mt-4 flex items-center justify-center gap-2"
              >
                <motion.span
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  👉
                </motion.span>
                <span>Swipe to see more</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
