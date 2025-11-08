// src/app/page.tsx
import React from "react";
import fs from "fs";
import path from "path";
import ExtensionCard from "../components/ExtensionCard";
import HowToDownloadSection from "../components/HowToDownloadSection";
import AnimatedHero from "../components/AnimatedHero";
import SearchInput from "../components/SearchInput";

/**
 * Server component for homepage; interactive elements are client components.
 */

async function getExtensions() {
  const dataPath = path.join(process.cwd(), "data", "extensions.json");
  try {
    if (!fs.existsSync(dataPath)) {
      console.warn(`Warning: ${dataPath} not found — returning empty extensions list.`);
      return [];
    }
    const raw = fs.readFileSync(dataPath, "utf-8");
    return JSON.parse(raw) as any[];
  } catch (err) {
    console.error("Error reading extensions.json:", err);
    return [];
  }
}

export default async function HomePage() {
  const extensions = await getExtensions();

  return (
    <div className="container py-8">
      <AnimatedHero />

      <section className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* client component handles onChange locally */}
          <SearchInput />
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-300">{extensions.length} extensions</div>
      </section>

      <section aria-labelledby="extensions-heading">
        <h3 id="extensions-heading" className="sr-only">
          Extensions
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {extensions.map((ext: any) => (
            <ExtensionCard key={ext.slug} ext={ext} />
          ))}
        </div>
      </section>

      <HowToDownloadSection />
    </div>
  );
}
