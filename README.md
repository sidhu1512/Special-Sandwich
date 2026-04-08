# SSS — Signature Sandwich by Siddharth

A static, dark-mode landing page documenting the exact build process behind a precision-engineered egg sandwich. No frameworks. No dependencies. Just HTML, CSS, and JS.

**[→ View Live](https://sidhu1512.github.io/Special-Sandwich/)**

---

## What This Is

A single-page site that breaks down a repeatable sandwich recipe into five mechanical steps — from cracking eggs to the final diagonal cut. Built with real kitchen footage (video + photo) shot on a phone.

## Tech Stack

| Layer    | Tool                          |
|----------|-------------------------------|
| Markup   | Semantic HTML5                |
| Styling  | Vanilla CSS (custom properties, Grid, Flexbox) |
| Script   | Vanilla JS (IntersectionObserver for scroll reveals) |
| Fonts    | Outfit, Inter, JetBrains Mono (Google Fonts) |
| Hosting  | GitHub Pages                  |

## Project Structure

```
├── index.html          # Single-page layout
├── style.css           # Design system with :root tokens
├── script.js           # Scroll-reveal animations
├── asset/
│   ├── hero-video.mp4  # Full-screen background video
│   ├── food-shot.jpeg  # Ingredients overhead shot
│   ├── b-roll-1.mp4    # Cooking process footage
│   └── b-roll-2.mp4    # Plating footage
└── README.md
```

## Sections

1. **Hero** — Looping video background with dark overlay. Title and tagline.
2. **The Arsenal** — CSS Grid layout. Ingredient photo + itemized list with quantities.
3. **The Architecture** — Five steps: The Bind, The Inversion, Asymmetrical Flavoring, The Dusting, The Fold. Two steps use b-roll video backgrounds.

## Design Decisions

- **Dark mode only.** `#0a0a0a` base, `#c8a45a` gold accent. No light mode toggle — the food photography looks better against black.
- **No build tools.** Zero dependencies. Open `index.html` in a browser and it works.
- **Videos are `autoplay muted loop playsinline`.** Guaranteed silent autoplay on mobile and desktop.
- **Scroll reveals** via `IntersectionObserver` with progressive enhancement fallback.

## Run Locally

```bash
# Any static server works
npx serve .
# or
python -m http.server 8000
```

## License

MIT

---

Built by [Siddharth](https://github.com/sidhu1512)
