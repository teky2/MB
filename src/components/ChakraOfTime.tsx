/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useId } from 'react';
import { motion } from 'motion/react';
import { Chapter } from '../types';

interface ChakraOfTimeProps {
  rotation: number;
  scale?: number;
  interactive?: boolean;
  activeSpokeIndex?: number | null;
  onSpokeHover?: (index: number | null) => void;
  onSpokeClick?: (index: number) => void;
  chapters?: Chapter[];
  showDetails?: boolean;
  size?: number;
}

export const ChakraOfTime: React.FC<ChakraOfTimeProps> = ({
  rotation,
  scale = 1,
  interactive = false,
  activeSpokeIndex = null,
  onSpokeHover,
  onSpokeClick,
  chapters = [],
  showDetails = true,
  size = 720,
}) => {
  const filterId = useId();
  const spokeCount = 15; // 15 key chapters mapped along 360 degrees

  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{
        width: size,
        height: size,
        transform: `scale(${scale})`,
        perspective: '1200px',
      }}
    >
      {/* Volumetric backlight glow */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(245, 158, 11, 0.28) 0%, rgba(180, 83, 9, 0.12) 40%, rgba(120, 53, 15, 0.04) 65%, transparent 80%)',
          filter: 'blur(32px)',
          transform: 'translateZ(-60px)',
        }}
      />

      {/* Volumetric rays */}
      <div
        className="absolute inset-[-15%] pointer-events-none opacity-40 mix-blend-screen"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0deg, rgba(251, 191, 36, 0.15) 15deg, transparent 30deg, rgba(217, 119, 6, 0.12) 45deg, transparent 60deg, rgba(251, 191, 36, 0.15) 90deg, transparent 105deg, rgba(217, 119, 6, 0.12) 135deg, transparent 150deg, rgba(251, 191, 36, 0.15) 180deg, transparent 195deg, rgba(217, 119, 6, 0.12) 225deg, transparent 240deg, rgba(251, 191, 36, 0.15) 270deg, transparent 285deg, rgba(217, 119, 6, 0.12) 315deg, transparent 330deg, rgba(251, 191, 36, 0.15) 360deg)',
          transform: `rotate(${rotation * 0.4}deg)`,
          transition: 'transform 0.1s linear',
        }}
      />

      {/* Main Dimensional Chakra Body */}
      <motion.svg
        viewBox="0 0 800 800"
        className="w-full h-full drop-shadow-[0_25px_35px_rgba(0,0,0,0.95)]"
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: '50% 50%',
        }}
        aria-label="The Ancient Chakra of Time"
      >
        <defs>
          {/* Metallic Engraving Filter */}
          <filter id={`metal-${filterId}`} x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" result="displaced" />
            <feSpecularLighting in="displaced" surfaceScale="2" specularConstant="1.2" specularExponent="20" lightingColor="#fef08a" result="spec">
              <fePointLight x="400" y="150" z="260" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceGraphic" operator="in" result="specOut" />
            <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
          </filter>

          {/* Golden radial gradient */}
          <radialGradient id={`goldRing-${filterId}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#78350f" />
            <stop offset="35%" stopColor="#b45309" />
            <stop offset="65%" stopColor="#f59e0b" />
            <stop offset="85%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#451a03" />
          </radialGradient>

          {/* Antique brass bevel gradient */}
          <linearGradient id={`goldBevel-${filterId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="30%" stopColor="#d97706" />
            <stop offset="60%" stopColor="#78350f" />
            <stop offset="85%" stopColor="#b45309" />
            <stop offset="100%" stopColor="#fef3c7" />
          </linearGradient>

          {/* Hub gradient */}
          <radialGradient id={`hubGrad-${filterId}`} cx="45%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="30%" stopColor="#f59e0b" />
            <stop offset="70%" stopColor="#92400e" />
            <stop offset="100%" stopColor="#1c1917" />
          </radialGradient>
        </defs>

        {/* Outer Serrated Weapon Teeth (Sudarshana 108 micro-teeth motif) */}
        <g opacity="0.95">
          {Array.from({ length: 64 }).map((_, i) => {
            const angle = (i * 360) / 64;
            return (
              <path
                key={`tooth-${i}`}
                d="M 396 14 L 400 2 L 404 14 Z"
                fill={`url(#goldBevel-${filterId})`}
                style={{
                  transform: `rotate(${angle}deg)`,
                  transformOrigin: '400px 400px',
                }}
              />
            );
          })}
        </g>

        {/* Outermost rim with ancient Sanskrit / celestial engraving ring */}
        <circle
          cx="400"
          cy="400"
          r="385"
          fill="none"
          stroke={`url(#goldRing-${filterId})`}
          strokeWidth="10"
        />
        <circle
          cx="400"
          cy="400"
          r="378"
          fill="none"
          stroke="#451a03"
          strokeWidth="2"
        />
        <circle
          cx="400"
          cy="400"
          r="362"
          fill="none"
          stroke={`url(#goldBevel-${filterId})`}
          strokeWidth="18"
          strokeDasharray="4 2 8 2"
          opacity="0.85"
        />
        <circle
          cx="400"
          cy="400"
          r="348"
          fill="none"
          stroke="#1c1917"
          strokeWidth="4"
        />

        {/* Second Rim - Time Markers & Dots */}
        <circle
          cx="400"
          cy="400"
          r="336"
          fill="none"
          stroke={`url(#goldRing-${filterId})`}
          strokeWidth="8"
        />

        {/* Outer geometric diamond ornaments */}
        {Array.from({ length: 30 }).map((_, i) => {
          const angle = (i * 360) / 30;
          return (
            <rect
              key={`diamond-${i}`}
              x="396"
              y="44"
              width="8"
              height="8"
              fill="#fbbf24"
              style={{
                transform: `rotate(${angle}deg)`,
                transformOrigin: '400px 400px',
              }}
            />
          );
        })}

        {/* Concentric inner supportive band */}
        <circle
          cx="400"
          cy="400"
          r="220"
          fill="none"
          stroke={`url(#goldBevel-${filterId})`}
          strokeWidth="7"
          opacity="0.75"
        />
        <circle
          cx="400"
          cy="400"
          r="214"
          fill="none"
          stroke="#1c1917"
          strokeWidth="2"
        />

        {/* The 15 Sacred Spokes representing Chapters */}
        <g id="spokes-group">
          {Array.from({ length: spokeCount }).map((_, i) => {
            const angle = (i * 360) / spokeCount;
            const isActive = activeSpokeIndex === i;
            const chapter = chapters[i];

            return (
              <g
                key={`spoke-${i}`}
                style={{
                  transform: `rotate(${angle}deg)`,
                  transformOrigin: '400px 400px',
                  cursor: interactive ? 'pointer' : 'default',
                }}
                onMouseEnter={() => interactive && onSpokeHover?.(i)}
                onMouseLeave={() => interactive && onSpokeHover?.(null)}
                onClick={() => interactive && onSpokeClick?.(i)}
                className="transition-all duration-300 group"
              >
                {/* Spoke main shaft (Ancient curved tapered vajra spoke) */}
                <path
                  d="M 395 125 L 398 335 L 402 335 L 405 125 L 400 115 Z"
                  fill={isActive ? '#fef08a' : `url(#goldBevel-${filterId})`}
                  opacity={isActive ? 1 : 0.82}
                  className="transition-colors duration-200"
                  filter={isActive ? 'drop-shadow(0 0 10px #fbbf24)' : undefined}
                />

                {/* Spoke ridge highlight */}
                <line
                  x1="400"
                  y1="120"
                  x2="400"
                  y2="335"
                  stroke={isActive ? '#ffffff' : '#fef3c7'}
                  strokeWidth={isActive ? '2.5' : '1.5'}
                  opacity={isActive ? 1 : 0.65}
                />

                {/* Spoke ornamental spearhead / lotus petal node */}
                <polygon
                  points="393,220 400,205 407,220 400,230"
                  fill={isActive ? '#fbbf24' : '#b45309'}
                  stroke="#fef08a"
                  strokeWidth="0.8"
                />

                {/* Spoke chapter bead */}
                <circle
                  cx="400"
                  cy="95"
                  r={isActive ? 8 : 5}
                  fill={isActive ? '#ffffff' : '#fbbf24'}
                  stroke="#78350f"
                  strokeWidth="1.5"
                  className="transition-all duration-200"
                  filter={isActive ? 'drop-shadow(0 0 8px #f59e0b)' : undefined}
                />

                {/* Spoke hover glow lane for interaction */}
                {interactive && (
                  <rect
                    x="385"
                    y="70"
                    width="30"
                    height="270"
                    fill="transparent"
                    className="hover:fill-amber-400/10 cursor-pointer"
                  />
                )}
              </g>
            );
          })}
        </g>

        {/* Central Hub Rings & Sacred Bindu */}
        <circle
          cx="400"
          cy="400"
          r="120"
          fill="none"
          stroke={`url(#goldBevel-${filterId})`}
          strokeWidth="10"
        />
        <circle
          cx="400"
          cy="400"
          r="110"
          fill="none"
          stroke="#451a03"
          strokeWidth="4"
        />

        {/* Central Hub Lotus Petals (12 petals) */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360) / 12;
          return (
            <path
              key={`petal-${i}`}
              d="M 390 320 C 390 300, 410 300, 410 320 C 410 340, 390 340, 390 320 Z"
              fill={`url(#goldBevel-${filterId})`}
              opacity="0.8"
              style={{
                transform: `rotate(${angle}deg)`,
                transformOrigin: '400px 400px',
              }}
            />
          );
        })}

        {/* Central Metallic Dome (Bindu) */}
        <circle
          cx="400"
          cy="400"
          r="78"
          fill={`url(#hubGrad-${filterId})`}
          stroke={`url(#goldBevel-${filterId})`}
          strokeWidth="4"
        />

        {/* The Eternal Bindu / Center Portal Hole */}
        <circle
          cx="400"
          cy="400"
          r="32"
          fill="#050505"
          stroke="#d97706"
          strokeWidth="2.5"
        />
        <circle
          cx="400"
          cy="400"
          r="14"
          fill="#000000"
          stroke="#fbbf24"
          strokeWidth="1.5"
        />

        {/* Micro-spark in the very center */}
        <circle
          cx="400"
          cy="400"
          r="3"
          fill="#ffffff"
          opacity="0.9"
        />
      </motion.svg>
    </div>
  );
};
