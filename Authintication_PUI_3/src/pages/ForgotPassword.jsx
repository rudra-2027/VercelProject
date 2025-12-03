import React, { useState } from "react";
import DiamondBackground from "../components/DiamondBackground";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-[#0b0b0b] to-[#0a0a0a]">
      <div className="auth-stage w-full max-w-5xl flex items-center justify-center">
        <DiamondBackground>
          <motion.div
            className="form-panel"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-2 text-sm text-gray-300 font-semibold">Reset Password</div>

            <div className="mb-3">
              <div className="small-label">Email</div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="auth-input"
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <motion.button
                className="px-4 py-2 rounded-full bg-neon text-black font-semibold shadow-[0_8px_24px_rgba(121,224,25,0.15)]"
                whileHover={{ scale: 1.03 }}
                onClick={() => alert("Reset link sent (simulate)")}>
                Send
              </motion.button>

              <div className="text-sm">
                <Link to="/login" className="text-gray-300 underline">Back to Login</Link>
              </div>
            </div>
          </motion.div>
        </DiamondBackground>
      </div>
    </div>
  );
}
