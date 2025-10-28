// app/test-instructions/[testId]/page.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { 
  Clock, AlertCircle, CheckCircle2, Circle, Bookmark,
  Info, Zap, Shield, FileText
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestInstructions({ params }) {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);

  const instructions = [
    {
      icon: Clock,
      title: 'Time Management',
      description: 'The clock will be set at the server. The countdown timer will display the remaining time available for you to complete the examination.',
      color: '#10B981',
    },
    {
      icon: FileText,
      title: 'Question Palette',
      description: 'The Question Palette displayed on the right side of screen will show the status of each question using symbols.',
      color: '#10B981',
    },
    {
      icon: CheckCircle2,
      title: 'Auto Submit',
      description: 'When the timer reaches zero, the examination will end by itself. You need not terminate the examination or submit your paper.',
      color: '#10B981',
    },
  ];

  const statusSymbols = [
    {
      icon: Circle,
      label: 'Not Visited',
      description: 'You have not visited the question yet.',
      color: '#9CA3AF',
    },
    {
      icon: Circle,
      label: 'Not Answered',
      description: 'You have not answered the question.',
      color: '#EF4444',
      filled: true,
    },
    {
      icon: CheckCircle2,
      label: 'Answered',
      description: 'You have answered the question.',
      color: '#10B981',
    },
    {
      icon: Bookmark,
      label: 'Marked for Review',
      description: 'You have NOT answered the question, but marked it for review.',
      color: '#8B5CF6',
    },
    {
      icon: Bookmark,
      label: 'Answered & Marked',
      description: 'You have answered the question and marked it for review.',
      color: '#8B5CF6',
      checkmark: true,
    },
  ];

  const handleStartTest = () => {
    if (agreed) {
      router.push(`/test/${params.testId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header */}
      <div 
        className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-lg"
        style={{ borderColor: 'rgba(16, 185, 129, 0.2)' }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
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
                <h1 className="text-lg font-black text-black">NEET UG 2026</h1>
                <p className="text-xs text-gray-600 font-semibold">Biology - Mini Live Test</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-600">
                  <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="text-right hidden sm:block">
                <div className="font-bold text-black">Student Name</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Main Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl mb-6"
          style={{ border: '2px solid rgba(16, 185, 129, 0.2)' }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
            >
              <Info className="w-6 h-6" style={{ color: '#10B981' }} strokeWidth={2.5} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-black">General Instructions</h2>
          </div>

          <div className="space-y-6">
            {instructions.map((instruction, index) => {
              const Icon = instruction.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${instruction.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: instruction.color }} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-black text-lg text-black mb-1">{instruction.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{instruction.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Question Status Symbols */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl mb-6"
          style={{ border: '2px solid rgba(16, 185, 129, 0.2)' }}
        >
          <h3 className="text-xl font-black text-black mb-6">Question Status Symbols</h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {statusSymbols.map((status, index) => {
              const Icon = status.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50"
                >
                  <div className="relative">
                    <Icon
                      className="w-6 h-6"
                      style={{ color: status.color }}
                      strokeWidth={2.5}
                      fill={status.filled ? status.color : 'none'}
                    />
                    {status.checkmark && (
                      <CheckCircle2 
                        className="w-3 h-3 absolute -bottom-1 -right-1 bg-white rounded-full" 
                        style={{ color: '#10B981' }}
                        strokeWidth={3}
                      />
                    )}
                  </div>
                  <div>
                    <div className="font-bold text-black text-sm mb-1">{status.label}</div>
                    <div className="text-xs text-gray-600">{status.description}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="rounded-3xl p-6 sm:p-8 shadow-xl mb-6"
          style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(4, 120, 87, 0.05) 100%)',
            border: '2px solid rgba(16, 185, 129, 0.3)',
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-6 h-6" style={{ color: '#10B981' }} strokeWidth={2.5} />
            <h3 className="text-xl font-black text-black">Important Notes</h3>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-2">
              <span style={{ color: '#10B981' }}>•</span>
              <span>Total Questions: <strong>180</strong></span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: '#10B981' }}>•</span>
              <span>Total Time: <strong>3 Hours</strong></span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: '#10B981' }}>•</span>
              <span>Total Marks: <strong>720</strong></span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: '#10B981' }}>•</span>
              <span>Marking Scheme: <strong>+4 for correct, -1 for incorrect</strong></span>
            </li>
          </ul>
        </motion.div>

        {/* Agreement and Start */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl"
          style={{ border: '2px solid rgba(16, 185, 129, 0.2)' }}
        >
          <label className="flex items-start gap-3 cursor-pointer mb-6">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 w-5 h-5 rounded"
              style={{ accentColor: '#10B981' }}
            />
            <span className="text-gray-700">
              I have read and understood the instructions. All computer hardware allotted to me are in proper working condition. I declare that I am not in possession of / not wearing / not carrying any prohibited gadget like mobile phone, bluetooth devices etc. /any prohibited material with me into the Examination Hall. I agree that in case of not adhering to the instructions, I shall be liable to be debarred from this Test and/or to disciplinary action, which may include ban from future Tests / Examinations.
            </span>
          </label>

          <motion.div
            whileHover={{ scale: agreed ? 1.02 : 1 }}
            whileTap={{ scale: agreed ? 0.98 : 1 }}
          >
            <Button
              onClick={handleStartTest}
              disabled={!agreed}
              className="w-full py-6 text-lg font-black rounded-2xl text-white"
              style={{
                background: agreed 
                  ? 'linear-gradient(90deg, #10B981 0%, #047857 100%)'
                  : '#D1D5DB',
                cursor: agreed ? 'pointer' : 'not-allowed',
              }}
            >
              {agreed ? 'Start Test Now' : 'Please Accept Terms to Continue'}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
