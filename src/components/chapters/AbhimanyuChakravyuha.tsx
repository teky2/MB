/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { audioEngine } from '../../services/audioEngine';
import { ChevronDown, ArrowLeft, Volume2, VolumeX, Eye } from 'lucide-react';

interface AbhimanyuChakravyuhaProps {
  onBackToNavigation: () => void;
  isAudioMuted: boolean;
  onToggleAudio: () => void;
}

export const AbhimanyuChakravyuha: React.FC<AbhimanyuChakravyuhaProps> = ({
  onBackToNavigation,
  isAudioMuted,
  onToggleAudio,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalScroll = 3800;

  useEffect(() => {
    // Set soundscape for this chapter
    audioEngine.setSoundscape('chakravyuha');

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Normalized scroll 0 to 1
  const progress = Math.min(Math.max(scrollY / totalScroll, 0), 1);

  // Scene determination (6 scenes)
  // Scene 1: 0.00 - 0.16 (The Battlefield)
  // Scene 2: 0.16 - 0.32 (Abhimanyu Reveal)
  // Scene 3: 0.32 - 0.50 (The Chakravyuha Living Machine)
  // Scene 4: 0.50 - 0.68 (The Entry & Trap Closes)
  // Scene 5: 0.68 - 0.84 (Inside the Claustrophobic Maze)
  // Scene 6: 0.84 - 1.00 (The Formation Closes / Silence & Darkness)
  let currentScene = 1;
  if (progress >= 0.16 && progress < 0.32) currentScene = 2;
  else if (progress >= 0.32 && progress < 0.50) currentScene = 3;
  else if (progress >= 0.50 && progress < 0.68) currentScene = 4;
  else if (progress >= 0.68 && progress < 0.84) currentScene = 5;
  else if (progress >= 0.84) currentScene = 6;

  // Camera coordinates based on scroll
  const cameraZ = progress * 600;
  const cameraZoom = 1 + progress * 0.9;
  const cameraTiltX = currentScene === 3 ? 55 * ((progress - 0.32) / 0.18) : currentScene > 3 && currentScene < 6 ? 20 : 0;

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#030303] text-stone-200 select-none"
      style={{ height: `${totalScroll + 1200}px` }}
    >
      {/* Fixed Fullscreen Viewport */}
      <div className="fixed inset-0 w-full h-full overflow-hidden bg-black flex items-center justify-center">
        {/* Deep Ash Ground & Vignette */}
        <div className="absolute inset-0 radial-vignette pointer-events-none z-20" />

        {/* Dynamic Scene Lighting */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-700 z-10"
          style={{
            background:
              currentScene === 1
                ? 'radial-gradient(circle at 50% 30%, rgba(217, 119, 6, 0.15) 0%, transparent 70%)'
                : currentScene === 2
                ? 'radial-gradient(circle at 50% 40%, rgba(251, 191, 36, 0.22) 0%, rgba(180, 83, 9, 0.08) 50%, transparent 80%)'
                : currentScene === 3
                ? 'radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.18) 0%, rgba(69, 26, 3, 0.25) 60%, transparent 85%)'
                : currentScene === 4
                ? 'radial-gradient(circle at 50% 60%, rgba(185, 28, 28, 0.2) 0%, rgba(24, 24, 27, 0.9) 70%, transparent 100%)'
                : currentScene === 5
                ? 'radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.25) 0%, rgba(17, 24, 39, 0.95) 75%, transparent 100%)'
                : 'radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.2) 0%, rgba(0, 0, 0, 0.95) 75%, transparent 100%)',
          }}
        />

        {/* Floating Battlefield Ash, Sand & Sparks */}
        <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
          {Array.from({ length: 35 }).map((_, i) => {
            const x = (i * 27) % 100;
            const y = (i * 37) % 100;
            const size = (i % 4) + 1.2;
            const speed = (i % 5) + 3;
            const isSpark = i % 4 === 0 && (currentScene === 4 || currentScene === 5);

            return (
              <div
                key={`ember-${i}`}
                className={`absolute rounded-full ${
                  isSpark ? 'bg-amber-300 shadow-[0_0_8px_#f59e0b]' : 'bg-stone-500/40 blur-[0.8px]'
                }`}
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity: currentScene === 6 ? 0.2 : 0.8,
                  transform: `translate(${Math.sin((scrollY * 0.002) + i) * 60}px, ${-((scrollY * 0.05 * speed) % 800)}px)`,
                  transition: 'opacity 0.5s ease',
                }}
              />
            );
          })}
        </div>

        {/* 3D Battlefield Stage Container */}
        <div
          className="relative w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
          style={{
            perspective: '1000px',
            transform: `scale(${cameraZoom}) rotateX(${cameraTiltX}deg)`,
          }}
        >
          {/* ============================================================== */}
          {/* SCENE 1: THE BATTLEFIELD (Distant Ash Horizon, Banners, Armies)*/}
          {/* ============================================================== */}
          <div
            className="absolute inset-0 flex flex-col justify-end transition-opacity duration-700 pointer-events-none"
            style={{
              opacity: currentScene <= 2 ? 1 : 0.25,
            }}
          >
            {/* Ash terrain horizon */}
            <div className="w-full h-72 bg-gradient-to-t from-[#0a0a0a] via-[#141414] to-transparent relative">
              {/* Distant silhouettes of war banners fluttering */}
              <div className="absolute bottom-12 left-10 flex items-end gap-6 opacity-60">
                <div className="w-1 h-36 bg-stone-700 relative">
                  <div className="absolute top-0 left-1 w-10 h-6 bg-red-950/70 border-l border-red-700/60 skew-y-12" />
                </div>
                <div className="w-1 h-28 bg-stone-700 relative">
                  <div className="absolute top-0 left-1 w-8 h-5 bg-amber-950/70 border-l border-amber-700/60 -skew-y-6" />
                </div>
                <div className="w-1 h-44 bg-stone-700 relative">
                  <div className="absolute top-0 left-1 w-12 h-8 bg-stone-900 border-l border-stone-600 skew-y-6" />
                </div>
              </div>

              {/* Right side distant flags */}
              <div className="absolute bottom-12 right-12 flex items-end gap-5 opacity-60">
                <div className="w-1 h-40 bg-stone-700 relative">
                  <div className="absolute top-0 right-1 w-12 h-6 bg-amber-950/80 -skew-y-12" />
                </div>
                <div className="w-1 h-32 bg-stone-700 relative">
                  <div className="absolute top-0 right-1 w-9 h-5 bg-red-950/70 skew-y-6" />
                </div>
              </div>

              {/* Distant cavalry & infantry silhouette rows */}
              <svg className="w-full h-24 absolute bottom-0 opacity-40" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path
                  d="M0,120 L0,90 Q150,70 300,90 T600,85 T900,90 T1200,80 L1200,120 Z"
                  fill="#080808"
                />
                {/* Army spears silhouettes */}
                {Array.from({ length: 48 }).map((_, i) => (
                  <line
                    key={`spear-${i}`}
                    x1={i * 25 + 10}
                    y1={75 - (i % 5) * 4}
                    x2={i * 25 + 10}
                    y2={110}
                    stroke="#262626"
                    strokeWidth="1.5"
                  />
                ))}
              </svg>
            </div>
          </div>

          {/* ============================================================== */}
          {/* SCENE 2: ABHIMANYU SILHOUETTE (Youthful hero, Kodanda bow)     */}
          {/* ============================================================== */}
          {(currentScene === 2 || currentScene === 1) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: currentScene === 2 ? 1 : 0.3,
                scale: currentScene === 2 ? 1 : 0.85,
              }}
              transition={{ duration: 0.8 }}
              className="absolute z-20 flex flex-col items-center justify-center pointer-events-none"
            >
              {/* Detailed Stylized Silhouette of Warrior Abhimanyu */}
              <svg width="280" height="420" viewBox="0 0 280 420" className="drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
                {/* Golden rim light glow behind head & shoulders */}
                <ellipse cx="140" cy="90" rx="35" ry="35" fill="rgba(245, 158, 11, 0.25)" filter="blur(10px)" />
                <ellipse cx="140" cy="180" rx="60" ry="90" fill="rgba(217, 119, 6, 0.15)" filter="blur(15px)" />

                {/* Head with Mukuta (Kshatriya helmet/crown) */}
                <path
                  d="M 132 55 L 140 28 L 148 55 Q 155 70 148 88 Q 140 96 132 88 Q 125 70 132 55 Z"
                  fill="#171717"
                  stroke="#d97706"
                  strokeWidth="1.5"
                />

                {/* Facial Profile with dramatic rim light */}
                <path
                  d="M 144 65 L 152 70 L 145 74 L 147 78 L 142 82"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="1.5"
                />

                {/* Broad Shoulders & Kavacha (Chest Armor) */}
                <path
                  d="M 100 110 Q 140 100 180 110 L 195 160 Q 140 180 85 160 Z"
                  fill="#1f1f1f"
                  stroke="#b45309"
                  strokeWidth="1.8"
                />

                {/* Torso & Torso Armor scales */}
                <path
                  d="M 105 160 L 115 230 L 165 230 L 175 160 Z"
                  fill="#171717"
                  stroke="#78350f"
                  strokeWidth="1.2"
                />

                {/* Flowing Angavastram (cloth fluttering in the war wind) */}
                <path
                  d="M 98 120 Q 60 160 40 230 Q 80 200 110 180 Z"
                  fill="rgba(180, 83, 9, 0.5)"
                  className="animate-pulse"
                />

                {/* Mighty Bow (Kodanda) */}
                <path
                  d="M 70 40 Q 30 200 80 360"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="3.5"
                  filter="drop-shadow(0 0 6px rgba(245,158,11,0.6))"
                />
                {/* Bowstring taut */}
                <line x1="70" y1="40" x2="80" y2="360" stroke="#fef08a" strokeWidth="1" opacity="0.8" />

                {/* Warrior quiver with golden arrow fletchings */}
                <rect x="180" y="100" width="16" height="85" fill="#262626" stroke="#b45309" strokeWidth="1.2" transform="rotate(18, 180, 100)" />
                <line x1="188" y1="90" x2="188" y2="100" stroke="#fbbf24" strokeWidth="2" />
                <line x1="194" y1="85" x2="194" y2="100" stroke="#fbbf24" strokeWidth="2" />

                {/* Legs in stance of readiness */}
                <path d="M 115 230 L 95 360 L 110 375 L 130 240 Z" fill="#171717" />
                <path d="M 165 230 L 185 360 L 170 375 L 150 240 Z" fill="#141414" />
              </svg>
            </motion.div>
          )}

          {/* ============================================================== */}
          {/* SCENE 3 & 4: THE CHAKRAVYUHA (Living Concentric Formation)      */}
          {/* ============================================================== */}
          {(currentScene >= 3 && currentScene <= 5) && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Concentric rotating warrior ranks */}
              <div className="relative w-[700px] h-[700px] flex items-center justify-center">
                {/* Ring 1 - Outermost regiment (rotates clockwise) */}
                <div
                  className="absolute inset-0 rounded-full border border-amber-800/40"
                  style={{
                    transform: `rotate(${scrollY * 0.04}deg)`,
                    transition: 'transform 0.1s linear',
                  }}
                >
                  {Array.from({ length: 32 }).map((_, i) => {
                    const angle = (i * 360) / 32;
                    return (
                      <div
                        key={`ring1-${i}`}
                        className="absolute w-2 h-7 bg-gradient-to-t from-stone-800 to-amber-900 border-t border-amber-400/60"
                        style={{
                          top: '0',
                          left: '50%',
                          transformOrigin: '0 350px',
                          transform: `rotate(${angle}deg)`,
                        }}
                      />
                    );
                  })}
                </div>

                {/* Ring 2 - Middle regiment (rotates counter-clockwise) */}
                <div
                  className="absolute inset-[65px] rounded-full border border-red-900/40"
                  style={{
                    transform: `rotate(${-scrollY * 0.06}deg)`,
                    transition: 'transform 0.1s linear',
                  }}
                >
                  {Array.from({ length: 24 }).map((_, i) => {
                    const angle = (i * 360) / 24;
                    return (
                      <div
                        key={`ring2-${i}`}
                        className="absolute w-2.5 h-6 bg-stone-900 border-t border-red-600/70"
                        style={{
                          top: '0',
                          left: '50%',
                          transformOrigin: '0 285px',
                          transform: `rotate(${angle}deg)`,
                        }}
                      />
                    );
                  })}
                </div>

                {/* Ring 3 - Inner vanguard regiment (rotates clockwise) */}
                <div
                  className="absolute inset-[130px] rounded-full border border-amber-700/50"
                  style={{
                    transform: `rotate(${scrollY * 0.08}deg)`,
                    transition: 'transform 0.1s linear',
                  }}
                >
                  {Array.from({ length: 18 }).map((_, i) => {
                    const angle = (i * 360) / 18;
                    return (
                      <div
                        key={`ring3-${i}`}
                        className="absolute w-3 h-5 bg-stone-800 border-t border-amber-300"
                        style={{
                          top: '0',
                          left: '50%',
                          transformOrigin: '0 220px',
                          transform: `rotate(${angle}deg)`,
                        }}
                      />
                    );
                  })}
                </div>

                {/* Ring 4 - Center chamber where the 7 Maharathis wait */}
                <div
                  className="absolute inset-[200px] rounded-full border border-stone-800 bg-red-950/10 flex items-center justify-center"
                  style={{
                    boxShadow: currentScene === 5 ? '0 0 80px rgba(185, 28, 28, 0.4)' : 'none',
                  }}
                >
                  {/* Central Abhimanyu inside the maze */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-amber-500/80 shadow-[0_0_20px_#f59e0b] animate-ping opacity-60" />
                    <div className="absolute w-4 h-4 rounded-full bg-amber-400" />
                  </div>
                </div>

                {/* The Breach / Entrance Gate (Opens in Scene 3, Closes tightly in Scene 4 & 5) */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-16 transition-all duration-700 flex items-center justify-between"
                  style={{
                    opacity: currentScene === 4 ? 0.3 : 1,
                  }}
                >
                  <div
                    className="w-8 h-10 bg-amber-900/60 border border-amber-500 transition-transform duration-700"
                    style={{
                      transform: currentScene === 3 ? 'translateX(-30px)' : 'translateX(0)',
                    }}
                  />
                  <div
                    className="w-8 h-10 bg-amber-900/60 border border-amber-500 transition-transform duration-700"
                    style={{
                      transform: currentScene === 3 ? 'translateX(30px)' : 'translateX(0)',
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* SCENE 5: INSIDE COMBAT (Arrow barrages, Chariot wheel fight)   */}
          {/* ============================================================== */}
          {currentScene === 5 && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
              {/* Crossed arrows flying */}
              <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={`arrow-${i}`}
                    className="absolute h-[1.5px] bg-gradient-to-r from-amber-400 via-amber-200 to-transparent"
                    style={{
                      width: '140px',
                      top: `${15 + (i * 7)}%`,
                      left: `${(i % 2 === 0 ? -10 : 100)}%`,
                      transform: `rotate(${i % 2 === 0 ? 15 + i * 5 : -165 - i * 4}deg)`,
                      animation: `pulse 0.4s infinite alternate ${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>

              {/* The Broken Chariot Wheel Motif (Abhimanyu's final weapon) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.8, scale: 1, rotate: scrollY * 0.15 }}
                className="w-48 h-48 rounded-full border-4 border-amber-600/70 relative flex items-center justify-center"
              >
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={`wheel-spoke-${i}`}
                    className="absolute w-full h-[2px] bg-amber-700/80"
                    style={{ transform: `rotate(${i * 45}deg)` }}
                  />
                ))}
                <div className="w-8 h-8 rounded-full bg-stone-900 border border-amber-400" />
              </motion.div>
            </div>
          )}

          {/* ============================================================== */}
          {/* SCENE 6: THE SILENCE & FINAL COMMEMORATION                    */}
          {/* ============================================================== */}
          {currentScene === 6 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 bg-black flex flex-col items-center justify-center text-center px-6 z-40"
            >
              <div className="max-w-2xl space-y-6">
                <p className="font-serif text-2xl md:text-3xl text-stone-300 leading-relaxed font-light">
                  "Some battles are remembered not because they were won..."
                </p>
                <p className="font-serif text-3xl md:text-4xl text-amber-400 font-bold leading-relaxed">
                  "...but because someone chose to enter."
                </p>

                <div className="pt-8 border-t border-stone-800 max-w-md mx-auto text-xs tracking-[0.3em] uppercase text-stone-500 font-serif">
                  Abhimanyu · Son of Arjuna · Eternally Sixteen
                </div>

                <div className="pt-4 flex justify-center">
                  <button
                    onClick={onBackToNavigation}
                    className="px-6 py-2.5 text-xs font-serif uppercase tracking-widest text-amber-200 border border-amber-700/50 hover:border-amber-400 bg-stone-950 transition-all cursor-pointer"
                  >
                    Return to The Chakra of Time
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Narrative Captions Overlay per Scene */}
        {currentScene < 6 && (
          <div className="absolute bottom-16 inset-x-0 z-30 flex flex-col items-center text-center px-6 pointer-events-none">
            <AnimatePresence mode="wait">
              {currentScene === 1 && (
                <motion.div
                  key="scene1-text"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="max-w-xl"
                >
                  <span className="text-[11px] uppercase tracking-[0.35em] text-amber-500 font-serif">
                    SCENE 01 · THE THIRTEENTH DAWN
                  </span>
                  <p className="text-lg md:text-xl font-serif text-stone-200 mt-1">
                    An ocean of dust and banners. The great Pandava titans have been lured away.
                  </p>
                </motion.div>
              )}

              {currentScene === 2 && (
                <motion.div
                  key="scene2-text"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="max-w-xl"
                >
                  <span className="text-[11px] uppercase tracking-[0.35em] text-amber-500 font-serif">
                    SCENE 02 · ABHIMANYU
                  </span>
                  <p className="text-xl md:text-2xl font-serif text-amber-200 mt-1">
                    "कुरुक्षेत्र के रण में, एक युवा योद्धा आगे बढ़ा।"
                  </p>
                  <p className="text-sm text-stone-400 mt-1 font-serif tracking-widest uppercase">
                    Sixteen years old. Pure courage. No fear.
                  </p>
                </motion.div>
              )}

              {currentScene === 3 && (
                <motion.div
                  key="scene3-text"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="max-w-xl"
                >
                  <span className="text-[11px] uppercase tracking-[0.35em] text-amber-500 font-serif">
                    SCENE 03 · THE CHAKRAVYUHA
                  </span>
                  <p className="text-lg md:text-xl font-serif text-stone-200 mt-1">
                    Drona's rotating labyrinth awakens like an armored beast of concentric steel.
                  </p>
                </motion.div>
              )}

              {currentScene === 4 && (
                <motion.div
                  key="scene4-text"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="max-w-xl"
                >
                  <span className="text-[11px] uppercase tracking-[0.35em] text-red-500 font-serif">
                    SCENE 04 · THE BREACH
                  </span>
                  <p className="text-lg md:text-xl font-serif text-stone-200 mt-1">
                    He enters alone. Jayadratha bars the Pandavas behind. The gate seals shut.
                  </p>
                </motion.div>
              )}

              {currentScene === 5 && (
                <motion.div
                  key="scene5-text"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="max-w-xl"
                >
                  <span className="text-[11px] uppercase tracking-[0.35em] text-red-400 font-serif">
                    SCENE 05 · AGAINST SEVEN TITANS
                  </span>
                  <p className="text-lg md:text-xl font-serif text-stone-200 mt-1">
                    Bow snapped, chariot shattered. He raises a broken chariot wheel as his shield.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Scroll Cue */}
            <div className="mt-4 flex items-center gap-2 text-stone-500 text-xs font-serif tracking-widest uppercase">
              <span>Scroll to drive cinematic camera</span>
              <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
            </div>
          </div>
        )}

        {/* Top Floating HUD: Return & Audio & Scene Indicator */}
        <div className="fixed top-6 inset-x-6 z-50 flex items-center justify-between pointer-events-auto">
          <button
            onClick={onBackToNavigation}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-sm border border-stone-800 bg-stone-950/80 backdrop-blur-md text-stone-300 hover:text-amber-300 hover:border-amber-500/50 text-xs font-serif uppercase tracking-widest transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-amber-400" />
            <span>Chakra Map</span>
          </button>

          {/* Scene Tracker */}
          <div className="hidden sm:flex items-center gap-3 px-4 py-1.5 rounded-sm border border-stone-800/80 bg-stone-950/80 backdrop-blur-md text-xs font-serif">
            <span className="text-amber-500 font-bold tracking-wider">ABHIMANYU</span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-300">SCENE {currentScene} OF 6</span>
          </div>

          <button
            onClick={onToggleAudio}
            className="flex items-center gap-2 px-3 py-1.5 rounded-sm border border-stone-800 bg-stone-950/80 backdrop-blur-md text-stone-300 hover:text-amber-300 text-xs transition-colors cursor-pointer"
          >
            {isAudioMuted ? <VolumeX className="w-3.5 h-3.5 text-stone-500" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400" />}
            <span className="text-[11px] font-serif">{isAudioMuted ? 'Muted' : 'Sound On'}</span>
          </button>
        </div>

        {/* Vertical Scroll Progress on Right Edge */}
        <div className="fixed right-6 top-1/2 -translate-y-1/2 h-44 w-[2px] bg-stone-900 z-50 hidden md:block">
          <div
            className="w-full bg-gradient-to-b from-amber-400 via-red-500 to-amber-600 transition-all duration-100"
            style={{ height: `${progress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};
