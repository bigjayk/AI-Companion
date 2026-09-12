# NSFW AI Companion Comparison Site

Built with Astro + Tailwind CSS. Static output — deploys straight to
Cloudflare Pages.

## The only file you need to edit

**`src/data/apps.js`** — this is where all 8 app listings live: name,
tagline, description, image filename, affiliate link, and feature tags.
Edit this file to swap in your real brands. The homepage ranking and every
individual review page (`/reviews/your-slug`) are generated automatically
from this list, in the order you put them in.

There's also a `site` object at the bottom of that same file for your site
name, tagline, and domain.

## Adding real images

Drop your product images into `public/images/` (webp or jpg, doesn't
matter) and reference the filename in `apps.js`, e.g. `image: "candy-ai.webp"`.
Until you do, every card shows a placeholder box so you can see the layout.

## Running it locally to preview changes

You'll need Node.js installed (18+).

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:4321). Edit
`src/data/apps.js`, save, and the page refreshes automatically.

## Deploying to Cloudflare Pages

**Easiest path — connect GitHub:**
1. Push this folder to a new GitHub repo.
2. In the Cloudflare dashboard: Workers & Pages -> Create -> Pages ->
   Connect to Git -> pick the repo.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy. Cloudflare rebuilds automatically every time you push a change.
5. Add your domain under the project's "Custom domains" tab.

**No GitHub — direct upload:**
1. Run `npm run build` locally.
2. In Cloudflare Pages, choose "Upload assets" and drag in the `dist`
   folder.
3. You'll need to re-upload manually after future edits (no auto-rebuild).

## Before this goes live — a few things to double check

- **Affiliate links**: every `affiliateUrl` in `apps.js` is still a
  placeholder (`example.com/...`). Swap in your real tracked links before
  launch.
- **Age verification**: this template does not include an age gate.
  Check what your affiliate networks (and your payment/ad partners)
  require for adult-content sites — some require a click-through gate
  on entry.
- **Disclosure page**: `/disclosure` has generic wording. Review it against
  what your specific affiliate program requires you to disclose.
- **Domain**: update `site.domain` in `apps.js` so canonical URLs and
  metadata point to your real domain instead of the placeholder.

## Project structure

```
src/
  data/apps.js          <- edit this for content
  layouts/Layout.astro  <- page shell, SEO meta, fonts
  components/
    Header.astro
    Footer.astro
    RankCard.astro      <- the ranked listing card
  pages/
    index.astro          <- homepage / ranking
    disclosure.astro
    reviews/[slug].astro <- review page template (one per app, auto-generated)
public/
  images/                <- put your product images here
```
