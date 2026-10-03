/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Chapter, ChapterId } from '../types';
import { ChakraOfTime } from './ChakraOfTime';
import { audioEngine } from '../services/audioEngine';
import { Compass, Sparkles, ArrowRight } from 'lucide-react';

interface ChakraNavigatorProps {
  chapters: Chapter[];
  onSelectChapter: (chapterId: ChapterId) => void;
  onOpenWarTimeline: () => void;
  onOpenCharacters: () => void;
  onOpenParvas: () => void;
}

export const ChakraNavigator: React.FC<ChakraNavigatorProps> = ({
  chapters,
  onSelectChapter,
  onOpenWarTimeline,
  onOpenCharacters,
  onOpenParvas,
}) => {
  const [activeSpokeIndex, setActiveSpokeIndex] = useState<number | null>(9); // default highlighted to Abhimanyu (spoke 9)
  const [rotationAngle, setRotationAngle] = useState<number>(0);

  const activeChapter = activeSpokeIndex !== null ? chapters[activeSpokeIndex] : null;

  const handleHoverSpoke = (index: number | null) => {
    setActiveSpokeIndex(index);
    if (index !== null) {
      audioEngine.playSpokeHover();
      // Subtly align wheel so selected spoke sits near the top
      const spokeAngle = (index * 360) / chapters.length;
      setRotationAngle(-spokeAngle);
    }
  };

  const handleClickSpoke = (index: number) => {
    const chapter = chapters[index];
    if (chapter) {
      audioEngine.playPortalTransition();
      onSelectChapter(chapter.id);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-stone-200 overflow-hidden flex flex-col justify-between p-4 md:p-8">
      {/* Background cinematic atmosphere */}
      <div className="absolute inset-0 radial-vignette pointer-events-none z-10" />
      <div className="absolute inset-0 volumetric-gold-beam opacity-40 pointer-events-none" />

      {/* Floating dust and embers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`nav-dust-${i}`}
            className="absolute rounded-full bg-amber-400/30 blur-[1px]"
            style={{
              top: `${(i * 17) % 100}%`,
              left: `${(i * 23) % 100}%`,
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              animation: `pulse ${7 + (i % 6)}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      {/* Header bar */}
      <div className="relative z-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-stone-800/80 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-amber-500/80 font-serif">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Map of Time · 15 Spokes</span>
          </div>
          <h2 className="text-xl md:text-2xl font-serif tracking-widest text-stone-100 font-bold mt-0.5">
            THE CHAKRA OF SCRIPTURAL MEMORY
          </h2>
        </div>

        {/* Quick archive filters */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={onOpenWarTimeline}
            className="px-3.5 py-1.5 text-xs font-serif uppercase tracking-wider text-stone-300 hover:text-amber-200 border border-stone-800 hover:border-amber-500/50 bg-stone-900/60 rounded-sm transition-all cursor-pointer whitespace-nowrap"
          >
            Kurukshetra 18 Days
          </button>
          <button
            onClick={onOpenCharacters}
            className="px-3.5 py-1.5 text-xs font-serif uppercase tracking-wider text-stone-300 hover:text-amber-200 border border-stone-800 hover:border-amber-500/50 bg-stone-900/60 rounded-sm transition-all cursor-pointer whitespace-nowrap"
          >
            19 Characters
          </button>
          <button
            onClick={onOpenParvas}
            className="px-3.5 py-1.5 text-xs font-serif uppercase tracking-wider text-stone-300 hover:text-amber-200 border border-stone-800 hover:border-amber-500/50 bg-stone-900/60 rounded-sm transition-all cursor-pointer whitespace-nowrap"
          >
            18 Parvas
          </button>
        </div>
      </div>

      {/* Central Interactive Arena */}
      <div className="relative z-20 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6">
        {/* Left / Center: Dimensional Wheel */}
        <div className="lg:col-span-7 flex items-center justify-center relative">
          <div className="relative transition-transform duration-700 ease-out">
            <ChakraOfTime
              rotation={rotationAngle}
              size={540}
              interactive={true}
              activeSpokeIndex={activeSpokeIndex}
              onSpokeHover={handleHoverSpoke}
              onSpokeClick={handleClickSpoke}
              chapters={chapters}
            />
          </div>

          {/* Hint overlay below wheel */}
          <div className="absolute -bottom-2 text-center text-[11px] uppercase tracking-[0.25em] text-stone-500 font-serif pointer-events-none">
            Hover spokes to align time · Click to plunge into chapter
          </div>
        </div>

        {/* Right: Chapter Detail Showcase Card */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {activeChapter ? (
              <motion.div
                key={activeChapter.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-b from-stone-900/90 via-stone-950/90 to-black border border-stone-800/90 p-6 md:p-8 rounded-sm shadow-2xl backdrop-blur-md"
              >
                {/* Spoke index marker */}
                <div className="flex items-center justify-between border-b border-stone-800 pb-3 mb-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-amber-500/90 font-serif">
                    SPOKE {String(activeChapter.spokeIndex + 1).padStart(2, '0')} / 15
                  </span>
                  <span className="text-xs text-stone-500 font-serif tracking-wider">
                    {activeChapter.epoch}
                  </span>
                </div>

                {/* Devanagari kicker */}
                <div className="text-amber-400 font-serif text-lg tracking-wider mb-1">
                  {activeChapter.hindiTitle}
                </div>

                {/* Main Chapter Title */}
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-100 tracking-wider mb-1">
                  {activeChapter.title}
                </h3>

                <p className="text-sm font-serif italic text-amber-300/80 mb-4">
                  "{activeChapter.subtitle}"
                </p>

                {/* Summary */}
                <p className="text-stone-300 text-sm leading-relaxed mb-5 font-light">
                  {activeChapter.summary}
                </p>

                {/* Philosophical Essence Quote Box */}
                <div className="p-4 bg-stone-950/80 border-l-2 border-amber-600/70 mb-6 space-y-2">
                  <div className="text-[11px] uppercase tracking-widest text-stone-400 font-serif">
                    Philosophical Inquiry
                  </div>
                  <p className="text-xs md:text-sm text-stone-200 italic leading-relaxed">
                    "{activeChapter.keyQuote.hindi}"
                  </p>
                  <p className="text-xs text-amber-400/90 font-serif">
                    — {activeChapter.keyQuote.speaker}
                  </p>
                </div>

                {/* Action button: Enter scene */}
                <button
                  onClick={() => handleClickSpoke(activeChapter.spokeIndex)}
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-amber-900/80 via-amber-800/60 to-stone-900 border border-amber-500/50 hover:border-amber-400 text-amber-100 font-serif tracking-[0.2em] text-xs uppercase flex items-center justify-center gap-3 transition-all hover:shadow-[0_0_25px_rgba(217,119,6,0.3)] cursor-pointer"
                >
                  <span>Enter This Chapter</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
                </button>
              </motion.div>
            ) : (
              <div className="p-8 text-center text-stone-500 font-serif text-sm">
                Hover any spoke on the Chakra of Time to reveal its ancient chapter.
              </div>
            )}
          </AnimatePresence>

          {/* Quick Spoke List Carousel / Strip */}
          <div className="mt-4 flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {chapters.map((ch, i) => (
              <button
                key={ch.id}
                onClick={() => handleHoverSpoke(i)}
                className={`px-2 py-1 text-[11px] font-serif uppercase tracking-wider transition-colors shrink-0 ${
                  activeSpokeIndex === i
                    ? 'text-amber-400 border-b border-amber-400'
                    : 'text-stone-500 hover:text-stone-300'
                }`}
              >
                {String(i + 1).padStart(2, '0')}. {ch.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom status text */}
      <div className="relative z-20 flex items-center justify-between text-xs text-stone-500 font-serif border-t border-stone-800/80 pt-3">
        <span>KALA-CHAKRA ENGINE · SAMAY</span>
        <span>"कालः सृजति भूतानि कालः संहरते प्रजाः"</span>
      </div>
    </div>
  );
};
