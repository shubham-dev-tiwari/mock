'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Play, Pause, Volume2, VolumeX, Maximize, Eye, 
  Zap, BarChart3, Target, Lightbulb, Clock, CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VideoShowcaseSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true); // Changed to true for autoplay
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress || 0);
      setCurrentTime(video.currentTime || 0);
    };

    const updateDuration = () => {
      setDuration(video.duration || 0);
    };

    // Handle play/pause state changes
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  const benefits = [
    { 
      icon: Zap, 
      text: 'Real-time timer simulation',
      color: '#10B981',
      delay: 0,
    },
    { 
      icon: BarChart3, 
      text: 'Instant performance feedback',
      color: '#10B981',
      delay: 0.1,
    },
    { 
      icon: Target, 
      text: 'Question navigation system',
      color: '#10B981',
      delay: 0.2,
    },
    { 
      icon: Lightbulb, 
      text: 'Detailed solution explanations',
      color: '#10B981',
      delay: 0.3,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-black text-white relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="video-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#10B981"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#video-grid)" />
        </svg>
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

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold mb-6 cursor-pointer"
              style={{
                background: 'linear-gradient(90deg, #10B981 0%, #047857 100%)',
                boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)',
              }}
              data-cursor="pointer"
            >
              <Eye className="w-4 h-4" strokeWidth={2.5} />
              <span>See how it works</span>
            </motion.div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Experience the
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
                Real Exam Feel
              </span>
            </h2>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Our platform replicates the exact interface and timing of the actual NEET exam. 
              Practice in a stress-free environment and build confidence before the big day.
            </p>

            {/* Interactive Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: item.delay }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-4 cursor-pointer group"
                    data-cursor="pointer"
                  >
                    <motion.div
                      whileHover={{ y: -5, scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      className="w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-sm relative overflow-hidden"
                      style={{
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        border: '2px solid rgba(16, 185, 129, 0.3)',
                      }}
                    >
                      <Icon 
                        className="w-7 h-7 relative z-10" 
                        style={{ color: item.color }}
                        strokeWidth={2.5}
                      />
                      {/* Glow effect */}
                      <motion.div
                        className="absolute inset-0"
                        style={{ backgroundColor: item.color, opacity: 0 }}
                        whileHover={{ opacity: 0.2 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                    <span className="text-lg text-gray-300 group-hover:text-white transition-colors font-semibold">
                      {item.text}
                    </span>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle2 
                        className="w-5 h-5" 
                        style={{ color: item.color }}
                        strokeWidth={2.5}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="text-black rounded-2xl px-10 py-7 text-lg font-black transition-all group"
                style={{
                  background: 'linear-gradient(90deg, #FFFFFF 0%, #F3F4F6 100%)',
                  boxShadow: '0 10px 40px rgba(16, 185, 129, 0.3)',
                }}
              >
                <Play className="w-6 h-6 mr-2" strokeWidth={2.5} />
                Try Sample Test Now
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2"
                >
                  →
                </motion.div>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 mt-8"
            >
              {[
                { value: '180', label: 'Questions' },
                { value: '3hrs', label: 'Duration' },
                { value: '100%', label: 'Accurate' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="text-center p-4 rounded-2xl"
                  style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.05)',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                  }}
                >
                  <div 
                    className="text-2xl font-black mb-1"
                    style={{ color: '#10B981' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 font-semibold">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Video Player */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
              style={{
                border: '4px solid rgba(16, 185, 129, 0.2)',
                boxShadow: '0 20px 60px rgba(16, 185, 129, 0.3)',
              }}
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
            >
              {/* Video Element with Autoplay */}
              <video
                ref={videoRef}
                className="w-full aspect-video object-cover cursor-pointer"
                autoPlay
                muted
                loop
                playsInline
                poster="/hero-poster.jpg"
                onClick={togglePlay}
              >
                <source src="/hero-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play/Pause Overlay - Only shows when paused */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center cursor-pointer"
                    onClick={togglePlay}
                  >
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-24 h-24 rounded-full flex items-center justify-center shadow-2xl relative"
                      style={{
                        background: 'linear-gradient(135deg, #10B981 0%, #047857 100%)',
                      }}
                    >
                      <Play className="w-12 h-12 text-white ml-2" fill="white" strokeWidth={0} />
                      
                      {/* Pulse rings */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: '#10B981', opacity: 0.5 }}
                        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: '#10B981', opacity: 0.5 }}
                        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Custom Controls */}
              <AnimatePresence>
                {(showControls || !isPlaying) && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent"
                  >
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div 
                        className="h-1 rounded-full relative overflow-hidden"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                      >
                        <motion.div
                          className="h-full rounded-full"
                          style={{ 
                            width: `${progress}%`,
                            background: 'linear-gradient(90deg, #10B981 0%, #6EE7B7 100%)',
                          }}
                          transition={{ duration: 0.1 }}
                        />
                      </div>
                      
                      {/* Time Display */}
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-400 font-semibold">
                          {formatTime(currentTime)}
                        </span>
                        <span className="text-xs text-gray-400 font-semibold">
                          {formatTime(duration)}
                        </span>
                      </div>
                    </div>

                    {/* Control Buttons */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={togglePlay}
                          className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
                          style={{
                            backgroundColor: 'rgba(16, 185, 129, 0.3)',
                            border: '2px solid rgba(16, 185, 129, 0.5)',
                          }}
                          aria-label={isPlaying ? 'Pause video' : 'Play video'}
                        >
                          {isPlaying ? (
                            <Pause className="w-6 h-6 text-white" strokeWidth={2.5} />
                          ) : (
                            <Play className="w-6 h-6 text-white ml-0.5" strokeWidth={2.5} />
                          )}
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={toggleMute}
                          className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            border: '2px solid rgba(255, 255, 255, 0.2)',
                          }}
                          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                        >
                          {isMuted ? (
                            <VolumeX className="w-5 h-5 text-white" strokeWidth={2.5} />
                          ) : (
                            <Volume2 className="w-5 h-5 text-white" strokeWidth={2.5} />
                          )}
                        </motion.button>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleFullscreen}
                        className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                        }}
                        aria-label="Fullscreen"
                      >
                        <Maximize className="w-5 h-5 text-white" strokeWidth={2.5} />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Watching Indicator */}
              {isPlaying && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute top-4 right-4 px-4 py-2 rounded-full backdrop-blur-sm"
                  style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.9)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-2 h-2 bg-white rounded-full"
                    />
                    <span className="text-white text-xs font-bold">LIVE</span>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Decorative Glowing Elements */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 w-40 h-40 rounded-full blur-3xl"
              style={{ backgroundColor: 'rgba(16, 185, 129, 0.2)' }}
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full blur-3xl"
              style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
