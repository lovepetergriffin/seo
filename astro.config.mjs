import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonicals, sitemap and RSS all derive from this. Order: explicit SITE_URL, then the
// production domain Vercel exposes at build time (custom domain once you add one).
const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = process.env.SITE_URL || (vercelDomain ? `https://${vercelDomain}` : 'https://example.com');

export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
