// src/components/ThemeToggle.tsx
"use client"; // required: this file is a client component

import React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Client-side ThemeToggle for next-themes.
 * Put this in src/components and import it into layout.tsx.
 */

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="p-2 rounded-full focus-ring"
    >
      <motion.span
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </motion.span>
    </button>
  );
}
