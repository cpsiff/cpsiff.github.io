# Carter Sifferman's website

Personal portfolio and research pages at **[cpsiff.net](https://cpsiff.net)**.
Source: **[cpsiff/cpsiff.github.io](https://github.com/cpsiff/cpsiff.github.io)**;
production branch: **`master`**. The repository keeps its historical name even
though Cloudflare now serves the production website.

## Start here

- **Adding another app under cpsiff.net?** Read the
  [Cloudflare setup and new-app handoff](docs/CLOUDFLARE.md).
- **An agent working in this repository?** Read [AGENTS.md](AGENTS.md).
- **Editing the portfolio?** Use the development instructions below.

Future apps should normally live in their own repositories and deployments with
their own subdomains. They do not need to be merged into this portfolio or linked
from its homepage. The guide is shared context, not a requirement to copy this
site's framework or configuration.

## Local development

Use Node.js 22 (pinned in [.node-version](.node-version)) and npm.

```sh
npm ci
npm run dev
```

The development site is normally at http://localhost:3000. To test the actual
static output with Cloudflare's local runtime:

```sh
npm run build
npm run preview
```

Use the local URL printed by Wrangler. Build before previewing: preview serves
`out/`, not live source edits. Do not use `npm start` for this static-export setup.
The inherited `npm run lint` command uses `next lint`, which is not supported by
Next.js 16; it is not a working validation command. The production build includes
TypeScript checks; lint-tooling cleanup is a separate task.

## Where to edit

| Location | Purpose |
| --- | --- |
| `src/data/` | Profile, publications, portfolio, news, education, experience, section order and spacing |
| `src/components/` | Reusable portfolio UI |
| `src/app/page.tsx` | Homepage composition |
| `src/app/layout.tsx` | Shared layout, fonts, metadata and canonical URL |
| `src/app/globals.css` | Global styles |
| `public/` | Images, PDFs, videos and standalone research pages |
| `next.config.ts` | Static export and unoptimized images |
| `wrangler.jsonc` | Production portfolio hosting |
| `wrangler.redirect.jsonc`, `workers/www-redirect.js` | Separate www redirect |
| `.github/workflows/nextjs.yml` | GitHub Pages legacy build, not Cloudflare CI |

Next.js exports the site into generated `out/`. There is no running Next.js
server, server-side rendering, API server or database for this portfolio.
Do not edit `out/`, `.next/` or `.wrangler/` as source files.

The six standalone research sites are retained at:

- `/geometric-calibration/`
- `/towards_3d_vision/`
- `/unlocking_proximity_sensors/`
- `/using_a_distance_sensor/`
- `/recovering_parametric_scenes/`
- `/efficient_detection/`

## Publishing

Commit and push to `master` to trigger Cloudflare Workers Builds. It runs
`npm run build`, then `npm run deploy`. Verify both the build result and live site
after publishing. See the [handoff guide](docs/CLOUDFLARE.md) for dashboard settings,
redirect behavior and recovery precautions.

For an intentional manual deployment from an authenticated local terminal:

```sh
npx wrangler login
npm run build
npm run deploy
```

`npm run deploy` publishes only `cpsiff-website`. The rarely changed www redirect
is deployed separately with `npm run deploy:redirect` from a local terminal.
**Never chain that command into the portfolio's Cloudflare Builds job.**

The old `cpsiff.github.io` address redirects to the new domain. GitHub Pages is
retained for that legacy behavior and as a secondary build; it is not automatic
failover for Cloudflare. No visitor analytics were added during the migration.

## Attribution

Originally based on
[research-website-template](https://github.com/tovacinni/research-website-template).
The original MIT copyright notice is preserved in [LICENSE](LICENSE).
