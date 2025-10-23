# React Small-Business Boilerplate (React/SCSS/JS)

by Doug Kissack // Hotkey Creative

https://hotkeycreative.com

doug@hotkeycreative.com

Project Description: A reusable, accessibility-first front-end starter kit for small business websites and similar projects.

Features: React Router, SCSS tokens -> CSS vars, Framer Motion, Radix primitives, Lightbox, 
          RHF contact form, SEO/JSON-LD helpers, Plausible/GA4 analytics, xml sitemap generation scripts.

Notes: 1. This repo is intended as a starting point for rapid prototyping and is tested but not directly production ready.
       2. Review checklists in */docs/ for more detailed documentation.

## Quick Start
```bash
# clone or "Use this template" on GitHub
npm i
# pick a dev server:
npm run dev # Vite
# or
npm start # CRA

## Build & Deploy
npm run build
```

## Scripts
- dev / start — run dev server
- build — production build
- sitemap — generate public/sitemap.xml and .txt
- lint / format — ESLint + Prettier
- preview — (Vite) preview prod build locally

## Accessibility & Performance
- Keyboard & screen-reader friendly (Radix for complex widgets)
- prefers-reduced-motion respected
- Lazy routes; lightbox split to reduce JS on first load

## License
MIT License
Copyright (c) 2025 Douglas Kissack // Hotkey Creative

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.