// src/components/AnimatedHero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";


export default function AnimatedHero() {
  return (
    <section className="relative mb-12">
     
      <div className="hero-blob" aria-hidden="true" />

      <div className="container text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 dark:text-white"
        >
          Tools that make work feel effortless
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.08, duration: 0.6 }}
          className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300"
        >
          Small, focused Chrome &amp; VS Code extensions that save your time and sanity — built to fit into your flow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.6 }}
          className="mt-6 flex items-center justify-center gap-3"
        >
          <div className="h-2 w-28 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 shadow-md" />
        </motion.div>
      </div>
    </section>
  );
}
