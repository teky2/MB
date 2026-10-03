/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CHARACTERS } from '../../data/mahabharataData';
import { Character } from '../../types';
import { audioEngine } from '../../services/audioEngine';
import { ArrowLeft, User, Shield, Zap, HeartHandshake, Skull } from 'lucide-react';

interface CharacterArchiveProps {
  onBackToNavigation: () => void;
  isAudioMuted: boolean;
  onToggleAudio: () => void;
}

export const CharacterArchive: React.FC<CharacterArchiveProps> = ({
  onBackToNavigation,
  isAudioMuted,
  onToggleAudio,
}) => {
  const [selectedCharacterId, setSelectedCharacterId] = useState<string>('krishna');
  const [sideFilter, setSideFilter] = useState<'All' | 'Pandava' | 'Kaurava' | 'Neutral/Divine'>('All');

  const selectedChar = CHARACTERS.find((c) => c.id === selectedCharacterId) || CHARACTERS[0];

  const filteredCharacters = sideFilter === 'All'
    ? CHARACTERS
    : CHARACTERS.filter((c) => c.side === sideFilter);

  const handleSelect = (id: string) => {
    setSelectedCharacterId(id);
    audioEngine.playSpokeHover();
  };

  return (
    <div className="relative min-h-screen w-full bg-[#040404] text-stone-200 overflow-hidden flex flex-col justify-between p-4 md:p-8 select-none">
      {/* Background vignette & atmospheric glow */}
      <div className="absolute inset-0 radial-vignette pointer-events-none z-10" />
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700 z-5"
        style={{
          background:
            selectedChar.side === 'Pandava'
              ? 'radial-gradient(circle at 60% 40%, rgba(30, 58, 138, 0.2) 0%, rgba(4, 4, 4, 0.98) 70%)'
              : selectedChar.side === 'Kaurava'
              ? 'radial-gradient(circle at 60% 40%, rgba(185, 28, 28, 0.2) 0%, rgba(4, 4, 4, 0.98) 70%)'
              : 'radial-gradient(circle at 60% 40%, rgba(217, 119, 6, 0.2) 0%, rgba(4, 4, 4, 0.98) 70%)',
        }}
      />

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
              EPIC PANTHEON · 19 TITANS
            </div>
            <h2 className="text-lg md:text-xl font-serif font-bold text-stone-100 tracking-wider">
              CHARACTERS OF THE MAHABHARATA
            </h2>
          </div>
        </div>

        {/* Side Filter Segmented Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-950 border border-stone-800 rounded-sm">
          {(['All', 'Pandava', 'Kaurava', 'Neutral/Divine'] as const).map((side) => (
            <button
              key={side}
              onClick={() => setSideFilter(side)}
              className={`px-3 py-1 text-xs font-serif uppercase tracking-wider rounded-xs transition-colors cursor-pointer whitespace-nowrap ${
                sideFilter === side
                  ? 'bg-stone-800 text-amber-300 font-semibold'
                  : 'text-stone-500 hover:text-stone-300'
              }`}
            >
              {side}
            </button>
          ))}
        </div>
      </div>

      {/* Central Visual Wall & Character Dossier */}
      <div className="relative z-20 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start py-6">
        {/* Left: Character Visual Wall (Grid of 19) */}
        <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[64vh] overflow-y-auto pr-2 scrollbar-none">
          {filteredCharacters.map((char) => {
            const isSelected = char.id === selectedCharacterId;
            return (
              <div
                key={char.id}
                onClick={() => handleSelect(char.id)}
                className={`p-3.5 rounded-sm border transition-all cursor-pointer flex flex-col justify-between min-h-[105px] relative group overflow-hidden ${
                  isSelected
                    ? 'border-amber-500 bg-stone-900 shadow-[0_0_20px_rgba(217,119,6,0.25)]'
                    : 'border-stone-800/80 bg-stone-950/60 hover:border-stone-700 hover:bg-stone-900/40'
                }`}
              >
                {/* Side indicator strip */}
                <div
                  className={`absolute top-0 left-0 bottom-0 w-1 ${
                    char.side === 'Pandava'
                      ? 'bg-blue-600'
                      : char.side === 'Kaurava'
                      ? 'bg-red-700'
                      : 'bg-amber-500'
                  }`}
                />

                <div className="pl-1.5">
                  <span className="text-[10px] text-amber-400 font-serif tracking-widest block">
                    {char.devanagari}
                  </span>
                  <h4 className="text-sm font-serif font-bold text-stone-100 mt-0.5 tracking-wide">
                    {char.name}
                  </h4>
                </div>

                <div className="pl-1.5 text-[10px] text-stone-400 font-serif tracking-wider truncate">
                  {char.title}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Selected Character Dossier */}
        <div className="lg:col-span-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedChar.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-stone-950/90 border border-stone-800 p-6 md:p-8 rounded-sm shadow-2xl backdrop-blur-md space-y-6"
            >
              {/* Header Profile */}
              <div className="border-b border-stone-800 pb-4">
                <div className="flex items-center justify-between text-xs font-serif text-stone-400 mb-1">
                  <span className="text-amber-500 uppercase tracking-widest">{selectedChar.lineage}</span>
                  <span
                    className={`font-semibold uppercase tracking-wider ${
                      selectedChar.side === 'Pandava'
                        ? 'text-blue-400'
                        : selectedChar.side === 'Kaurava'
                        ? 'text-red-400'
                        : 'text-amber-400'
                    }`}
                  >
                    {selectedChar.side}
                  </span>
                </div>
                <div className="text-2xl text-amber-300 font-serif font-light">
                  {selectedChar.devanagari}
                </div>
                <h3 className="text-3xl font-serif font-bold text-stone-100 tracking-wider">
                  {selectedChar.name}
                </h3>
                <p className="text-sm text-stone-400 font-serif italic mt-0.5">
                  "{selectedChar.title}"
                </p>
              </div>

              {/* Biography */}
              <div>
                <div className="text-xs uppercase tracking-widest text-stone-400 font-serif mb-1.5">
                  Mythic Arc
                </div>
                <p className="text-stone-300 text-sm leading-relaxed font-light">
                  {selectedChar.biography}
                </p>
              </div>

              {/* Weapons & Vows Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-stone-800 pt-4">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-amber-500 font-serif mb-1">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Celestial Astras</span>
                  </div>
                  <div className="text-xs text-stone-300">
                    {selectedChar.weapons.join(' · ')}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-amber-500 font-serif mb-1">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Vow / Bound Duty</span>
                  </div>
                  <div className="text-xs text-stone-300 italic">
                    "{selectedChar.vowOrDharma}"
                  </div>
                </div>
              </div>

              {/* Fatal Flaw / Tragedy */}
              <div className="p-3.5 bg-stone-900/60 border-l-2 border-red-800/80">
                <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-red-400 font-serif mb-1">
                  <Skull className="w-3.5 h-3.5" />
                  <span>Fatal Flaw & Tragedy</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed italic">
                  {selectedChar.fatalFlawOrTragedy}
                </p>
              </div>

              {/* Relationships */}
              <div className="border-t border-stone-800 pt-4">
                <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-stone-400 font-serif mb-2">
                  <HeartHandshake className="w-3.5 h-3.5 text-amber-400" />
                  <span>Destined Relationships</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {selectedChar.relationships.map((rel, idx) => (
                    <div key={`rel-${idx}`} className="p-2 bg-stone-900/40 rounded-xs border border-stone-800/60">
                      <span className="text-stone-400 block text-[10px] uppercase font-serif">
                        {rel.relation}
                      </span>
                      <span className="text-amber-200 font-serif font-medium">
                        {rel.character}
                      </span>
                    </div>
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
