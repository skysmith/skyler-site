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

## PorchDesk route

`/porchdesk` is a public dummy-data landing page for PorchDesk. It is safe to share because it should never include real transaction records, client names, private paths, tokens, or operating secrets.

`/porchdesk/login` is a password-gated signpost page for PorchDesk source docs. GitHub remains the source of truth; the login route only makes the docs easier to find from the public site.

Security posture: the public page should contain only synthetic sample content. The simple password gate is suitable for low-risk source links, but real transaction data, client data, secrets, or operational records should stay in GitHub/private tools or move behind full authentication.

Set this environment variable in local or hosted environments:

```bash
SKYLER_SITE_PRIVATE_PASSWORD=...
```

Optional:

```bash
SKYLER_SITE_PRIVATE_COOKIE_SECRET=...
```

## Notes

- Main entry point: `pages/index.js`
- Global styling: `styles/globals.css`
- Legal pages: `pages/legal/privacy.js` and `pages/legal/eula.js`
- Public PorchDesk sample page: `pages/porchdesk.js`
- Private PorchDesk signpost: `pages/porchdesk/login.js`, gated by `SKYLER_SITE_PRIVATE_PASSWORD`
