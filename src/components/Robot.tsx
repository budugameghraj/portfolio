import React, { useState, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const THOUGHTS = [
  "Calculating O(n²) complexity... yikes.",
  "Compiling... actually, I'm just daydreaming.",
  "Is it a bug, or a feature? Let's call it a feature.",
  "I need more RAM. And maybe a coffee.",
  "Refactoring in progress... please don't look.",
  "Centering a div is my final boss.",
  "Error: Brain not found. Checking local storage...",
  "Standardizing protocols... or just spinning in circles.",
  "Parsing JSON like a boss.",
  "Did I leave the server running?",
  "404: Motivation not found.",
  "Searching for the missing semicolon...",
  "I wonder if ChatGPT is thinking about me too.",
  "Executing 'nap_time.sh'...",
  "Pixel-perfect? More like pixel-persistent.",
  "If (coffee == empty) { coding = false; }",
  "Optimizing my social skills... 0% complete.",
  "Wait... did I push to production?",
  "Reading documentation... just kidding.",
  "Updating my drivers for better jokes."
];

const Robot = () => {
  const [thought, setThought] = useState({ text: "" });
  const [showThought, setShowThought] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  
  const splineRef = useRef<any>(null);
  const isPained = useRef(false);
  const lastIndex = useRef(-1);

  function onLoad(spline: any) {
    splineRef.current = spline;
    setTimeout(() => {
      setThought({ text: "System online. Portfolio V1.0 ready." });
      setShowThought(true);
      setTimeout(() => setShowThought(false), 4000);
    }, 500); 
  }

  useEffect(() => {    
    // 👇 Reduced interval to 5000ms (5 seconds) for more frequent activity
    const interval = setInterval(() => {
      if (!showThought && !isPained.current) {
        if (splineRef.current) {
          splineRef.current.emitEvent('keyDown', 'RoBOT_(Duplicate)'); 
        }

        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * THOUGHTS.length);
        } while (randomIndex === lastIndex.current);
        
        lastIndex.current = randomIndex;
        setThought({ text: THOUGHTS[randomIndex] });
        setShowThought(true);

        // 👇 Thought bubble now hides after 3 seconds
        setTimeout(() => {
          if (!isPained.current) {
            setShowThought(false);
            if (splineRef.current) {
              splineRef.current.emitEvent('keyUp', 'RoBOT_(Duplicate)');
            }
          }
        }, 3000); 
      }
    }, 5000); 

    return () => clearInterval(interval);
  }, [showThought]);

  const handleClick = () => {
    isPained.current = true;
    setIsShaking(true);
    
    if (splineRef.current) {
      splineRef.current.emitEvent('keyUp', 'RoBOT_(Duplicate)'); 
      splineRef.current.emitEvent('mouseHover', 'RoBOT_(Duplicate)'); 
    }

    const msgs = ["Ouch! Watch the paint!", "My circuits hurt!", "System Error: Pain!"];
    setThought({ text: msgs[Math.floor(Math.random() * msgs.length)] });
    setShowThought(true);

    setTimeout(() => {
      setIsShaking(false);
      setShowThought(false);
      isPained.current = false; 
      
      if (splineRef.current) {
        splineRef.current.emitEvent('mouseUp', 'RoBOT_(Duplicate)'); 
      }
    }, 2000);
  };

  return (
    <motion.div 
      className={`relative z-10 mx-auto w-64 h-80 md:w-80 md:h-96 rounded-xl ${isShaking ? 'animate-shake' : ''}`}
      onClick={handleClick}
      initial={{ y: 300, opacity: 0, scale: 0.5 }} 
      animate={{ 
        y: [300, -30, 0], 
        opacity: 1, 
        scale: 1 
      }}
      transition={{ 
        duration: 1.2, 
        times: [0, 0.7, 1], 
        ease: "easeOut",
        delay: 0.2 
      }}
    >
      {/* THOUGHT BUBBLE */}
      {showThought && (
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="absolute -top-14 -right-2 md:-right-4 z-50 bg-[#FFD700] text-black font-bold px-4 py-2 rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black whitespace-nowrap text-xs md:text-sm"
        >
          {thought.text}
          <div className="absolute -bottom-2 left-4 w-4 h-4 bg-[#FFD700] border-b-2 border-r-2 border-black transform rotate-45"></div>
        </motion.div>
      )}

      {/* GLOWING CONTAINER */}
      <div className="absolute inset-0 p-1 rounded-2xl bg-gradient-to-br from-[#00E5FF] to-transparent cursor-pointer overflow-visible">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00E5FF] to-transparent blur-md opacity-30"></div>
        
        <div className="relative z-10 w-full h-full rounded-xl overflow-hidden bg-[#121314] flex items-center justify-center">
          <div className="w-full h-full scale-[0.95] flex items-center justify-center transform-gpu">
            <Spline 
              className="w-full h-full pointer-events-none"
              scene="https://prod.spline.design/MXmlAJrhWqrzalhW/scene.splinecode" 
              onLoad={onLoad}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Robot;