'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, BookOpen, Smartphone, CheckCircle2, 
  Gift, BarChart3, Sparkles, Plus, Minus 
} from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How many mock tests are available?',
    answer: 'We offer 50+ full-length NEET mock tests, 200+ chapter-wise tests, and daily practice questions. New tests are added every month to keep the content fresh and aligned with the latest exam pattern.',
    icon: BookOpen,
    color: '#10B981',
  },
  {
    question: 'Are the questions similar to actual NEET exam?',
    answer: 'Yes, all questions are created by experienced NEET educators and follow the exact pattern, difficulty level, and marking scheme of the actual NEET exam. We regularly update our question bank based on recent exam trends.',
    icon: CheckCircle2,
    color: '#10B981',
  },
  {
    question: 'Can I access the platform on mobile?',
    answer: 'Absolutely! Our platform is fully responsive and works seamlessly on all devices - desktop, tablet, and mobile. You can practice anytime, anywhere with the same great experience.',
    icon: Smartphone,
    color: '#10B981',
  },
  {
    question: 'Do you provide detailed solutions?',
    answer: 'Yes, every question comes with a detailed step-by-step solution. For complex topics, we also provide video explanations and concept refreshers to help you understand the underlying principles.',
    icon: Sparkles,
    color: '#10B981',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, you can start with a free trial that includes 3 full-length mock tests and access to 100+ practice questions. No credit card required to get started.',
    icon: Gift,
    color: '#10B981',
  },
  {
    question: 'How is the analytics dashboard helpful?',
    answer: 'Our analytics dashboard tracks your performance across all subjects, identifies weak areas, shows time management patterns, and provides personalized recommendations to improve your score.',
    icon: BarChart3,
    color: '#10B981',
  },
];

export default function FAQSection() {
  const [openItem, setOpenItem] = useState(null);

  return (
    <section id="faq" className="py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #10B981 1px, transparent 0)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-black mb-6 cursor-pointer"
            style={{
              background: 'linear-gradient(90deg, #10B981 0%, #047857 100%)',
              color: '#FFFFFF',
              boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)',
            }}
            data-cursor="pointer"
          >
            <HelpCircle className="w-5 h-5" strokeWidth={2.5} />
            <span>Got Questions?</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-6">
            Frequently Asked
            <br />
            <span 
              className="inline-block"
              style={{
                background: 'linear-gradient(90deg, #10B981 0%, #047857 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our NEET mock test platform
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion 
            type="single" 
            collapsible 
            className="space-y-4"
            onValueChange={(value) => setOpenItem(value)}
          >
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              const isOpen = openItem === `item-${index}`;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-2 rounded-2xl px-6 sm:px-8 transition-all duration-300 overflow-hidden relative group"
                    style={{
                      borderColor: isOpen ? faq.color : '#E5E7EB',
                      backgroundColor: isOpen ? `${faq.color}05` : '#FFFFFF',
                      boxShadow: isOpen ? `0 10px 40px ${faq.color}20` : '0 2px 8px rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                      style={{
                        background: `linear-gradient(135deg, ${faq.color}10 0%, transparent 100%)`,
                      }}
                    />

                    <AccordionTrigger 
                      className="text-left text-base sm:text-lg font-bold text-black hover:no-underline py-6 relative z-10 [&[data-state=open]]:pb-4"
                    >
                      <div className="flex items-start gap-4 pr-4 w-full">
                        {/* Icon Container */}
                        <motion.div
                          animate={{ y: -5, scale: 1.05 }}
                          transition={{ duration: 0.6 }}
                          className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                          style={{
                            backgroundColor: isOpen ? faq.color : `${faq.color}20`,
                          }}
                        >
                          <Icon 
                            className="w-6 h-6"
                            style={{ color: isOpen ? '#FFFFFF' : faq.color }}
                            strokeWidth={2.5}
                          />
                        </motion.div>

                        {/* Question Text */}
                        <span className="flex-1 pt-2">{faq.question}</span>

                        {/* Custom Toggle Icon */}
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1"
                          style={{
                            backgroundColor: isOpen ? faq.color : '#F3F4F6',
                          }}
                        >
                          {isOpen ? (
                            <Minus 
                              className="w-5 h-5"
                              style={{ color: isOpen ? '#FFFFFF' : '#6B7280' }}
                              strokeWidth={2.5}
                            />
                          ) : (
                            <Plus 
                              className="w-5 h-5"
                              style={{ color: '#6B7280' }}
                              strokeWidth={2.5}
                            />
                          )}
                        </motion.div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="text-gray-700 leading-relaxed pb-6 pl-16 pr-4 relative z-10">
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                              className="text-base sm:text-lg"
                            >
                              {faq.answer}
                            </motion.div>

                            {/* Quick Stats for first item */}
                            {index === 0 && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="grid grid-cols-3 gap-3 mt-4"
                              >
                                {[
                                  { value: '50+', label: 'Full Tests' },
                                  { value: '200+', label: 'Chapter Tests' },
                                  { value: 'Daily', label: 'New Questions' },
                                ].map((stat, i) => (
                                  <div
                                    key={i}
                                    className="text-center p-3 rounded-xl"
                                    style={{
                                      backgroundColor: `${faq.color}10`,
                                      border: `1px solid ${faq.color}30`,
                                    }}
                                  >
                                    <div 
                                      className="text-lg font-black"
                                      style={{ color: faq.color }}
                                    >
                                      {stat.value}
                                    </div>
                                    <div className="text-xs text-gray-600 font-semibold">
                                      {stat.label}
                                    </div>
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </motion.div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 rounded-3xl relative overflow-hidden"
            style={{
              backgroundColor: 'rgba(16, 185, 129, 0.05)',
              border: '2px solid rgba(16, 185, 129, 0.2)',
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
              }}
            />

            <div className="relative z-10">
              <h3 className="text-2xl font-black text-black mb-3">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl text-white font-black text-lg"
                style={{
                  background: 'linear-gradient(90deg, #10B981 0%, #047857 100%)',
                  boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)',
                }}
              >
                Contact Support
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
