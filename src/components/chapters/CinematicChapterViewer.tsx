/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Chapter } from '../../types';
import { audioEngine } from '../../services/audioEngine';
import { ArrowLeft, ChevronDown, Volume2, VolumeX } from 'lucide-react';

interface CinematicChapterViewerProps {
  chapter: Chapter;
  onBackToNavigation: () => void;
  isAudioMuted: boolean;
  onToggleAudio: () => void;
}

export const CinematicChapterViewer: React.FC<CinematicChapterViewerProps> = ({
  chapter,
  onBackToNavigation,
  isAudioMuted,
  onToggleAudio,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalScroll = 2600;

  useEffect(() => {
    audioEngine.setSoundscape(chapter.soundscape);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [chapter]);

  const progress = Math.min(Math.max(scrollY / totalScroll, 0), 1);

  // Environmental lighting gradients based on chapter.environment
  const getEnvironmentStyle = () => {
    switch (chapter.environment) {
      case 'cosmic':
        return 'radial-gradient(circle at 50% 40%, rgba(30, 58, 138, 0.25) 0%, rgba(15, 23, 42, 0.4) 40%, rgba(2, 6, 23, 0.98) 85%)';
      case 'battlefield':
        return 'radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.28) 0%, rgba(120, 53, 15, 0.2) 45%, rgba(5, 5, 5, 0.98) 85%)';
      case 'palace':
        return 'radial-gradient(circle at 50% 40%, rgba(217, 119, 6, 0.25) 0%, rgba(69, 26, 3, 0.3) 45%, rgba(4, 4, 4, 0.98) 80%)';
      case 'sunset':
        return 'radial-gradient(circle at 50% 70%, rgba(225, 29, 72, 0.3) 0%, rgba(180, 83, 9, 0.25) 35%, rgba(6, 4, 3, 0.98) 80%)';
      case 'divine':
        return 'radial-gradient(circle at 50% 30%, rgba(251, 191, 36, 0.28) 0%, rgba(59, 130, 246, 0.18) 45%, rgba(2, 6, 23, 0.98) 85%)';
      case 'himalayan':
        return 'radial-gradient(circle at 50% 30%, rgba(203, 213, 225, 0.2) 0%, rgba(51, 65, 85, 0.3) 45%, rgba(3, 7, 18, 0.98) 85%)';
      default:
        return 'radial-gradient(circle at 50% 50%, rgba(217, 119, 6, 0.2) 0%, rgba(5, 5, 5, 0.98) 80%)';
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#050505] text-stone-200 select-none"
      style={{ height: `${totalScroll + 1000}px` }}
    >
      <div className="fixed inset-0 w-full h-full overflow-hidden bg-black flex items-center justify-center">
        {/* Vignette */}
        <div className="absolute inset-0 radial-vignette pointer-events-none z-20" />

        {/* Dynamic Atmosphere */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-700 z-10"
          style={{ background: getEnvironmentStyle() }}
        />

        {/* Floating atmospheric dust */}
        <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
          {Array.from({ length: 28 }).map((_, i) => (
            <div
              key={`chap-dust-${i}`}
              className="absolute rounded-full bg-amber-400/35 blur-[0.6px]"
              style={{
                top: `${(i * 19) % 100}%`,
                left: `${(i * 29) % 100}%`,
                width: `${(i % 3) + 1.5}px`,
                height: `${(i % 3) + 1.5}px`,
                animation: `pulse ${5 + (i % 6)}s infinite ease-in-out`,
                transform: `translateY(${-(scrollY * 0.03) % 600}px)`,
              }}
            />
          ))}
        </div>

        {/* Central Visual Stage */}
        <div
          className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center z-20 transition-transform duration-500 ease-out"
          style={{
            transform: `scale(${0.9 + progress * 0.25})`,
            perspective: '1000px',
          }}
        >
          {/* Subtle Mythic Insignia / Motif */}
          <div className="mb-6 opacity-80">
            <div className="w-28 h-28 rounded-full border border-amber-500/40 bg-stone-950/60 flex items-center justify-center shadow-[0_0_40px_rgba(217,119,6,0.2)]">
              <span className="font-serif text-3xl text-amber-300">
                {chapter.hindiTitle}
              </span>
            </div>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="text-xs uppercase tracking-[0.4em] text-amber-500 font-serif">
              {chapter.epoch} · SPOKE {String(chapter.spokeIndex + 1).padStart(2, '0')}
            </div>

            <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-100 tracking-wider">
              {chapter.title}
            </h2>

            <p className="text-base md:text-lg font-serif italic text-amber-200/90">
              "{chapter.subtitle}"
            </p>

            <p className="text-stone-300 text-sm md:text-base leading-relaxed font-light max-w-2xl mx-auto pt-2">
              {chapter.summary}
            </p>

            {/* Key Quote Box */}
            <div className="mt-6 p-6 bg-stone-950/80 border border-stone-800 rounded-sm backdrop-blur-md max-w-xl mx-auto space-y-2">
              {chapter.keyQuote.sanskrit && (
                <div className="text-xs text-amber-400 font-serif tracking-wider">
                  {chapter.keyQuote.sanskrit}
                </div>
              )}
              <p className="text-sm md:text-base text-stone-100 italic leading-relaxed">
                "{chapter.keyQuote.hindi}"
              </p>
              <p className="text-xs text-stone-400 font-light">
                "{chapter.keyQuote.english}"
              </p>
              <div className="text-xs text-amber-400 font-serif uppercase tracking-widest pt-1">
                — {chapter.keyQuote.speaker}
              </div>
            </div>

            {/* Action Return */}
            <div className="pt-6">
              <button
                onClick={onBackToNavigation}
                className="px-6 py-2.5 bg-stone-900 border border-amber-600/50 hover:border-amber-400 text-amber-200 text-xs font-serif uppercase tracking-widest transition-all cursor-pointer"
              >
                Return to The Chakra of Time
              </button>
            </div>
          </div>
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
            <span>{chapter.title}</span>
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
