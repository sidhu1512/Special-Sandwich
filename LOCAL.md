# Mission Directive: SSS Local UI Evolution - Phase 2 (High-Definition Parallax)

## 1. Project Overview
Evolve the local landing page of the "SSS - Signature Sandwich by Siddharth" into a highly dynamic, art-driven digital experience. This phase uses advanced parallax and interactive typography, heavily inspired by modern design references.

## 2. STRICT Execution Rules (LOCAL ONLY)
- **Do NOT push ANY changes to ANY remote repository.**
- Verify you are on the `local-ui-evolution` branch.
- **DO NOT IGNORE THIS RULE: The black box must be removed from the sandwich asset. It must be a transparent, isolated object.**

## 3. Agent Team & Responsibilities
This mission requires a 3-agent team:
- **Lead Orchestrator**: Supervises the mission, reads this plan, spawns the teammates, and handles final local merge/verification.
- **Agent 1 (AI Asset & Enhance Specialist)**: Must have access to advanced background removal/masking APIs. Your mission is to fix the previous asset error.
- **Agent 2 (UI Engineer)**: Writes `index.html`, `style.css`, and `script.js`.
- **Agent 3 (Design & Content Specialist)**: Replicates the visual and typographic hierarchy of the Dribbble reference and writes new, minimal copy.

## 4. Phase 1: Image Processing (AI Specialist)
**Input:** `asset/enhanced-sandwich-isolated.png` (the high-res sandwich inside the black box).
- **Task 1.1: Masking & Isolation.**
  - **CRITICAL:** Completely remove the black background rectangle from `asset/enhanced-sandwich-isolated.png`. Perform a precise, professional mask, isolating *only* the plated sandwich and the surrounding white plate with its detailed pattern. The plate should be a circular element with a transparent background.
  - Save the final result as a transparent PNG, overwriting the old file: `asset/enhanced-sandwich-isolated.png`. Verify the background is fully transparent (not white, but alpha-transparent).

## 5. Phase 2: Copywriting & UI Style (Content Specialist)
**Reference Style (image_3.png):** Extract the *structure* of the Dribbble ad. Minimal text, dramatic typography, repeating background text, and a focused subject.
- **Task 2.1: Minimalist Copy (No Slop).**
  - Text to replicate (using Dribbble structure):
    - Red Script Font: "Taste our Classic SSS"
    - Repeating Bold Red Serif/Sans: "Signature Sandwich by Siddharth" (or just "SSS" repeated).
    - Footer Description: Maintain punchy precision: "A masterclass in texture. Ghee-toasted brown bread, open-faced egg fusion, tandoori mayo, a single slice of Amul cheese, and an asymmetric scattering of 3 jalapenos for dynamic heat distribution."
    - Contact Section: Replace with something terse and internal, e.g., "Engineered in Pune. (Internal Use Only)."

## 6. Phase 3: Advanced UI Implementation (UI Engineer)
**Required Stack:** `GSAP` and `ScrollTrigger` CDN links must be present in `index.html`.

- **Task 3.1: Parallax Container Section.**
  - Create a new, full-width section with a cream background (`#F9F9F0`) inspired by the reference.
  - Inside, implement the layout from the Dribbble ad:
    - Top Script Text.
    - Floating repeating background text.
    - **Foreground Subject:** The freshly isolated `asset/enhanced-sandwich-isolated.png` (the transparent circular plate).
    - Descriptive Footer Text.

- **Task 3.2: GSAP Multi-Layer ScrollTrigger Parallax.**
  - **The Core Animation:**
    - Link a GSAP `ScrollTrigger` to this section.
    - **Background Layer (Repeating Text):** As the user scrolls, this layer must move slowly in one direction (e.g., horizontally or vertically).
    - **Foreground Layer (Isolated Sandwich PNG):** The sandwich must move slightly faster in a different axis.
    - **Overlay/Text Layer (Script Text):** This layer moves another way.
    - **Parallax Depth:** This three-layer differential creates profound depth, making the isolated sandwich float 'past' the repeating background text.
  - **Additional Interaction:**
    - Use `ScrollTrigger` to subtly `rotate` the isolated sandwich plate slightly as it floats, making it feel organic and 3D.
    - Use `ScrollTrigger` to link the opacity of the repeating text, making it fade in or out on scroll.

## 7. Execution Call-to-Action
Paste this consolidated prompt into your Claude Code terminal:
```text
Read the LOCAL_PLAN.md file. This is a local-only mission. Do not execute git push.

Create a team of 3 teammates: an AI Specialist, a UI Engineer, and a Design Specialist.

The AI Specialist must immediately process `asset/enhanced-sandwich-isolated.png` (the current sandwich asset with a black box) to completely remove the black box and isolate ONLY the circular plate of the sandwich with a transparent background. Overwrite the asset file.

The Design Specialist must then extract the typographic and visual hierarchy of the Dribbble ad (cream background, red script, bold repeating text, minimal footer) and apply it to the SSS sandwich (e.g., repeating text: "Signature Sandwich by Siddharth").

Finally, the UI Engineer must implement this new layout in HTML/CSS, including a complex multi-layer GSAP ScrollTrigger parallax effect in 'The Arsenal' section, linking the movement of the repeating background text vs. the floating, isolated sandwich PNG vs. the script text. The work must be done on the `local-ui-evolution` branch. Do not stop until I have a dynamic, high-definition art piece.