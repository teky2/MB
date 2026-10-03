/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChakraOfTime } from './ChakraOfTime';
import { audioEngine } from '../services/audioEngine';
import { ChevronDown, Volume2, VolumeX, Sparkles, Compass } from 'lucide-react';

interface SamayOpeningProps {
  onComplete: () => void;
  isAudioMuted: boolean;
  onToggleAudio: () => void;
}

export const SamayOpening: React.FC<SamayOpeningProps> = ({
  onComplete,
  isAudioMuted,
  onToggleAudio,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasEnteredPortal, setHasEnteredPortal] = useState(false);
  const [prologueStage, setPrologueStage] = useState<number>(0);
  const [idleRotation, setIdleRotation] = useState<number>(0);

  // Maximum virtual scroll length
  const maxScroll = 2400;

  // Idle rotation animation when not scrolling
  useEffect(() => {
    let animId: number;
    const animate = () => {
      setIdleRotation((prev) => (prev + 0.15) % 360);
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Listen to both native scroll and wheel events (to guarantee functionality inside iframes)
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleWheel = (e: WheelEvent) => {
      // If user scrolls wheel inside iframe
      window.scrollBy({ top: e.deltaY, behavior: 'auto' });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Compute scroll progression 0 to 1
  const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);

  // Chakra rotation accelerates with scroll
  const rotation = idleRotation + progress * 360 + (progress > 0.1 ? progress * 180 : 0);

  // Camera scale: starts at 0.95 and zooms deeply into portal as user scrolls
  const cameraScale = 0.95 + progress * 3.5;

  // Chakra opacity: always clearly visible, glowing and majestic
  const chakraOpacity = Math.min(0.9 + progress * 0.1, 1);

  // Stage checks based on progress
  useEffect(() => {
    if (progress < 0.28) {
      setPrologueStage(0); // Opening majestic Chakra
    } else if (progress >= 0.28 && progress < 0.68) {
      setPrologueStage(1); // Acceleration & Camera zoom
    } else if (progress >= 0.68 && progress < 0.90) {
      setPrologueStage(2); // Portal threshold crossing
    } else {
      setPrologueStage(3); // Samay revelation & epic title
      if (!hasEnteredPortal) {
        setHasEnteredPortal(true);
        audioEngine.playPortalTransition();
      }
    }
  }, [progress, hasEnteredPortal]);

  const handleSkipOrEnter = () => {
    audioEngine.playPortalTransition();
    onComplete();
  };

  const handleAccelerateTime = () => {
    const targetY = scrollY < 1200 ? 1600 : maxScroll;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#030303] text-stone-200 select-none"
      style={{ height: `${maxScroll + 1000}px` }}
    >
      {/* Fixed Fullscreen Viewport */}
      <div className="fixed inset-0 w-full h-full overflow-hidden bg-[#030303] flex items-center justify-center">
        {/* Atmospheric Vignette */}
        <div className="absolute inset-0 radial-vignette pointer-events-none z-20 opacity-80" />

        {/* Volumetric background ambient golden rays */}
        <div
          className="absolute inset-0 volumetric-gold-beam pointer-events-none transition-opacity duration-1000"
          style={{
            opacity: 0.5 + progress * 0.5,
            transform: `scale(${1 + progress * 0.3})`,
          }}
        />

        {/* Atmospheric Floating Embers / Dust */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {Array.from({ length: 24 }).map((_, i) => {
            const top = (i * 19) % 100;
            const left = (i * 29) % 100;
            const size = (i % 3) + 2;
            const duration = 8 + (i % 6);
            return (
              <div
                key={`dust-${i}`}
                className="absolute rounded-full bg-amber-400/50 blur-[0.8px]"
                style={{
                  top: `${top}%`,
                  left: `${left}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  animation: `pulse ${duration}s infinite ease-in-out`,
                  transform: `translateY(${-(scrollY * 0.05) % 400}px)`,
                }}
              />
            );
          })}
        </div>

        {/* ============================================================== */}
        {/* THE CHAKRA OF TIME (Always visible & dimensional)              */}
        {/* ============================================================== */}
        {prologueStage < 3 && (
          <div
            className="relative flex items-center justify-center transition-transform duration-300 ease-out z-15"
            style={{
              opacity: chakraOpacity,
              transform: `scale(${cameraScale})`,
              filter: progress > 0.8 ? `blur(${(progress - 0.8) * 25}px)` : 'none',
            }}
          >
            <ChakraOfTime rotation={rotation} size={580} interactive={false} />
          </div>
        )}

        {/* Stage 0 Introductory Titles Overlay */}
        {prologueStage === 0 && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-between p-6 md:p-12 pointer-events-none">
            {/* Top Tagline */}
            <div className="text-center pt-8">
              <span className="text-xs uppercase tracking-[0.45em] text-amber-500/90 font-serif block mb-1">
                The Cosmic Sudarshana & Kala Chakra
              </span>
              <h1 className="text-2xl md:text-3xl font-serif tracking-[0.2em] font-bold text-stone-100 uppercase">
                The Wheel of Destiny
              </h1>
            </div>

            {/* Bottom Actions Container */}
            <div className="flex flex-col items-center gap-4 pb-8 pointer-events-auto">
              <button
                onClick={handleSkipOrEnter}
                className="px-8 py-3.5 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 border border-amber-500/60 hover:border-amber-400 text-amber-100 hover:text-white font-serif tracking-[0.25em] text-xs uppercase shadow-[0_0_30px_rgba(217,119,6,0.35)] transition-all cursor-pointer flex items-center gap-3"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Enter The Mahabharata</span>
                <span className="text-amber-400">→</span>
              </button>

              <button
                onClick={handleAccelerateTime}
                className="flex items-center gap-2 text-stone-400 hover:text-amber-300 text-xs font-serif tracking-[0.2em] uppercase transition-colors cursor-pointer"
              >
                <span>Scroll or Click to Accelerate Time</span>
                <ChevronDown className="w-3.5 h-3.5 animate-bounce text-amber-400" />
              </button>
            </div>
          </div>
        )}

        {/* Portal Tunnel Pass-Through Message */}
        <AnimatePresence>
          {prologueStage === 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.6 }}
              className="absolute z-30 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
            >
              <div className="text-xs uppercase tracking-[0.4em] text-amber-400 mb-3 font-serif">
                Crossing the Threshold of Eternity
              </div>
              <div className="flex items-center gap-3 text-sm md:text-lg font-serif tracking-[0.25em] text-stone-200">
                <span className="opacity-70">TIME</span>
                <span className="text-amber-500">→</span>
                <span className="opacity-85">MEMORY</span>
                <span className="text-amber-500">→</span>
                <span className="opacity-95">HISTORY</span>
                <span className="text-amber-500">→</span>
                <span className="text-amber-300 font-bold">MAHABHARATA</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ============================================================== */}
        {/* STAGE 3: Samay Revelation & Main Epic Title Reveal             */}
        {/* ============================================================== */}
        <AnimatePresence>
          {prologueStage === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center px-6 pointer-events-auto bg-black/90 backdrop-blur-sm"
            >
              {/* Silhouette of Samay (Time) */}
              <div className="relative mb-6 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-t from-stone-900 to-amber-950/60 border border-amber-600/40 flex items-center justify-center shadow-[0_0_50px_rgba(217,119,6,0.3)]">
                  <div className="w-10 h-10 rounded-full border border-amber-400/50 animate-spin" style={{ animationDuration: '20s' }} />
                  <div className="absolute w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_12px_#f59e0b]" />
                </div>
              </div>

              {/* Samay Narration Quotes */}
              <div className="space-y-3 max-w-xl mx-auto mb-8">
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="font-serif text-3xl md:text-4xl text-amber-200 tracking-wider font-light"
                >
                  "मैं समय हूँ।"
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="text-stone-300 text-base md:text-lg tracking-wide font-light"
                >
                  "मैं न रुकता हूँ, न किसी के लिए मुड़ता हूँ।"
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                  className="text-stone-400 text-sm md:text-base italic tracking-wide"
                >
                  "जो हुआ... वह कहानी नहीं। वह इतिहास है।"
                </motion.p>
              </div>

              {/* Main Epic Title */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.0, duration: 1 }}
                className="flex flex-col items-center"
              >
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-[0.2em] font-extrabold gold-metallic-text drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
                  MAHABHARATA
                </h1>
                <p className="mt-2 text-stone-300 text-xs md:text-sm tracking-[0.3em] uppercase font-light">
                  An Epic of Dharma, Destiny and War
                </p>

                {/* Enter Button */}
                <button
                  onClick={handleSkipOrEnter}
                  className="mt-8 px-8 py-3.5 bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 border border-amber-500/50 hover:border-amber-400 text-amber-200 hover:text-white tracking-[0.25em] text-xs font-serif uppercase shadow-[0_0_30px_rgba(217,119,6,0.25)] transition-all flex items-center gap-3 cursor-pointer"
                >
                  <span>Enter The Epics</span>
                  <span className="text-amber-400">→</span>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Top Floating Utility: Sound Toggle & Direct Enter */}
        <div className="fixed top-6 right-6 z-50 flex items-center gap-3 pointer-events-auto">
          <button
            onClick={onToggleAudio}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-stone-800 bg-stone-950/80 backdrop-blur-md text-stone-300 hover:text-amber-300 hover:border-amber-500/40 text-xs tracking-wider transition-colors cursor-pointer"
            title={isAudioMuted ? 'Unmute Cinematic Soundscape' : 'Mute Soundscape'}
          >
            {isAudioMuted ? <VolumeX className="w-3.5 h-3.5 text-stone-500" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400" />}
            <span className="text-[11px] font-serif">{isAudioMuted ? 'Muted' : 'Sound On'}</span>
          </button>

          <button
            onClick={handleSkipOrEnter}
            className="px-3.5 py-1.5 rounded-full border border-stone-800 bg-stone-950/80 backdrop-blur-md text-stone-300 hover:text-amber-200 text-xs font-serif tracking-wider uppercase transition-colors cursor-pointer"
          >
            Enter Map →
          </button>
        </div>

        {/* Scroll Progress Track on Left Edge */}
        <div className="fixed left-6 top-1/2 -translate-y-1/2 h-44 w-[2px] bg-stone-900 z-50 hidden md:block">
          <div
            className="w-full bg-gradient-to-b from-amber-400 to-amber-600 transition-all duration-150"
            style={{ height: `${progress * 100}%` }}
          />
          <div className="absolute -left-3 top-0 -translate-y-6 text-[9px] tracking-widest text-stone-600 font-serif rotate-[-90deg]">
            KALACHAKRA
          </div>
        </div>
      </div>
    </div>
  );
};
