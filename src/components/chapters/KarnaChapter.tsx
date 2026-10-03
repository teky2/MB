/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { audioEngine } from '../../services/audioEngine';
import { ArrowLeft, ChevronDown, Volume2, VolumeX } from 'lucide-react';

interface KarnaChapterProps {
  onBackToNavigation: () => void;
  isAudioMuted: boolean;
  onToggleAudio: () => void;
}

export const KarnaChapter: React.FC<KarnaChapterProps> = ({
  onBackToNavigation,
  isAudioMuted,
  onToggleAudio,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalScroll = 3000;

  useEffect(() => {
    audioEngine.setSoundscape('battlefield');
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const progress = Math.min(Math.max(scrollY / totalScroll, 0), 1);

  // Scenes:
  // 1: The Sun Sets on Kurukshetra (Day 17 Twilight)
  // 2: The Danaveer's Sacrifice (Giving away Kavacha & Kundala to Indra)
  // 3: The Sinking Chariot Wheel (The Earth's Curse)
  // 4: The Final Arrow (Anjalika Astra & The Fallen Son of Surya)
  let scene = 1;
  if (progress >= 0.25 && progress < 0.55) scene = 2;
  else if (progress >= 0.55 && progress < 0.82) scene = 3;
  else if (progress >= 0.82) scene = 4;

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#0d0705] text-stone-200 select-none"
      style={{ height: `${totalScroll + 1200}px` }}
    >
      <div className="fixed inset-0 w-full h-full overflow-hidden bg-[#070403] flex items-center justify-center">
        {/* Vignette */}
        <div className="absolute inset-0 radial-vignette pointer-events-none z-20" />

        {/* Blood-Orange & Gold Sunset Over the Wasteland */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-1000 z-10"
          style={{
            background:
              scene === 1
                ? 'radial-gradient(ellipse at 50% 75%, rgba(220, 38, 38, 0.35) 0%, rgba(180, 83, 9, 0.25) 35%, rgba(13, 7, 5, 0.98) 75%)'
                : scene === 2
                ? 'radial-gradient(ellipse at 50% 60%, rgba(245, 158, 11, 0.3) 0%, rgba(124, 45, 18, 0.2) 45%, rgba(7, 4, 3, 0.98) 80%)'
                : scene === 3
                ? 'radial-gradient(ellipse at 50% 85%, rgba(185, 28, 28, 0.38) 0%, rgba(69, 26, 3, 0.4) 40%, rgba(7, 4, 3, 1) 85%)'
                : 'radial-gradient(ellipse at 50% 70%, rgba(120, 53, 15, 0.25) 0%, rgba(17, 24, 39, 0.4) 50%, rgba(5, 5, 5, 1) 90%)',
          }}
        />

        {/* Floating Sunset Dust & Embers */}
        <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={`sunset-dust-${i}`}
              className="absolute rounded-full bg-amber-500/40 blur-[0.6px]"
              style={{
                top: `${(i * 17) % 100}%`,
                left: `${(i * 31) % 100}%`,
                width: `${(i % 3) + 1.5}px`,
                height: `${(i % 3) + 1.5}px`,
                animation: `pulse ${5 + (i % 6)}s infinite ease-in-out`,
                transform: `translateY(${-(scrollY * 0.03) % 500}px)`,
              }}
            />
          ))}
        </div>

        {/* 3D Visual Centerpiece */}
        <div
          className="relative w-full h-full flex items-center justify-center transition-transform duration-500 ease-out z-20"
          style={{
            transform: `scale(${0.9 + progress * 0.3})`,
            perspective: '1000px',
          }}
        >
          {/* Huge Setting Sun Disk in the background */}
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-t from-red-600 to-amber-500 blur-[2px] opacity-40 -translate-y-12" />

          {/* Karna & Sunken Chariot Wheel Silhouette */}
          <div className="relative flex flex-col items-center">
            <svg width="340" height="340" viewBox="0 0 340 340" className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]">
              {/* Sunken Chariot Wheel embedded deep into the Kurukshetra mud */}
              <g transform="translate(110, 180)">
                <ellipse cx="60" cy="90" rx="75" ry="18" fill="#171717" opacity="0.8" />
                {/* Half buried wheel */}
                <path
                  d="M 10 90 A 50 50 0 1 1 110 90 Z"
                  fill="#0c0a09"
                  stroke="#d97706"
                  strokeWidth="3.5"
                />
                {/* Wheel spokes */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <line
                    key={`wheel-spoke-${i}`}
                    x1="60"
                    y1="90"
                    x2={60 + 50 * Math.cos((i * 45 * Math.PI) / 180)}
                    y2={90 - Math.abs(50 * Math.sin((i * 45 * Math.PI) / 180))}
                    stroke="#78350f"
                    strokeWidth="2"
                  />
                ))}
              </g>

              {/* Warrior Silhouette of Karna attempting to lift the wheel */}
              {scene === 3 ? (
                <g transform="translate(100, 130)">
                  <circle cx="40" cy="40" r="14" fill="#171717" stroke="#ea580c" strokeWidth="1.5" />
                  <path d="M 25 54 L 40 100 L 70 120" stroke="#ea580c" strokeWidth="6" strokeLinecap="round" />
                  {/* Straining arms gripping the rim */}
                  <line x1="35" y1="65" x2="65" y2="120" stroke="#fbbf24" strokeWidth="3" />
                </g>
              ) : (
                /* Standing Proud Warrior with Vijaya Bow */
                <g transform="translate(115, 60)">
                  {/* Solar Radiance behind his head */}
                  <circle cx="50" cy="50" r="28" fill="rgba(245, 158, 11, 0.2)" filter="blur(8px)" />
                  <circle cx="50" cy="45" r="15" fill="#171717" stroke="#fbbf24" strokeWidth="1.5" />
                  <path d="M 25 70 Q 50 60 75 70 L 85 160 Q 50 170 15 160 Z" fill="#1c1917" stroke="#b45309" strokeWidth="1.5" />

                  {/* Vijaya Bow in hand */}
                  <path d="M 10 20 Q -25 110 5 210" fill="none" stroke="#fbbf24" strokeWidth="3" />
                  <line x1="10" y1="20" x2="5" y2="210" stroke="#fef08a" strokeWidth="1" opacity="0.6" />
                </g>
              )}
            </svg>
          </div>
        </div>

        {/* Narrative Captions Overlay */}
        <div className="absolute bottom-16 inset-x-0 z-30 flex flex-col items-center text-center px-6 pointer-events-none">
          <AnimatePresence mode="wait">
            {scene === 1 && (
              <motion.div
                key="karna-1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="max-w-xl"
              >
                <span className="text-[11px] uppercase tracking-[0.35em] text-amber-500 font-serif">
                  RADHEYA · THE UNKNOWN FIRSTBORN
                </span>
                <p className="text-xl md:text-2xl font-serif text-stone-200 mt-2">
                  Abandoned at birth on the sacred waters of the Ganga.
                </p>
                <p className="text-sm text-stone-400 mt-1 italic">
                  Endured a lifetime of scorn to become the peerless archer of Aryavarta.
                </p>
              </motion.div>
            )}

            {scene === 2 && (
              <motion.div
                key="karna-2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="max-w-xl"
              >
                <span className="text-[11px] uppercase tracking-[0.35em] text-amber-400 font-serif">
                  DANAVEER KARNA · THE SUPREME CHARITY
                </span>
                <p className="text-lg md:text-xl font-serif text-stone-100 mt-2">
                  He cuts away his celestial armor (Kavacha) with his own blade.
                </p>
                <p className="text-xs text-stone-400 mt-2 font-serif uppercase tracking-widest">
                  Gifted to Indra disguised as a beggar, fully aware it sealed his mortal fate.
                </p>
              </motion.div>
            )}

            {scene === 3 && (
              <motion.div
                key="karna-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="max-w-xl"
              >
                <span className="text-[11px] uppercase tracking-[0.35em] text-red-500 font-serif">
                  THE CONVERGENCE OF CURSES
                </span>
                <p className="text-lg md:text-xl font-serif text-stone-200 mt-2">
                  The wheel sinks. The mantras of Brahmastra vanish from his mind.
                </p>
                <p className="text-xs text-stone-400 mt-2 italic">
                  "Wait, Partha! An unarmed warrior attempting to free his wheel must not be struck!"
                </p>
              </motion.div>
            )}

            {scene === 4 && (
              <motion.div
                key="karna-4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="max-w-2xl p-6 bg-stone-950/80 border border-stone-800 rounded-sm backdrop-blur-md"
              >
                <span className="text-[11px] uppercase tracking-[0.35em] text-amber-400 font-serif">
                  THE SUN DESCENDS
                </span>
                <p className="text-lg md:text-xl font-serif text-stone-100 mt-2 italic">
                  "मित्रता का मूल्य मैंने अपने प्राणों से चुकाया है केशव।"
                </p>
                <p className="text-xs text-stone-300 mt-2 font-light leading-relaxed">
                  Arjuna releases the Anjalika arrow at Krishna's command. As the golden aura leaves his chest to reunite with Lord Surya, the greatest tragic hero of the epic attains eternal honor.
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
            <span>DANAVEER KARNA</span>
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
