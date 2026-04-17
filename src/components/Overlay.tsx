"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  progress: MotionValue<number>;
}

export default function Overlay({ progress }: OverlayProps) {
  // Section 1: visible from 0% to ~20%
  const opacity1 = useTransform(progress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.25], [0, -100]);

  // Section 2: visible from 25% to 55%
  const opacity2 = useTransform(progress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.2, 0.55], [100, -100]);

  // Section 3: visible from 55% to 85%
  const opacity3 = useTransform(progress, [0.5, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.5, 0.85], [100, -100]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white drop-shadow-lg">
          Supratim.
        </h1>
        <p className="mt-4 text-xl md:text-3xl text-gray-300 max-w-lg font-light drop-shadow-md">
          Creative Developer.
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-y-0 left-6 lg:left-8 flex flex-col justify-center"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-md leading-tight drop-shadow-lg">
          I build digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">experiences.</span>
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-y-0 right-6 lg:right-8 flex flex-col justify-center items-end text-right"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-md leading-tight drop-shadow-lg">
          Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">design</span> and engineering.
        </h2>
      </motion.div>
    </div>
  );
}
