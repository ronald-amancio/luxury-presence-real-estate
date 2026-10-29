# Luxury Presence — Junior Website Builder Assessment

A responsive, single-page redesign of the Marci Metzger homepage using semantic HTML, modern CSS, and vanilla JavaScript. The project is intentionally build-free and can be deployed directly to a static host such as Netlify.

## Run locally

Open `index.html` directly, or serve the folder with any static file server. No installation or build step is required.

## Project structure

```text
luxury-presence-assessment/
├── index.html
├── css/style.css
├── js/main.js
├── assets/images/
└── README.md
```

## Content and image inventory

The live homepage was reviewed before implementation. The redesign retains the following meaningful content:

- Marci Metzger and The Ridge Realty Group identity
- Pahrump Realtor positioning and nearly three decades of experience
- “Get it sold” seller message and buyer guidance
- Commercial and residential services
- Top residential sales claim for the last five years
- 2021 source figures: nearly 90 clients and $28.5 million in sales
- Affordability, credit, loan-option, and professional-connection guidance
- Current-listings destination, About Us, and Let’s Move links
- Business address, phone number, daily office hours, and after-hours appointment note
- Facebook, Instagram, LinkedIn, and Yelp destinations

Seven images were downloaded from the rendered source homepage and stored locally: the original wordmark, Marci’s portrait, and five Pahrump/property gallery photographs. No third-party stock images are used.

## Design and implementation notes

The redesign uses an ivory, charcoal, and champagne palette with editorial typography and larger image-led compositions. The content flow moves from positioning, to agent trust, proof points, services, listing search, local imagery, and contact information.

The live MLS search and contact form depend on services that are not available in a static assessment. Instead of presenting non-working controls, the listing call-to-action links to the original website’s maintained listing search, while contact actions use the verified phone number and a maps destination for the published office address.

Accessibility and interaction details include semantic landmarks, a skip link, descriptive image alternative text, visible keyboard focus, an accessible mobile menu with Escape-key support, reduced-motion handling, and high-contrast text overlays.

## QA checklist

- Responsive layouts checked at 1440, 1280, 768, 390, and 375 CSS pixels
- No unintended horizontal page overflow
- Mobile menu opens, closes, and responds to Escape
- Internal anchors and external destinations checked
- All local image paths checked for successful loading
- Console checked for page errors
- Semantic headings, landmarks, alt text, focus states, and basic contrast reviewed

## Manual verification before submission

- Confirm the reference website’s external pages and social profiles have not changed since review.
- Recheck the time-sensitive 2021 sales figures if the client wants the homepage positioned as current marketing material rather than an assessment redesign.
- Test on at least one physical iOS or Android device for final font rendering and tap behavior.
- The design uses system serif and sans-serif fonts, so the page has no runtime font dependency.
