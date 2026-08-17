"use client";

import { motion } from "framer-motion";

export default function NodeCanvas() {
  const circuitPaths = [
    {
      id: "L1",
      d: "M 120 100 H 260 C 310 100, 330 220, 400 220",
      duration: 2.5,
      delay: 0,
    },
    {
      id: "L2",
      d: "M 100 220 H 280 C 330 220, 350 220, 400 220",
      duration: 3,
      delay: 0.8,
    },
    {
      id: "L3",
      d: "M 120 340 H 260 C 310 340, 330 260, 400 260",
      duration: 2.2,
      delay: 0.4,
    },

    {
      id: "R1",
      d: "M 680 100 H 540 C 490 100, 470 220, 400 220",
      duration: 2.8,
      delay: 0.2,
    },
    {
      id: "R2",
      d: "M 700 220 H 520 C 470 220, 450 220, 400 220",
      duration: 3.2,
      delay: 1,
    },
    {
      id: "R3",
      d: "M 680 340 H 540 C 490 340, 470 260, 400 260",
      duration: 2.4,
      delay: 0.6,
    },

    { id: "V1", d: "M 260 100 V 220", duration: 4, delay: 1.2 },
    { id: "V2", d: "M 540 220 V 340", duration: 3.5, delay: 1.5 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none w-full h-full flex items-center justify-center z-0">
      <svg
        className="w-full h-full max-w-6xl max-h-[480px]"
        viewBox="0 0 800 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="line-grad-blue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00aeef" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00aeef" stopOpacity="0.3" />
          </linearGradient>

          <filter id="glow-blue" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {circuitPaths.map((path) => (
          <path
            key={`base-${path.id}`}
            d={path.d}
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="1.5"
          />
        ))}

        {circuitPaths.map((path) => (
          <path
            key={`glow-${path.id}`}
            d={path.d}
            stroke="url(#line-grad-blue)"
            strokeWidth="2"
            filter="url(#glow-blue)"
            strokeOpacity="0.6"
          />
        ))}

        {circuitPaths.map((path) => (
          <motion.path
            key={`pulse-${path.id}`}
            d={path.d}
            stroke="#00aeef"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#glow-blue)"
            initial={{ pathLength: 0.15, pathOffset: 0, opacity: 0 }}
            animate={{
              pathOffset: [0, 1],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: path.duration,
              repeat: Infinity,
              ease: "linear",
              delay: path.delay,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
