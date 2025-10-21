## Purpose

This repository is a tiny static single-page site (Spanish) that displays short children's reading snippets. These instructions give an AI coding agent the minimal, actionable knowledge to be productive editing, testing, or extending the project.

## Quick facts

- Project type: static HTML/CSS/JavaScript (no build system, no package.json).
- Entry point: `index.html`.
- Primary files: `index.html`, `script.js`, `style.css`.
- Runtime: any static file server or the filesystem for local development; no server-side components.

## What the code does (big picture)

- `index.html` contains the UI shell and includes `style.css` and `script.js`. The page has a single button (id "btnLeer") and a display area (id "frase").
- `script.js` holds a single top-level array called `frases` (multi-line template literals) and attaches a click handler to the button with id "btnLeer". The handler picks a random entry and writes it into the element with id "frase" using `innerHTML`.
- `style.css` contains visual styling and imports the Google font used by the app.

## Code patterns & conventions (project-specific)

- Phrase storage: multi-line template literals inside the `frases` array. Keep backtick-delimited template literals when adding new phrases. Pattern: emoji + bold-like title markers (`** Title **`) + blank line + stanza lines.
- Rendering: `innerHTML` is used intentionally to allow emoji and simple inline bold markers. The project does not sanitize strings in the `frase` element; do not insert untrusted input into that element.
- Randomization: selection uses `Math.floor(Math.random() * frases.length)`. If you change it, guard for empty arrays to avoid writing undefined.

## Developer workflows (how to run/test locally)

1) Quick check: open `index.html` directly in a browser (double-click or Live Server extension).
2) Recommended (realistic origin): run a static server from the repo root in PowerShell:

```powershell
# from repository root
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

3) Debugging: use browser DevTools. Put a breakpoint inside the click handler in `script.js` or inspect the `frases` array from the console.

## Tests, CI, and builds

- There are no automated tests or CI configured. Validate changes manually in a browser.

## Safe edit checklist for agents

- Keep files encoded in UTF-8 and preserve emoji and Spanish accents.
- When adding phrases: use backtick template literals and keep stanza spacing consistent with existing entries.
- If switching from `innerHTML` to `textContent`, remove or transform inline bold markers (`**`) because `textContent` won't render them; consider a small markdown-to-HTML sanitizer if you need lightweight formatting safely.
- Always check `frases.length > 0` before computing a random index.

## Integration points & extension notes

- External assets: `style.css` imports Google Fonts over the network; offline rendering will fallback to the system sans-serif.
- If phrase content grows or needs localization, migrate phrases into a static `data/frases.json` and fetch them at runtime from `script.js`.

## Files to inspect for context

- `index.html` — page structure and element ids used by the script.
- `script.js` — single source of truth for phrase content and the click handler; this is the file to edit for behavior changes.
- `style.css` — styling and font import.

If you'd like, I can prepare a small PR that moves `frases` to `data/frases.json` and updates `script.js` to fetch and render them (includes a simple guard for empty arrays and a local dev server instruction). Let me know and I'll implement it.
## Purpose

This repository is a tiny static single-page site (Spanish) that displays short children's reading snippets. These instructions give an AI coding agent the minimal, actionable knowledge to be productive editing, testing, or extending the project.

## Quick facts

- Project type: static HTML/CSS/JavaScript (no build system, no package.json).  
- Entry point: `index.html`.  
- Primary files: `index.html`, `script.js`, `style.css`.
- Runtime: any static file server or the filesystem for local development; no server-side components.

## What the code does (big picture)

 `index.html` contains the UI shell and includes `style.css` and `script.js`.  The page has a single button (id "btnLeer") and a display area "frase".
- `script.js` exports a single top-level array `frases` (template literal strings) and attaches a click handler to the element with id "btnLeer" that picks a random entry from `frases` and writes it into the element "frase" using `innerHTML`.
- `style.css` contains visual styling and imports the Google font used across the app.

 Rendering: `innerHTML` is used intentionally to allow emoji and simple inline HTML/Markdown-like bold `**` (the strings are not sanitized). Avoid inserting untrusted user input into the element with id "frase" without sanitization.

- Phrase storage: multi-line template literals inside the `frases` array. Keep the same formatting style when adding new items (backtick-delimited template literals). Example pattern: a leading emoji, two asterisks for titles (e.g. `** El gato curioso **`), then blank lines and the stanza text.
- Rendering: `innerHTML` is used intentionally to allow emoji and simple inline HTML/Markdown-like bold `**` (the strings are not sanitized). Avoid inserting untrusted user input into the element with id "frase" without sanitization.
 3) Debugging: use browser DevTools Console. `script.js` attaches a click listener on the element with id "btnLeer"; set breakpoints inside the handler or inspect `frases` from the console.
- Randomization: the selection uses `Math.floor(Math.random() * frases.length)`. When changing selection logic, preserve the safe bounds checks (e.g., guard for empty arrays).

## Developer workflows (how to run/test locally)

1) Open `index.html` directly in a browser for quick checks (double-click or use editor Live Server).  
2) Or run a simple static server in PowerShell for a more realistic origin (recommended):

```powershell
# from repository root
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

3) Debugging: use browser DevTools Console. `script.js` attaches a click listener on the element with id "btnLeer"; set breakpoints inside the handler or inspect `frases` from the console.

## Tests, CI, and builds

- There are no automated tests or CI configured in this repo. Changes are small and should be validated manually in a browser.

## Safe edit checklist for agents

- Keep file encoding UTF-8. Preserve emoji and Spanish accents.  
- When adding phrases, use template literals (backticks) and keep blank-line spacing between stanzas as existing entries do.  
- If you change the rendering method from `innerHTML` to `textContent`, adjust formatting (bold markers `**` will not render) or implement a small markdown-to-html sanitizing step.
- Validate `frases.length > 0` before selecting a random index to avoid NaN or undefined writes.

## Integration points & future extension notes (discoverable)

- External assets: `style.css` imports a Google Font; network availability affects rendering.  
- If phrases grow large or require translations, move them to a static `data/frases.json` and fetch at runtime. This repository currently keeps them inline in `script.js`.

## Files to inspect for context

- `index.html` — page structure and IDs used by the script.  
- `script.js` — single source of truth for phrases and the click handler; change here for behavior updates.  
- `style.css` — styling and font import.

If anything here is unclear or you'd like me to include a short example PR that externalizes the phrases into `data/frases.json` and updates the loader, tell me and I will prepare it.
