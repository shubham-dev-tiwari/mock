// app/test/[testId]/page.js - WITH YOUR THEME COLORS
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { 
  Clock, BookmarkPlus, ChevronRight, 
  FileText, AlertCircle, Check, X, CheckCircle2, XCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Sample questions data
const sampleQuestions = [
  {
    id: 1,
    section: 'Biology',
    question: 'Which of the following is the powerhouse of the cell?',
    options: [
      { id: 'A', text: 'Nucleus' },
      { id: 'B', text: 'Mitochondria' },
      { id: 'C', text: 'Ribosome' },
      { id: 'D', text: 'Golgi Apparatus' },
    ],
    correctAnswer: 'B',
  },
  {
    id: 2,
    section: 'Biology',
    question: 'What is the basic unit of life?',
    options: [
      { id: 'A', text: 'Tissue' },
      { id: 'B', text: 'Organ' },
      { id: 'C', text: 'Cell' },
      { id: 'D', text: 'Organism' },
    ],
    correctAnswer: 'C',
  },
  {
    id: 3,
    section: 'Physics',
    question: 'What is the SI unit of electric current?',
    options: [
      { id: 'A', text: 'Volt' },
      { id: 'B', text: 'Ampere' },
      { id: 'C', text: 'Ohm' },
      { id: 'D', text: 'Watt' },
    ],
    correctAnswer: 'B',
  },
];

export default function TestPage({ params }) {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [markedForReview, setMarkedForReview] = useState(new Set());
  const [timeRemaining, setTimeRemaining] = useState(10800); // 3 hours
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  const [showPalette, setShowPalette] = useState(true);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAutoSubmit = () => {
    router.push(`/results/${params.testId}`);
  };

  const handleAnswerSelect = (optionId) => {
    setAnswers({
      ...answers,
      [currentQuestion]: optionId,
    });
  };

  const handleMarkForReview = () => {
    const newMarked = new Set(markedForReview);
    if (newMarked.has(currentQuestion)) {
      newMarked.delete(currentQuestion);
    } else {
      newMarked.add(currentQuestion);
    }
    setMarkedForReview(newMarked);
  };

  const getQuestionStatus = (index) => {
    const isAnswered = answers[index] !== undefined;
    const isMarked = markedForReview.has(index);
    const isVisited = index <= currentQuestion;

    if (isAnswered && isMarked) return 'answered-marked';
    if (isAnswered) return 'answered';
    if (isMarked) return 'marked';
    if (isVisited) return 'not-answered';
    return 'not-visited';
  };

  const getStatusColor = (status) => {
    const colors = {
      'not-visited': '#9CA3AF',
      'not-answered': '#EF4444',
      'answered': '#10B981',
      'marked': '#8B5CF6',
      'answered-marked': '#8B5CF6',
    };
    return colors[status] || '#9CA3AF';
  };

  const getSectionStats = () => {
    const total = sampleQuestions.length;
    const answered = Object.keys(answers).length;
    const marked = markedForReview.size;
    const notAnswered = currentQuestion + 1 - answered;
    const notVisited = total - currentQuestion - 1;

    return { total, answered, marked, notAnswered, notVisited };
  };

  const stats = getSectionStats();

  return (
    <div className="min-h-screen bg-black flex flex-col">
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

      {/* Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)' }}
      />

      {/* Header */}
      <div 
        className="sticky top-0 z-50 backdrop-blur-lg shadow-md"
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          borderBottom: '2px solid rgba(16, 185, 129, 0.2)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Left: Test Info */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #10B981 0%, #047857 100%)',
                }}
              >
                <FileText className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h1 className="text-sm sm:text-base font-black text-white">NEET UG 2026 - Biology</h1>
                <p className="text-xs text-gray-400">Mini Live Test</p>
              </div>
            </div>

            {/* Center: Timer */}
            <div 
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl"
              style={{
                background: timeRemaining < 300 
                  ? 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)'
                  : 'linear-gradient(135deg, #10B981 0%, #047857 100%)',
              }}
            >
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
                <span className="text-lg sm:text-2xl font-black text-white tabular-nums">
                  {formatTime(timeRemaining)}
                </span>
              </div>
            </div>

            {/* Right: Student Info */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-700 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300">
                  <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="hidden sm:block text-right">
                <div className="text-sm font-bold text-white">Student</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Question Area */}
        <div className="flex-1 overflow-auto">
          <div className="container mx-auto px-4 py-6 max-w-4xl relative z-10">
            {/* Section Header */}
            <div 
              className="rounded-2xl p-4 mb-4 shadow-lg"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-400">Section:</span>
                  <span className="ml-2 font-bold text-white">
                    {sampleQuestions[currentQuestion].section}
                  </span>
                </div>
                <div>
                  <span className="text-sm text-gray-400">Question:</span>
                  <span className="ml-2 font-bold" style={{ color: '#10B981' }}>
                    {currentQuestion + 1} / {sampleQuestions.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Question Card */}
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="rounded-2xl p-6 shadow-2xl mb-4"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '2px solid rgba(16, 185, 129, 0.2)',
              }}
            >
              {/* Question Number Badge */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className="px-4 py-2 rounded-xl font-black text-white"
                  style={{
                    background: 'linear-gradient(135deg, #10B981 0%, #047857 100%)',
                  }}
                >
                  Question {currentQuestion + 1}
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleMarkForReview}
                  className="p-3 rounded-xl transition-all"
                  style={{
                    backgroundColor: markedForReview.has(currentQuestion) 
                      ? '#8B5CF6' 
                      : 'rgba(139, 92, 246, 0.1)',
                  }}
                >
                  <BookmarkPlus 
                    className="w-5 h-5" 
                    style={{ 
                      color: markedForReview.has(currentQuestion) ? '#FFFFFF' : '#8B5CF6' 
                    }}
                    strokeWidth={2.5}
                  />
                </motion.button>
              </div>

              {/* Question Text */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-6 leading-relaxed">
                {sampleQuestions[currentQuestion].question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {sampleQuestions[currentQuestion].options.map((option) => {
                  const isSelected = answers[currentQuestion] === option.id;
                  
                  return (
                    <motion.button
                      key={option.id}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswerSelect(option.id)}
                      className="w-full text-left p-4 sm:p-5 rounded-xl transition-all flex items-center gap-4 group"
                      style={{
                        backgroundColor: isSelected ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                        border: isSelected ? '2px solid #10B981' : '2px solid rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all"
                        style={{
                          backgroundColor: isSelected ? '#10B981' : 'transparent',
                          border: `2px solid ${isSelected ? '#10B981' : 'rgba(255, 255, 255, 0.3)'}`,
                        }}
                      >
                        {isSelected && (
                          <Check className="w-5 h-5 text-white" strokeWidth={3} />
                        )}
                      </div>
                      <div className="flex-1">
                        <span className="font-bold text-white mr-3">{option.id}.</span>
                        <span className="text-gray-300">{option.text}</span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleMarkForReview}
                className="flex-1 py-4 rounded-xl font-bold text-white"
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
                }}
              >
                <BookmarkPlus className="w-5 h-5 inline mr-2" strokeWidth={2.5} />
                Mark for Review & Next
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  if (currentQuestion < sampleQuestions.length - 1) {
                    setCurrentQuestion(currentQuestion + 1);
                  }
                }}
                disabled={currentQuestion === sampleQuestions.length - 1}
                className="flex-1 py-4 rounded-xl font-bold text-white"
                style={{
                  background: currentQuestion === sampleQuestions.length - 1
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'linear-gradient(135deg, #10B981 0%, #047857 100%)',
                  cursor: currentQuestion === sampleQuestions.length - 1 ? 'not-allowed' : 'pointer',
                }}
              >
                Save & Next
                <ChevronRight className="w-5 h-5 inline ml-2" strokeWidth={2.5} />
              </motion.button>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowSubmitDialog(true)}
              className="w-full mt-4 py-4 rounded-xl font-bold text-white"
              style={{
                background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
              }}
            >
              Submit Test
            </motion.button>
          </div>
        </div>

        {/* Question Palette - Desktop */}
        <AnimatePresence>
          {showPalette && (
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              className="hidden lg:block w-80 overflow-auto"
              style={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(20px)',
                borderLeft: '1px solid rgba(16, 185, 129, 0.2)',
              }}
            >
              <div className="p-6">
                <h3 className="text-lg font-black text-white mb-4">Question Palette</h3>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <div 
                    className="p-3 rounded-xl text-center"
                    style={{
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                    }}
                  >
                    <div className="text-2xl font-black" style={{ color: '#10B981' }}>
                      {stats.answered}
                    </div>
                    <div className="text-xs text-gray-400">Answered</div>
                  </div>
                  <div 
                    className="p-3 rounded-xl text-center"
                    style={{
                      backgroundColor: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                    }}
                  >
                    <div className="text-2xl font-black" style={{ color: '#EF4444' }}>
                      {stats.notAnswered}
                    </div>
                    <div className="text-xs text-gray-400">Not Answered</div>
                  </div>
                  <div 
                    className="p-3 rounded-xl text-center"
                    style={{
                      backgroundColor: 'rgba(139, 92, 246, 0.1)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                    }}
                  >
                    <div className="text-2xl font-black" style={{ color: '#8B5CF6' }}>
                      {stats.marked}
                    </div>
                    <div className="text-xs text-gray-400">Marked</div>
                  </div>
                  <div 
                    className="p-3 rounded-xl text-center"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <div className="text-2xl font-black text-gray-400">
                      {stats.notVisited}
                    </div>
                    <div className="text-xs text-gray-400">Not Visited</div>
                  </div>
                </div>

                {/* Question Grid */}
                <div className="grid grid-cols-5 gap-2">
                  {sampleQuestions.map((_, index) => {
                    const status = getQuestionStatus(index);
                    const color = getStatusColor(status);
                    const isActive = index === currentQuestion;
                    
                    return (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setCurrentQuestion(index)}
                        className="w-12 h-12 rounded-xl font-bold text-white transition-all"
                        style={{
                          backgroundColor: color,
                          border: isActive ? '3px solid #FFFFFF' : 'none',
                        }}
                      >
                        {index + 1}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Submit Dialog */}
      <AnimatePresence>
        {showSubmitDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowSubmitDialog(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="rounded-3xl p-8 max-w-md w-full"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                border: '2px solid rgba(16, 185, 129, 0.3)',
              }}
            >
              <div className="text-center mb-6">
                <AlertCircle className="w-16 h-16 mx-auto mb-4" style={{ color: '#EF4444' }} />
                <h3 className="text-2xl font-black text-white mb-2">Submit Test?</h3>
                <p className="text-gray-400">
                  You have answered {stats.answered} out of {stats.total} questions.
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => setShowSubmitDialog(false)}
                  className="flex-1 py-4 rounded-xl border-2 text-white font-bold"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => router.push(`/results/${params.testId}`)}
                  className="flex-1 py-4 rounded-xl font-bold text-white"
                  style={{
                    background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
                  }}
                >
                  Submit
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
