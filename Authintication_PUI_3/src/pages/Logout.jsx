import React from "react";
import DiamondBackground from "../components/DiamondBackground";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Logout() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-[#0b0b0b] to-[#0a0a0a]">
      <div className="auth-stage w-full max-w-5xl flex items-center justify-center">
        <DiamondBackground>
          <motion.div
            className="form-panel text-center"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-2 text-sm text-gray-300 font-semibold">Logged Out</div>
            <div className="text-gray-200 mb-4">You have been logged out successfully.</div>

            <motion.button
              className="px-4 py-2 rounded-full bg-neon text-black font-semibold shadow-[0_8px_24px_rgba(121,224,25,0.15)]"
              whileHover={{ scale: 1.03 }}
            >
              <Link to="/login">Sign In</Link>
            </motion.button>
          </motion.div>
        </DiamondBackground>
      </div>
    </div>
  );
}
