/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { audioEngine } from '../../services/audioEngine';
import { ArrowLeft, ChevronDown, Volume2, VolumeX, Sparkles } from 'lucide-react';

interface BhagavadGitaChapterProps {
  onBackToNavigation: () => void;
  isAudioMuted: boolean;
  onToggleAudio: () => void;
}

export const BhagavadGitaChapter: React.FC<BhagavadGitaChapterProps> = ({
  onBackToNavigation,
  isAudioMuted,
  onToggleAudio,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalScroll = 3200;

  useEffect(() => {
    audioEngine.setSoundscape('gita');
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const progress = Math.min(Math.max(scrollY / totalScroll, 0), 1);

  // Scene progression:
  // 0.0 - 0.25: The Despair of Arjuna (Gandiva slips, hands tremble)
  // 0.25 - 0.55: The Pause of Time (Cosmic deep blue, celestial stillness)
  // 0.55 - 0.85: The Vishwaroopa Vision (Divine golden light, infinite arms)
  // 0.85 - 1.00: The Eternal Song of Duty (Karmanye Vadhikaraste)
  let stage = 1;
  if (progress >= 0.25 && progress < 0.55) stage = 2;
  else if (progress >= 0.55 && progress < 0.85) stage = 3;
  else if (progress >= 0.85) stage = 4;

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#020617] text-stone-200 select-none"
      style={{ height: `${totalScroll + 1200}px` }}
    >
      <div className="fixed inset-0 w-full h-full overflow-hidden bg-[#030712] flex items-center justify-center">
        {/* Deep Cosmic Vignette */}
        <div className="absolute inset-0 radial-vignette pointer-events-none z-20" />

        {/* Dynamic Celestial Sky & Divine Glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-1000 z-10"
          style={{
            background:
              stage === 1
                ? 'radial-gradient(circle at 50% 30%, rgba(30, 58, 138, 0.25) 0%, rgba(2, 6, 23, 0.95) 80%)'
                : stage === 2
                ? 'radial-gradient(circle at 50% 40%, rgba(59, 130, 246, 0.25) 0%, rgba(14, 116, 144, 0.15) 45%, rgba(2, 6, 23, 0.98) 85%)'
                : stage === 3
                ? 'radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.3) 0%, rgba(99, 102, 241, 0.25) 50%, rgba(2, 6, 23, 0.98) 90%)'
                : 'radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.2) 0%, rgba(30, 27, 75, 0.35) 60%, rgba(2, 6, 23, 1) 90%)',
          }}
        />

        {/* Cosmic Floating Stars and Sacred Dust */}
        <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
          {Array.from({ length: 45 }).map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute rounded-full bg-blue-200/50 shadow-[0_0_6px_#93c5fd]"
              style={{
                top: `${(i * 19) % 100}%`,
                left: `${(i * 23) % 100}%`,
                width: `${(i % 3) + 1.5}px`,
                height: `${(i % 3) + 1.5}px`,
                opacity: 0.2 + (i % 5) * 0.15,
                animation: `pulse ${4 + (i % 6)}s infinite ease-in-out`,
                transform: `scale(${1 + progress * 0.5})`,
              }}
            />
          ))}
        </div>

        {/* 3D Chariot & Divine Presence Canvas */}
        <div
          className="relative w-full h-full flex items-center justify-center transition-transform duration-500 ease-out"
          style={{
            transform: `scale(${0.9 + progress * 0.4})`,
            perspective: '1200px',
          }}
        >
          {/* Celestial Chariot Silhouette with Golden Reins */}
          <div className="relative flex flex-col items-center">
            {/* The Great Radiant Halo of Vishnu / Vishwaroopa */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
              className="absolute -top-32 w-80 h-80 rounded-full border border-amber-400/30 flex items-center justify-center opacity-60 pointer-events-none"
              style={{
                boxShadow: stage >= 3 ? '0 0 90px rgba(251, 191, 36, 0.4)' : 'none',
              }}
            >
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={`ray-${i}`}
                  className="absolute w-1 h-36 bg-gradient-to-t from-amber-400/80 to-transparent"
                  style={{
                    transformOrigin: '0 160px',
                    transform: `rotate(${i * 22.5}deg)`,
                  }}
                />
              ))}
            </motion.div>

            {/* Stylized Chariot SVG */}
            <svg width="340" height="340" viewBox="0 0 340 340" className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]">
              {/* Golden chariot flag (Kapi Dhwaja - Hanuman on Arjuna's chariot banner) */}
              <line x1="85" y1="20" x2="85" y2="230" stroke="#b45309" strokeWidth="3" />
              <path
                d="M 85 25 Q 140 45 130 80 Q 95 65 85 90 Z"
                fill="url(#gitaGold)"
                stroke="#f59e0b"
                strokeWidth="1.5"
                className="animate-pulse"
              />

              <defs>
                <linearGradient id="gitaGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="50%" stopColor="#d97706" />
                  <stop offset="100%" stopColor="#78350f" />
                </linearGradient>
              </defs>

              {/* Chariot Canopy and Chasis */}
              <path
                d="M 60 170 Q 140 130 220 170 L 230 240 L 50 240 Z"
                fill="#1e1e24"
                stroke="#d97706"
                strokeWidth="2"
              />

              {/* Krishna's Silhouette (The Divine Charioteer holding golden reins) */}
              <g transform="translate(145, 125)">
                {/* Mukuta / Peacock feather plume */}
                <path d="M 20 10 Q 28 0 25 -15 Q 15 -5 18 10 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
                <circle cx="20" cy="18" r="14" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
                <path d="M 8 32 Q 20 30 32 32 L 36 75 L 4 75 Z" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.2" />
                {/* Arms extending holding reins */}
                <line x1="32" y1="44" x2="65" y2="52" stroke="#fbbf24" strokeWidth="2.5" />
              </g>

              {/* Arjuna's Silhouette (Bowing/listening in humility) */}
              <g transform="translate(75, 145)">
                <circle cx="20" cy="20" r="12" fill="#18181b" stroke="#71717a" strokeWidth="1.2" />
                <path d="M 8 32 Q 20 30 32 32 L 34 75 L 6 75 Z" fill="#27272a" stroke="#a1a1aa" strokeWidth="1" />
                {/* Gandiva bow resting on the chariot floor */}
                <path d="M 2 40 Q -15 65 5 95" fill="none" stroke="#eab308" strokeWidth="2" strokeDasharray="3 2" />
              </g>

              {/* Grand Chariot Wheels */}
              <circle cx="100" cy="245" r="48" fill="#09090b" stroke="#d97706" strokeWidth="4" />
              {Array.from({ length: 12 }).map((_, i) => (
                <line
                  key={`wheel-${i}`}
                  x1="100"
                  y1="245"
                  x2={100 + 48 * Math.cos((i * 30 * Math.PI) / 180)}
                  y2={245 + 48 * Math.sin((i * 30 * Math.PI) / 180)}
                  stroke="#b45309"
                  strokeWidth="2"
                />
              ))}

              <circle cx="200" cy="245" r="48" fill="#09090b" stroke="#d97706" strokeWidth="4" />
              {Array.from({ length: 12 }).map((_, i) => (
                <line
                  key={`wheel2-${i}`}
                  x1="200"
                  y1="245"
                  x2={200 + 48 * Math.cos((i * 30 * Math.PI) / 180)}
                  y2={245 + 48 * Math.sin((i * 30 * Math.PI) / 180)}
                  stroke="#b45309"
                  strokeWidth="2"
                />
              ))}
            </svg>
          </div>
        </div>

        {/* Narrative & Shloka Overlay */}
        <div className="absolute bottom-16 inset-x-0 z-30 flex flex-col items-center text-center px-6 pointer-events-none">
          <AnimatePresence mode="wait">
            {stage === 1 && (
              <motion.div
                key="gita-1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="max-w-xl"
              >
                <span className="text-[11px] uppercase tracking-[0.35em] text-blue-400 font-serif">
                  SENAYOR UBHOYOR MADHYE · BETWEEN THE TWO ARMIES
                </span>
                <p className="text-xl md:text-2xl font-serif text-stone-200 mt-2">
                  "जब युद्ध के बीच अर्जुन के हाथ कांपने लगे..."
                </p>
                <p className="text-sm text-stone-400 mt-1 italic">
                  Gandiva slips from trembling fingers. He refuses to strike grandsires and mentors.
                </p>
              </motion.div>
            )}

            {stage === 2 && (
              <motion.div
                key="gita-2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="max-w-xl"
              >
                <span className="text-[11px] uppercase tracking-[0.35em] text-cyan-400 font-serif">
                  THE SUSPENSION OF TIME
                </span>
                <p className="text-xl md:text-2xl font-serif text-cyan-200 mt-2">
                  "कृष्ण ने उसे युद्ध नहीं, धर्म समझाया।"
                </p>
                <p className="text-sm text-stone-400 mt-1">
                  Arrows freeze mid-air. The screams of armies fade into absolute cosmic silence.
                </p>
              </motion.div>
            )}

            {stage === 3 && (
              <motion.div
                key="gita-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="max-w-2xl"
              >
                <span className="text-[11px] uppercase tracking-[0.35em] text-amber-400 font-serif">
                  VISHWAROOPA DARSHANA · THE COSMIC REVELATION
                </span>
                <p className="text-lg md:text-xl font-serif text-amber-200 mt-2 italic">
                  "कालोऽस्मि लोकक्षयकृत्प्रवृद्धो लोकान्समाहर्तुमिह प्रवृत्तः।"
                </p>
                <p className="text-xs md:text-sm text-stone-300 mt-1">
                  "I am Time, the destroyer of all worlds, arrived here to devour these armies."
                </p>
              </motion.div>
            )}

            {stage === 4 && (
              <motion.div
                key="gita-4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="max-w-2xl p-6 bg-stone-950/80 border border-amber-600/40 rounded-sm backdrop-blur-md"
              >
                <span className="text-[11px] uppercase tracking-[0.4em] text-amber-400 font-serif">
                  THE ETERNAL SONG OF DUTY
                </span>
                <p className="text-lg md:text-xl font-serif text-stone-100 mt-2">
                  कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
                </p>
                <p className="text-xs md:text-sm text-stone-300 mt-2 leading-relaxed font-light">
                  "You have a right only to perform your duty, never to its fruits. Let not the fruit of action be your motive, nor cling to inaction."
                </p>
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={onBackToNavigation}
                    className="pointer-events-auto px-6 py-2 bg-amber-950/80 border border-amber-500/60 hover:border-amber-400 text-amber-200 text-xs font-serif uppercase tracking-widest cursor-pointer"
                  >
                    Return to The Chakra of Time
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {stage < 4 && (
            <div className="mt-4 flex items-center gap-2 text-stone-500 text-xs font-serif tracking-widest uppercase">
              <span>Scroll to deepen revelation</span>
              <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
            </div>
          )}
        </div>

        {/* Top HUD */}
        <div className="fixed top-6 inset-x-6 z-50 flex items-center justify-between pointer-events-auto">
          <button
            onClick={onBackToNavigation}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-sm border border-stone-800 bg-stone-950/80 backdrop-blur-md text-stone-300 hover:text-amber-300 text-xs font-serif uppercase tracking-widest transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-amber-400" />
            <span>Chakra Map</span>
          </button>

          <div className="flex items-center gap-2 px-3.5 py-1.5 border border-stone-800 bg-stone-950/80 text-xs font-serif tracking-wider text-amber-400">
            <span>BHAGAVAD GITA</span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-300">{Math.round(progress * 100)}%</span>
          </div>

          <button
            onClick={onToggleAudio}
            className="flex items-center gap-2 px-3 py-1.5 rounded-sm border border-stone-800 bg-stone-950/80 text-stone-300 hover:text-amber-300 text-xs cursor-pointer"
          >
            {isAudioMuted ? <VolumeX className="w-3.5 h-3.5 text-stone-500" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400" />}
            <span className="text-[11px] font-serif">{isAudioMuted ? 'Muted' : 'Sound On'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
