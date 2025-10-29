
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { 
  Trophy, Target, Clock, TrendingUp, CheckCircle2, 
  XCircle, AlertCircle, BarChart3, Award, Home,
  Download, Share2, Eye, ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ResultsPage({ params }) {
  const router = useRouter();
  const [showSolutions, setShowSolutions] = useState(false);

  // Sample result data
  const results = {
    totalQuestions: 180,
    attempted: 165,
    correct: 142,
    incorrect: 23,
    unanswered: 15,
    score: 554,
    totalMarks: 720,
    percentage: 76.94,
    timeSpent: '2:45:30',
    rank: 1247,
    totalStudents: 50000,
    accuracy: 85.45,
  };

  const subjectWise = [
    { 
      subject: 'Physics', 
      total: 45, 
      correct: 38, 
      incorrect: 5, 
      unanswered: 2,
      color: '#10B981',
    },
    { 
      subject: 'Chemistry', 
      total: 45, 
      correct: 35, 
      incorrect: 8, 
      unanswered: 2,
      color: '#10B981',
    },
    { 
      subject: 'Biology', 
      total: 90, 
      correct: 69, 
      incorrect: 10, 
      unanswered: 11,
      color: '#10B981',
    },
  ];

  const strengthWeakness = [
    { topic: 'Organic Chemistry', score: 95, color: '#10B981', strength: true },
    { topic: 'Cell Biology', score: 88, color: '#10B981', strength: true },
    { topic: 'Thermodynamics', score: 42, color: '#EF4444', strength: false },
    { topic: 'Genetics', score: 38, color: '#EF4444', strength: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">

      <div 
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b"
        style={{ borderColor: 'rgba(16, 185, 129, 0.2)' }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-black text-black">Test Results</h1>
            <Button
              onClick={() => router.push('/')}
              className="flex items-center gap-2 px-4 sm:px-6 py-2 rounded-xl font-bold"
              style={{
                background: 'linear-gradient(90deg, #10B981 0%, #047857 100%)',
                color: '#FFFFFF',
              }}
            >
              <Home className="w-4 h-4" strokeWidth={2.5} />
              <span className="hidden sm:inline">Home</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl p-6 sm:p-8 mb-6 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #10B981 0%, #047857 100%)',
          }}
        >

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', duration: 0.6 }}
              >
                <Trophy className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 text-white" strokeWidth={2} />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                Congratulations! 🎉
              </h2>
              <p className="text-white/90 text-sm sm:text-base">
                You've completed the NEET Mock Test
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                  {results.score}
                </div>
                <div className="text-xs sm:text-sm text-white/80 font-semibold">
                  Score
                </div>
              </div>
              <div className="text-center p-4 rounded-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                  {results.percentage.toFixed(1)}%
                </div>
                <div className="text-xs sm:text-sm text-white/80 font-semibold">
                  Percentile
                </div>
              </div>
              <div className="text-center p-4 rounded-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                  #{results.rank}
                </div>
                <div className="text-xs sm:text-sm text-white/80 font-semibold">
                  Rank
                </div>
              </div>
              <div className="text-center p-4 rounded-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                  {results.accuracy.toFixed(1)}%
                </div>
                <div className="text-xs sm:text-sm text-white/80 font-semibold">
                  Accuracy
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6"
        >
          {[
            { icon: Eye, label: 'View Solutions', color: '#10B981' },
            { icon: Download, label: 'Download Report', color: '#10B981' },
            { icon: Share2, label: 'Share Results', color: '#10B981' },
            { icon: BarChart3, label: 'Detailed Analysis', color: '#10B981' },
          ].map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.button
                key={index}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-2xl p-4 shadow-lg text-center"
                style={{ border: `2px solid ${action.color}20` }}
              >
                <Icon 
                  className="w-6 h-6 mx-auto mb-2" 
                  style={{ color: action.color }}
                  strokeWidth={2.5}
                />
                <div className="text-xs sm:text-sm font-bold text-gray-700">
                  {action.label}
                </div>
              </motion.button>
            );
          })}
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-6 mb-6"
        >

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-xl font-black text-black mb-6 flex items-center gap-2">
              <Target className="w-6 h-6" style={{ color: '#10B981' }} strokeWidth={2.5} />
              Question Analysis
            </h3>
            
            <div className="space-y-4">
              {[
                { label: 'Correct', value: results.correct, color: '#10B981', icon: CheckCircle2 },
                { label: 'Incorrect', value: results.incorrect, color: '#EF4444', icon: XCircle },
                { label: 'Unanswered', value: results.unanswered, color: '#9CA3AF', icon: AlertCircle },
              ].map((item, index) => {
                const Icon = item.icon;
                const percentage = ((item.value / results.totalQuestions) * 100).toFixed(1);
                
                return (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={2.5} />
                        <span className="font-bold text-gray-700">{item.label}</span>
                      </div>
                      <span className="font-black text-black">
                        {item.value} ({percentage}%)
                      </span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>


          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-xl font-black text-black mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6" style={{ color: '#10B981' }} strokeWidth={2.5} />
              Time Analysis
            </h3>

            <div className="text-center mb-6">
              <div className="text-5xl font-black mb-2" style={{ color: '#10B981' }}>
                {results.timeSpent}
              </div>
              <div className="text-gray-600">Total Time Spent</div>
            </div>

            <div className="space-y-3">
              {[
                { label: 'Average per Question', value: '55 sec' },
                { label: 'Fastest Question', value: '12 sec' },
                { label: 'Slowest Question', value: '3 min 45 sec' },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex justify-between p-3 rounded-xl bg-gray-50"
                >
                  <span className="text-gray-600 font-semibold">{item.label}</span>
                  <span className="font-black text-black">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl p-6 shadow-lg mb-6"
        >
          <h3 className="text-xl font-black text-black mb-6 flex items-center gap-2">
            <BarChart3 className="w-6 h-6" style={{ color: '#10B981' }} strokeWidth={2.5} />
            Subject-wise Performance
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            {subjectWise.map((subject, index) => {
              const accuracy = ((subject.correct / subject.total) * 100).toFixed(1);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-5 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${subject.color}10 0%, ${subject.color}05 100%)`,
                    border: `2px solid ${subject.color}30`,
                  }}
                >
                  <h4 className="font-black text-lg text-black mb-4">{subject.subject}</h4>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Correct</span>
                      <span className="font-bold" style={{ color: '#10B981' }}>
                        {subject.correct}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Incorrect</span>
                      <span className="font-bold" style={{ color: '#EF4444' }}>
                        {subject.incorrect}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Unanswered</span>
                      <span className="font-bold text-gray-400">
                        {subject.unanswered}
                      </span>
                    </div>
                  </div>

                  <div className="text-center p-3 rounded-xl" style={{ backgroundColor: subject.color }}>
                    <div className="text-2xl font-black text-white">
                      {accuracy}%
                    </div>
                    <div className="text-xs text-white/80">Accuracy</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6 mb-6"
        >

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-xl font-black text-black mb-6 flex items-center gap-2">
              <Award className="w-6 h-6" style={{ color: '#10B981' }} strokeWidth={2.5} />
              Your Strengths
            </h3>

            <div className="space-y-3">
              {strengthWeakness.filter(item => item.strength).map((item, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(4, 120, 87, 0.05) 100%)',
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-black">{item.topic}</span>
                    <span className="font-black" style={{ color: item.color }}>
                      {item.score}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.score}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

  
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-xl font-black text-black mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6" style={{ color: '#EF4444' }} strokeWidth={2.5} />
              Areas to Improve
            </h3>

            <div className="space-y-3">
              {strengthWeakness.filter(item => !item.strength).map((item, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(220, 38, 38, 0.05) 100%)',
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-black">{item.topic}</span>
                    <span className="font-black" style={{ color: item.color }}>
                      {item.score}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.score}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

  
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push('/')}
            className="flex-1 py-4 rounded-2xl font-black text-white text-lg"
            style={{
              background: 'linear-gradient(90deg, #10B981 0%, #047857 100%)',
            }}
          >
            Take Another Test
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 py-4 rounded-2xl font-black border-2 bg-white text-lg"
            style={{
              borderColor: '#10B981',
              color: '#10B981',
            }}
          >
            View Detailed Solutions
            <ChevronRight className="w-5 h-5 inline ml-2" strokeWidth={2.5} />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
