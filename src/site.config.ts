// Central brand + monetization settings. Change the name here and it updates site-wide.
export const SITE = {
  name: 'AI Tool Compass',
  tagline: 'Find the right AI tool for the job',
  description:
    'Independent directory of AI tools with honest summaries, pricing, pros and cons, alternatives and side-by-side comparisons.',
  author: 'AI Tool Compass Editorial',
  adsenseClient: import.meta.env.PUBLIC_ADSENSE_CLIENT ?? '',
  gaId: import.meta.env.PUBLIC_GA_ID ?? '',
};

export const NAV = [
  { href: '/tools/', label: 'All tools' },
  { href: '/compare/', label: 'Compare' },
  { href: '/blog/', label: 'Blog' },
  { href: '/about/', label: 'About' },
];
