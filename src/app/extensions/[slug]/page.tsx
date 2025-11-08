// src/app/extensions/[slug]/page.tsx
import React from "react";
import fs from "fs";
import path from "path";
import Link from "next/link";

/**
 * Extension detail page — server component (no client event handlers).
 */

type Params = { params: { slug: string } };

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

export default async function ExtensionPage({ params }: Params) {
  const extensions = await getExtensions();
  const ext = extensions.find((e) => e.slug === params.slug);

  if (!ext) {
    return (
      <div className="container py-12">
        <h2 className="text-xl font-semibold">Extension not found</h2>
        <p className="mt-2">Make sure the slug matches an entry in data/extensions.json</p>
        <Link href="/" className="mt-4 inline-block underline">
          Go back
        </Link>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: ext.title,
    applicationCategory: ext.tags.join(", "),
    description: ext.shortDesc,
    url: `https://your-site.com/extensions/${ext.slug}`,
    softwareVersion: "1.0.0",
    author: {
      "@type": "Person",
      name: "Your Name"
    }
  };

  return (
    <div className="container py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold">{ext.title}</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{ext.shortDesc}</p>

          <div className="mt-6 prose max-w-none text-sm">
            <p>{ext.longDesc}</p>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a href={ext.downloadUrl} className="rounded-full px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-400 text-white inline-flex items-center">
              Download
            </a>

            <a href={ext.githubUrl} target="_blank" rel="noopener noreferrer" className="underline">
              View on GitHub
            </a>
          </div>
        </div>

        <aside className="md:w-1/3">
          <div className="card p-3 rounded-2xl">
            <h4 className="font-semibold">Screenshots</h4>
            <div className="mt-3 grid grid-cols-1 gap-2">
              {ext.screenshots.map((s: string, i: number) => (
                <img key={s + i} src={s} alt={`${ext.title} screenshot ${i + 1}`} className="w-full h-32 object-cover rounded-md" loading="lazy" />
              ))}
            </div>
          </div>

          <div className="mt-4 card p-3 rounded-2xl">
            <h4 className="font-semibold">Details</h4>
            <ul className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              <li>Tags: {ext.tags.join(", ")}</li>
              <li className="mt-2">Version: 1.0.0 (placeholder)</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
