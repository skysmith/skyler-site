# Skyler Site

Personal website built with Next.js.

The homepage is now a standard landing page instead of a fullscreen game embed. The visual direction is calm, typography-first, and lightly segmented, with muted neutrals and semantic accent color. Existing legal routes remain available at `/legal/privacy` and `/legal/eula`.

## Workspace Metadata

- Name: Skyler Site
- Domain: personal
- Status: active
- Purpose: Personal website and public landing page for projects, writing, and legal pages
- Path: personal/projects/skyler-site
- Related:
  - personal/projects
  - lab/games/pixel-lobby
- Upstream:
  - personal/projects
- Tags:
  - website
  - personal-brand
  - nextjs
  - frontend

## Local development

```bash
cd ~/Documents/codex/personal/projects/skyler-site
npm install
npm run dev
```

## Notes

- Main entry point: `pages/index.js`
- Global styling: `styles/globals.css`
- Legal pages: `pages/legal/privacy.js` and `pages/legal/eula.js`
