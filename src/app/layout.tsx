// src/app/layout.tsx
import "./globals.css";
import React from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

/**
 * Root layout (App Router).
 * Includes hero header, dark-mode toggle, and modern “Get in touch” footer.
 * Author: Aman Kumar (EternalKnight002)
 */

export const metadata = {
  title: "Extensions Showcase — Aman Kumar",
  description:
    "A modern gallery showcasing Chrome & VS Code extensions built by Aman Kumar.",
  metadataBase: new URL("http://localhost:3000"), // Change to production URL when deploying
  openGraph: {
    images: ["/og-image.png"],
  },
  authors: [{ name: "Aman Kumar", url: "https://github.com/EternalKnight002" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* ================= HEADER ================= */}
        <header className="py-6">
          <div className="container flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 p-2">
                <div className="h-8 w-8 rounded-full bg-white/10" />
              </div>
              <div>
                <h1 className="text-lg font-bold leading-none">Extensions</h1>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Tools I build — Aman Kumar
                </p>
              </div>
            </Link>

            <div className="flex items-center gap-3">
              <Link href="/search" aria-label="search">
                <Search className="h-5 w-5 opacity-80" />
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* ================= MAIN CONTENT ================= */}
        <main>{children}</main>

        {/* ================= FOOTER ================= */}
        <footer className="py-20 bg-gray-50 dark:bg-[#0c1222] border-t border-gray-200 dark:border-gray-800 mt-12">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
              Get in touch
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Looking for collaboration or full-time roles — feel free to reach out.
            </p>

            {/* CTA button */}
            <a
              href="mailto:resoamankumar@gmail.com"
              className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-colors shimmer-hover"
            >
              Email me
            </a>

            {/* Social Icons */}
            <div className="mt-8 flex justify-center gap-8 text-2xl text-gray-600 dark:text-gray-300">
              {/* GitHub */}
              <a
                href="https://github.com/EternalKnight002"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/Eternalknigh?t=9zzpTY3YIyS5hs7ts27LmQ&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                aria-label="X (Twitter)"
              >
                <FaTwitter />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/aman-kumar-537a73296"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>

            <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} — Aman Kumar
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
