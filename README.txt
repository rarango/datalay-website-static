Datalay website — bilingual EN + ES review build
================================================

Static multi-page site generated from the v3 English content draft
(2026-09-03), with a complete European Spanish parallel under /es/.

Serve from this directory as the site root (paths are root-absolute):

  python3 -m http.server 8080 --directory /workspace/datalay/site

  then open http://localhost:8080/       (English)
       or http://localhost:8080/es/      (Spanish)

Do not open files via file:// — nav uses root-absolute paths
(/services/, /es/services/, etc.).

Pages
-----
  English                         Spanish
  /                               /es/
  /services/                      /es/services/
  /services/#private-ai           /es/services/#private-ai
  /how-we-work/                   /es/how-we-work/
  /company/                       /es/company/
  /contact/                       /es/contact/
  /legal/                         /es/legal/
  /privacy/                       /es/privacy/
  /404.html                       /es/404.html

Language switcher
-----------------
Every EN page links to its /es/... equivalent (label: Español).
Every ES page links to its EN equivalent (label: English).
Logo goes to / on EN pages and /es/ on ES pages.
Internal links on ES pages stay under /es/.

Notes
-----
- Shared design: /css/styles.css + /js/nav.js (dark charcoal + teal,
  Outfit + Inter, cards, grain, mobile nav). Assets are not duplicated
  under /es/; ES pages use root-absolute /css/ and /js/ paths.
- nav.js picks Open/Close vs Abrir/Cerrar menú from <html lang>.
- Text logo "Datalay" — no logo image (source file not on this box).
- No fake metrics, logos, or testimonials.
- Review build still loads Google Fonts from the CDN. The privacy page
  copy states that fonts will be self-hosted on the production site;
  that is not true of this preview.
- Not for production deploy as-is.
