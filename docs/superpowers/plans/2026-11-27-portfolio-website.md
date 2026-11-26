# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page portfolio website for Vaibhav Kshirsagar (Senior Embedded Systems Engineer) with light/dark mode, clean design, and all content driven from data files.

**Architecture:** Next.js 14 App Router with static export. Tailwind CSS for styling with `dark:` variant for theming. Content separated into TypeScript data files. Framer Motion for subtle scroll animations. Single page with section-based navigation.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Lucide React, next-themes

**Spec:** `docs/architecture.md`

## Global Constraints

- Next.js 14 with App Router (`src/` directory)
- TypeScript strict mode
- Tailwind CSS with `darkMode: "class"`
- All content in `src/data/*.ts` — no hardcoded content in components
- Fonts: Inter (body) + JetBrains Mono (code/tech accents) via `next/font/google`
- Colors — Light: bg `#FFFFFF`, text `#1a1a2e`, accent `#2563eb` | Dark: bg `#0f172a`, text `#e2e8f0`, accent `#3b82f6`
- Max-width container: 1200px centered
- Mobile-first responsive design
- Semantic HTML throughout

---

### Task 1: Project Scaffolding & Configuration

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.js`, `tailwind.config.ts`, `postcss.config.js`
- Create: `src/app/layout.tsx`, `src/app/globals.css`, `src/app/page.tsx`
- Create: `src/lib/utils.ts`
- Copy: `Senior_Embedded_System_Engineer.pdf` → `public/resume.pdf`

**Interfaces:**
- Produces: Working Next.js app shell with Tailwind configured, `cn()` utility function, root layout with Inter + JetBrains Mono fonts loaded, ThemeProvider wrapping the app

- [ ] **Step 1: Initialize Next.js project**

Run from the `Website` directory:
```bash
npx create-next-app@14 . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```
If it asks about Turbopack, say no.

- [ ] **Step 2: Install dependencies**

```bash
npm install framer-motion lucide-react next-themes clsx tailwind-merge
```

- [ ] **Step 3: Configure Tailwind with custom colors and dark mode**

Replace `tailwind.config.ts`:
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#FFFFFF",
          dark: "#0f172a",
        },
        foreground: {
          DEFAULT: "#1a1a2e",
          dark: "#e2e8f0",
        },
        accent: {
          DEFAULT: "#2563eb",
          dark: "#3b82f6",
        },
        card: {
          DEFAULT: "#f8fafc",
          dark: "#1e293b",
        },
        border: {
          DEFAULT: "#e2e8f0",
          dark: "#334155",
        },
      },
      maxWidth: {
        container: "1200px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 4: Create utility function**

Create `src/lib/utils.ts`:
```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 5: Set up globals.css**

Replace `src/app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-white text-foreground dark:bg-background-dark dark:text-foreground-dark;
    @apply transition-colors duration-300;
  }
}
```

- [ ] **Step 6: Set up root layout with fonts and ThemeProvider**

Replace `src/app/layout.tsx`:
```tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Vaibhav Kshirsagar | Senior Embedded Systems Engineer",
  description:
    "Portfolio of Vaibhav Kshirsagar — Embedded Systems Engineer with 2.5+ years of production experience in Linux BSP, FreeRTOS, IoT gateway platforms, and cloud backend systems.",
  openGraph: {
    title: "Vaibhav Kshirsagar | Senior Embedded Systems Engineer",
    description:
      "Embedded Systems Engineer specializing in Linux BSP, FreeRTOS, STM32, ESP32, and industrial IoT platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 7: Create placeholder page**

Replace `src/app/page.tsx`:
```tsx
export default function Home() {
  return (
    <main>
      <h1>Portfolio — coming together</h1>
    </main>
  );
}
```

- [ ] **Step 8: Copy resume to public/**

```bash
cp "Senior_Embedded_System_Engineer.pdf" public/resume.pdf
```

- [ ] **Step 9: Verify dev server starts**

```bash
npm run dev
```

Visit `http://localhost:3000` — confirm the page loads with no errors, fonts are applied.

- [ ] **Step 10: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js project with Tailwind, fonts, and theme provider"
```

---

### Task 2: Data Layer — All Resume Content

**Files:**
- Create: `src/data/personal.ts`
- Create: `src/data/skills.ts`
- Create: `src/data/experience.ts`
- Create: `src/data/projects.ts`
- Create: `src/data/education.ts`

**Interfaces:**
- Produces: Typed data exports — `personal`, `skillCategories`, `experiences`, `projects`, `education`, `certifications`. All section components will import from these files.

- [ ] **Step 1: Create personal data**

Create `src/data/personal.ts`:
```typescript
export const personal = {
  name: "Vaibhav Kshirsagar",
  title: "Senior Embedded Systems Engineer",
  email: "maulikshirsagarvk18@gmail.com",
  phone: "+91-74982 36616",
  github: "https://github.com/Vaibhav0216",
  location: "Pune, India",
  summary:
    "Embedded Systems Engineer with 2.5+ years of production experience spanning Linux BSP development, bare-metal and RTOS-based firmware on STM32MP1, ESP32, and STM32F4 platforms. Architected and deployed a production IoT gateway platform — from Linux kernel-level drivers to AWS cloud backend — currently serving 70+ field devices across 5 industrial customers.",
  stats: [
    { label: "Years Experience", value: "2.5+" },
    { label: "Devices Deployed", value: "70+" },
    { label: "Industrial Customers", value: "5" },
  ],
  resumeUrl: "/resume.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
```

- [ ] **Step 2: Create skills data**

Create `src/data/skills.ts`:
```typescript
export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["C", "C++", "Python", "Bash/Shell", "JavaScript", "SQL"],
  },
  {
    name: "SOC / Embedded",
    skills: [
      "STM32MP157 (Cortex-A7/M4)",
      "STM32F4 (Cortex-M4)",
      "ESP32",
      "Raspberry Pi",
      "FreeRTOS",
      "ESP-IDF",
    ],
  },
  {
    name: "Linux BSP",
    skills: [
      "Device Tree (DTS/DTSI)",
      "Device Drivers",
      "DRM/KMS",
      "GPIO chardev",
      "Yocto",
      "U-Boot",
      "Cross-compilation",
      "systemd",
    ],
  },
  {
    name: "Hardware Interfaces",
    skills: [
      "UART",
      "SPI",
      "I2C",
      "GPIO",
      "RS-485",
      "Modbus RTU/TCP",
      "ADC",
      "USB",
      "Ethernet",
    ],
  },
  {
    name: "Display / Touch",
    skills: ["MIPI-DSI", "DRM/KMS", "Linux framebuffer", "Capacitive touchscreen", "TFT LCD"],
  },
  {
    name: "Protocols",
    skills: ["MQTT (TLS 1.2)", "TCP/IP", "Modbus RTU/TCP", "HTTP/HTTPS", "WebSocket"],
  },
  {
    name: "Tools & DevOps",
    skills: ["GDB", "JTAG", "Logic Analyser", "Git", "GitLab CI/CD", "Docker", "CMake", "Make", "Jenkins"],
  },
  {
    name: "Cloud / IoT",
    skills: ["AWS IoT Core", "Lambda", "API Gateway", "DynamoDB", "RDS (PostgreSQL)", "S3"],
  },
  {
    name: "Security",
    skills: ["Secure Boot V2", "Flash Encryption", "TLS 1.2", "JWT Authentication"],
  },
];
```

- [ ] **Step 3: Create experience data**

Create `src/data/experience.ts`:
```typescript
export interface Project {
  name: string;
  tech: string[];
  highlights: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  projects: Project[];
}

export const experiences: Experience[] = [
  {
    company: "AMSET Technologies Pvt. Ltd.",
    role: "Embedded Systems Engineer",
    period: "July 2024 — Present",
    location: "Pune, India",
    projects: [
      {
        name: "Industrial Modbus-to-MQTT IoT Gateway",
        tech: ["ESP32", "FreeRTOS", "Modbus RTU", "MQTT/TLS", "C", "AWS IoT Core"],
        highlights: [
          "Designed complete gateway firmware architecture on ESP32 using FreeRTOS — structured as independent tasks communicating via queues and semaphores.",
          "Wrote a custom Modbus RTU master driver in C over UART, handling RS-485 framing, CRC validation, and exception codes.",
          "Implemented MQTT client stack with TLS 1.2 and automatic reconnection logic for stable cloud publishing to AWS IoT Core.",
          "Engineered SD-card offline data logging (16 GB, FAT32) with RTC timestamps as a circular buffer; stress-tested with 20,000+ log files.",
          "Hardened firmware security using ESP32 Secure Boot V2 + Flash Encryption.",
          "Deployed to 70+ industrial field devices for multiple customers — firmware is in active production.",
        ],
      },
      {
        name: "Multi-Tenant IoT Cloud Platform",
        tech: ["AWS IoT Core", "DynamoDB", "PostgreSQL", "Lambda (Python)", "Next.js", "WebSocket"],
        highlights: [
          "Architected full cloud backend from scratch; designed for multi-tenant isolation so each customer accesses only their own devices and dashboards.",
          "Built high-speed telemetry ingestion pipeline: AWS IoT Core Rules → Lambda → DynamoDB with GSIs optimized for time-series queries.",
          "Developed real-time alert system using WebSocket API Gateway + DynamoDB Streams with sub-1-second alert delivery.",
          "Platform currently serving 5 industrial customers with hourly, daily, monthly, and custom-range reporting.",
        ],
      },
      {
        name: "Firmware Code-Generation Tool",
        tech: ["Python", "C Code Generation", "Excel Automation"],
        highlights: [
          "Built a Python CLI tool that reads customer-provided Modbus register maps (Excel) and auto-generates production-ready C source files.",
          "Reduced new-device onboarding time from days to under an hour.",
          "Centralized all configuration in one place, cutting firmware defect rate across all deployed gateways.",
        ],
      },
      {
        name: "STM32MP157 Industrial IoT Gateway — Linux BSP & Application",
        tech: ["C", "STM32MP1", "Linux", "Device Tree", "DRM/KMS", "Yocto", "Modbus", "MQTT"],
        highlights: [
          "Brought up a dual-core STM32MP157F-DK2 (Cortex-A7 Linux + Cortex-M4 FreeRTOS) gateway; configured Device Tree for UART7 (RS-485), GPIO, and peripheral pin-muxing.",
          "Developed Linux GPIO chardev driver interface for RS-485 direction control; implemented UART7 enablement via Device Tree overlays.",
          "Integrated a MIPI-DSI TFT touchscreen display using the DRM/KMS subsystem.",
          "Implemented multi-threaded gateway application in C with pthreads — Modbus polling, MQTT publish, offline SD storage with replay.",
          "Configured Yocto build system for custom Linux image with libmodbus, mosquitto, sqlite3, cJSON, OpenSSL, and libcurl.",
          "Managed Cortex-A7 ↔ Cortex-M4 communication using OpenAMP/RPMsg for dual-core coordination.",
        ],
      },
    ],
  },
  {
    company: "Syrma SGS Technology",
    role: "Software Developer Intern",
    period: "January 2024 — May 2024",
    location: "Pune, India",
    projects: [
      {
        name: "CI/CD Pipeline Analytics & BOM Fault Detection Tools",
        tech: ["Python", "Bash", "GitLab API", "MERN", "Nexar API"],
        highlights: [
          "Automated CI/CD pipeline reporting via Bash scripting + GitLab API, saving 2+ hours/day of manual effort.",
          "Improved pipeline success rate from 80% to 90% by identifying recurring failure stages.",
          "Built a BOM fault detection tool using Nexar API; reduced 3+ hour manual BOM review to minutes.",
        ],
      },
    ],
  },
];
```

- [ ] **Step 4: Create projects data**

Create `src/data/projects.ts`:
```typescript
export interface ProjectCard {
  title: string;
  description: string;
  tech: string[];
  metric?: string;
}

export const projects: ProjectCard[] = [
  {
    title: "Industrial Modbus-to-MQTT IoT Gateway",
    description:
      "Complete ESP32 firmware architecture using FreeRTOS for industrial Modbus-to-cloud data pipeline with TLS security and offline resilience.",
    tech: ["ESP32", "FreeRTOS", "C", "MQTT", "AWS IoT Core"],
    metric: "70+ devices deployed",
  },
  {
    title: "Multi-Tenant IoT Cloud Platform",
    description:
      "Full cloud backend with multi-tenant isolation, real-time telemetry ingestion, WebSocket alerts, and custom reporting dashboards.",
    tech: ["AWS", "DynamoDB", "Lambda", "Next.js", "WebSocket"],
    metric: "5 industrial customers",
  },
  {
    title: "STM32MP157 Linux BSP Gateway",
    description:
      "Dual-core industrial gateway with Linux BSP bring-up, Device Tree configuration, DRM/KMS display integration, and Yocto custom image.",
    tech: ["STM32MP1", "Linux", "Device Tree", "Yocto", "DRM/KMS"],
    metric: "Dual Cortex-A7/M4",
  },
  {
    title: "Firmware Code-Generation Tool",
    description:
      "Python CLI that auto-generates production-ready C firmware from Modbus register maps, eliminating repetitive per-device changes.",
    tech: ["Python", "C Code Gen", "Excel"],
    metric: "Days → under 1 hour",
  },
  {
    title: "GPIO & EXTI Driver — STM32F4 (Bare-Metal)",
    description:
      "Complete GPIO peripheral driver from scratch — direct register programming without HAL, with NVIC + EXTI interrupt handling.",
    tech: ["C", "ARM Cortex-M4", "Bare-Metal"],
  },
  {
    title: "Embedded Linux IPC Gateway",
    description:
      "Multi-process IPC system using Unix Domain Sockets for decoupled sensor acquisition with I2C hardware interface and CRC validation.",
    tech: ["C", "Linux", "AF_UNIX", "I2C", "Syslog"],
  },
];
```

- [ ] **Step 5: Create education data**

Create `src/data/education.ts`:
```typescript
export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  grade: string;
}

export interface Certification {
  name: string;
  issuer: string;
  score: string;
}

export const education: Education[] = [
  {
    institution: "Government College of Engineering, Karad",
    degree: "B.Tech",
    field: "Electronics and Telecommunication",
    period: "2020 — 2024",
    location: "Karad, India",
    grade: "CGPA: 7.52",
  },
  {
    institution: "R.P. College",
    degree: "HSC",
    field: "General Science",
    period: "2020",
    location: "Dharashiv, India",
    grade: "78.77%",
  },
];

export const certifications: Certification[] = [
  { name: "Cloud Computing", issuer: "NPTEL", score: "87%" },
  { name: "Python Programming Language", issuer: "NPTEL", score: "96/100" },
];
```

- [ ] **Step 6: Commit**

```bash
git add src/data/
git commit -m "feat: add all resume content as typed data files"
```

---

### Task 3: UI Components — ThemeToggle, SectionHeading, SkillBadge

**Files:**
- Create: `src/components/ui/ThemeToggle.tsx`
- Create: `src/components/ui/SectionHeading.tsx`
- Create: `src/components/ui/SkillBadge.tsx`

**Interfaces:**
- Produces: `<ThemeToggle />` (no props), `<SectionHeading title={string} subtitle?={string} />`, `<SkillBadge name={string} />`

- [ ] **Step 1: Create ThemeToggle**

Create `src/components/ui/ThemeToggle.tsx`:
```tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
```

- [ ] **Step 2: Create SectionHeading**

Create `src/components/ui/SectionHeading.tsx`:
```tsx
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-4 w-16 h-1 bg-accent dark:bg-accent-dark mx-auto rounded-full" />
    </div>
  );
}
```

- [ ] **Step 3: Create SkillBadge**

Create `src/components/ui/SkillBadge.tsx`:
```tsx
interface SkillBadgeProps {
  name: string;
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="inline-block px-3 py-1 text-sm font-mono bg-gray-100 dark:bg-gray-800 text-foreground dark:text-foreground-dark rounded-md border border-border dark:border-border-dark">
      {name}
    </span>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/
git commit -m "feat: add ThemeToggle, SectionHeading, and SkillBadge components"
```

---

### Task 4: UI Components — ProjectCard, TimelineItem

**Files:**
- Create: `src/components/ui/ProjectCard.tsx`
- Create: `src/components/ui/TimelineItem.tsx`

**Interfaces:**
- Consumes: `SkillBadge` from Task 3
- Produces: `<ProjectCard project={ProjectCard} />`, `<TimelineItem experience={Experience} />` (with expandable project details)

- [ ] **Step 1: Create ProjectCard**

Create `src/components/ui/ProjectCard.tsx`:
```tsx
import { type ProjectCard as ProjectCardType } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectCardType;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group p-6 rounded-lg border border-border dark:border-border-dark bg-card dark:bg-card-dark hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-semibold mb-2 group-hover:text-accent dark:group-hover:text-accent-dark transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
        {project.description}
      </p>
      {project.metric && (
        <p className="text-sm font-mono text-accent dark:text-accent-dark mb-3">
          {project.metric}
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 text-xs font-mono bg-gray-100 dark:bg-gray-800 rounded border border-border dark:border-border-dark"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create TimelineItem**

Create `src/components/ui/TimelineItem.tsx`:
```tsx
"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { type Experience, type Project } from "@/data/experience";

interface TimelineItemProps {
  experience: Experience;
}

function ProjectDetail({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-3 border border-border dark:border-border-dark rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
      >
        <div>
          <h4 className="font-medium text-sm">{project.name}</h4>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-xs font-mono bg-gray-100 dark:bg-gray-800 rounded"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>
      {expanded && (
        <ul className="px-4 pb-4 space-y-2">
          {project.highlights.map((h, i) => (
            <li key={i} className="text-sm text-gray-600 dark:text-gray-400 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-accent dark:before:text-accent-dark">
              {h}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function TimelineItem({ experience }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-12 border-l-2 border-border dark:border-border-dark last:pb-0">
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent dark:bg-accent-dark border-2 border-white dark:border-background-dark" />
      <div className="mb-1">
        <h3 className="text-xl font-semibold">{experience.company}</h3>
        <p className="text-accent dark:text-accent-dark font-medium text-sm">
          {experience.role}
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-mono">
          {experience.period} · {experience.location}
        </p>
      </div>
      {experience.projects.map((project) => (
        <ProjectDetail key={project.name} project={project} />
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/ProjectCard.tsx src/components/ui/TimelineItem.tsx
git commit -m "feat: add ProjectCard and TimelineItem components"
```

---

### Task 5: Layout — Navbar & Footer

**Files:**
- Create: `src/components/layout/Navbar.tsx`
- Create: `src/components/layout/Footer.tsx`

**Interfaces:**
- Consumes: `ThemeToggle` from Task 3, `navLinks` from Task 2
- Produces: `<Navbar />`, `<Footer />`

- [ ] **Step 1: Create Navbar**

Create `src/components/layout/Navbar.tsx`:
```tsx
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navLinks } from "@/data/personal";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-background-dark/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-lg font-bold font-mono">
          VK
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm hover:text-accent dark:hover:text-accent-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile nav toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-background-dark border-t border-border dark:border-border-dark">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm hover:text-accent dark:hover:text-accent-dark transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 2: Create Footer**

Create `src/components/layout/Footer.tsx`:
```tsx
import { Github, Mail, MapPin } from "lucide-react";
import { personal } from "@/data/personal";

export function Footer() {
  return (
    <footer className="border-t border-border dark:border-border-dark py-8">
      <div className="max-w-container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-accent dark:hover:text-accent-dark transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-gray-500 hover:text-accent dark:hover:text-accent-dark transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <MapPin size={14} />
            {personal.location}
          </span>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/
git commit -m "feat: add Navbar with mobile menu and Footer"
```

---

### Task 6: Section Components — Hero, About, Skills

**Files:**
- Create: `src/components/sections/Hero.tsx`
- Create: `src/components/sections/About.tsx`
- Create: `src/components/sections/Skills.tsx`

**Interfaces:**
- Consumes: `personal` from Task 2, `skillCategories` from Task 2, `SectionHeading` and `SkillBadge` from Task 3
- Produces: `<Hero />`, `<About />`, `<Skills />`

- [ ] **Step 1: Create Hero section**

Create `src/components/sections/Hero.tsx`:
```tsx
"use client";

import { ArrowDown, Download } from "lucide-react";
import { motion } from "framer-motion";
import { personal } from "@/data/personal";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-container mx-auto text-center"
      >
        <p className="font-mono text-accent dark:text-accent-dark mb-4 text-sm">
          Hello, I&apos;m
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{personal.name}</h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6 font-mono">
          {personal.title}
        </p>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          {personal.summary}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent dark:bg-accent-dark text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            <Download size={18} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border dark:border-border-dark rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
          >
            Get in Touch
          </a>
        </div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-16"
        >
          <a href="#about" aria-label="Scroll to about">
            <ArrowDown size={24} className="mx-auto text-gray-400" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Create About section**

Create `src/components/sections/About.tsx`:
```tsx
"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personal } from "@/data/personal";

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-container mx-auto"
      >
        <SectionHeading title="About Me" />
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-center">
            {personal.summary}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {personal.stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-lg border border-border dark:border-border-dark bg-card dark:bg-card-dark"
              >
                <p className="text-3xl font-bold text-accent dark:text-accent-dark font-mono">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 3: Create Skills section**

Create `src/components/sections/Skills.tsx`:
```tsx
"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-card dark:bg-card-dark">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-container mx-auto"
      >
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies and tools I work with on a daily basis"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="p-6 rounded-lg border border-border dark:border-border-dark bg-white dark:bg-background-dark"
            >
              <h3 className="font-mono text-sm font-semibold text-accent dark:text-accent-dark mb-3">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/Hero.tsx src/components/sections/About.tsx src/components/sections/Skills.tsx
git commit -m "feat: add Hero, About, and Skills section components"
```

---

### Task 7: Section Components — Experience, Projects, Education, Contact

**Files:**
- Create: `src/components/sections/Experience.tsx`
- Create: `src/components/sections/Projects.tsx`
- Create: `src/components/sections/Education.tsx`
- Create: `src/components/sections/Contact.tsx`

**Interfaces:**
- Consumes: `SectionHeading` from Task 3, `ProjectCard` and `TimelineItem` from Task 4, all data from Task 2
- Produces: `<Experience />`, `<Projects />`, `<Education />`, `<Contact />`

- [ ] **Step 1: Create Experience section**

Create `src/components/sections/Experience.tsx`:
```tsx
"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-container mx-auto"
      >
        <SectionHeading
          title="Experience"
          subtitle="My professional journey in embedded systems engineering"
        />
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp) => (
            <TimelineItem key={exp.company} experience={exp} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Create Projects section**

Create `src/components/sections/Projects.tsx`:
```tsx
"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-card dark:bg-card-dark">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-container mx-auto"
      >
        <SectionHeading
          title="Projects"
          subtitle="Key projects I've built and shipped"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 3: Create Education section**

Create `src/components/sections/Education.tsx`:
```tsx
"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education, certifications } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-container mx-auto"
      >
        <SectionHeading title="Education & Certifications" />
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="flex gap-4 p-6 rounded-lg border border-border dark:border-border-dark bg-card dark:bg-card-dark"
            >
              <GraduationCap
                size={24}
                className="text-accent dark:text-accent-dark flex-shrink-0 mt-1"
              />
              <div>
                <h3 className="font-semibold">{edu.institution}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {edu.degree} — {edu.field}
                </p>
                <p className="text-sm font-mono text-gray-500 dark:text-gray-400 mt-1">
                  {edu.period} · {edu.location} · {edu.grade}
                </p>
              </div>
            </div>
          ))}

          <h3 className="text-lg font-semibold mt-8 mb-4">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-3 p-4 rounded-lg border border-border dark:border-border-dark bg-card dark:bg-card-dark"
              >
                <Award
                  size={20}
                  className="text-accent dark:text-accent-dark flex-shrink-0"
                />
                <div>
                  <p className="font-medium text-sm">{cert.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                    {cert.issuer} — {cert.score}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 4: Create Contact section**

Create `src/components/sections/Contact.tsx`:
```tsx
"use client";

import { motion } from "framer-motion";
import { Mail, Github, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personal } from "@/data/personal";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-card dark:bg-card-dark">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-container mx-auto text-center"
      >
        <SectionHeading
          title="Get in Touch"
          subtitle="Feel free to reach out for collaborations, opportunities, or just a conversation about embedded systems"
        />
        <div className="max-w-md mx-auto space-y-4">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center justify-center gap-3 p-4 rounded-lg border border-border dark:border-border-dark hover:bg-white dark:hover:bg-background-dark transition-colors"
          >
            <Mail size={20} className="text-accent dark:text-accent-dark" />
            <span className="text-sm">{personal.email}</span>
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 rounded-lg border border-border dark:border-border-dark hover:bg-white dark:hover:bg-background-dark transition-colors"
          >
            <Github size={20} className="text-accent dark:text-accent-dark" />
            <span className="text-sm">github.com/Vaibhav0216</span>
          </a>
          <div className="flex items-center justify-center gap-3 p-4 rounded-lg border border-border dark:border-border-dark">
            <Phone size={20} className="text-accent dark:text-accent-dark" />
            <span className="text-sm">{personal.phone}</span>
          </div>
          <div className="flex items-center justify-center gap-3 p-4 rounded-lg border border-border dark:border-border-dark">
            <MapPin size={20} className="text-accent dark:text-accent-dark" />
            <span className="text-sm">{personal.location}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/
git commit -m "feat: add Experience, Projects, Education, and Contact sections"
```

---

### Task 8: Assemble Page & Final Polish

**Files:**
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: All section components from Tasks 5-7, Navbar and Footer from Task 5

- [ ] **Step 1: Assemble the main page**

Replace `src/app/page.tsx`:
```tsx
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Run dev server and verify all sections render**

```bash
npm run dev
```

Visit `http://localhost:3000`. Verify:
- All 7 sections render with correct content
- Navbar links scroll to correct sections
- Dark/light mode toggle works
- Mobile hamburger menu works at narrow widths
- Experience timeline projects expand/collapse
- Resume download link works
- No console errors

- [ ] **Step 3: Run production build to verify static export**

```bash
npm run build
```

Verify build completes with no errors.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: assemble all sections into main page — portfolio complete"
```

---
