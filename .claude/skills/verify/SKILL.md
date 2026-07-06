---
name: verify
description: Build, serve and visually verify this portfolio (Next.js static) via headless Chrome screenshots
---

# Verify: portfolio (Next.js)

Static Next.js site (App Router, Tailwind). No tests; verification is visual.

## Build and serve

```bash
npm run build                 # must pass (lint + types + SSG)
npm run start -- -p 3199 &    # serve production build on isolated port
```

## Drive and capture

Headless Chrome is available on this machine:

```bash
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless=new --disable-gpu --hide-scrollbars \
  --window-size=1512,920 --virtual-time-budget=6000 \
  --screenshot=out.png http://localhost:3199/<route>
```

- `--virtual-time-budget=6000` lets the `.animate-fade-up` entrance animations (max delay 500ms + 0.7s) finish before capture.
- Breakpoints worth capturing: 1512x920 (desktop), 390x844 (mobile). The hero graphic (`components/halftone-field.tsx`) is `hidden lg:block`, desktop only.
- `--force-prefers-reduced-motion` checks the static-frame fallback of canvas animations.
- To prove a canvas animation is running: capture at two different `--virtual-time-budget` values and `cmp` the PNGs; they must differ.

## Gotchas

- Working tree usually carries WIP image/MDX edits by Walter; commit only the files of the current task.
- Site is intentionally noindex and has no sitemap; never "fix" that.
