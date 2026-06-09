# Plan B Training

> A lightweight, offline-first workout planner built with vanilla web technologies and packaged as an Android app.

---

## Overview

**Plan B Training** is a personal workout tracking app that lets users manage up to 5 independent workout routines (A through E). Each routine holds a list of exercises with their corresponding weights and reps. All data is persisted locally in the browser via `localStorage`, meaning the app works fully offline — no backend, no account required.

The project was independently packaged and configured as an Android app and is **currently in closed testing on Google Play**, pending approval for release on the Play Store. The entire process of packaging and configuring it as an Android app was carried out independently.

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
| Android    | Packaged independently for Play Store|

---

## Project Structure

```
b-plan-training/
├── index.html            # App shell and workout section markup
├── script.js             # All app logic (CRUD, localStorage, DOM manipulation)
├── styles/
│   ├── style.css         # Base styles
│   └── media-queries.css # Responsive breakpoints (tablet / desktop)
├── images/               # App icons, button icons, header background
└── fonts/                # Allura custom font (local)
```

---

## How It Works

1. On load, `onLoadExercises()` reads all five workouts from `localStorage` and renders them into their respective tables.
2. Each "Add" button triggers `addExercise()`, which appends a new row to the DOM and updates `localStorage`.
3. The edit flow (`editExercise` → `saveExercise`) replaces table cells with `<textarea>` elements and writes changes back to `localStorage` on save.
4. Deleting a row (`delExercise`) removes it from the DOM, splices it from the in-memory array, and re-syncs `localStorage` — including re-indexing the remaining rows.

---

## Running Locally

No build step or package manager required.

```bash
git clone https://github.com/your-username/b-plan-training.git
cd b-plan-training
# open index.html in any modern browser
```

Or serve it with any static server:

```bash
npx serve .
```

---

## Android Distribution

The app was independently packaged as an Android application and submitted to the Google Play Store. It is currently in **closed testing**, pending approval for public release on the Play Store.

---

## License

[MIT](LICENSE)

---

Developed by [Bruna Pessoa](https://github.com/your-username) — Front-end Developer
