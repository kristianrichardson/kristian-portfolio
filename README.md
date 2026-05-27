# Kristian Richardson — Personal Portfolio

Personal brand website for Kristian Richardson, Cyber Security Specialist at Lloyds Banking Group.

## Structure

```
kristian-portfolio/
├── index.html   # Markup and content
├── style.css    # All styles and responsive layout
├── script.js    # Matrix rain, typing animation, scroll fade-ins, email obfuscation
└── README.md
```

## Features

- **Matrix rain** canvas animation in the hero section
- **Typing animation** cycling through roles
- **Scroll fade-ins** on all content sections
- **Email obfuscation** — address is assembled in JS, never exposed in the DOM
- **Content Security Policy** meta tag — no inline scripts or styles
- **Accessible** — skip link, ARIA landmarks, `prefers-reduced-motion` respected
- **Responsive** — works across mobile and desktop
- **No dependencies** — zero build step, open `index.html` in any browser

## Sections

- Hero
- About
- Projects (Advanced Web Vulnerability Scanner, Multi-Mode Port Scanner)
- Experience (Lloyds Banking Group)
- Certifications
- Speaking & Community
- Contact

## Running Locally

```bash
python3 -m http.server 3401
```

Then open [http://localhost:3401](http://localhost:3401).

> **Note:** Must be served over HTTP (not opened as a file) due to the Content Security Policy.

## Deployment

### GitHub Pages
1. Push to GitHub
2. Go to repo **Settings → Pages → Source: main branch**
3. Site will be live at `https://kristianrichardson.github.io/kristian-portfolio`

### Netlify
Drag and drop the folder at [netlify.com](https://netlify.com) — live in seconds.

### Custom Domain
Point a domain (e.g. `kristianrichardson.dev`) to GitHub Pages or Netlify for a fully professional URL.
