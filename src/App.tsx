/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ViewMode, ChapterId } from './types';
import { CHAPTERS } from './data/mahabharataData';
import { audioEngine } from './services/audioEngine';
import { SamayOpening } from './components/SamayOpening';
import { ChakraNavigator } from './components/ChakraNavigator';
import { AbhimanyuChakravyuha } from './components/chapters/AbhimanyuChakravyuha';
import { BhagavadGitaChapter } from './components/chapters/BhagavadGitaChapter';
import { BhishmaChapter } from './components/chapters/BhishmaChapter';
import { DyutSabhaChapter } from './components/chapters/DyutSabhaChapter';
import { KarnaChapter } from './components/chapters/KarnaChapter';
import { CinematicChapterViewer } from './components/chapters/CinematicChapterViewer';
import { Kurukshetra18Days } from './components/chapters/Kurukshetra18Days';
import { CharacterArchive } from './components/archives/CharacterArchive';
import { ParvaArchive } from './components/archives/ParvaArchive';
import { FinalScene } from './components/FinalScene';
import { CinematicHUD } from './components/CinematicHUD';

export default function App() {
  const [currentMode, setCurrentMode] = useState<ViewMode>('prologue');
  const [selectedChapterId, setSelectedChapterId] = useState<ChapterId>('abhimanyu');
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(true);

  const toggleAudio = () => {
    const nextMuted = !isAudioMuted;
    setIsAudioMuted(nextMuted);
    audioEngine.setMuted(nextMuted);
  };

  const handleSelectChapter = (id: ChapterId) => {
    setSelectedChapterId(id);
    setCurrentMode('chapter');
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  };

  const currentChapter = CHAPTERS.find((c) => c.id === selectedChapterId) || CHAPTERS[9];

  // Render chapter scene based on selectedChapterId
  const renderChapterScene = () => {
    switch (selectedChapterId) {
      case 'abhimanyu':
        return (
          <AbhimanyuChakravyuha
            onBackToNavigation={() => setCurrentMode('chakra_navigation')}
            isAudioMuted={isAudioMuted}
            onToggleAudio={toggleAudio}
          />
        );
      case 'bhagavad_gita':
        return (
          <BhagavadGitaChapter
            onBackToNavigation={() => setCurrentMode('chakra_navigation')}
            isAudioMuted={isAudioMuted}
            onToggleAudio={toggleAudio}
          />
        );
      case 'bhishma_fall':
      case 'bhishma_pratigya':
        return (
          <BhishmaChapter
            onBackToNavigation={() => setCurrentMode('chakra_navigation')}
            isAudioMuted={isAudioMuted}
            onToggleAudio={toggleAudio}
          />
        );
      case 'dyut_sabha':
        return (
          <DyutSabhaChapter
            onBackToNavigation={() => setCurrentMode('chakra_navigation')}
            isAudioMuted={isAudioMuted}
            onToggleAudio={toggleAudio}
          />
        );
      case 'karna':
        return (
          <KarnaChapter
            onBackToNavigation={() => setCurrentMode('chakra_navigation')}
            isAudioMuted={isAudioMuted}
            onToggleAudio={toggleAudio}
          />
        );
      default:
        return (
          <CinematicChapterViewer
            chapter={currentChapter}
            onBackToNavigation={() => setCurrentMode('chakra_navigation')}
            isAudioMuted={isAudioMuted}
            onToggleAudio={toggleAudio}
          />
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-stone-200 antialiased overflow-x-hidden selection:bg-amber-600/30 selection:text-amber-200">
      {/* Global Minimal HUD (Shown across all modes except Prologue & Epilogue) */}
      {currentMode !== 'prologue' && currentMode !== 'epilogue' && (
        <CinematicHUD
          currentMode={currentMode}
          onSetMode={(mode) => {
            setCurrentMode(mode);
            window.scrollTo({ top: 0, behavior: 'instant' as any });
          }}
          isAudioMuted={isAudioMuted}
          onToggleAudio={toggleAudio}
          activeChapterTitle={currentMode === 'chapter' ? currentChapter.title : undefined}
        />
      )}

      {/* Mode Viewports */}
      <main className="w-full">
        {currentMode === 'prologue' && (
          <SamayOpening
            onComplete={() => {
              setCurrentMode('chakra_navigation');
              window.scrollTo({ top: 0, behavior: 'instant' as any });
            }}
            isAudioMuted={isAudioMuted}
            onToggleAudio={toggleAudio}
          />
        )}

        {currentMode === 'chakra_navigation' && (
          <ChakraNavigator
            chapters={CHAPTERS}
            onSelectChapter={handleSelectChapter}
            onOpenWarTimeline={() => setCurrentMode('war_timeline')}
            onOpenCharacters={() => setCurrentMode('characters')}
            onOpenParvas={() => setCurrentMode('parvas')}
          />
        )}

        {currentMode === 'chapter' && renderChapterScene()}

        {currentMode === 'war_timeline' && (
          <Kurukshetra18Days
            onBackToNavigation={() => setCurrentMode('chakra_navigation')}
            isAudioMuted={isAudioMuted}
            onToggleAudio={toggleAudio}
          />
        )}

        {currentMode === 'characters' && (
          <CharacterArchive
            onBackToNavigation={() => setCurrentMode('chakra_navigation')}
            isAudioMuted={isAudioMuted}
            onToggleAudio={toggleAudio}
          />
        )}

        {currentMode === 'parvas' && (
          <ParvaArchive
            onBackToNavigation={() => setCurrentMode('chakra_navigation')}
            isAudioMuted={isAudioMuted}
            onToggleAudio={toggleAudio}
          />
        )}

        {currentMode === 'epilogue' && (
          <FinalScene
            onRestart={() => {
              setCurrentMode('prologue');
              window.scrollTo({ top: 0, behavior: 'instant' as any });
            }}
            isAudioMuted={isAudioMuted}
            onToggleAudio={toggleAudio}
          />
        )}
      </main>
    </div>
  );
}
