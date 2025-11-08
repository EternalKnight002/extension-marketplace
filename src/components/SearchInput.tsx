// src/components/SearchInput.tsx
"use client";

import React from "react";
import { Search } from "lucide-react";

/**
 * Small client-side search input.
 * Handles its own state and (optionally) can call a callback or update URL params.
 * Right now it only controls local state to avoid passing event handlers from server components.
 *
 * If you want server-side filtering or URL updates, we can extend this component to update
 * the querystring using next/navigation's useRouter or useSearchParams.
 */

export default function SearchInput({ placeholder = "Search extensions by name or tag..." }: { placeholder?: string }) {
  const [value, setValue] = React.useState("");

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 opacity-60" />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="pl-10 pr-4 rounded-full px-4 py-2 border focus-ring bg-white/80 dark:bg-black/60"
        aria-label="Search extensions"
        role="search"
      />
    </div>
  );
}
