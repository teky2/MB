/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { audioEngine } from '../../services/audioEngine';
import { ArrowLeft, ChevronDown, Volume2, VolumeX } from 'lucide-react';

interface BhishmaChapterProps {
  onBackToNavigation: () => void;
  isAudioMuted: boolean;
  onToggleAudio: () => void;
}

export const BhishmaChapter: React.FC<BhishmaChapterProps> = ({
  onBackToNavigation,
  isAudioMuted,
  onToggleAudio,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalScroll = 3000;

  useEffect(() => {
    audioEngine.setSoundscape('drone');
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const progress = Math.min(Math.max(scrollY / totalScroll, 0), 1);

  // Scenes:
  // 1: The Golden Sunrise & The White-Armored Patriarch
  // 2: Bhishma Pratigya - The Vow of Renunciation
  // 3: The Tenth Sunset - Lowering Weapons before Shikhandi
  // 4: The Sharashayya - Suspended on a Bed of Arrows
  let scene = 1;
  if (progress >= 0.25 && progress < 0.55) scene = 2;
  else if (progress >= 0.55 && progress < 0.82) scene = 3;
  else if (progress >= 0.82) scene = 4;

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#0a0705] text-stone-200 select-none"
      style={{ height: `${totalScroll + 1200}px` }}
    >
      <div className="fixed inset-0 w-full h-full overflow-hidden bg-[#050302] flex items-center justify-center">
        {/* Radial Vignette */}
        <div className="absolute inset-0 radial-vignette pointer-events-none z-20" />

        {/* Sunrise Atmosphere Piercing Through Smoke */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-1000 z-10"
          style={{
            background:
              scene === 1
                ? 'radial-gradient(ellipse at 50% 20%, rgba(245, 158, 11, 0.28) 0%, rgba(180, 83, 9, 0.12) 40%, rgba(10, 7, 5, 0.95) 80%)'
                : scene === 2
                ? 'radial-gradient(ellipse at 50% 30%, rgba(217, 119, 6, 0.2) 0%, rgba(76, 29, 149, 0.15) 50%, rgba(10, 7, 5, 0.98) 85%)'
                : scene === 3
                ? 'radial-gradient(ellipse at 50% 50%, rgba(220, 38, 38, 0.25) 0%, rgba(180, 83, 9, 0.15) 40%, rgba(10, 7, 5, 0.98) 85%)'
                : 'radial-gradient(ellipse at 50% 40%, rgba(251, 191, 36, 0.2) 0%, rgba(148, 163, 184, 0.15) 45%, rgba(10, 7, 5, 1) 90%)',
          }}
        />

        {/* Floating Golden Dust & Smoldering Ash */}
        <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={`dust-${i}`}
              className="absolute rounded-full bg-amber-400/40 blur-[0.6px]"
              style={{
                top: `${(i * 19) % 100}%`,
                left: `${(i * 29) % 100}%`,
                width: `${(i % 3) + 1.5}px`,
                height: `${(i % 3) + 1.5}px`,
                animation: `pulse ${6 + (i % 6)}s infinite ease-in-out`,
                transform: `translateY(${-(scrollY * 0.04) % 600}px)`,
              }}
            />
          ))}
        </div>

        {/* 3D Visual Centerpiece */}
        <div
          className="relative w-full h-full flex items-center justify-center transition-transform duration-500 ease-out"
          style={{
            transform: `scale(${0.9 + progress * 0.3})`,
            perspective: '1000px',
          }}
        >
          {/* Bhishma Patriarch Silhouette */}
          <div className="relative flex flex-col items-center">
            {scene < 4 ? (
              <svg width="260" height="380" viewBox="0 0 260 380" className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]">
                {/* Golden Sunrise Rim Light */}
                <ellipse cx="130" cy="80" rx="40" ry="40" fill="rgba(251, 191, 36, 0.3)" filter="blur(14px)" />

                {/* Silver/White flowing hair & beard */}
                <path
                  d="M 120 70 Q 105 105 115 140 Q 130 155 145 140 Q 155 105 140 70 Z"
                  fill="#f1f5f9"
                  stroke="#cbd5e1"
                  strokeWidth="1.2"
                />

                {/* Ancient Head & Silver Mukuta */}
                <circle cx="130" cy="65" r="16" fill="#1e293b" stroke="#e2e8f0" strokeWidth="1.5" />
                <path d="M 122 55 L 130 35 L 138 55 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />

                {/* White Armored Robes & Chestplate */}
                <path
                  d="M 90 100 Q 130 90 170 100 L 180 180 Q 130 195 80 180 Z"
                  fill="#f8fafc"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                  opacity="0.9"
                />

                {/* Flowing white robes */}
                <path
                  d="M 85 180 L 70 340 L 190 340 L 175 180 Z"
                  fill="#e2e8f0"
                  stroke="#94a3b8"
                  strokeWidth="1.5"
                  opacity="0.85"
                />

                {/* The Unbroken Bow of Devavrata */}
                <path
                  d="M 60 40 Q 25 180 65 330"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="3"
                  filter="drop-shadow(0 0 5px rgba(255,255,255,0.7))"
                />
              </svg>
            ) : (
              /* The Iconic Bed of Arrows (Sharashayya) */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative flex flex-col items-center"
              >
                <svg width="480" height="240" viewBox="0 0 480 240" className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]">
                  {/* Bed of densely packed vertical and angled arrows piercing from below */}
                  {Array.from({ length: 36 }).map((_, i) => {
                    const x = 50 + i * 11;
                    const y1 = 190;
                    const y2 = 80 + Math.sin(i * 0.4) * 12;
                    return (
                      <line
                        key={`shar-${i}`}
                        x1={x}
                        y1={y1}
                        x2={x + (i % 2 === 0 ? -3 : 3)}
                        y2={y2}
                        stroke="#cbd5e1"
                        strokeWidth="2"
                        opacity="0.75"
                      />
                    );
                  })}

                  {/* Horizontal silhouette of the reclining Grandsire Bhishma */}
                  <path
                    d="M 60 90 Q 240 75 420 85 L 420 105 Q 240 100 60 105 Z"
                    fill="#f8fafc"
                    stroke="#94a3b8"
                    strokeWidth="2"
                  />

                  {/* Head rest supported by three arrows shot by Arjuna */}
                  <line x1="70" y1="90" x2="50" y2="180" stroke="#f59e0b" strokeWidth="2.5" />
                  <line x1="80" y1="90" x2="65" y2="180" stroke="#f59e0b" strokeWidth="2.5" />
                  <line x1="90" y1="90" x2="80" y2="180" stroke="#f59e0b" strokeWidth="2.5" />

                  {/* Reclining peaceful head */}
                  <circle cx="75" cy="85" r="14" fill="#1e293b" stroke="#e2e8f0" strokeWidth="1.5" />
                </svg>
              </motion.div>
            )}
          </div>
        </div>

        {/* Narrative Overlay */}
        <div className="absolute bottom-16 inset-x-0 z-30 flex flex-col items-center text-center px-6 pointer-events-none">
          <AnimatePresence mode="wait">
            {scene === 1 && (
              <motion.div
                key="bh-1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="max-w-xl"
              >
                <span className="text-[11px] uppercase tracking-[0.35em] text-amber-400 font-serif">
                  DEVAVRATA · THE EIGHTH VASU
                </span>
                <p className="text-xl md:text-2xl font-serif text-stone-200 mt-2">
                  Son of the sacred river Ganga. Blessed with death at will.
                </p>
                <p className="text-sm text-stone-400 mt-1 italic">
                  An invincible warrior dressed in purest white armor, standing as the lone pillar between two epochs.
                </p>
              </motion.div>
            )}

            {scene === 2 && (
              <motion.div
                key="bh-2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="max-w-xl"
              >
                <span className="text-[11px] uppercase tracking-[0.35em] text-amber-500 font-serif">
                  BHISHMA PRATIGYA · THE TERRIBLE VOW
                </span>
                <p className="text-xl md:text-2xl font-serif text-stone-100 mt-2">
                  "चाहे तीनों लोकों का राज्य मिले, मैं सिंहासन और संतान दोनों का त्याग करता हूँ।"
                </p>
                <p className="text-xs text-stone-400 mt-2 font-serif uppercase tracking-widest">
                  Renunciation of the crown for a father's fleeting desire.
                </p>
              </motion.div>
            )}

            {scene === 3 && (
              <motion.div
                key="bh-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="max-w-xl"
              >
                <span className="text-[11px] uppercase tracking-[0.35em] text-red-400 font-serif">
                  DAY 10 SUNSET · THE CODE OF DHARMA
                </span>
                <p className="text-xl md:text-2xl font-serif text-stone-200 mt-2">
                  Shikhandi stands before Arjuna's chariot.
                </p>
                <p className="text-sm text-stone-400 mt-1">
                  True to his eternal vow, Bhishma lowers his weapons. Arjuna's arrows pierce through.
                </p>
              </motion.div>
            )}

            {scene === 4 && (
              <motion.div
                key="bh-4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="max-w-2xl p-6 bg-stone-950/80 border border-stone-800 rounded-sm backdrop-blur-md"
              >
                <span className="text-[11px] uppercase tracking-[0.35em] text-amber-400 font-serif">
                  SHARASHAYYA · THE BED OF ARROWS
                </span>
                <p className="text-lg md:text-xl font-serif text-stone-100 mt-2 italic">
                  "अर्जुन के बाण मुझे चुभते नहीं, वे तो मेरे थके हुए शरीर को शय्या दे रहे हैं।"
                </p>
                <p className="text-xs text-stone-400 mt-2">
                  Awaiting the northward journey of the sun (Uttarayana) to release his breath, imparting the wisdom of Shanti Parva.
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
              <span>Scroll to witness his destiny</span>
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
            <span>BHISHMA PITAMAH</span>
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
