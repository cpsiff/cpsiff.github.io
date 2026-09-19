# cpsiff.net: Cloudflare setup and new-app handoff

Setup verified during migration on **2026-09-19**. Recheck live configuration
before changing it. This guide is for agents in this repo or a different project.
It contains no credentials; account and zone IDs are identifiers only.

## Architecture: one domain, independent apps

Use a separate repository and deployment for each application, normally with its
own subdomain. Cloudflare routes each hostname to its app. There is no shared VPS,
reverse-proxy server or always-running web server for the current portfolio.
Future apps can use different runtimes or external backends under the same domain.

| Hostname | Status | Deployment |
| --- | --- | --- |
| `cpsiff.net` | Live | This repo; `cpsiff-website` Worker with Static Assets |
| `www.cpsiff.net` | Live redirect | This repo; `cpsiff-www-redirect` Worker |
| `cpsiff.github.io` | Legacy redirect | GitHub Pages custom-domain setting |
| `homes.cpsiff.net` | Example only, not provisioned by this migration | Possible housing-map app in its own repo |
| `glass.cpsiff.net` | Example only, not provisioned by this migration | Possible stained-glass app in its own repo |

Choose each new hostname with Carter. Subdomains do not require buying another
domain. Prefer them over paths such as `cpsiff.net/homes/` to avoid coupling app
routing, deployment and asset base paths. Do not add wildcard routes that intercept
other apps. Apps do not need links from the portfolio.

Independent deployments still share account-level billing and quotas. Each app
does not necessarily receive a separate free allowance. An unlinked app is public
unless protected by access control; robots.txt is not access control.

## Existing resources

| Item | Value |
| --- | --- |
| Repository | `https://github.com/cpsiff/cpsiff.github.io` |
| Production branch | `master` |
| Cloudflare account ID | `392851e0e46db443f6520107d5fea752` |
| DNS zone | `cpsiff.net` |
| Zone ID | `dc30ac5dad7b04ebcb1e374803426ba1` |
| Portfolio Worker | `cpsiff-website` |
| Portfolio Worker tag / API identifier | `874e55a08c194d30a8639187ce398161` |
| Redirect Worker | `cpsiff-www-redirect` |
| Redirect Worker tag / API identifier | `7b3539ba4802497daec1fa703690ccbd` |
| Portfolio config | [wrangler.jsonc](../wrangler.jsonc) |
| Redirect config | [wrangler.redirect.jsonc](../wrangler.redirect.jsonc) |

The zone was on the Free plan and no paid services were activated for migration.
The portfolio has no database or object-storage bindings. This is not an inventory
of resources another project may create later.

## Portfolio build and deployment

This is Next.js compiled to static files, **not Next.js running on Workers**.
`next.config.ts` sets `output: "export"` and disables runtime image optimization.
`npm run build` writes `out/`, including research pages and media from `public/`.
Wrangler serves it with automatic trailing-slash handling and a generated 404 page.
The main Worker has no application-server entry point.

Dashboard: **Workers & Pages → cpsiff-website → Settings → Builds**.

| Build setting | Value |
| --- | --- |
| Repository | `cpsiff/cpsiff.github.io` |
| Production branch | `master` |
| Root directory | `/` |
| Build command | `npm run build` |
| Production deploy command | `npm run deploy` |
| Non-production version command | `npx wrangler versions upload` |
| Node version | `22.19.0` from `.node-version` |

Non-production builds upload a version rather than releasing it to production.
They do not deploy the www redirect. Evaluate preview URL visibility before using
this pattern for an app with private data.

### CI failure mode already fixed

Cloudflare Workers Builds binds a job to one Worker and can override a different
`name` in a second Wrangler config. Chaining portfolio and redirect deployments
in one job **overwrote the site Worker with redirect code**, even though the job
reported success. The site was restored, the commands separated, and a subsequent
automatic build and live checks passed.

- `npm run deploy`: portfolio only; used by this repo's Builds job.
- `npm run deploy:redirect`: redirect only; run from a local authenticated terminal.
- Other apps: separate build connections and unique Worker names.

Never chain `deploy:redirect` into this site's CI. Do not blindly copy this repo's
Worker name, domains, commands or output directory into another project. Match
that project's actual framework, build output and branch (which might be `main`).

## DNS, HTTPS and legacy redirects

Cloudflare is authoritative for `cpsiff.net`. Both Workers use **Custom Domains**,
which manage the corresponding DNS records and certificates. Do not point the
apex at GitHub IP addresses or change nameservers to add another app.

**Always Use HTTPS** is enabled at
**cpsiff.net → SSL/TLS → Edge Certificates → Always Use HTTPS**. This zone-level
setting also affects subdomains; plan new services for HTTPS.

GitHub repository **Settings → Pages → Custom domain** is `cpsiff.net`.
[.github/workflows/nextjs.yml](../.github/workflows/nextjs.yml) still publishes a
static copy to Pages. Keep Pages and the repository name to preserve old links.
That workflow is not the Cloudflare pipeline or automatic failover.

Observed behavior, preserving paths and query strings:

```text
https://cpsiff.github.io/<path>?<query>
  → http://cpsiff.net/<path>?<query>
  → https://cpsiff.net/<path>?<query>

https://www.cpsiff.net/<path>?<query>
  → https://cpsiff.net/<path>?<query>
```

GitHub HTTPS enforcement could not be enabled during migration because GitHub
did not have a certificate for the custom domain. Cloudflare upgrades the
intermediate HTTP destination. Do not describe this as a single-hop HTTPS redirect
or break Cloudflare DNS to force GitHub's certificate provisioning.

## Fresh-agent tools and authentication

The migration used GitHub CLI (`gh`), project-local Wrangler and Cloudflare MCP
connections. A fresh project must discover and test its own tools; conversation
history, OAuth state and filesystem permissions are not guaranteed to carry over.

1. Start read-only: check `gh auth status`, repo remotes/status, and the selected
   Cloudflare account, zone and Worker inventory.
2. Use the new project's pinned Wrangler version if installed. Check identity with
   `npx wrangler whoami`; use `npx wrangler login` when authentication is needed.
3. Agent connections and Wrangler authenticate separately. During migration the
   main Cloudflare MCP could read but writes failed with authentication error
   10000. Recheck actual permissions; a connected MCP does not imply deployment access.
4. Cloudflare's GitHub App was authorized for this portfolio repo. A new repo may
   require Carter to approve additional repository access in the dashboard.
5. Never put tokens in chat, source, command arguments or documentation. Use normal
   login flows or narrowly scoped protected secrets. Confirm intended resource
   ownership before any write.

Account access is not blanket authority to change unrelated resources. Record
existing DNS and a rollback plan before cutover. Retain the prior deployment until
the replacement is verified; reverting code does not restore database contents.

## Assess the housing-map app first

The map repository, runtime and datasets were **not inspected in this documentation
task**. This is an assessment checklist, not an assertion that it fits Workers or
the free tier.

- Identify the repo, branch, frontend build, backend language, dependencies,
  database, existing host and any credentials/private data before publication.
- Separate browser code from server requirements: geospatial queries, database
  extensions, tile generation, scheduled imports and long-running jobs. Workers
  are not a drop-in Linux VM; check runtime compatibility before moving a server.
- Inventory terrain/imagery/vector tiles, datasets, total size, largest file,
  file count, update frequency and requests per map view. Check dataset licenses,
  tile-provider terms and required attribution.
- If data can be precomputed, consider a static frontend first and keep heavy
  processing outside request handling. Add backend services only when needed.
- Evaluate R2 for files too large or numerous for Static Assets. Free egress does
  not mean unlimited free storage or operations. Check current limits/pricing and
  estimate map-view request volume before enabling anything billable.
- For range-request tile archives, test byte ranges, content types, CORS, caching
  and viewer compatibility. A successful file download is not a map-loading test.
- Prefer APIs on the app's own origin where practical. For separate tile/API
  hostnames, allow only necessary CORS origins/methods and avoid domain-wide cookies.
- Retain an existing database/backend if it is the simplest compatible solution.
  Subdomains can point to external hosting. Do not replace PostgreSQL/PostGIS with
  D1 merely because both offer SQL.

For a new Cloudflare-hosted app, evaluate Workers with Static Assets first and add
only needed services. This portfolio's static export does not dictate the map
app's framework or storage architecture.

## New-app migration checklist

1. Agree on the hostname, public/private access and what data may be published.
2. Inspect DNS before claiming it; preserve apex/www and all unrelated records.
3. Select a unique deployment name and build/test in isolation.
4. Configure a Custom Domain in this zone, or appropriate DNS for external hosting.
5. Connect only the app's repo/branch to its build job and deploy only its Worker.
6. Add required storage/secrets with explicit ownership and minimum access.
7. Verify logs for unexpected Worker name overrides, not just a green build badge.
8. Test homepage, deep-link refresh, missing pages, APIs/errors, representative map
   and terrain views, tile delivery, HTTPS and cross-origin behavior as applicable.
9. If private, protect alternate previews/workers.dev URLs too; hiding a link is
   not protection. Check that no private datasets are served as public assets.
10. Verify the portfolio, www redirect and legacy GitHub links still work.
11. Document resource IDs, commands, cost assumptions, rollback and data backups in
    the new app's own repo. This guide is shared background, not its source of truth.

Do not add a homepage link unless Carter requests it.

## Budget and privacy

Carter's target is **about $5/month maximum total hosting**, preferably free;
domain registration is separate. No paid services were enabled for the portfolio.
A service's base fee is not a total-account spending cap.

Before enabling paid Workers, R2, databases, containers or third-party tile
services, verify current pricing, shared quotas, expected usage and overages.
Ask Carter before activating billing or changing to a paid plan. Usage alerts
are not hard spending limits.

No visitor analytics or tracking scripts were added. Carter prefers non-invasive
tracking and no cookie banner; do not interpret this as permission to log raw IPs
or add analytics to another app. Review privacy requirements separately if needed.

## Copyable prompt for the new app's agent

> Read https://github.com/cpsiff/cpsiff.github.io/blob/master/docs/CLOUDFLARE.md
> for my existing cpsiff.net setup. Inspect this app and recommend the smallest
> compatible deployment under a new subdomain. Keep its own repo and deployment;
> preserve the portfolio and redirects. Propose a hostname and confirm it with me.
> Check backend compatibility, map/tile storage, data-publication permissions and
> total costs. Prefer free hosting and ask before enabling paid services; my target
> is about $5/month total hosting, excluding the domain. Verify your own tools and
> account access. Show me the migration plan before changing hosting.

## Official references

Check current docs instead of treating this snapshot as a pricing/API guarantee:

- [Workers Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)
- [Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/)
- [Static Assets billing and limitations](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/)
- [Workers limits](https://developers.cloudflare.com/workers/platform/limits/)
- [Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/)
- [Builds configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)
- [R2 pricing](https://developers.cloudflare.com/r2/pricing/)
- [Always Use HTTPS](https://developers.cloudflare.com/ssl/edge-certificates/additional-options/always-use-https/)
