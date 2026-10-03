/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WAR_DAYS } from '../../data/mahabharataData';
import { WarDay } from '../../types';
import { audioEngine } from '../../services/audioEngine';
import { ArrowLeft, ChevronLeft, ChevronRight, Shield, Swords, Skull, Flag } from 'lucide-react';

interface Kurukshetra18DaysProps {
  onBackToNavigation: () => void;
  isAudioMuted: boolean;
  onToggleAudio: () => void;
}

export const Kurukshetra18Days: React.FC<Kurukshetra18DaysProps> = ({
  onBackToNavigation,
  isAudioMuted,
  onToggleAudio,
}) => {
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(1);
  const currentDay = WAR_DAYS.find((d) => d.day === selectedDayNumber) || WAR_DAYS[0];

  useEffect(() => {
    audioEngine.setSoundscape('battlefield');
  }, []);

  const handleSelectDay = (day: number) => {
    setSelectedDayNumber(day);
    audioEngine.playWarDrumHit();
  };

  // Determine dynamic environmental background based on the day's atmosphere
  const getAtmosphereGlow = (atm: WarDay['atmosphere']) => {
    switch (atm) {
      case 'dawn':
        return 'radial-gradient(ellipse at 50% 30%, rgba(245, 158, 11, 0.25) 0%, rgba(120, 53, 15, 0.15) 40%, rgba(5, 5, 5, 0.98) 80%)';
      case 'raging':
        return 'radial-gradient(ellipse at 50% 50%, rgba(220, 38, 38, 0.3) 0%, rgba(180, 83, 9, 0.2) 40%, rgba(5, 5, 5, 0.98) 85%)';
      case 'twilight':
        return 'radial-gradient(ellipse at 50% 60%, rgba(147, 51, 234, 0.2) 0%, rgba(194, 65, 12, 0.2) 40%, rgba(5, 5, 5, 0.98) 80%)';
      case 'grim':
        return 'radial-gradient(ellipse at 50% 50%, rgba(71, 85, 105, 0.25) 0%, rgba(30, 41, 59, 0.2) 45%, rgba(5, 5, 5, 0.98) 80%)';
      case 'devastating':
        return 'radial-gradient(ellipse at 50% 50%, rgba(153, 27, 27, 0.35) 0%, rgba(69, 10, 10, 0.25) 45%, rgba(3, 3, 3, 0.98) 85%)';
      case 'somber':
        return 'radial-gradient(ellipse at 50% 40%, rgba(30, 27, 75, 0.35) 0%, rgba(15, 23, 42, 0.3) 50%, rgba(2, 2, 2, 0.98) 85%)';
      case 'sunset':
        return 'radial-gradient(ellipse at 50% 70%, rgba(220, 38, 38, 0.35) 0%, rgba(180, 83, 9, 0.25) 35%, rgba(13, 7, 5, 0.98) 75%)';
      default:
        return 'radial-gradient(ellipse at 50% 50%, rgba(217, 119, 6, 0.2) 0%, rgba(5, 5, 5, 0.98) 80%)';
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-stone-200 overflow-hidden flex flex-col justify-between p-4 md:p-8 select-none">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute inset-0 radial-vignette pointer-events-none z-10" />
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-1000 z-5"
        style={{ background: getAtmosphereGlow(currentDay.atmosphere) }}
      />

      {/* Floating Dust Particles */}
      <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={`wartime-dust-${i}`}
            className="absolute rounded-full bg-amber-500/30 blur-[0.6px]"
            style={{
              top: `${(i * 19) % 100}%`,
              left: `${(i * 27) % 100}%`,
              width: `${(i % 3) + 1.5}px`,
              height: `${(i % 3) + 1.5}px`,
              animation: `pulse ${5 + (i % 5)}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

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
            <div className="text-xs uppercase tracking-[0.3em] text-amber-500 font-serif">
              KURUKSHETRA CHRONICLES
            </div>
            <h2 className="text-lg md:text-xl font-serif font-bold text-stone-100 tracking-wider">
              THE 18 DAYS OF ANNIHILATION
            </h2>
          </div>
        </div>

        {/* Day Jump Stepper */}
        <div className="flex items-center gap-2">
          <button
            disabled={selectedDayNumber <= 1}
            onClick={() => handleSelectDay(selectedDayNumber - 1)}
            className="p-2 border border-stone-800 bg-stone-900/60 disabled:opacity-30 disabled:cursor-not-allowed hover:border-amber-500 text-stone-300 rounded-sm cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="px-4 py-1.5 border border-stone-800 bg-stone-950 font-serif text-xs uppercase tracking-widest text-amber-400">
            DAY {String(selectedDayNumber).padStart(2, '0')} / 18
          </div>
          <button
            disabled={selectedDayNumber >= 18}
            onClick={() => handleSelectDay(selectedDayNumber + 1)}
            className="p-2 border border-stone-800 bg-stone-900/60 disabled:opacity-30 disabled:cursor-not-allowed hover:border-amber-500 text-stone-300 rounded-sm cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Central Battlefield Arena */}
      <div className="relative z-20 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6">
        {/* Left: Tactical Battle Diagram & Field Visualization */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          <div className="w-full max-w-md bg-stone-950/80 border border-stone-800 p-6 rounded-sm backdrop-blur-md relative overflow-hidden">
            {/* Corner brass rivets */}
            <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-amber-600/60" />
            <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-amber-600/60" />
            <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-amber-600/60" />
            <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-amber-600/60" />

            <div className="flex items-center justify-between border-b border-stone-800 pb-3 mb-4">
              <span className="text-[11px] uppercase tracking-[0.25em] text-stone-400 font-serif">
                TACTICAL MANDALA
              </span>
              <span className="text-[11px] uppercase tracking-wider text-amber-500 font-serif">
                ATMOSPHERE: {currentDay.atmosphere.toUpperCase()}
              </span>
            </div>

            {/* Tactical Formations Comparison */}
            <div className="space-y-4 mb-6">
              <div className="p-3 bg-red-950/20 border-l-2 border-red-700/80">
                <div className="flex items-center justify-between text-xs font-serif">
                  <span className="text-red-400 font-bold uppercase tracking-wider">Kaurava Vanguard</span>
                  <span className="text-stone-400">{currentDay.commanderKaurava}</span>
                </div>
                <div className="text-xs text-stone-200 mt-1 font-serif">
                  Formation: <span className="text-amber-300 font-medium">{currentDay.kauravaFormation}</span>
                </div>
              </div>

              <div className="p-3 bg-blue-950/20 border-l-2 border-blue-600/80">
                <div className="flex items-center justify-between text-xs font-serif">
                  <span className="text-blue-400 font-bold uppercase tracking-wider">Pandava Vanguard</span>
                  <span className="text-stone-400">{currentDay.commanderPandava}</span>
                </div>
                <div className="text-xs text-stone-200 mt-1 font-serif">
                  Formation: <span className="text-amber-300 font-medium">{currentDay.pandavaFormation}</span>
                </div>
              </div>
            </div>

            {/* Tactical Note */}
            <div className="text-xs text-stone-400 leading-relaxed italic border-t border-stone-800 pt-3">
              <span className="text-amber-400 not-italic font-serif uppercase tracking-widest text-[10px] block mb-1">
                Strategic Movement
              </span>
              "{currentDay.tacticalNote}"
            </div>

            {/* Fallen Warriors on This Day */}
            {currentDay.fallenWarriors.length > 0 && (
              <div className="mt-4 pt-3 border-t border-stone-800">
                <div className="flex items-center gap-1.5 text-[11px] font-serif uppercase tracking-widest text-red-400 mb-1.5">
                  <Skull className="w-3.5 h-3.5" />
                  <span>Fallen Warriors & Titans</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentDay.fallenWarriors.map((w, idx) => (
                    <span
                      key={`fallen-${idx}`}
                      className="text-xs text-stone-300 font-serif"
                    >
                      {w}{idx < currentDay.fallenWarriors.length - 1 ? ' · ' : ''}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Day Narrative Showcase */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDay.day}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6 max-w-xl"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.4em] text-amber-500 font-serif">
                  Day {currentDay.day} of 18
                </span>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-100 tracking-wider mt-1">
                  {currentDay.title}
                </h3>
              </div>

              <p className="text-stone-300 text-base leading-relaxed font-light">
                {currentDay.summary}
              </p>

              {/* Key Events Bullet List */}
              <div className="space-y-3 border-l-2 border-stone-800 pl-4 py-1">
                <div className="text-xs uppercase tracking-widest text-stone-400 font-serif">
                  Chronicle of Engagements
                </div>
                {currentDay.keyEvents.map((ev, i) => (
                  <div key={`ev-${i}`} className="flex items-start gap-2.5 text-xs md:text-sm text-stone-300">
                    <span className="text-amber-500 font-serif">·</span>
                    <span>{ev}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Horizontal 18 Days Interactive Rail */}
      <div className="relative z-20 border-t border-stone-800/80 pt-4">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {WAR_DAYS.map((d) => (
            <button
              key={`rail-day-${d.day}`}
              onClick={() => handleSelectDay(d.day)}
              className={`px-3 py-2 text-xs font-serif uppercase tracking-wider rounded-sm transition-all shrink-0 cursor-pointer flex flex-col items-center min-w-[62px] ${
                selectedDayNumber === d.day
                  ? 'bg-amber-950 border border-amber-500 text-amber-200 shadow-[0_0_15px_rgba(217,119,6,0.3)]'
                  : 'bg-stone-950/60 border border-stone-800/80 text-stone-500 hover:text-stone-300 hover:border-stone-700'
              }`}
            >
              <span className="text-[10px] text-stone-500">DAY</span>
              <span className="font-bold text-sm">{d.day}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
