# Aman's Toolbox — Extensions Showcase

A modern, performant gallery built with **Next.js 14**, **React 18**, and **Tailwind CSS** to showcase a curated collection of Chrome and VS Code extensions.

## 🚀 Features

- **Responsive Design** — Optimized for mobile, tablet, and desktop screens
- **Dark Mode** — Seamless theme toggle powered by `next-themes`
- **Smooth Animations** — Framer Motion–driven transitions for hero, cards, and sections
- **Accessible** — WCAG-compliant markup with semantic HTML and ARIA labels
- **Data-Driven** — Extensions loaded from `data/extensions.json` (live badge count)
- **Video Tutorials** — Inline video players with custom play overlays
- **Modern CSS** — Glassmorphism cards, gradient blobs, and shimmer effects
- **Production-Ready** — TypeScript strict mode, ESLint, and PostCSS with Autoprefixer

## 📋 Tech Stack

| Layer | Tools |
|-------|-------|
| **Framework** | Next.js 14 (App Router) |
| **UI Library** | React 18.2 |
| **Styling** | Tailwind CSS 3.4 + PostCSS |
| **Animations** | Framer Motion 12 |
| **Icons** | Lucide React, React Icons |
| **Themes** | next-themes 0.4 |
| **Dialogs** | Radix UI Dialog |
| **Language** | TypeScript 5.5 |
| **Linting** | ESLint + Next.js config |

## 🏗️ Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles (Tailwind, custom utilities)
│   │   ├── layout.tsx           # Root layout with header, footer, theme provider
│   │   └── page.tsx             # Homepage with hero and extension gallery
│   ├── components/
│   │   ├── AnimatedHero.tsx     # Hero section with Framer Motion
│   │   ├── ExtensionCard.tsx    # Individual extension card with hover effects
│   │   ├── HowToDownloadSection.tsx # Video tutorials + installation steps
│   │   ├── VideoPlayer.tsx      # Custom video player with poster & controls
│   │   ├── ThemeToggle.tsx      # Dark/light mode switcher
│   │   ├── SearchInput.tsx      # Search bar component (stub)
│   │   └── Modal.tsx            # Radix UI dialog wrapper
│   └── types/
│       └── global.d.ts          # TypeScript globals (CSS imports)
├── data/
│   └── extensions.json          # Extension metadata (title, links, screenshots)
├── public/
│   ├── screenshots/             # Extension preview images
│   └── videos/                  # Tutorial videos & posters
├── tailwind.config.js           # Tailwind customization
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
├── eslint.config.mjs            # ESLint rules
└── package.json                 # Dependencies & scripts
```

## 🛠️ Getting Started

### Prerequisites

- **Node.js** 18+ (recommended 20+)
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd my-extensions-site
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser. The page auto-refreshes as you edit files.

### Scripts

```bash
npm run dev       # Start development server on port 3000
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run ESLint
npm run typecheck # Type-check with TypeScript (no emit)
```

## 📝 Configuration

### Adding Extensions

Edit `data/extensions.json` to add or modify extensions:

```json
{
  "title": "My Awesome Extension",
  "slug": "my-awesome-extension",
  "shortDesc": "A brief one-liner description.",
  "longDesc": "Detailed description for modal or info pages.",
  "tags": ["chrome", "productivity"],
  "screenshots": ["/screenshots/my-awesome-1.jpg"],
  "githubUrl": "https://github.com/username/repo",
  "downloadUrl": "https://github.com/username/repo/releases/...",
  "poster": "/videos/my-awesome-poster.jpg"
}
```

The **live badge count** in the header updates automatically from this file.

### Customizing Styles

- **Global theme colors** are defined in `src/app/globals.css` (`:root` and `.dark`)
- **Tailwind utilities** extend in `tailwind.config.js`
- **Dark mode** uses the `class` strategy (controlled by `next-themes`)

### Environment Variables

None required for local development. For production deployments (e.g., Vercel), ensure `NEXT_PUBLIC_*` variables are set if needed.

## 🎨 Key Components

### AnimatedHero.tsx

Renders the main hero section with fade-in animations and a decorative gradient blob (CSS-based).

### ExtensionCard.tsx

Card component displaying extension metadata with:
- Background image with fallback
- Overlay gradient for text contrast
- Hover effects (image blur, title translation, description reveal)
- Action buttons (GitHub, Download)

### HowToDownloadSection.tsx

Two-column tutorial section with:
- Custom `VideoPlayer` component
- Step-by-step installation guides
- Responsive grid layout
- Framer Motion entrance animations

### VideoPlayer.tsx

Lightweight video player with:
- Poster image support
- Custom play button overlay
- Native HTML5 video controls (appear after play)
- Accessibility labels

## 🌗 Theme Support

The site uses `next-themes` for seamless dark mode. Toggle via the `ThemeToggle` button in the header. Theme preference is persisted in the browser.

## ♿ Accessibility

- Semantic HTML (`<article>`, `<section>`, `<header>`, `<footer>`)
- ARIA labels on interactive elements
- Focus rings on buttons and links
- Color contrast compliance (WCAG AA)
- Respects `prefers-reduced-motion` for animations

## 📦 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app:

1. Push your code to GitHub (or GitLab/Bitbucket)
2. Import the project at [vercel.com](https://vercel.com/new)
3. Vercel auto-detects Next.js and sets default build settings
4. Click Deploy — your site is live!

### Other Platforms

Next.js can be deployed to any Node.js hosting service. See the [deployment docs](https://nextjs.org/docs/app/building-your-applications/deploying) for details.

## 🐛 Troubleshooting

### Extensions not showing?

- Ensure `data/extensions.json` exists and is valid JSON
- Check the console for parsing errors
- Verify file paths in the JSON (screenshots, videos, etc.)

### Styles not applying?

- Run `npm install` to ensure all dependencies are installed
- Restart the dev server after Tailwind config changes
- Clear `.next/` cache: `rm -rf .next && npm run dev`

### Video won't play?

- Check that video files exist at the specified paths in `public/videos/`
- Verify video format compatibility (MP4 recommended)
- Ensure browser allows autoplay (some require user interaction first)

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Found a bug or have a feature idea? Drop an issue on GitHub or reach out via:

- **Email:** resoamankumar@gmail.com
- **GitHub:** [EternalKnight002](https://github.com/EternalKnight002)
- **Twitter/X:** [@Eternalknigh](https://x.com/Eternalknigh)
- **LinkedIn:** [Aman Kumar](https://linkedin.com/in/aman-kumar-537a73296)

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [React Hooks API](https://react.dev/reference/react)
