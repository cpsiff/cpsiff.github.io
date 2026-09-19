# Agent entry point

This repository owns Carter's portfolio at `cpsiff.net`, not all applications
under the domain. Read [README.md](README.md), then
[docs/CLOUDFLARE.md](docs/CLOUDFLARE.md) before deployment or infrastructure work.

- Preserve the static Next.js export unless the task requires changing it.
- Check `git status` and preserve existing user edits.
- Use npm, the committed lockfile and the Node version in `.node-version`.
- For application changes, run `npm run build` and relevant local/live checks.
  For documentation-only changes, check links/paths and `git diff --check`.
- `master` is live: pushing triggers Cloudflare and GitHub Pages builds. Publish
  only when authorized by the current task.
- `npm run deploy` must deploy only `cpsiff-website`. Cloudflare Builds overrides
  other Worker names; never add `deploy:redirect` to that CI command.
- New apps belong in separate projects with unique Worker names, build connections
  and explicitly chosen subdomains. Do not change apex/www routing, Pages settings,
  nameservers or zone-wide rules to onboard an unrelated app.
- Never commit credentials or blindly copy portfolio identifiers into a new app.
- Keep the license notice. Update the handoff guide when infrastructure changes.

The guide records setup and owner preferences, not permanent authority to deploy
another app, publish private datasets or activate paid services. Verify current
account state, available tools and the scope of the current user request.
