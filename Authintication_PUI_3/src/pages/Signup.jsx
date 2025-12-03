import React, { useState } from "react";
import DiamondBackground from "../components/DiamondBackground";
import PasswordInput from "../components/PasswordInput";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-[#0b0b0b] to-[#0a0a0a]">
      <div className="auth-stage w-full max-w-5xl flex items-center justify-center">

        <DiamondBackground hideStartTriangle={true}>
          <motion.div
            className="form-panel"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Title */}
            <div className="mb-4 text-lg text-gray-200 font-semibold text-center">
              Create Account
            </div>

            {/* Social Sign Up Buttons */}
            <motion.div 
              className="grid grid-cols-4 gap-3 mb-6"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <AuthIcon icon={<FaGoogle />} label="Google" />
              <AuthIcon icon={<FaTwitter />} label="Twitter" />
              <AuthIcon icon={<FaGithub />} label="Github" />
              <AuthIcon icon={<FaEnvelope />} label="Email" />
            </motion.div>

            {/* OR Separator */}
<motion.div
  className="flex items-center gap-3 my-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.35 }}
>
  <div className="flex-1 border-b border-gray-700/60"></div>
  <div className="text-gray-400 text-xs tracking-widest">OR</div>
  <div className="flex-1 border-b border-gray-700/60"></div>
</motion.div>


            {/* Username */}
            <div className="mb-3">
              <div className="small-label">Username</div>
              <input
                className="auth-input"
                placeholder="yournickname"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <div className="small-label">Email</div>
              <input
                className="auth-input"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <div className="small-label">Password</div>
              <PasswordInput
                placeholder=" password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>

            {/* Bottom: Button + Login Link */}
          {/* Bottom: Button + Login Link */}
<div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">

 <motion.button
  className="px-8 py-2 rounded-full bg-neon text-black font-semibold
             shadow-[0_8px_24px_rgba(121,224,25,0.18)]
             whitespace-nowrap text-base"
  whileHover={{ scale: 1.04 }}
>
  Sign Up
</motion.button>

  <Link
    to="/login"
    className="text-sm text-gray-300 underline text-center sm:text-right whitespace-nowrap"
  >
     have account?
  </Link>

</div>


          </motion.div>
        </DiamondBackground>

      </div>
    </div>
  );
}

/* Small reusable social login button */
function AuthIcon({ icon, label }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center gap-1 text-gray-300"
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1a1a] border border-gray-700 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
        <span className="text-lg">{icon}</span>
      </div>
      <span className="text-[10px]">{label}</span>
    </motion.button>
  );
}
