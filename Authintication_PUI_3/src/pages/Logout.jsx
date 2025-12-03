import React from "react";
import DiamondBackground from "../components/DiamondBackground";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Logout() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-[#0b0b0b] to-[#0a0a0a]">

      {/* ⭐ CENTER BOTH DIAMOND + FORM */}
      <div className="relative w-full max-w-5xl h-[500px] flex items-center justify-center">

        {/* Diamond as background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <DiamondBackground hideStartTriangle={true} />
        </div>

        {/* FORM PANEL */}
        <motion.div
          className="form-panel relative z-10 text-center w-[380px] px-6 py-5 rounded-xl 
                     bg-black/40 backdrop-blur-xl border border-gray-700/40 
                     shadow-[0_0_35px_rgba(0,0,0,0.55)]"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-2 text-sm text-gray-300 font-semibold">
            Logged Out
          </div>

          <div className="text-gray-200 mb-4">
            You have been logged out successfully.
          </div>

          <motion.div whileHover={{ scale: 1.03 }}>
            <Link
              to="/login"
              className="px-4 py-2 rounded-full bg-neon text-black font-semibold 
                         shadow-[0_8px_24px_rgba(121,224,25,0.15)] inline-block"
            >
              Sign In
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
