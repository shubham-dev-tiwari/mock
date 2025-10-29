
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Clock, BookOpen, Target, TrendingUp, Search, Filter,
  Play, Star, Users, Award, ChevronRight, Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const mockTests = [
  {
    id: 1,
    title: 'NEET 2026 Full Length Test - 1',
    description: 'Complete NEET pattern test covering Physics, Chemistry and Biology',
    duration: '3 hours',
    questions: 180,
    difficulty: 'Medium',
    attempts: 12547,
    rating: 4.8,
    subjects: ['Physics', 'Chemistry', 'Biology'],
    color: '#10B981',
    featured: true,
  },
  {
    id: 2,
    title: 'Biology - Neural & Chemical Coordination',
    description: 'Focused test on Neural Control & Coordination, Chemical Control & Coordination',
    duration: '1 hour',
    questions: 45,
    difficulty: 'Hard',
    attempts: 8934,
    rating: 4.6,
    subjects: ['Biology'],
    color: '#10B981',
    featured: false,
  },
  {
    id: 3,
    title: 'Physics - Mechanics Master Test',
    description: 'Comprehensive test covering all topics in Mechanics',
    duration: '1.5 hours',
    questions: 60,
    difficulty: 'Medium',
    attempts: 9821,
    rating: 4.7,
    subjects: ['Physics'],
    color: '#10B981',
    featured: false,
  },
  {
    id: 4,
    title: 'Chemistry - Organic Chemistry Special',
    description: 'Advanced organic chemistry problems and reactions',
    duration: '1 hour',
    questions: 45,
    difficulty: 'Hard',
    attempts: 7654,
    rating: 4.5,
    subjects: ['Chemistry'],
    color: '#10B981',
    featured: false,
  },
  // Add more tests
];

export default function MockTestsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredTests = mockTests.filter(test => {
    const matchesSearch = test.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || test.subjects.includes(selectedFilter);
    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-24">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-4">
              NEET Mock Tests
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Practice with our comprehensive collection of NEET mock tests
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search 
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" 
                  strokeWidth={2.5}
                />
                <input
                  type="text"
                  placeholder="Search mock tests..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#10B981] focus:outline-none font-semibold"
                />
              </div>


              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#10B981] focus:outline-none font-bold"
                style={{ minWidth: '150px' }}
              >
                <option value="all">All Subjects</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Biology">Biology</option>
              </select>
            </div>
          </motion.div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTests.map((test, index) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div
                  className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all h-full flex flex-col relative overflow-hidden"
                  style={{ border: `2px solid ${test.color}20` }}
                >
                  {/* Featured Badge */}
                  {test.featured && (
                    <div
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-black text-white"
                      style={{ backgroundColor: test.color }}
                    >
                      FEATURED
                    </div>
                  )}

                  <div className="mb-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${test.color}15` }}
                    >
                      <BookOpen className="w-7 h-7" style={{ color: test.color }} strokeWidth={2.5} />
                    </div>

                    <h3 className="text-xl font-black text-black mb-2 leading-tight">
                      {test.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {test.description}
                    </p>
                  </div>


                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-gray-400" strokeWidth={2.5} />
                      <span className="font-bold text-gray-700">{test.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Target className="w-4 h-4 text-gray-400" strokeWidth={2.5} />
                      <span className="font-bold text-gray-700">{test.questions} Qs</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-gray-400" strokeWidth={2.5} />
                      <span className="font-bold text-gray-700">{test.attempts.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4" style={{ color: '#F59E0B' }} strokeWidth={2.5} fill="#F59E0B" />
                      <span className="font-bold text-gray-700">{test.rating}</span>
                    </div>
                  </div>


                  <div className="mb-4">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold"
                      style={{
                        backgroundColor: test.difficulty === 'Hard' ? '#EF444420' : test.difficulty === 'Medium' ? '#F59E0B20' : '#10B98120',
                        color: test.difficulty === 'Hard' ? '#EF4444' : test.difficulty === 'Medium' ? '#F59E0B' : '#10B981',
                      }}
                    >
                      {test.difficulty}
                    </span>
                  </div>

     
                  <Link href={`/test-instructions/${test.id}`} className="mt-auto">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl text-white font-black flex items-center justify-center gap-2"
                      style={{
                        background: `linear-gradient(90deg, ${test.color} 0%, ${test.color}dd 100%)`,
                      }}
                    >
                      <Play className="w-5 h-5" strokeWidth={2.5} />
                      Start Test
                      <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredTests.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Target className="w-16 h-16 mx-auto mb-4 text-gray-300" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-gray-600 mb-2">No tests found</h3>
              <p className="text-gray-500">Try adjusting your search or filter</p>
            </motion.div>
          )}
        </div>
      </div>
 
      <Footer />
    </>
  );
}
