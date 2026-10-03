/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PARVAS } from '../../data/mahabharataData';
import { Parva } from '../../types';
import { audioEngine } from '../../services/audioEngine';
import { ArrowLeft, BookOpen, Scroll, Sparkles } from 'lucide-react';

interface ParvaArchiveProps {
  onBackToNavigation: () => void;
  isAudioMuted: boolean;
  onToggleAudio: () => void;
}

export const ParvaArchive: React.FC<ParvaArchiveProps> = ({
  onBackToNavigation,
  isAudioMuted,
  onToggleAudio,
}) => {
  const [selectedParvaNumber, setSelectedParvaNumber] = useState<number>(1);
  const currentParva = PARVAS.find((p) => p.number === selectedParvaNumber) || PARVAS[0];

  const handleSelectParva = (num: number) => {
    setSelectedParvaNumber(num);
    audioEngine.playSpokeHover();
  };

  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-stone-200 overflow-hidden flex flex-col justify-between p-4 md:p-8 select-none">
      {/* Background vignette & atmospheric glow */}
      <div className="absolute inset-0 radial-vignette pointer-events-none z-10" />
      <div className="absolute inset-0 volumetric-gold-beam opacity-30 pointer-events-none z-5" />

      {/* Top Header */}
      <div className="relative z-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-stone-800 pb-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onBackToNavigation}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-sm border border-stone-800 bg-stone-900/80 hover:border-amber-500/50 text-stone-300 hover:text-amber-200 text-xs font-serif uppercase tracking-widest transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-amber-400" />
            <span>Chakra Map</span>
          </button>
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-amber-500 font-serif">
              <Scroll className="w-3.5 h-3.5 text-amber-400" />
              <span>THE EIGHTEEN BOOKS OF SAGE VYASA</span>
            </div>
            <h2 className="text-lg md:text-xl font-serif font-bold text-stone-100 tracking-wider">
              THE 18 SACRED PARVAS ARCHIVE
            </h2>
          </div>
        </div>

        {/* Global Shloka Count Stat */}
        <div className="text-xs font-serif text-stone-400 flex items-center gap-3">
          <span>Total: 100,000+ Shlokas</span>
          <span>·</span>
          <span>18 Parvas</span>
          <span>·</span>
          <span className="text-amber-400 font-semibold">Itihasa Sanhita</span>
        </div>
      </div>

      {/* Central Interactive Parva View */}
      <div className="relative z-20 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start py-6">
        {/* Left: Ancient Scroll Catalog (Grid of 18) */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-2 max-h-[64vh] overflow-y-auto pr-2 scrollbar-none">
          {PARVAS.map((parva) => {
            const isSelected = parva.number === selectedParvaNumber;
            return (
              <button
                key={`parva-${parva.number}`}
                onClick={() => handleSelectParva(parva.number)}
                className={`p-3 rounded-sm border text-left transition-all cursor-pointer flex flex-col justify-between min-h-[92px] ${
                  isSelected
                    ? 'border-amber-500 bg-amber-950/40 shadow-[0_0_15px_rgba(217,119,6,0.2)]'
                    : 'border-stone-800/80 bg-stone-950/50 hover:border-stone-700 hover:bg-stone-900/30'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-[10px] text-amber-500/80 font-serif tracking-widest">
                    PARVA {String(parva.number).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] text-stone-500 font-mono">
                    {parva.shlokasCount} vs
                  </span>
                </div>
                <div className="text-sm font-serif font-bold text-stone-100 mt-1 tracking-wide">
                  {parva.name}
                </div>
                <div className="text-[11px] text-amber-300 font-serif">
                  {parva.devanagari}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Selected Parva Deep Reading Canvas */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentParva.number}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-stone-950/90 border border-stone-800 p-6 md:p-8 rounded-sm shadow-2xl backdrop-blur-md space-y-6"
            >
              {/* Header */}
              <div className="border-b border-stone-800 pb-4">
                <div className="text-xs uppercase tracking-[0.3em] text-amber-500 font-serif mb-1">
                  BOOK {currentParva.number} OF 18 · {currentParva.chaptersCount} CHAPTERS · {currentParva.shlokasCount} SHLOKAS
                </div>
                <div className="text-2xl text-amber-400 font-serif">
                  {currentParva.devanagari}
                </div>
                <h3 className="text-3xl font-serif font-bold text-stone-100 tracking-wider">
                  {currentParva.name}
                </h3>
                <p className="text-sm text-stone-400 font-serif italic mt-0.5">
                  "{currentParva.englishMeaning}"
                </p>
              </div>

              {/* Synopsis */}
              <div>
                <div className="text-xs uppercase tracking-widest text-stone-400 font-serif mb-2">
                  Canonical Synopsis
                </div>
                <p className="text-stone-300 text-sm leading-relaxed font-light">
                  {currentParva.synopsis}
                </p>
              </div>

              {/* Pivotal Moment */}
              <div className="p-4 bg-stone-900/60 border-l-2 border-amber-600">
                <div className="text-[11px] uppercase tracking-widest text-amber-400 font-serif mb-1">
                  Pivotal Dharmic Juncture
                </div>
                <p className="text-xs md:text-sm text-stone-200 leading-relaxed italic">
                  "{currentParva.pivotalMoment}"
                </p>
              </div>

              {/* Prominent Figures */}
              <div className="border-t border-stone-800 pt-4">
                <div className="text-xs uppercase tracking-widest text-stone-400 font-serif mb-2">
                  Central Personages in this Book
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentParva.prominentFigures.map((fig, idx) => (
                    <span
                      key={`fig-${idx}`}
                      className="px-3 py-1 bg-stone-900 border border-stone-800 text-xs font-serif text-amber-200 rounded-xs"
                    >
                      {fig}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
