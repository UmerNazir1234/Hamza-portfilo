# Hamza — Portfolio

A dark, glassmorphism, blueprint-inspired portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Contact form

The form posts to `app/api/contact/route.ts`, which sends mail via [Resend](https://resend.com).
Copy `.env.example` to `.env.local` and fill in:

```
RESEND_API_KEY=your_key_here
CONTACT_TO_EMAIL=hamza@example.com
```

Without these set, submissions are logged to the server console instead of emailed, so the form still works during development.

## Content

All copy — skills, projects, services, testimonials, contact details — lives in `lib/data.ts`. Edit that file to update the site without touching components.

## Assets to add

- `public/images/` — profile photo, project screenshots
- `public/resume/hamza-cv.pdf` — CV linked from the hero "Download CV" button

## Structure

```
app/            routes, layout, metadata, API route
components/
  layout/       navbar, footer, scroll progress, back-to-top
  sections/     one component per page section
  ui/           Button, SectionHeading
  animations/   Reveal (scroll-triggered motion)
lib/            data.ts (content), utils.ts
types/          shared TypeScript interfaces
```
"# Hamza-portfilo" 
