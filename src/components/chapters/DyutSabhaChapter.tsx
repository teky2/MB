/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { audioEngine } from '../../services/audioEngine';
import { ArrowLeft, ChevronDown, Volume2, VolumeX } from 'lucide-react';

interface DyutSabhaChapterProps {
  onBackToNavigation: () => void;
  isAudioMuted: boolean;
  onToggleAudio: () => void;
}

export const DyutSabhaChapter: React.FC<DyutSabhaChapterProps> = ({
  onBackToNavigation,
  isAudioMuted,
  onToggleAudio,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalScroll = 3000;

  useEffect(() => {
    audioEngine.setSoundscape('sabha');
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const progress = Math.min(Math.max(scrollY / totalScroll, 0), 1);

  // Scenes:
  // 1: The Gathering in the Dark Stone Assembly Hall
  // 2: Shakuni's Bone Dice (Loaded Pasha rolling on the board)
  // 3: The Silence of the Patriarchs (Bhishma, Drona, Kripa looking down)
  // 4: The Invective of Draupadi & Infinite Divine Cloth (Akshaya Patra of Dignity)
  let scene = 1;
  if (progress >= 0.25 && progress < 0.55) scene = 2;
  else if (progress >= 0.55 && progress < 0.82) scene = 3;
  else if (progress >= 0.82) scene = 4;

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#040404] text-stone-200 select-none"
      style={{ height: `${totalScroll + 1200}px` }}
    >
      <div className="fixed inset-0 w-full h-full overflow-hidden bg-[#020202] flex items-center justify-center">
        {/* Oppressive Hall Vignette */}
        <div className="absolute inset-0 radial-vignette pointer-events-none z-20" />

        {/* Torchlight flickering against ancient black basalt stone */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-700 z-10"
          style={{
            background:
              scene === 1
                ? 'radial-gradient(circle at 50% 40%, rgba(217, 119, 6, 0.16) 0%, rgba(10, 10, 10, 0.95) 70%)'
                : scene === 2
                ? 'radial-gradient(circle at 50% 60%, rgba(180, 83, 9, 0.22) 0%, rgba(69, 26, 3, 0.3) 40%, rgba(5, 5, 5, 0.98) 80%)'
                : scene === 3
                ? 'radial-gradient(circle at 50% 50%, rgba(88, 28, 28, 0.2) 0%, rgba(20, 20, 20, 0.95) 75%)'
                : 'radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.25) 0%, rgba(147, 51, 234, 0.15) 45%, rgba(0, 0, 0, 0.98) 85%)',
          }}
        />

        {/* Colossal Ancient Stone Pillars on Sides */}
        <div className="absolute inset-0 flex justify-between pointer-events-none z-15 px-4 md:px-16 opacity-70">
          {/* Left Pillar */}
          <div className="w-16 md:w-28 h-full bg-gradient-to-r from-stone-900 via-stone-800 to-stone-950 border-r border-stone-800 relative">
            {/* Carved stone bands */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={`pillar-l-${i}`}
                className="w-full h-4 border-b border-stone-700/50 bg-stone-900/40"
                style={{ top: `${i * 9}%`, position: 'absolute' }}
              />
            ))}
          </div>

          {/* Right Pillar */}
          <div className="w-16 md:w-28 h-full bg-gradient-to-l from-stone-900 via-stone-800 to-stone-950 border-l border-stone-800 relative">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={`pillar-r-${i}`}
                className="w-full h-4 border-b border-stone-700/50 bg-stone-900/40"
                style={{ top: `${i * 9}%`, position: 'absolute' }}
              />
            ))}
          </div>
        </div>

        {/* 3D Visual Centerpiece */}
        <div
          className="relative w-full h-full flex items-center justify-center transition-transform duration-500 ease-out z-20"
          style={{
            transform: `scale(${0.9 + progress * 0.3})`,
            perspective: '1000px',
          }}
        >
          {/* SCENE 2: Loaded Bone Dice (Pasha) in Mid-air */}
          {scene === 2 && (
            <motion.div
              initial={{ opacity: 0, rotate: -30 }}
              animate={{ opacity: 1, rotate: scrollY * 0.1 }}
              className="relative flex items-center justify-center gap-12"
            >
              {/* Bone Die 1 */}
              <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-amber-100 via-stone-200 to-stone-400 border border-stone-500 shadow-[0_20px_40px_rgba(0,0,0,0.9)] flex items-center justify-center relative transform rotate-12">
                <div className="grid grid-cols-2 gap-3">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-900" />
                  <div className="w-3.5 h-3.5 rounded-full bg-red-900" />
                  <div className="w-3.5 h-3.5 rounded-full bg-red-900" />
                  <div className="w-3.5 h-3.5 rounded-full bg-red-900" />
                </div>
              </div>

              {/* Bone Die 2 */}
              <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-amber-100 via-stone-200 to-stone-400 border border-stone-500 shadow-[0_20px_40px_rgba(0,0,0,0.9)] flex items-center justify-center relative transform -rotate-12">
                <div className="grid grid-cols-3 gap-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={`dot-${i}`} className="w-3 h-3 rounded-full bg-red-900" />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* SCENE 3 & 4: Draupadi's Dignity & The Sacred Fabric */}
          {scene >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative flex flex-col items-center justify-center"
            >
              {/* Infinite Luminous Silk Swirls (Krishna's Miracle) */}
              {scene === 4 && (
                <div className="absolute inset-[-120px] pointer-events-none flex items-center justify-center">
                  <svg className="w-full h-full animate-spin" style={{ animationDuration: '30s' }} viewBox="0 0 600 600">
                    <path
                      d="M 100 300 Q 200 100 300 300 T 500 300"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="20"
                      opacity="0.3"
                      filter="blur(6px)"
                    />
                    <path
                      d="M 120 280 Q 220 480 320 280 T 480 280"
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="12"
                      opacity="0.4"
                    />
                    <path
                      d="M 150 320 Q 300 150 450 320"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="6"
                      opacity="0.6"
                    />
                  </svg>
                </div>
              )}

              {/* Dignified Queen Draupadi Silhouette */}
              <svg width="240" height="360" viewBox="0 0 240 360" className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]">
                {/* Divine Protection Aura */}
                {scene === 4 && (
                  <ellipse cx="120" cy="180" rx="90" ry="140" fill="rgba(251, 191, 36, 0.2)" filter="blur(20px)" />
                )}

                {/* Head held high with unbound flowing black hair */}
                <path
                  d="M 120 70 Q 70 120 60 260 Q 95 240 110 180"
                  fill="#0a0a0a"
                  stroke="#262626"
                  strokeWidth="1.5"
                />
                <circle cx="120" cy="65" r="15" fill="#171717" stroke="#fbbf24" strokeWidth="1.2" />

                {/* Queenly posture standing alone before the assembly */}
                <path
                  d="M 95 100 Q 120 90 145 100 L 155 180 Q 120 190 85 180 Z"
                  fill="#1c1917"
                  stroke="#d97706"
                  strokeWidth="1.2"
                />

                {/* Flowing saffron and crimson saree */}
                <path
                  d="M 90 180 L 60 340 L 180 340 L 150 180 Z"
                  fill="#78350f"
                  stroke="#b45309"
                  strokeWidth="1.5"
                />
              </svg>
            </motion.div>
          )}

          {/* SCENE 1: The Throne & Shadow */}
          {scene === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative flex flex-col items-center"
            >
              <svg width="320" height="300" viewBox="0 0 320 300" className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]">
                {/* Royal Throne Silhouette */}
                <path
                  d="M 80 80 L 240 80 L 250 240 L 70 240 Z"
                  fill="#171717"
                  stroke="#78350f"
                  strokeWidth="2"
                />
                <line x1="60" y1="240" x2="260" y2="240" stroke="#b45309" strokeWidth="4" />
                <rect x="70" y="240" width="16" height="40" fill="#0c0a09" stroke="#78350f" />
                <rect x="234" y="240" width="16" height="40" fill="#0c0a09" stroke="#78350f" />
              </svg>
            </motion.div>
          )}
        </div>

        {/* Narrative Captions Overlay */}
        <div className="absolute bottom-16 inset-x-0 z-30 flex flex-col items-center text-center px-6 pointer-events-none">
          <AnimatePresence mode="wait">
            {scene === 1 && (
              <motion.div
                key="dyut-1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="max-w-xl"
              >
                <span className="text-[11px] uppercase tracking-[0.35em] text-amber-500 font-serif">
                  HASTINAPUR ROYAL ASSEMBLY
                </span>
                <p className="text-xl md:text-2xl font-serif text-stone-200 mt-2">
                  The dice board is laid upon the stone floor.
                </p>
                <p className="text-sm text-stone-400 mt-1 italic">
                  An empire staked upon the roll of loaded ivory cubes.
                </p>
              </motion.div>
            )}

            {scene === 2 && (
              <motion.div
                key="dyut-2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="max-w-xl"
              >
                <span className="text-[11px] uppercase tracking-[0.35em] text-red-500 font-serif">
                  SHAKUNI'S LOADED DICE
                </span>
                <p className="text-xl md:text-2xl font-serif text-stone-100 mt-2">
                  Kingdom, wealth, brothers, and finally oneself... all lost.
                </p>
                <p className="text-xs text-stone-400 mt-2 font-serif uppercase tracking-widest">
                  Then Duryodhana demands the wager of Queen Draupadi.
                </p>
              </motion.div>
            )}

            {scene === 3 && (
              <motion.div
                key="dyut-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="max-w-xl"
              >
                <span className="text-[11px] uppercase tracking-[0.35em] text-amber-400 font-serif">
                  THE SILENCE OF THE ELDERS
                </span>
                <p className="text-lg md:text-xl font-serif text-stone-200 mt-2 italic">
                  "सभा वही है जहाँ वृद्ध हों, और वृद्ध वे हैं जो धर्म का निर्णय करें।"
                </p>
                <p className="text-xs text-stone-400 mt-2">
                  Bhishma hangs his head. Drona stares at the floor. In their catastrophic silence, the moral foundation of Hastinapur perishes.
                </p>
              </motion.div>
            )}

            {scene === 4 && (
              <motion.div
                key="dyut-4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="max-w-2xl p-6 bg-stone-950/80 border border-stone-800 rounded-sm backdrop-blur-md"
              >
                <span className="text-[11px] uppercase tracking-[0.35em] text-amber-400 font-serif">
                  THE MIRACLE OF DIGNITY
                </span>
                <p className="text-lg md:text-xl font-serif text-stone-100 mt-2">
                  "गोविन्द द्वारकावासिन् कृष्ण गोपीजनप्रिय..."
                </p>
                <p className="text-xs text-stone-300 mt-2 font-light leading-relaxed">
                  Surrendering all mortal hands, Draupadi calls upon Krishna. An infinite cascade of divine cloth envelops her, leaving Dushasana collapsed in exhaustion amidst heaps of fabric.
                </p>
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={onBackToNavigation}
                    className="pointer-events-auto px-6 py-2 bg-stone-900 border border-amber-600/50 hover:border-amber-400 text-amber-200 text-xs font-serif uppercase tracking-widest cursor-pointer"
                  >
                    Return to The Chakra of Time
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {scene < 4 && (
            <div className="mt-4 flex items-center gap-2 text-stone-500 text-xs font-serif tracking-widest uppercase">
              <span>Scroll to witness</span>
              <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
            </div>
          )}
        </div>

        {/* Top HUD */}
        <div className="fixed top-6 inset-x-6 z-50 flex items-center justify-between pointer-events-auto">
          <button
            onClick={onBackToNavigation}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-sm border border-stone-800 bg-stone-950/80 text-stone-300 hover:text-amber-300 text-xs font-serif uppercase tracking-widest cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-amber-400" />
            <span>Chakra Map</span>
          </button>

          <div className="px-3.5 py-1.5 border border-stone-800 bg-stone-950/80 text-xs font-serif tracking-wider text-amber-400">
            <span>DYUT SABHA</span>
            <span className="text-stone-600 mx-2">·</span>
            <span className="text-stone-300">SCENE {scene} OF 4</span>
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
