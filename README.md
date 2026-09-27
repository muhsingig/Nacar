# Nacar

Website for **Nácar** (Spanish for "mother-of-pearl"), a fictional premium brand that makes a phone, a smartwatch and wireless earbuds. It's a design study in the style of Apple's product pages: black stages, large quiet type, one accent colour and scroll-driven motion.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Landing page |
| `faro.html` | Nácar Faro, phone (₹1,19,900). The phone turns as you scroll, then the pearl lights up. |
| `pulso.html` | Nácar Pulso, smartwatch (₹79,900). The watch face follows the health cards. |
| `onda.html` | Nácar Onda, wireless earbuds (₹24,900). Scroll takes the bud apart. |
| `compare.html` | The three products side by side |
| `buy.html` | Configurator: pick finish and options, live price and EMI (design study, no checkout) |
| `support.html` | Help, repairs, warranty and contact |

## Run it locally

- **Windows:** double-click `start-nacar.bat`. It serves the folder at http://localhost:8080 and opens your browser.
- **Anywhere else:** run any static server from the folder, for example `python -m http.server 8080`.

The pages use relative paths only and make no external requests, so they also work on GitHub Pages as they are.

## Folders

- `assets/`: product renders, generated for Nácar. Desktop images, plus `-m` versions for mobile.
- `brand/`: logo files as SVG (horizontal, stacked, symbol, mono symbol, wordmark, favicon).
- `fonts/`: Inter.
- `scrollcraft.js` / `scrollcraft.css`: the scroll-animation engine. `site.css` / `site.js`: shared styles and setup.
- `design-notes/`: the design system and the quality bar the pages were judged against.
- `v1-previous/`: the first version of the site, kept for reference. It uses Unsplash stock photos under the Unsplash licence.

Nácar is a fictional brand. No real products or trademarks are represented.
