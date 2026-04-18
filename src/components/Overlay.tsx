"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  progress: MotionValue<number>;
}

export default function Overlay({ progress }: OverlayProps) {
  // Section 1: visible from 0% to ~15%, fades out by 22%
  const opacity1 = useTransform(progress, [0, 0.15, 0.22, 1], [1, 1, 0, 0]);
  const y1 = useTransform(progress, [0, 0.22, 1], [0, -100, -100]);
  const display1 = useTransform(progress, (p) => p > 0.22 ? "none" : "flex");

  // Section 2: fades in 22%-29%, visible 29%-45%, fades out 45%-52%
  const opacity2 = useTransform(progress, [0, 0.22, 0.29, 0.45, 0.52, 1], [0, 0, 1, 1, 0, 0]);
  const y2 = useTransform(progress, [0, 0.22, 0.52, 1], [100, 100, -100, -100]);
  const display2 = useTransform(progress, (p) => (p < 0.22 || p > 0.52) ? "none" : "flex");

  // Section 3: fades in 52%-59%, visible 59%-75%, fades out 75%-82%
  const opacity3 = useTransform(progress, [0, 0.52, 0.59, 0.75, 0.82, 1], [0, 0, 1, 1, 0, 0]);
  const y3 = useTransform(progress, [0, 0.52, 0.82, 1], [100, 100, -100, -100]);
  const display3 = useTransform(progress, (p) => p < 0.52 ? "none" : "flex");

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1, display: display1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white drop-shadow-lg">
          Supratim
        </h1>
        <p className="mt-4 text-xl md:text-3xl text-gray-300 max-w-lg font-light drop-shadow-md">
          Application Developer
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2, display: display2 }}
        className="absolute inset-y-0 left-6 lg:left-8 flex flex-col justify-center"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-md leading-tight drop-shadow-lg">
          I build digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">experiences.</span>
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3, display: display3 }}
        className="absolute inset-y-0 right-6 lg:right-8 flex flex-col justify-center items-end text-right"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-md leading-tight drop-shadow-lg">
          Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">design</span> and engineering.
        </h2>
      </motion.div>
    </div>
  );
}
