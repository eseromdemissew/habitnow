<div align="center">

# ✅ HabitNow

### Daily Routine Planner — plan your day, build your habits, protect your focus.

The official website for **HabitNow**, an Android app for routines, habits and focus.

[![TanStack Start](https://img.shields.io/badge/TanStack_Start-v1-7C3AED?style=for-the-badge)](https://tanstack.com/start)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Platform](https://img.shields.io/badge/Platform-Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)](#-download--apk)

**Developed by [Eserom Demissew](https://eserom.vercel.app)**

</div>

---

## 📖 Table of contents

- [About](#-about)
- [Features](#-features)
- [Design](#-design)
- [Tech stack](#-tech-stack)
- [Getting started](#-getting-started)
- [Project structure](#-project-structure)
- [Configuration](#-configuration)
- [Download & APK](#-download--apk)
- [Scripts](#-scripts)
- [Launch checklist](#-launch-checklist)
- [Developer](#-developer)

---

## 🌟 About

HabitNow helps people turn intentions into daily routines. This repository contains the marketing and download website: it introduces the app, explains its features, collects early-access signups and hosts the Android APK download.

## ✨ Features

| Area | What it does |
| --- | --- |
| 🏠 **Home** | Interactive checklist demo, product chapters, full feature catalog and FAQ |
| 📲 **Download** | Detects whether a real APK is published before offering it, with step-by-step install help |
| 💌 **Early access** | Waitlist form stored securely in the backend (visitors can submit, never read) |
| 🗺️ **Roadmap** | What is shipped, in progress and planned |
| 🛟 **Support** | Help topics and a contact form |
| 🔍 **Command search** | Quick keyboard navigation across the site |
| 🎨 **Themes** | System, Light, Dark and AMOLED |
| ⚖️ **Legal** | Privacy policy and terms of use |
| 🔎 **SEO** | Unique title, description, Open Graph and Twitter tags on every page |

## 🎨 Design

A custom **“Glass Clay”** design system: violet and lavender with mint accents, soft clay surfaces, frosted glass controls, and **Sora + Inter** typography. All colors are semantic tokens in `src/styles.css`, so every theme stays consistent.

## 🧰 Tech stack

- **Framework:** TanStack Start v1 (React 19, SSR, server functions)
- **Build:** Vite 7
- **Styling:** Tailwind CSS v4 + shadcn/ui components
- **Animation:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Backend:** Lovable Cloud (database with row-level security)
- **Testing:** Vitest + Testing Library
- **Runtime:** Edge (Cloudflare Workers)

## 🚀 Getting started

Requirements: **Node.js 20+** (or Bun).

```sh
git clone <this-repository-url>
cd habitnow
npm install
npm run dev
```

Open <http://localhost:8080>.

## 🗂️ Project structure

```text
src/
├── assets/            Images used by the site
├── components/
│   ├── brand/         Logo and progress mark
│   ├── layout/        Nav, Footer, Page shell, command search
│   ├── waitlist/      Waitlist form, provider, download button
│   └── ui/            shadcn/ui primitives
├── content/           Site values, features, FAQ (edit copy here)
├── hooks/             APK availability check, mobile detection
├── lib/               Theme provider, utilities
├── routes/            One file per page (/, /download, /roadmap, ...)
└── styles.css         Design tokens and global styles
public/
└── downloads/         Place habitnow.apk here
```

## ⚙️ Configuration

All site-wide values live in **`src/content/site.ts`**:

```ts
export const site = {
  name: "HabitNow",
  tagline: "Daily Routine Planner",
  siteUrl: "",       // e.g. "https://habitnow.app" — enables canonical URLs
  contactEmail: "",  // shown on support and legal pages
  playStoreUrl: "",  // when set, download buttons go to Google Play
  socials: { x: "", instagram: "", youtube: "", linkedin: "" }, // empty = hidden
};
```

## 📦 Download & APK

1. Build a **release-signed** APK of the Android app.
2. Save it as **`public/downloads/habitnow.apk`**.
3. Deploy. The Download page verifies the file exists and then shows the download button automatically — no broken links if it is missing.

Requires **Android 8.0+**. Users may need to allow “Install unknown apps” for their browser; the Download page explains this.

## 📜 Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Lint the code |
| `npm run format` | Format with Prettier |
| `npm test` | Run tests |

## ✅ Launch checklist

- [ ] Add the signed APK to `public/downloads/habitnow.apk`
- [ ] Set `siteUrl` and `contactEmail` in `src/content/site.ts`
- [ ] Add the Play Store URL when the listing is live
- [ ] Review privacy policy and terms
- [ ] Test installation on a real Android phone

## 👨‍💻 Developer

<div align="center">

### Eserom Demissew

Designer & developer of HabitNow.

[![Portfolio](https://img.shields.io/badge/Portfolio-eserom.vercel.app-7C3AED?style=for-the-badge&logo=vercel&logoColor=white)](https://eserom.vercel.app)

*Want to see more work or get in touch? Visit **[eserom.vercel.app](https://eserom.vercel.app)**.*

</div>

---

<div align="center">

Made with 💜 by [Eserom Demissew](https://eserom.vercel.app) · © 2026 HabitNow

</div>
