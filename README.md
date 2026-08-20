# ICEAS-2027 — Conference Website

Official website for the **International Conference on Intelligent Computing, Explainable AI and Autonomous System (ICEAS) 2027**, hosted by the University of Engineering and Management (UEM), Jaipur.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Local Development](#local-development)
- [Deployment Strategy](#deployment-strategy)

---

## Project Overview

ICEAS-2027 is a static single-page application (SPA) built with React. It provides conference information across several pages including the home page, scope, keynote speakers, organising team, registration, and publication details.

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | [React 18](https://react.dev/) with JSX |
| Routing | [React Router DOM v6](https://reactrouter.com/) |
| Styling | [Tailwind CSS v3](https://tailwindcss.com/), [SCSS](https://sass-lang.com/) |
| Component Library | [Chakra UI v2](https://chakra-ui.com/) |
| Animations | [GSAP 3](https://gsap.com/), [Framer Motion 11](https://www.framer-motion.com/) |
| Image Delivery | [ImageKit](https://imagekit.io/) via `@imagekit/react` |
| Carousel | [react-slick](https://react-slick.neostack.com/), [react-slideshow-image](https://www.npmjs.com/package/react-slideshow-image) |
| Build Tool | [Vite 5](https://vitejs.dev/) with `@vitejs/plugin-react-swc` |
| Linting | ESLint with `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` |
| Package Manager | npm |
| Hosting | [Firebase Hosting](https://firebase.google.com/products/hosting) |
| CI/CD | GitHub Actions |

---

## Project Structure

```
ICEAS-2027/
├── .github/
│   ├── workflows/
│   │   └── build_and_deploy.yml   # CI/CD pipeline (build → deploy to Firebase)
│   └── dependabot.yml             # Automated dependency updates
├── src/
│   ├── assets/
│   │   └── PNG/                   # Local static assets (images, icons, SVGs)
│   ├── components/
│   │   ├── ImageSlider.jsx                      # Reusable image carousel component
│   │   ├── KeynoteSpeaker_card_component.jsx    # Card for keynote speaker entries
│   │   └── OrganisingTeam_card_component.jsx   # Card for organising team entries
│   ├── pages/
│   │   ├── Home.jsx               # Landing page with hero, image slider, and schedule table
│   │   ├── Scope.jsx              # Conference scope and topics
│   │   ├── KeynoteSpeaker.jsx     # Keynote speakers listing
│   │   ├── organisingTeam.jsx     # Organising team listing
│   │   ├── Registration.jsx       # Registration information and fees
│   │   ├── Publication.jsx        # Publication guidelines
│   │   └── ContactUs.jsx         # Contact details (also rendered in App.jsx footer)
│   ├── App.jsx                    # Root component — Banner, Navbar, Routes, ContactUs footer
│   ├── main.jsx                   # React entry point
│   └── main.scss                  # Global SCSS styles
├── index.html                     # Vite HTML entry point
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
├── .eslintrc.cjs                  # ESLint rules
├── firebase.json                  # Firebase Hosting configuration
├── .firebaserc                    # Firebase project alias (iceas-2027)
└── package.json                   # Dependencies and npm scripts
```

### Page Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/scope` | Scope |
| `/Keynote_Speaker` | Keynote Speaker |
| `/Organising_team` | Organising Team |
| `/Registration` | Registration |
| `/Publication` | Publication |
| `#ContactUs` | Contact Us (footer anchor) |

---

## Local Development

### Prerequisites

- Node.js (v18 or later recommended)
- npm

### Setup

```bash
# Install dependencies
npm ci

# Start the development server (hot-reload at http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview

# Run the linter
npm run lint
```

---

## Deployment Strategy

Deployments are fully automated via **GitHub Actions** (`.github/workflows/build_and_deploy.yml`).

### Workflow — triggered on push to `main`

```
push to main
    │
    ▼
[Build job]
    ├── Checkout repository
    ├── npm ci
    ├── npm run build          → outputs to ./dist/
    └── Upload ./dist/ as artifact
    │
    ▼
[Deploy job]  (depends on Build)
    ├── Checkout repository
    ├── Download ./dist/ artifact
    └── Deploy to Firebase Hosting (live channel)
```

### Firebase Hosting

| Setting | Value |
|---|---|
| Firebase project | `iceas-2027` |
| Public directory | `dist/` |
| SPA rewrites | All paths (`**`) rewrite to `/index.html` |

### Required GitHub Secrets

| Secret | Purpose |
|---|---|
| `FIREBASE_SERVICE_ACCOUNT` | Firebase service account JSON for deployment auth |
| `FIREBASE_PROJECT_ID` | Firebase project ID (`iceas-2027`) |