## Purpose

This repository is a tiny static single-page site (Spanish) that displays short children's reading snippets. These instructions give an AI coding agent the minimal, actionable knowledge to be productive editing, testing, or extending the project.

## Quick facts

- Project type: static HTML/CSS/JavaScript (no build system, no package.json).
- Entry point: `index.html`.
- Primary files: `index.html`, `script.js`, `style.css`.
- Runtime: any static file server or the filesystem for local development; no server-side components.

## What the code does (big picture)

- `index.html` contains the UI shell and includes `style.css` and `script.js`. The page has a single button (id "btnLeer") and a display area (id "frase").
- `script.js` currently loads phrases from `data/frases.json` when present and falls back to an inline list of template-literal strings for backwards compatibility. When JSON is present it expects objects with `title`, `text`, optional `emoji` and optional `image` fields. The handler picks a random entry and renders title, emoji, stanza lines and (if present) provides an image download link.
- `style.css` contains visual styling and imports the Google font used by the app.

## Code patterns & conventions (project-specific)

- New phrase storage: `data/frases.json` is an array of objects. Each object should use this shape (fields marked optional):

	- `id` (string): short machine-friendly id (e.g., "gato-curioso").
	- `title` (string): human title, e.g., "El gato curioso".
	- `text` (string): stanza lines separated by `\n`.
	- `emoji` (string, optional): emoji prefix, e.g., "🐱".
	- `image` (string, optional): relative path to a downloadable image (e.g., "images/gato.png").

- Backwards compatibility: if `data/frases.json` cannot be fetched or is missing, `script.js` uses the legacy inline array (`inlineFrases`) and renders the original multi-line strings into the `frase` element.
- Rendering: `innerHTML` is used intentionally to support emoji, simple bold title rendering, and an image download link. Do not insert untrusted user input into the `frase` element without sanitization.

## Developer workflows (how to run/test locally)

1) Quick check: open `index.html` directly in a browser (double-click or Live Server extension).
2) Recommended (realistic origin): run a static server from the repo root in PowerShell:

```powershell
# from repository root
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

3) Debugging: use browser DevTools. Put a breakpoint inside the click handler in `script.js` or inspect the `frasesData` / `inlineFrases` variables from the console.

## Tests, CI, and builds

- There are no automated tests or CI configured. Validate changes manually in a browser.

## Safe edit checklist for agents

- Keep files encoded in UTF-8 and preserve emoji and Spanish accents.
- When adding phrases to `data/frases.json`, follow the schema above. Use `\n` inside `text` to separate stanza lines.
- If you change rendering from `innerHTML` to `textContent`, remove or transform inline bold markers because `textContent` won't render them; consider a small markdown-to-HTML sanitizer if you need lightweight formatting safely.
- When adding image files, place them under an `images/` folder and reference them with a relative path in `image`. The page will render a "Descargar dibujo" link if `image` is present.

## Integration points & extension notes

- External assets: `style.css` imports Google Fonts over the network; offline rendering will fallback to the system sans-serif.
- If you need advanced localization or many phrases, consider splitting `data/frases.json` into per-language files (e.g., `data/frases.es.json`) and adding a small loader in `script.js`.

## Files to inspect for context

- `index.html` — page structure and element ids used by the script.
- `script.js` — loads `data/frases.json` when available and falls back to `inlineFrases`.
- `data/frases.json` — new canonical storage for phrase objects.
- `style.css` — styling and font import.

I migrated the existing inline phrases into `data/frases.json` (converted ~40 items) and added an `images/` folder with 3 SVG placeholders. A few sample objects in `data/frases.json` point to those images (e.g., `images/gato-curioso.svg`, `images/perro-firulais.svg`, `images/sol-brillante.svg`).

If you'd like further edits (rename image files, change image format to PNG, or adjust any titles), tell me which items to change.
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
