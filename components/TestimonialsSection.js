'use client';

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, Award, Users } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    score: 'AIR 234',
    image: '👩‍⚕️',
    text: 'The mock tests were incredibly helpful. The interface mimics the actual exam perfectly, which boosted my confidence tremendously.',
    rating: 5,
    improvement: '+85 marks',
  },
  {
    name: 'Rahul Verma',
    score: 'AIR 512',
    image: '👨‍⚕️',
    text: 'Analytics helped me identify weak areas. Within 3 months, I improved my Physics score significantly.',
    rating: 5,
    improvement: '+40 marks in Physics',
  },
  {
    name: 'Ananya Patel',
    score: 'AIR 890',
    image: '👩‍🔬',
    text: 'Best investment for NEET prep. The detailed solutions are better than any coaching institute I tried.',
    rating: 5,
    improvement: '95th percentile',
  },
  {
    name: 'Arjun Reddy',
    score: 'AIR 1,245',
    image: '👨‍🎓',
    text: 'The adaptive learning feature really works! Questions get harder as you improve, keeping you challenged.',
    rating: 5,
    improvement: '+120 marks',
  },
];

const stats = [
  { icon: Users, value: '50K+', label: 'Active Students' },
  { icon: TrendingUp, value: '95%', label: 'Success Rate' },
  { icon: Award, value: '1000+', label: 'Questions' },
  { icon: Star, value: '4.9/5', label: 'Student Rating' },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Bar with Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm" />
                <div className="relative p-6 text-center">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 mx-auto mb-4 bg-white/10 rounded-xl flex items-center justify-center"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="text-3xl lg:text-4xl font-black mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Trusted by Future
            <br />
            <span className="text-gray-400">Doctors</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of successful NEET aspirants who achieved their dreams with our platform.
          </p>
        </motion.div>

        {/* Testimonials Grid - Glassmorphism */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="relative h-full p-8 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden group">
                {/* Quote Icon Background */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-20 h-20" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 mb-6 leading-relaxed text-lg italic relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Improvement Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-semibold mb-6">
                  <TrendingUp className="w-4 h-4" />
                  {testimonial.improvement}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center text-3xl border border-white/20">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm font-semibold">{testimonial.score}</div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
