'use client';

import React from 'react';

interface LanyardIllustrationProps {
  className?: string;
}

export const LanyardIllustration: React.FC<LanyardIllustrationProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 100 205"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Vector Illustration of Lanyard Strap and Carabiner Clip"
    >
      <defs>
        {/* Fabric Strap Gradient & Texture */}
        <linearGradient id="strapBaseGrad" x1="50" y1="0" x2="50" y2="115" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#CBB29C" />
          <stop offset="40%" stopColor="#BEA38B" />
          <stop offset="100%" stopColor="#A88D76" />
        </linearGradient>

        {/* Diagonal Weave Pattern for Fabric Ribbon */}
        <pattern id="strapWeave" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(0, 0, 0, 0.07)" strokeWidth="1.8" />
          <line x1="3" y1="0" x2="3" y2="6" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1.8" />
        </pattern>

        {/* Chrome / Silver Hardware Gradients */}
        <linearGradient id="crimpGrad" x1="26" y1="110" x2="74" y2="124" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="25%" stopColor="#CBD5E1" />
          <stop offset="50%" stopColor="#64748B" />
          <stop offset="75%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#F8FAFC" />
        </linearGradient>

        <linearGradient id="ringGrad" x1="38" y1="122" x2="62" y2="144" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="35%" stopColor="#94A3B8" />
          <stop offset="70%" stopColor="#475569" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>

        <linearGradient id="swivelGrad" x1="42" y1="138" x2="58" y2="154" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="30%" stopColor="#94A3B8" />
          <stop offset="70%" stopColor="#334155" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>

        <linearGradient id="hookGrad" x1="32" y1="150" x2="68" y2="205" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="20%" stopColor="#CBD5E1" />
          <stop offset="45%" stopColor="#64748B" />
          <stop offset="70%" stopColor="#334155" />
          <stop offset="90%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#F1F5F9" />
        </linearGradient>

        {/* Drop Shadow Filter */}
        <filter id="hardwareShadow" x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="rgba(0, 0, 0, 0.22)" />
        </filter>
      </defs>

      {/* Main Group with Shadow */}
      <g filter="url(#hardwareShadow)">
        {/* 1. Fabric Strap */}
        <path
          d="M31 0H69V112C69 114 67 116 64 116H36C33 116 31 114 31 112V0Z"
          fill="url(#strapBaseGrad)"
        />
        {/* Woven Fabric Texture Overlay */}
        <path
          d="M31 0H69V112C69 114 67 116 64 116H36C33 116 31 114 31 112V0Z"
          fill="url(#strapWeave)"
        />

        {/* Left & Right Edge Stitching */}
        <line x1="34" y1="0" x2="34" y2="114" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="66" y1="0" x2="66" y2="114" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="33" y1="0" x2="33" y2="114" stroke="rgba(0, 0, 0, 0.18)" strokeWidth="0.8" />
        <line x1="67" y1="0" x2="67" y2="114" stroke="rgba(0, 0, 0, 0.18)" strokeWidth="0.8" />

        {/* 2. Metallic Crimp Collar / Band */}
        <g id="crimp-band">
          <rect x="25" y="108" width="50" height="13" rx="2.5" fill="url(#crimpGrad)" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.75" />
          <rect x="26" y="109" width="48" height="2" fill="rgba(255, 255, 255, 0.8)" />
          {/* Left Rivet */}
          <circle cx="34" cy="114.5" r="2.6" fill="#1E293B" />
          <circle cx="33.5" cy="114" r="1.8" fill="#64748B" />
          <circle cx="33.2" cy="113.6" r="0.8" fill="#FFFFFF" />
          {/* Right Rivet */}
          <circle cx="66" cy="114.5" r="2.6" fill="#1E293B" />
          <circle cx="65.5" cy="114" r="1.8" fill="#64748B" />
          <circle cx="65.2" cy="113.6" r="0.8" fill="#FFFFFF" />
        </g>

        {/* 3. Metallic Jump Ring */}
        <g id="jump-ring">
          <ellipse cx="50" cy="130" rx="9" ry="10" stroke="url(#ringGrad)" strokeWidth="3.4" fill="none" />
          <ellipse cx="50" cy="130" rx="9" ry="10" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="0.8" fill="none" />
        </g>

        {/* 4. Swivel Connector Barrel */}
        <g id="swivel-barrel">
          <rect x="43" y="138" width="14" height="11" rx="2" fill="url(#swivelGrad)" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="0.6" />
          <line x1="44" y1="141" x2="56" y2="141" stroke="#334155" strokeWidth="0.8" />
          <line x1="44" y1="144" x2="56" y2="144" stroke="#CBD5E1" strokeWidth="0.8" />
          <line x1="44" y1="147" x2="56" y2="147" stroke="#334155" strokeWidth="0.8" />
        </g>

        {/* 5. Swivel Snap Hook (Carabiner / Lobster Clasp) */}
        <g id="snap-hook">
          {/* Hook Upper Pivot Base */}
          <ellipse cx="50" cy="151" rx="6" ry="3" fill="#64748B" />

          {/* Hook Body (Curving Downward and Arching Through Slot) */}
          <path
            d="M45 151C45 151 40 162 40 178C40 193 47 202 53 202C59 202 65 194 65 183C65 174 61 168 59 168C57.5 168 57 170 58 174C59 178 59.5 182 59.5 184C59.5 190 55.5 195 52 195C48 195 44.5 189 44.5 178C44.5 166 48 158 48 153"
            stroke="url(#hookGrad)"
            strokeWidth="4.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Spring Gate Arm */}
          <path
            d="M59 168L48 163"
            stroke="#94A3B8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Thumb Lever Catch Knob */}
          <circle cx="56.5" cy="166" r="1.8" fill="#F8FAFC" stroke="#475569" strokeWidth="0.6" />

          {/* Specular Highlight along Hook Curve */}
          <path
            d="M42 166C41 174 41 184 43 191"
            stroke="rgba(255, 255, 255, 0.75)"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      </g>
    </svg>
  );
};
