# Mission Directive: SSS Kinetic Landing Page (Local Evolution)

## 1. Project Overview
Build a high-performance, animation-heavy, dark-mode landing page for the "SSS - Signature Sandwich by Siddharth". This phase focuses purely on advanced GSAP ScrollTrigger physics and dynamic DOM manipulation using pre-existing, perfectly masked transparent assets.

## 2. Execution Rules
- **LOCAL ONLY**: Do not execute any `git push` commands. Work entirely on the local file system.
- **Asset Integrity**: The `./asset/` folder contains perfectly transparent PNGs (e.g., `sandwich-1.png`, `sandwich-2.png`). **Do NOT attempt to crop, mask, or modify these images.** Use them exactly as they are.

## 3. Agent Team Responsibilities
- **Lead Orchestrator**: Supervises the mission, reads this plan, and coordinates the UI Engineer.
- **UI & Animation Engineer**: Writes `index.html`, `style.css`, and `script.js`. Must be an expert in GSAP, ScrollTrigger, and DOM manipulation.

## 4. UI/UX & Animation Requirements
The UI Engineer must implement the following specific features:

### A. The Dynamic Favicon
- Write a JavaScript function in `script.js` that automatically swaps the `<link rel="icon">` `href` attribute between `asset/sandwich-1.png` and `asset/sandwich-2.png` on an interval (e.g., every 800ms). This will create a looping animation directly in the browser tab.

### B. The Marquee (Train Text)
- Create a full-width background section containing massive, bold, uppercase text: "SIGNATURE SANDWICH BY SIDDHARTH".
- Use CSS or GSAP to continuously animate this text moving horizontally from right to left, repeating infinitely, resembling a moving train.

### C. The Clockwork Parallax (Hero Section)
- Position one of the transparent sandwich PNGs centrally in the hero section.
- Implement a GSAP `ScrollTrigger` that ties the rotation of this image directly to the user's scroll depth. As the user scrolls down, the sandwich should rotate smoothly like a clock face.

### D. Multi-Layer Depth (Body Sections)
- In subsequent sections detailing the recipe, use the second sandwich image.
- Implement different GSAP entry animations here (e.g., the image scales up from `0.5` to `1` on scroll entering the viewport, or floats vertically along a subtle y-axis curve).

## 5. Technical Constraints
- Use standard HTML/CSS/JS.
- Import GSAP and ScrollTrigger via CDN.
- Ensure the layout does not break horizontally (hide `overflow-x`) due to the marquee text.