# Plan B Training

> A lightweight, offline-first workout planner built with vanilla web technologies and packaged as an Android app.

---

## Overview

**Plan B Training** is a personal workout tracking app that lets users manage up to 5 independent workout routines (A through E). Each routine holds a list of exercises with their corresponding weights and reps. All data is persisted locally in the browser via `localStorage`, meaning the app works fully offline — no backend, no account required.

The app was independently packaged as an Android application and is **currently in closed testing on Google Play**, pending approval for public release on the Play Store.

---

## Features

- 5 independent workout tables (Workout A – E)
- Add exercises with name, weight, and reps
- Inline edit and delete for each exercise entry
- Data persistence via `localStorage` (survives page refresh and app restart)
- Sticky header navigation
- Fully responsive layout — mobile, tablet, and desktop breakpoints
- No frameworks, no dependencies, no build step

---

## Tech Stack

| Layer      | Technology                          |
|------------|--------------------------------------|
| Markup     | HTML5                                |
| Styling    | CSS3 — Flexbox, Grid, Media Queries  |
| Logic      | Vanilla JavaScript (ES6)             |
| Storage    | Web Storage API (`localStorage`)     |
| Icons      | Font Awesome 6.5                     |
| Typography | Google Fonts — Allura                |

---

## Running Locally

No build step or package manager required.

```bash
git clone https://github.com/Brunapessoa/b-plan-training.git
cd b-plan-training
# open index.html in any modern browser
```

---

## License

[MIT](LICENSE)
