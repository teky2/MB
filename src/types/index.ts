/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ChapterId =
  | 'origin'
  | 'bhishma_pratigya'
  | 'draupadi_swayamvar'
  | 'indraprastha'
  | 'dyut_sabha'
  | 'vanvas'
  | 'krishna_peace'
  | 'kurukshetra'
  | 'bhagavad_gita'
  | 'abhimanyu'
  | 'bhishma_fall'
  | 'karna'
  | 'duryodhana_fall'
  | 'the_end'
  | 'final_journey';

export interface Chapter {
  id: ChapterId;
  spokeIndex: number;
  title: string;
  hindiTitle: string;
  subtitle: string;
  epoch: string;
  summary: string;
  philosophicalEssence: string;
  environment: 'cosmic' | 'battlefield' | 'palace' | 'sunset' | 'divine' | 'himalayan';
  soundscape: 'drone' | 'battlefield' | 'chakravyuha' | 'gita' | 'sabha' | 'wind';
  keyQuote: {
    sanskrit?: string;
    hindi: string;
    english: string;
    speaker: string;
  };
}

export interface Parva {
  number: number;
  name: string;
  devanagari: string;
  englishMeaning: string;
  chaptersCount: number;
  shlokasCount: number;
  synopsis: string;
  pivotalMoment: string;
  prominentFigures: string[];
}

export interface WarDay {
  day: number;
  title: string;
  commanderKaurava: string;
  commanderPandava: string;
  kauravaFormation: string;
  pandavaFormation: string;
  atmosphere: 'dawn' | 'raging' | 'twilight' | 'grim' | 'devastating' | 'somber' | 'sunset';
  keyEvents: string[];
  fallenWarriors: string[];
  summary: string;
  tacticalNote: string;
}

export interface Character {
  id: string;
  name: string;
  devanagari: string;
  title: string;
  side: 'Pandava' | 'Kaurava' | 'Neutral/Divine';
  lineage: string;
  divineOrigin: string;
  weapons: string[];
  vowOrDharma: string;
  biography: string;
  fatalFlawOrTragedy: string;
  keyMoments: string[];
  relationships: {
    relation: string;
    character: string;
  }[];
}

export type ViewMode =
  | 'prologue'
  | 'chakra_navigation'
  | 'chapter'
  | 'war_timeline'
  | 'characters'
  | 'parvas'
  | 'epilogue';
