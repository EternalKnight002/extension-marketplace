// src/app/layout.tsx
import "./globals.css";
import React from "react";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { ThemeProvider } from "next-themes";

import fs from "fs";
import path from "path";

export const metadata = {
  title: "Extensions Showcase — Aman Kumar",
  description:
    "A modern gallery showcasing Chrome & VS Code extensions built by Aman Kumar.",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    images: ["/og-image.png"],
  },
  authors: [{ name: "Aman Kumar", url: "https://github.com/EternalKnight002" }],
};

/**
 * Server helper: read extensions.json and return array length (safe fallback).
 */
async function getExtensionsCount(): Promise<number> {
  try {
    const file = path.join(process.cwd(), "data", "extensions.json");
    if (!fs.existsSync(file)) return 0;
    const raw = fs.readFileSync(file, "utf-8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed.length;
    return 0;
  } catch (err) {
    // if anything goes wrong, return 0 so UI remains stable
    // eslint-disable-next-line no-console
    console.error("Error reading extensions.json:", err);
    return 0;
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const count = await getExtensionsCount();

  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {/* ========== HEADER (refreshed branding; live count badge) ========== */}
          <header className="py-3 backdrop-blur-sm">
            <div className="container flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative">
                  <div className="rounded-full p-2 bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-md">
                    <div className="h-9 w-9 rounded-full bg-white/10" />
                  </div>

                  {/* Live badge wired to data/extensions.json */}
                  <span
                    className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium rounded-full bg-white text-indigo-700 shadow-sm"
                    aria-hidden="false"
                    title={`${count} extensions`}
                  >
                    {count}
                  </span>
                </div>

                <div>
                  <h2 className="text-base md:text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
                    Aman’s Toolbox
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    Tiny tools for daily flow
                  </p>
                </div>
              </Link>

              <div className="flex items-center gap-4">
                <ThemeToggle />
              </div>
            </div>
          </header>

          {/* ================= MAIN ================= */}
          <main>{children}</main>

          {/* ================= FOOTER ================= */}
          <footer className="site-footer py-20 mt-12">
            <div className="container mx-auto px-6">
              <div className="site-footer__inner">
                <h2 className="footer-heading">
                  Love it? Hate it? Broke it?
                </h2>

                <p className="footer-subtext mt-3">
                  Your feedback makes these extensions better. Don’t hesitate to drop me a line.
                </p>

                <a
                  href="mailto:resoamankumar@gmail.com"
                  role="button"
                  aria-describedby="footer-contact-desc"
                  className="footer-cta mt-6 inline-block shimmer-hover"
                >
                  Email me
                </a>

                <div className="footer-social mt-8" aria-hidden="false">
                  <a
                    href="https://github.com/EternalKnight002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social__link"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://x.com/Eternalknigh?t=9zzpTY3YIyS5hs7ts27LmQ&s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social__link"
                    aria-label="X (Twitter)"
                  >
                    <FaTwitter />
                  </a>

                  <a
                    href="https://linkedin.com/in/aman-kumar-537a73296"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social__link"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                </div>

                <p id="footer-contact-desc" className="footer-note mt-10">
                  © {new Date().getFullYear()} — Aman Kumar
                </p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
