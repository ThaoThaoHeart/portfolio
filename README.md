# Jenny Hoang · Portfolio

A personal portfolio site built around a transit-map metaphor: each section
of the page is a **station** on one continuous line, the nav is a **route
map** that fills in as you scroll, the hero is a **split-flap departures
board**, and projects are **platform tickets**.

## Tech stack

React 19, Vite, and plain CSS (variables for theming, no framework).

## Run it locally

```bash
npm install
npm run dev       # dev server at http://localhost:5173 (hot reload)
npm run build     # production build → dist/
npm run preview   # serve the built dist/ locally to double-check it
```

Requires Node 20+.

## Project structure

```
public/            copied as-is into dist/ (favicon, 404.html, robots.txt, images)
src/
  data/profile.js  ← your content
  components/      one file per section (Hero, About, Projects, …)
  hooks/           theme, active-section tracking, reduced-motion
  styles/global.css  all styling; colors are CSS variables at the top
index.html         page shell + meta tags
vite.config.js     build config
```
