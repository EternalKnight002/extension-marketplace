// src/components/AnimatedHero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Small client component that animates the hero heading + subheading.
 * Use this inside a server page (imported normally).
 */

export default function AnimatedHero() {
  return (
    <section className="mb-8">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="text-3xl md:text-4xl font-extrabold"
      >
        Build less. Ship more.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.08, duration: 0.45 }}
        className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl"
      >
        Discover browser and editor extensions I built to speed up workflows and protect your time. Click any card to learn more or download.
      </motion.p>
    </section>
  );
}
