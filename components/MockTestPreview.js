// components/InteractiveQuizSection.js - WITH LINK TO TEST
'use client';

import { useState } from 'react';
import Link from 'next/link'; // ADD THIS
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle2, XCircle, BookmarkPlus, ChevronRight, Timer } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const sampleQuestions = [
  {
    id: 1,
    question: 'Which organelle is known as the powerhouse of the cell?',
    options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi Apparatus'],
    correctAnswer: 1,
    subject: 'Biology',
    difficulty: 'Easy',
  },
  {
    id: 2,
    question: 'What is the SI unit of electric current?',
    options: ['Volt', 'Ampere', 'Ohm', 'Watt'],
    correctAnswer: 1,
    subject: 'Physics',
    difficulty: 'Easy',
  },
  {
    id: 3,
    question: 'Which gas is most abundant in Earth\'s atmosphere?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
    correctAnswer: 2,
    subject: 'Chemistry',
    difficulty: 'Easy',
  },
];

export default function InteractiveQuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [bookmarked, setBookmarked] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);

  const question = sampleQuestions[currentQuestion];

  const handleNext = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setBookmarked(false);
    }
  };

  const handleCheck = () => {
    setShowResult(true);
    setAnswered(answered + 1);
    if (selectedAnswer === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const getSubjectColor = (subject) => {
    const colors = {
      Biology: '#10B981',
      Physics: '#3B82F6',
      Chemistry: '#8B5CF6',
    };
    return colors[subject] || '#6B7280';
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      Easy: '#10B981',
      Medium: '#F59E0B',
      Hard: '#EF4444',
    };
    return colors[difficulty] || '#6B7280';
  };

  return (
    <section id="mock-tests" className="py-20 lg:py-32 bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)' }}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
      />

      {/* Grid pattern overlay */}
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
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-5 py-3 text-white rounded-full text-sm font-bold mb-6 shadow-lg cursor-pointer"
              style={{
                background: 'linear-gradient(90deg, #10B981 0%, #047857 100%)',
                boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4)',
              }}
              data-cursor="pointer"
            >
              <Timer className="w-4 h-4" />
              <span>Interactive Practice</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Try Our Live
              <br />
              <span 
                className="inline-block"
                style={{
                  background: 'linear-gradient(90deg, #10B981 0%, #6EE7B7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Mock Test
              </span>
            </h2>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Experience real-time feedback with our interactive question interface.
              Each answer is validated instantly with detailed explanations.
            </p>

            {/* Progress Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl p-6 shadow-xl"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '2px solid rgba(16, 185, 129, 0.3)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="text-4xl font-black mb-2" style={{ color: '#10B981' }}>
                  {answered}/{sampleQuestions.length}
                </div>
                <div className="text-sm text-gray-400 font-semibold">Questions Answered</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl p-6 shadow-xl text-white"
                style={{
                  background: 'linear-gradient(135deg, #10B981 0%, #047857 100%)',
                  boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)',
                }}
              >
                <div className="text-4xl font-black mb-2">
                  {answered > 0 ? Math.round((score / answered) * 100) : 0}%
                </div>
                <div className="text-sm font-semibold opacity-90">Accuracy Rate</div>
              </motion.div>
            </div>

            {/* UPDATED BUTTON WITH LINK */}
            <Link href="/test-instructions/1">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="text-white rounded-2xl px-10 py-7 text-lg font-black transition-all group w-full sm:w-auto"
                  style={{
                    background: 'linear-gradient(90deg, #10B981 0%, #047857 100%)',
                    boxShadow: '0 10px 40px rgba(16, 185, 129, 0.4)',
                  }}
                >
                  Start Full Mock Test
                  <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" strokeWidth={2.5} />
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Right Column - Interactive Question Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <Card 
              className="relative p-6 sm:p-8 shadow-2xl rounded-3xl overflow-hidden"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '2px solid rgba(16, 185, 129, 0.2)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Decorative corner accent */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.3) 0%, transparent 100%)',
                }}
              />

              {/* Question Header */}
              <div className="flex items-start justify-between mb-6 pb-6" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div className="flex items-start gap-4 flex-1">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #10B981 0%, #047857 100%)',
                    }}
                  >
                    {currentQuestion + 1}
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span 
                        className="px-3 py-1 text-white text-xs font-bold rounded-full"
                        style={{ backgroundColor: getSubjectColor(question.subject) }}
                      >
                        {question.subject}
                      </span>
                      <span 
                        className="text-xs font-bold"
                        style={{ color: getDifficultyColor(question.difficulty) }}
                      >
                        • {question.difficulty}
                      </span>
                    </div>
                    <div className="text-sm text-gray-400 font-semibold">
                      Question {currentQuestion + 1} of {sampleQuestions.length}
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setBookmarked(!bookmarked)}
                  className="p-3 rounded-2xl transition-all"
                  style={{
                    backgroundColor: bookmarked ? '#10B981' : 'rgba(255, 255, 255, 0.1)',
                    color: bookmarked ? '#FFFFFF' : '#9CA3AF',
                    boxShadow: bookmarked ? '0 4px 14px rgba(16, 185, 129, 0.4)' : 'none',
                  }}
                  aria-label="Bookmark question"
                  data-cursor="pointer"
                >
                  <BookmarkPlus className="w-6 h-6" strokeWidth={2.5} />
                </motion.button>
              </div>

              {/* Question Text */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-xl sm:text-2xl font-bold text-white mb-8 leading-relaxed">
                    {question.question}
                  </p>

                  {/* Options */}
                  <div className="space-y-4 mb-8">
                    {question.options.map((option, index) => {
                      const isSelected = selectedAnswer === index;
                      const isCorrect = index === question.correctAnswer;
                      const showCorrect = showResult && isCorrect;
                      const showIncorrect = showResult && isSelected && !isCorrect;

                      let optionStyle = {};
                      if (showCorrect) {
                        optionStyle = {
                          borderColor: '#10B981',
                          backgroundColor: 'rgba(16, 185, 129, 0.15)',
                          boxShadow: '0 4px 14px rgba(16, 185, 129, 0.3)',
                        };
                      } else if (showIncorrect) {
                        optionStyle = {
                          borderColor: '#EF4444',
                          backgroundColor: 'rgba(239, 68, 68, 0.15)',
                          boxShadow: '0 4px 14px rgba(239, 68, 68, 0.3)',
                        };
                      } else if (!showResult && isSelected) {
                        optionStyle = {
                          borderColor: '#10B981',
                          backgroundColor: 'rgba(16, 185, 129, 0.1)',
                          boxShadow: '0 4px 14px rgba(16, 185, 129, 0.3)',
                        };
                      } else {
                        optionStyle = {
                          borderColor: 'rgba(255, 255, 255, 0.1)',
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        };
                      }

                      return (
                        <motion.button
                          key={index}
                          whileHover={{ scale: showResult ? 1 : 1.02, x: showResult ? 0 : 5 }}
                          whileTap={{ scale: showResult ? 1 : 0.98 }}
                          onClick={() => !showResult && setSelectedAnswer(index)}
                          disabled={showResult}
                          className="w-full text-left p-5 sm:p-6 rounded-2xl transition-all duration-300 flex items-center gap-4 font-semibold text-base sm:text-lg relative overflow-hidden"
                          style={{
                            ...optionStyle,
                            border: '2px solid',
                            cursor: showResult ? 'default' : 'pointer',
                          }}
                          data-cursor="pointer"
                        >
                          {/* Selection indicator */}
                          {showCorrect ? (
                            <CheckCircle2 className="w-7 h-7 flex-shrink-0" style={{ color: '#10B981' }} strokeWidth={2.5} />
                          ) : showIncorrect ? (
                            <XCircle className="w-7 h-7 flex-shrink-0" style={{ color: '#EF4444' }} strokeWidth={2.5} />
                          ) : (
                            <div
                              className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-all"
                              style={{
                                border: `2px solid ${isSelected ? '#10B981' : 'rgba(255, 255, 255, 0.3)'}`,
                                backgroundColor: isSelected ? '#10B981' : 'transparent',
                              }}
                            >
                              {isSelected && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="w-3.5 h-3.5 bg-white rounded-full"
                                />
                              )}
                            </div>
                          )}

                          <span
                            className="flex-1"
                            style={{
                              color: showCorrect ? '#6EE7B7' : showIncorrect ? '#FCA5A5' : '#FFFFFF',
                            }}
                          >
                            <span className="font-black mr-3">{String.fromCharCode(65 + index)}.</span>
                            {option}
                          </span>

                          {/* Shimmer effect on hover */}
                          {!showResult && (
                            <motion.div
                              className="absolute inset-0"
                              style={{
                                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)',
                              }}
                              animate={{ x: ['-100%', '200%'] }}
                              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                            />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Result Message */}
                  <AnimatePresence>
                    {showResult && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        className="p-6 rounded-2xl mb-6"
                        style={{
                          backgroundColor: selectedAnswer === question.correctAnswer 
                            ? 'rgba(16, 185, 129, 0.15)' 
                            : 'rgba(239, 68, 68, 0.15)',
                          border: `2px solid ${selectedAnswer === question.correctAnswer ? '#10B981' : '#EF4444'}`,
                        }}
                      >
                        <div className="flex items-start gap-4">
                          {selectedAnswer === question.correctAnswer ? (
                            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#10B981' }}>
                              <CheckCircle2 className="w-7 h-7 text-white" strokeWidth={2.5} />
                            </div>
                          ) : (
                            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#EF4444' }}>
                              <XCircle className="w-7 h-7 text-white" strokeWidth={2.5} />
                            </div>
                          )}
                          <div className="flex-1">
                            <p
                              className="font-black text-lg mb-2"
                              style={{ color: selectedAnswer === question.correctAnswer ? '#6EE7B7' : '#FCA5A5' }}
                            >
                              {selectedAnswer === question.correctAnswer
                                ? '🎉 Perfect! You got it right!'
                                : '❌ Not quite right'}
                            </p>
                            {selectedAnswer !== question.correctAnswer && (
                              <p className="font-semibold" style={{ color: '#FCA5A5' }}>
                                The correct answer is option{' '}
                                <span className="font-black">
                                  {String.fromCharCode(65 + question.correctAnswer)}
                                </span>
                              </p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    {!showResult ? (
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                        <Button
                          onClick={handleCheck}
                          disabled={selectedAnswer === null}
                          className="w-full text-white rounded-2xl py-7 text-lg font-black transition-all"
                          style={{
                            background: selectedAnswer === null 
                              ? 'rgba(255, 255, 255, 0.1)'
                              : 'linear-gradient(90deg, #10B981 0%, #047857 100%)',
                            boxShadow: selectedAnswer === null ? 'none' : '0 10px 40px rgba(16, 185, 129, 0.4)',
                            color: selectedAnswer === null ? '#6B7280' : '#FFFFFF',
                          }}
                        >
                          Check Answer
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                        <Button
                          onClick={handleNext}
                          disabled={currentQuestion === sampleQuestions.length - 1}
                          className="w-full text-white rounded-2xl py-7 text-lg font-black transition-all group"
                          style={{
                            background: currentQuestion === sampleQuestions.length - 1
                              ? 'rgba(255, 255, 255, 0.1)'
                              : 'linear-gradient(90deg, #10B981 0%, #047857 100%)',
                            boxShadow: currentQuestion === sampleQuestions.length - 1 ? 'none' : '0 10px 40px rgba(16, 185, 129, 0.4)',
                            color: currentQuestion === sampleQuestions.length - 1 ? '#6B7280' : '#FFFFFF',
                          }}
                        >
                          {currentQuestion === sampleQuestions.length - 1 ? 'Completed!' : 'Next Question'}
                          {currentQuestion < sampleQuestions.length - 1 && (
                            <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" strokeWidth={2.5} />
                          )}
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Dots */}
              <div className="flex justify-center gap-2 mt-8 pt-6" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                {sampleQuestions.map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.3 }}
                    className="h-2.5 rounded-full transition-all cursor-pointer"
                    style={{
                      width: index === currentQuestion ? '40px' : '10px',
                      backgroundColor: index === currentQuestion 
                        ? '#10B981' 
                        : index < currentQuestion 
                          ? 'rgba(16, 185, 129, 0.5)' 
                          : 'rgba(255, 255, 255, 0.2)',
                      boxShadow: index === currentQuestion ? '0 4px 14px rgba(16, 185, 129, 0.4)' : 'none',
                    }}
                    onClick={() => {
                      setCurrentQuestion(index);
                      setSelectedAnswer(null);
                      setShowResult(false);
                      setBookmarked(false);
                    }}
                    data-cursor="pointer"
                  />
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
