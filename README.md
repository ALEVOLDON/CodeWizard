# CodeWizard Personal Website

## Project Overview

This project is a modern, minimalist personal website for a coder and prompt engineer, designed with a dark theme and a futuristic aesthetic. The design blends vaporwave and terminal UI elements, featuring a clean grid layout, smooth animations, and a strong atmospheric vibe. It reflects a tech-savvy style with neon accents and subtle 3D effects.

## Main Sections

1. **Hero Section**  
   - Name: "CodeWizard" with a neon glow effect.  
   - Tagline: "Building magic with code + prompts".  
   - Glowing CTA button with a smooth transition to the "Projects" section.  

2. **About Section**  
   - Brief, punchy bio.  
   - Rotating 3D cube as an avatar (250x250px).  

3. **Projects Section**  
   - Grid of projects with interactive 3D cards (lift and rotate on hover).  
   - Examples: "AI Terminal", "Neon Grid", "PromptCraft".  

4. **Prompt Library**  
   - List of prompt examples styled like a terminal, with a slide effect on hover.  

5. **Contact Section**  
   - Social links as rotating 3D cubes (Twitter, GitHub, Email) with unique colors.  

## Design Features

- **Color Palette**: Black (`#0a0a0f`), charcoal (`#1a1a2e`), dark blue (`#0f0f1a`), with neon green (`#00ffcc`), cyber purple (`#b388ff`), and magenta (`#ff007a`) accents.  
- **Typography**: `IBM Plex Mono` — a monospaced font for a terminal vibe.  
- **Animations**:  
  - Smooth scrolling across the site (`scroll-behavior: smooth`).  
  - Section fade-in with an upward slide (`fadeInUp`).  
  - Neon text and button glow (`glow`).  
  - Chaotic, bending geometric lines in the hero section.  
  - Subtle code rain background (`code-rain`).  
- **Scrollbar**: Custom, slim, with a neon green thumb and purple hover effect.  
- **Audio**: Ambient background track with a toggle button (Mute/Unmute).  

## Technologies Used

- **HTML5**: Site structure.  
- **CSS3**: Styling, animations, and custom scrollbar.  
- **JavaScript**:  
  - `Canvas` for animations (code rain, hero lines).  
  - `Three.js` for 3D cubes (avatar and social icons).  
  - `IntersectionObserver` for section animations on scroll.  
- **External Resources**:  
  - Google Fonts (`IBM Plex Mono`).  
  - Three.js (CDN: `https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js`).  

## Setup and Configuration

1. **Clone or Save the File**:  
   Save the code as `index.html` in your project folder.

2. **Add Audio File**:  
   - Download an ambient track in `.mp3` format (e.g., from Freesound or Epidemic Sound).  
   - Place it in the same folder as `index.html` under the name `ambient-bg.mp3`.  
   - Alternatively, update the path in `<source src="ambient-bg.mp3" type="audio/mpeg">`.  

3. **Configure Links**:  
   - In the `<section class="contact">` section, replace `href="#"` with your actual social profile URLs (Twitter, GitHub, Email).  

4. **Open in Browser**:  
   - Open `index.html` in a modern browser (Chrome, Firefox, Edge).  
   - Ensure an internet connection for loading Three.js and the font.  

## Potential Enhancements

- **Smooth Parallax**: Use a JS library (e.g., `parallax.js`) for advanced parallax effects.  
- **Textures**: Add noise or holographic effects to the background with CSS filters.  
- **Interactivity**: Introduce hover effects for hero lines or mouse-driven cube controls.  
- **Cross-Browser Scrollbar**: Use `SimpleBar` for consistent scrollbar styling across all browsers.  

## Notes

- **Audio Autoplay**: May be blocked by browsers until user interaction. The "Unmute" button addresses this.  
- **Performance**: Animations are optimized, but on low-end devices, reduce the number of lines or `code-rain` frequency.  

---

Created using Grok 3 by xAI, March 2025.
