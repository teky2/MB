/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChakraOfTime } from './ChakraOfTime';
import { audioEngine } from '../services/audioEngine';
import { RotateCcw } from 'lucide-react';

interface FinalSceneProps {
  onRestart: () => void;
  isAudioMuted: boolean;
  onToggleAudio: () => void;
}

export const FinalScene: React.FC<FinalSceneProps> = ({
  onRestart,
  isAudioMuted,
  onToggleAudio,
}) => {
  const [stage, setStage] = useState<number>(0);

  useEffect(() => {
    // Only lonely Himalayan wind remains
    audioEngine.setSoundscape('wind');

    // Stage progression
    const timer1 = setTimeout(() => setStage(1), 1800); // Tiny golden particle emerges
    const timer2 = setTimeout(() => setStage(2), 3600); // Chakra takes form and rotates once
    const timer3 = setTimeout(() => setStage(3), 6400); // "समय चलता रहता है।"
    const timer4 = setTimeout(() => setStage(4), 9200); // "The story ends. The questions remain." -> MAHABHARATA

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full bg-black text-stone-200 flex flex-col items-center justify-center p-6 select-none z-50 overflow-hidden">
      {/* Absolute dark void with lonely wind */}
      <div className="absolute inset-0 radial-vignette pointer-events-none" />

      {/* Stage 1: The Tiny Golden Particle */}
      {stage === 1 && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 2, opacity: 0 }}
          className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_20px_#f59e0b] animate-ping"
        />
      )}

      {/* Stage 2 & above: The Chakra of Time rotates once, then halts */}
      {stage >= 2 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{
            opacity: stage >= 4 ? 0.35 : 0.85,
            scale: 0.75,
          }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
          className="relative transition-opacity duration-1000"
        >
          <ChakraOfTime rotation={360} size={500} interactive={false} />
        </motion.div>
      )}

      {/* Narrative revelations */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none z-30">
        <AnimatePresence>
          {stage >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="space-y-4 max-w-xl"
            >
              <h2 className="font-serif text-3xl md:text-5xl text-amber-200 tracking-wider">
                समय चलता रहता है।
              </h2>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {stage >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="mt-8 space-y-4 max-w-xl"
            >
              <p className="font-serif text-lg md:text-xl text-stone-300 tracking-widest font-light">
                The story ends.
                <br />
                The questions remain.
              </p>

              <div className="pt-6">
                <h1 className="font-serif text-4xl md:text-6xl tracking-[0.25em] gold-metallic-text font-extrabold">
                  MAHABHARATA
                </h1>
                <p className="text-xs uppercase tracking-[0.35em] text-stone-400 font-serif mt-2">
                  Dharma · Destiny · Eternity
                </p>
              </div>

              {/* Re-enter Journey Button */}
              <div className="pt-8 pointer-events-auto">
                <button
                  onClick={onRestart}
                  className="px-6 py-3 border border-amber-600/50 hover:border-amber-400 bg-stone-950/80 text-amber-200 text-xs font-serif uppercase tracking-widest transition-all flex items-center gap-2 mx-auto cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Begin The Eternal Cycle Again</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
