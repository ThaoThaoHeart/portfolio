# Portfolio - "Transit Line"

A personal portfolio built with React + Vite, designed as a transit map: each
section of the page is a **station** on one continuous line, the nav is a
**route map** that fills in as you scroll, the hero is a **split-flap
departures board**, and projects are **platform tickets**.

## Run it locally

```bash
npm install
npm run dev       # dev server at http://localhost:5173 (hot reload)
npm run build     # production build → dist/
npm run preview   # serve the built dist/ locally to double-check it
```

Requires Node 20+.

## Make it yours

Nearly everything lives in **`src/data/profile.js`**:

| What | Where in `profile.js` |
| --- | --- |
| Name, initials, location, tagline | `profile` |
| Words on the split-flap board | `profile.roles` (keep each ≤ 18 characters) |
| GitHub / LinkedIn / email / résumé | `profile.links` (empty string hides a button) |
| About text + fact cards | `profile.about`, `profile.facts` |
| Projects | `projects` array |
| Empty "reserved" project slots | `reservedPlatforms` |
| Skills (drawn as transit lines) | `skillLines` (`learning: true` = dashed stop) |
| Experience / education / certs | `journey` |

Also update the `<title>` and `<meta>` tags in **`index.html`** (these are
what Google and link previews show).

### Adding a project

1. Put a screenshot in `public/projects/` (≈1200×600 looks best).
2. Add an entry to `projects`:

```js
{
  title: 'Weather Dashboard',
  summary: 'What it does, your role, and the result.',
  status: 'shipped',             // 'shipped' | 'building' | 'planned'
  tech: ['React', 'AWS Lambda'],
  liveUrl: 'https://…',          // optional
  repoUrl: 'https://github.com/…',// optional
  image: '/projects/weather.png', // optional - a generated map is drawn if empty
},
```

### Résumé

Drop `resume.pdf` into `public/` and set `links.resume: '/resume.pdf'`.

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
