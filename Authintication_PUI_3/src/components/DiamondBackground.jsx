import React from "react";
import { motion } from "framer-motion";

/*
  Improved DiamondBackground with:
  - optional Start triangle (hideStartTriangle)
  - optional decorative diamonds (showDecorations)
  - better animation tuning
  - stable responsive layout
*/

export default function DiamondBackground({
  children,
  hideStartTriangle = false,
  showDecorations = true,
}) {
  return (
    <div className="relative w-full flex items-center justify-center">

      {/* Neon glowing border diamond */}
      <motion.div
        className="neon-border pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Outer rotated diamond */}
      <motion.div
        className="diamond"
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Inner card diamond */}
        <motion.div
          className="inner-diamond"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </motion.div>

      {/* Optional decorative diamonds */}
      {showDecorations && (
        <>
          <motion.div
            className="mini-diamond"
            style={{ left: "58%", top: "67%" }}
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 0.9 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />

          <motion.div
            className="mini-diamond"
            style={{ left: "40%", top: "73%", width: 45, height: 45 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.8 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          />
        </>
      )}

      {/* Start Triangle (hidden for signup & forgot) */}
      {!hideStartTriangle && (
        <>
          <motion.div
            className="start-triangle"
            initial={{ opacity: 0, rotate: 30 }}
            animate={{ opacity: 1, rotate: 45 }}
            whileHover={{ scale: 1.06, rotate: 47 }}
            transition={{ duration: 0.7, type: "spring" }}
          />

          <motion.div
            className="start-label"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            Start
          </motion.div>
        </>
      )}
    </div>
  );
}
