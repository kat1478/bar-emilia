# Bar Emilia Website

## Overview
A real-world, mobile-first website developed for **Bar Emilia**, a local eatery located in Grajewo, Poland. This project serves as a digital storefront, providing customers with instant, distraction-free access to the daily menu, delivery information, contact details, and precise opening hours.

## Features
- **Mobile-First Design**: Fully responsive layout optimized for mobile devices to accommodate on-the-go users looking for quick meal options.
- **Dynamic Status Indicator**: Automatically calculates and displays the current business status (Open/Closed) based on real-time business hours logic.
- **Data Decoupling**: Menu data is extracted into a standalone JavaScript data structure, allowing fast updates without touching the HTML layout.
- **Sticky Navigation**: Implemented scroll-aware navigation and anchor margins for seamless UX when traversing lengthy menu sections.
- **Dependency-Free**: Built entirely with Vanilla web technologies for a zero-build-step footprint and instant load times.

## Tech Stack
- HTML5 (Semantic Structure)
- CSS3 (Vanilla, CSS Variables, Flexbox/CSS Grid)
- Vanilla JavaScript (DOM manipulations, dynamic rendering)

## Running Locally

Because this project uses vanilla web technologies without bundlers or node_modules, running it locally is extremely straightforward.

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/bar-emilia.git
   ```
2. Navigate to the project directory:
   ```bash
   cd bar-emilia
   ```
3. Run a local server. You can use any lightweight HTTP server. For example, using Python or Node.js (`npx serve`):
   ```bash
   npx serve .
   ```
   *Alternatively, just double-click `index.html` to open it directly in your browser.*

## Why this project matters
From a portfolio perspective, this project demonstrates:
- **Real-World Business Context**: Translating physical business requirements (opening hours, Google Maps integrations, catering offers) into functional digital tools.
- **Frontend Fundamentals**: A solid grasp of raw HTML/CSS/JS without relying on abstractions like React or Tailwind, proving a strong engineering foundation.
- **UX & Accessibility**: Prioritizing user experience through fast load times, legible typography, and intuitive mobile interactions.
- **Maintainable Architecture**: Structuring data and markup logically to reduce friction for future maintenance by non-technical owners.

## Demo
- **Live Demo**: [https://bar-emilia.netlify.app](https://bar-emilia.netlify.app)
- **Screenshots**:
  - *[Placeholder: Mobile Viewports]* 
  - *[Placeholder: Desktop Homepage]*
