// src/app/page.tsx
import React from "react";
import fs from "fs";
import path from "path";
import ExtensionCard from "../components/ExtensionCard";
import HowToDownloadSection from "../components/HowToDownloadSection";

/**
 * Main homepage
 * - Displays all extensions as cards
 * - Includes "How to Download & Install" section below
 */

type Ext = {
  title: string;
  slug: string;
  shortDesc: string;
  longDesc?: string;
  tags: string[];
  screenshots?: string[];
  githubUrl?: string;
  downloadUrl?: string;
};

async function getExtensions(): Promise<Ext[]> {
  const dataPath = path.join(process.cwd(), "data", "extensions.json");
  try {
    if (!fs.existsSync(dataPath)) return [];
    const raw = fs.readFileSync(dataPath, "utf-8");
    return JSON.parse(raw) as Ext[];
  } catch (err) {
    console.error("Error reading extensions.json:", err);
    return [];
  }
}

export default async function HomePage() {
  const extensions = await getExtensions();

  return (
    <>
      {/* ===== Extension Gallery ===== */}
      <section className="container py-12">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold">Extensions</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A curated list of my Chrome & VS Code extensions. Click{" "}
            <span className="font-semibold">Download</span> to get the release or{" "}
            <span className="font-semibold">View on GitHub</span> to check the source.
          </p>
        </header>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {extensions.length === 0 ? (
            <div className="col-span-full text-center py-12 text-gray-600">
              No extensions found — ensure <code>data/extensions.json</code> exists.
            </div>
          ) : (
            extensions.map((ext) => <ExtensionCard key={ext.slug} ext={ext} />)
          )}
        </div>
      </section>

      {/* ===== How to Download Section ===== */}
      <HowToDownloadSection />
    </>
  );
}
