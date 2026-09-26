# Nácar — Design System

> Mother-of-pearl in the dark. Every page is a black exhibition hall; one precisely lit device per scene, oversized quiet type, and a single pearl-violet accent reserved for buying.

Merged from three reference style files (phone: black stage, watch: carbon bays, earbuds: cinematic chapters), then unified into one **dark** system for the brand Nácar (Spanish, "mother-of-pearl").

Theme: **dark only.** No white page sections. The earbuds page's "light chapters" become Carbon bands.

## Brand

- Wordmark: `nácar` set in Inter 600, lowercase, tracking -0.02em. The accent over the á is the brand mark. No icon logo.
- Product line (all names Spanish):
  - **Nácar Faro** (phone). "Faro" = lighthouse.
  - **Nácar Pulso** (smartwatch). "Pulso" = pulse.
  - **Nácar Onda** (wireless earbuds). "Onda" = wave.
- Currency: Indian rupees, Indian digit grouping (₹1,19,900).

## Color tokens

| Token | Value | Use |
|---|---|---|
| `--obsidian` | `#000000` | Hero stages, media tiles, default page canvas |
| `--carbon` | `#111111` | Alternate section bands, global nav |
| `--graphite` | `#1d1d1f` | Panels, comparison workspaces, announcement strip |
| `--steel` | `#333336` | Hairlines, translucent control fills |
| `--slate` | `#6e6e73` | Outline of ghost pills, dividers |
| `--ash` | `#86868b` | Secondary copy, captions, inactive labels |
| `--porcelain` | `#f5f5f7` | All headline and primary text on dark |
| `--pearl` | `#6c5ce7` | **The only accent.** Filled Buy / Learn more pills. Nothing else is filled with it. |
| `--pearl-link` | `#a99cff` | Text links on dark |
| `--signal` | `#00d959` | Watch page only: health / battery metrics. Never on controls. |
| `--new` | `#ff8a3d` | Text-only "New" labels, 12px. Never a filled badge. |

Rules:
- Text on dark is `--porcelain`, never pure #fff for headlines.
- Only gradient permitted: `linear-gradient(#1d1d1f, #000 288px)` for section fades, plus black edge-fades (vignettes) used to dissolve photo backgrounds into the canvas.
- No other saturated colors in UI chrome. Color may appear inside photography.

## Typography

Family: **Inter** (variable, embedded) as the stand-in for a display/text pair. Weights: 400, 500, 600 only. Never 700+.

| Role | Size / line-height | Weight | Tracking |
|---|---|---|---|
| display-xl | 96 / 1.04 | 600 | -0.015em |
| display | 80 / 1.05 | 600 | -0.015em |
| hero | 64 / 1.06 | 600 | -0.009em |
| headline | 48 / 1.08 | 600 | -0.003em |
| stat | 48–56 / 1.0 | 600 | -0.005em |
| title | 32 / 1.13 | 600 | 0.004em |
| subtitle | 24–28 / 1.14 | 600 | 0.007em |
| eyebrow / product-label | 19–21 / 1.2 | 600 | 0.011em |
| body | 17 / 1.47 | 400 | -0.022em |
| body-small | 14 / 1.43 | 400 | -0.016em |
| nav / button | 12 / 1.33 | 400 | -0.01em |

- Mobile (<734px): display/display-xl → 48px, hero → 40px, headline → 32px.
- Numerals in stats use `font-variant-numeric: tabular-nums`.

## Spacing

Scale (px): 4, 8, 12, 16, 20, 24, 28, 32, 48, 90, 144, 210.
- Section vertical padding: 144px desktop (min 90px), 90px mobile.
- Content max width: 980px for text columns, 1260px for media rows; page gutter 22px mobile, auto-centred desktop.
- Tile gap: 24px. Card inner padding: 28–48px.

## Shape

| Element | Radius |
|---|---|
| Media tiles, cards, panels | **28px** |
| Local nav capsule | 20px |
| Buttons, pills, inputs | 980px (full pill) |
| Selector chips | 36px |

## Elevation

None. No `box-shadow` anywhere except a 1px hairline ring (`0 0 0 1px #333336`) on floating nav capsules. Depth comes from surface shifts (#000 ↔ #111 ↔ #1d1d1f) and 28px clipping.

## Components

1. **Global nav**: 44px tall, `--carbon` at 80% with backdrop blur, 12px links at rgba(255,255,255,.8). Wordmark left, 4 links (Faro, Pulso, Onda, Soporte), bag icon right.
2. **Local product nav**: sticky capsule 52px, `--graphite` @ 72% + blur, 20px radius, product name 19px/600 left, 1–3 section links + Buy pill right.
3. **Buy pill**: `--pearl` fill, white 12–14px label, 980px radius, padding 6px 14px (compact) or 11px 22px (hero).
4. **Ghost pill**: transparent, 1px `--slate` border (or `--pearl-link` border on landing tiles), porcelain/pearl-link label.
5. **Price capsule**: rgba(66,66,69,.72) fill, 36px radius, 14px text at 80% white, holds the Buy pill inside.
6. **Media tile**: `--obsidian`, 28px radius, overflow hidden, photo edges fade to black.
7. **Stat block**: hairline top border `--steel`, 14px eyebrow in `--ash`, stat number, 14px caption in `--ash`.
8. **Selector chip**: rgba(66,66,69,.72), 36px radius, 17px/600 label, leading "+" glyph.
9. **Footer**: `--carbon`, 12px `--ash` text, hairline dividers.

## Motion

- Reveal on scroll: opacity 0→1 and translateY(24px→0) over 800ms, ease-out, once. Must fully resolve; nothing stays half-visible.
- No motion shorter than 400ms. No bouncing, no looping decoration.
- `prefers-reduced-motion`: no motion.

## Imagery

- Product-first. Every hero is one device, lit, on near-black.
- Photos are stock; any photo background must fade into the page black via a radial/linear vignette so edges are not visible.
- No logos from other brands visible.

## Don't

- No white or light sections. No drop shadows. No radius under 28px on tiles.
- No accent color on section backgrounds, cards or text blocks.
- No more than 3 type sizes in a single viewport (excluding nav).
- No emoji, no icon clutter, no stock "lifestyle" images as a hero.
