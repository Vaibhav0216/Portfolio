# Portfolio Website — Architecture Design

**Author:** Vaibhav Kshirsagar
**Date:** 2026-11-27
**Status:** Draft — Pending Approval

---

## 1. Overview

A single-page portfolio website for a Senior Embedded Systems Engineer. The site showcases professional experience, technical skills, projects, and contact information. It serves multiple audiences: recruiters, potential consulting clients, and the embedded systems community.

**Key requirements:**

- Clean, authentic design — no gimmicks
- Light mode and dark mode with system preference detection
- Content derived from resume
- Static site — free hosting, fast performance
- Easy to update content without touching component code

---

## 2. Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | Next.js 14 (App Router) | Component architecture, static export, routing |
| Styling | Tailwind CSS | Utility-first CSS, built-in dark mode support |
| Animations | Framer Motion | Subtle scroll animations, section transitions |
| Icons | Lucide React | Clean, consistent icon set (lightweight) |
| Theme | next-themes | Dark/light mode toggle with system preference detection |
| Fonts | Google Fonts (Inter + JetBrains Mono) | Inter for body, JetBrains Mono for code/tech accents |
| Deployment | Vercel (or GitHub Pages via static export) | Free hosting, automatic deploys from git |
| Language | TypeScript | Type safety |

---

## 3. Site Structure

Single-page application with smooth scroll navigation:

```
/
├── Hero Section          — Name, title, one-liner, CTA buttons (Resume, Contact)
├── About Section         — Professional summary, key stats
├── Skills Section        — Technical skills organized by category
├── Experience Section    — Timeline of work experience with expandable project details
├── Projects Section      — Highlighted projects as cards with tech tags
├── Education Section     — Education + Certifications
├── Contact Section       — Email, GitHub, LinkedIn, location
└── Footer               — Copyright, theme toggle
```

---

## 4. File Structure

```
website/
├── public/
│   ├── resume.pdf                    # Downloadable resume
│   └── images/                       # Profile photo, project screenshots
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout (fonts, theme provider, metadata)
│   │   ├── page.tsx                  # Main page composing all sections
│   │   └── globals.css               # Tailwind directives + custom CSS variables
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Fixed top nav with section links + theme toggle
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Education.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── ThemeToggle.tsx        # Dark/light mode switch
│   │       ├── SectionHeading.tsx     # Reusable section title component
│   │       ├── ProjectCard.tsx
│   │       ├── SkillBadge.tsx
│   │       └── TimelineItem.tsx
│   ├── data/
│   │   ├── personal.ts               # Name, title, links, summary
│   │   ├── skills.ts                 # Skills organized by category
│   │   ├── experience.ts             # Work experience + project details
│   │   ├── projects.ts               # Highlighted projects
│   │   └── education.ts              # Education + certifications
│   └── lib/
│       └── utils.ts                  # Utility functions (cn helper, etc.)
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 5. Visual Design

### Philosophy

"Engineer's clarity" — clean, structured, information-dense without clutter. Monospace accents for code/tech terms, clean sans-serif for body text. Technical character without gimmicky circuit board motifs.

### Color Palette

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Background | `#FFFFFF` | `#0f172a` (deep navy) |
| Text | `#1a1a2e` | `#e2e8f0` |
| Accent | `#2563eb` (blue) | `#3b82f6` (lighter blue) |
| Card BG | `#f8fafc` | `#1e293b` |
| Border | `#e2e8f0` | `#334155` |

### Typography

- **Body:** Inter (sans-serif) — clean, highly readable
- **Code/Tech terms:** JetBrains Mono (monospace) — used for skill badges, section labels, tech tags

### Layout

- Max-width container: 1200px, centered
- Generous whitespace between sections
- Clear visual hierarchy via heading sizes and weight
- Cards: subtle border, slight shadow on hover, 8px rounded corners

### Animations

- Fade-in-up on scroll for each section (Framer Motion)
- Subtle hover effects on cards and buttons
- No flashy or distracting animations
- Optional: terminal-style typing effect on hero subtitle

### Navigation

- Fixed top navbar with backdrop blur on scroll
- Section links with smooth scroll behavior
- Theme toggle (sun/moon icon) on the right side
- Mobile: hamburger menu with slide-out drawer

---

## 6. Dark / Light Mode Implementation

- Library: `next-themes` with `attribute="class"` strategy
- Detects system preference (`prefers-color-scheme`) on first visit
- Toggle button in navbar with sun/moon icon
- Preference persisted in `localStorage`
- All styles use Tailwind's `dark:` variant
- No flash of unstyled content (SSR-safe with `next-themes`)

---

## 7. Section Details

### 7.1 Hero

- Large name heading (h1)
- Subtitle: "Senior Embedded Systems Engineer"
- One-liner from professional summary
- Two CTA buttons: "Download Resume" (links to PDF) + "Get in Touch" (scrolls to contact)
- Location: Pune, India

### 7.2 About

- Professional summary (2-3 sentences, adapted from resume)
- Key stats: "2.5+ years experience", "70+ devices deployed", "5 industrial customers"
- Profile photo placeholder (optional)

### 7.3 Skills

- Grid layout of skill categories
- Categories from resume: Languages, SOC/Embedded, Linux BSP, Hardware Interfaces, Display/Touch, Protocols, Tools & DevOps, Cloud/IoT, Security
- Each category is a card with skill badges inside
- Badges use monospace font

### 7.4 Experience

- Vertical timeline layout
- Each entry: company name, role, dates, location
- Projects nested under each company as expandable/collapsible cards
- Each project shows: name, tech tags, bullet points of key accomplishments
- Key metrics highlighted (e.g., "70+ devices", "80% → 90% success rate")

### 7.5 Projects

- Card grid (2-3 columns on desktop, 1 on mobile)
- Each card: project name, short description (2-3 lines), tech stack tags, key metric
- Projects to highlight:
  1. Industrial Modbus-to-MQTT IoT Gateway
  2. Multi-Tenant IoT Cloud Platform
  3. STM32MP157 Industrial IoT Gateway (Linux BSP)
  4. Firmware Code-Generation Tool
  5. GPIO & EXTI Driver (Bare-Metal)
  6. Embedded Linux IPC Gateway

### 7.6 Education

- Education entries with degree, institution, year, grade
- Certifications listed below

### 7.7 Contact

- Email, GitHub link, location
- Simple layout — no contact form in v1
- Social links with icons

---

## 8. Data Architecture

All content lives in `src/data/` as typed TypeScript objects. Components import and render this data. This separation means content updates never require touching component code.

Example structure:

```typescript
// src/data/personal.ts
export const personal = {
  name: "Vaibhav Kshirsagar",
  title: "Senior Embedded Systems Engineer",
  email: "maulikshirsagarvk18@gmail.com",
  github: "https://github.com/Vaibhav0216",
  location: "Pune, India",
  phone: "+91-74982 36616",
  summary: "Embedded Systems Engineer with 2.5+ years..."
};
```

---

## 9. SEO & Performance

- Semantic HTML elements (`<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`)
- Open Graph meta tags for social sharing (title, description, image)
- Static export → perfect Lighthouse scores
- Lazy-loaded images with Next.js `<Image>` component
- Proper heading hierarchy: single h1, h2 per section, h3 for subsections
- `robots.txt` and `sitemap.xml` generation

---

## 10. Responsive Design

| Breakpoint | Layout |
|-----------|--------|
| Mobile (< 640px) | Single column, hamburger nav, stacked cards |
| Tablet (640px–1024px) | Two-column grids, condensed nav |
| Desktop (> 1024px) | Full layout, fixed nav, 3-column project grid |

---

## 11. Deployment

- **Primary:** Vercel (zero-config for Next.js, free tier)
- **Alternative:** GitHub Pages via `next export` static build
- Automatic deploys on git push to main branch
- Custom domain support available on both platforms
