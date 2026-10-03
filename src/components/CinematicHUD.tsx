/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ViewMode } from '../types';
import { Volume2, VolumeX, Compass, BookOpen, Users, Swords, Home } from 'lucide-react';

interface CinematicHUDProps {
  currentMode: ViewMode;
  onSetMode: (mode: ViewMode) => void;
  isAudioMuted: boolean;
  onToggleAudio: () => void;
  activeChapterTitle?: string;
}

export const CinematicHUD: React.FC<CinematicHUDProps> = ({
  currentMode,
  onSetMode,
  isAudioMuted,
  onToggleAudio,
  activeChapterTitle,
}) => {
  return (
    <header className="fixed top-0 inset-x-0 z-40 px-4 md:px-8 py-4 flex items-center justify-between pointer-events-none select-none">
      {/* Zone 1: Brand Wordmark (Anti-slop Top Bar Contract compliant) */}
      <div className="pointer-events-auto">
        <button
          onClick={() => onSetMode('chakra_navigation')}
          className="text-left group cursor-pointer focus-visible:outline-none"
        >
          <span className="font-serif text-sm md:text-base tracking-[0.25em] font-bold text-stone-200 group-hover:text-amber-300 transition-colors uppercase">
            Mahabharata
          </span>
        </button>
      </div>

      {/* Zone 2: Navigation Links (Text with subtle hover) */}
      <nav className="hidden md:flex items-center gap-6 pointer-events-auto bg-stone-950/70 border border-stone-800/80 px-4 py-1.5 rounded-full backdrop-blur-md">
        <button
          onClick={() => onSetMode('chakra_navigation')}
          className={`text-xs font-serif uppercase tracking-wider transition-colors cursor-pointer ${
            currentMode === 'chakra_navigation' ? 'text-amber-400 font-semibold' : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          Chakra Map
        </button>
        <button
          onClick={() => onSetMode('war_timeline')}
          className={`text-xs font-serif uppercase tracking-wider transition-colors cursor-pointer ${
            currentMode === 'war_timeline' ? 'text-amber-400 font-semibold' : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          18 Days War
        </button>
        <button
          onClick={() => onSetMode('characters')}
          className={`text-xs font-serif uppercase tracking-wider transition-colors cursor-pointer ${
            currentMode === 'characters' ? 'text-amber-400 font-semibold' : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          19 Characters
        </button>
        <button
          onClick={() => onSetMode('parvas')}
          className={`text-xs font-serif uppercase tracking-wider transition-colors cursor-pointer ${
            currentMode === 'parvas' ? 'text-amber-400 font-semibold' : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          18 Parvas
        </button>
      </nav>

      {/* Zone 3: Primary Actions (Sound & Epilogue) */}
      <div className="flex items-center gap-3 pointer-events-auto">
        <button
          onClick={onToggleAudio}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-800 bg-stone-950/70 backdrop-blur-md text-stone-300 hover:text-amber-300 hover:border-amber-500/40 text-xs font-serif tracking-wider transition-all cursor-pointer whitespace-nowrap"
          title={isAudioMuted ? 'Unmute Ambient Soundscape' : 'Mute Soundscape'}
        >
          {isAudioMuted ? <VolumeX className="w-3.5 h-3.5 text-stone-500" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400" />}
          <span className="text-[11px] hidden sm:inline">{isAudioMuted ? 'Muted' : 'Sound'}</span>
        </button>

        <button
          onClick={() => onSetMode('epilogue')}
          className="px-3.5 py-1.5 rounded-full border border-stone-800 bg-stone-950/70 backdrop-blur-md text-stone-400 hover:text-amber-200 hover:border-stone-700 text-xs font-serif uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap"
        >
          Epilogue
        </button>
      </div>
    </header>
  );
};
