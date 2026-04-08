# Mission Directive: SSS Landing Page (Multi-Agent Build)

## 1. Project Overview
Build and deploy a static, premium dark-mode landing page for "SSS - Signature Sandwich by Siddharth". The site must be built with standard HTML/CSS/JS and deployed to GitHub Pages at (make a new repo for this project) https://github.com/sidhu1512.

## 2. Agent Team Roster & Responsibilities
- **Lead Orchestrator**: Reads this plan, spawns the teammates, oversees progress, and handles the final git/GitHub deployment pipeline.
- **Agent 1 (Asset Manager)**: Scans the `./asset/` directory. The current files have messy WhatsApp filenames. Rename these to web-safe names (e.g., `hero-video.mp4`, `food-shot.jpeg`, `b-roll-1.mp4`, `b-roll-2.mp4`) using standard bash commands and provide the exact new paths to the UI Engineer.
- **Agent 2 (UI Engineer)**: Writes `index.html`, `style.css`, and `script.js`. 

## 3. STRICT Anti-Slop Directives (DO NOT IGNORE)
- **Copywriting**: NO cliché AI phrasing. Do not use words like "culinary journey," "elevate," "symphony of flavors," or "embark." Use terse, punchy, technical descriptions. Stick exactly to the steps provided.
- **Code Quality**: NO inline CSS. NO messy framework classes. Use semantic HTML5. Create a `style.css` with a clean `:root` variables section for colors and spacing. Ensure mobile responsiveness uses modern Flexbox/Grid, not hacky margins.
- **Video Implementation**: All videos must include `playsinline autoplay muted loop` attributes so they work automatically on mobile devices. Use CSS `object-fit: cover` so they scale perfectly as backgrounds.

## 4. Asset & UI Integration
- **Hero Video**: Full-screen looping background video with a dark CSS overlay (`rgba(0,0,0,0.6)`). Bold, modern text on top: "SSS: Signature Sandwich by Siddharth".
- **The Arsenal (Ingredients)**: CSS Grid. Display the renamed `food-shot.jpeg` prominently alongside the list: 2 eggs, 2 slices brown bread, ghee, Tandoori mayo, 1 Amul cheese slice, 3 jalapenos, mixed herbs, Jamaican spice.
- **The Architecture (Steps)**: Vertical layout. The Bind, The Inversion, Asymmetrical Flavoring, The Dusting, The Fold. Use the remaining `b-roll` videos as muted, looping background elements between text sections.

## 5. Deployment Pipeline (GitHub Pages)
The user is already authenticated to GitHub CLI as `sidhu1512`. Orchestrator must execute the following exactly:
1. `git init`
2. `git add .`
3. `git commit -m "feat: initial commit for SSS Landing Page"`
4. `gh repo create sss-signature-sandwich --public --source=. --remote=origin --push`
5. Enable GitHub Pages via CLI API: `gh api repos/sidhu1512/sss-signature-sandwich/pages -X POST -f source[branch]="main" -f source[path]="/"`
6. Output the final live URL to the terminal: `https://sidhu1512.github.io/sss-signature-sandwich/`