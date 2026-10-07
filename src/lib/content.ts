import { getCollection, type CollectionEntry } from 'astro:content';

export type Tool = CollectionEntry<'tools'>;
export type Comparison = CollectionEntry<'comparisons'>;

export async function getTools(): Promise<Tool[]> {
  const tools = await getCollection('tools');
  return tools.sort(
    (x, y) => Number(y.data.featured) - Number(x.data.featured) || x.data.name.localeCompare(y.data.name),
  );
}

export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((x, y) => y.data.pubDate.valueOf() - x.data.pubDate.valueOf());
}

export async function getComparisons() {
  const [comparisons, tools] = await Promise.all([getCollection('comparisons'), getTools()]);
  const byId = new Map(tools.map((t) => [t.id, t]));
  return comparisons.map((entry) => {
    const a = byId.get(entry.data.a);
    const b = byId.get(entry.data.b);
    if (!a || !b) throw new Error(`Comparison "${entry.id}" references an unknown tool id`);
    return { entry, a, b };
  });
}

// Alternatives pages are only generated when there is enough to list, to avoid thin pages.
export const MIN_ALTERNATIVES = 2;
export const alternativesFor = (tool: Tool, all: Tool[]) =>
  all.filter((t) => t.id !== tool.id && t.data.category === tool.data.category);

export function outbound(tool: Tool) {
  const isAffiliate = Boolean(tool.data.affiliateUrl);
  return {
    href: tool.data.affiliateUrl ?? tool.data.url,
    rel: isAffiliate ? 'sponsored nofollow noopener' : 'noopener',
    isAffiliate,
  };
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

export const breadcrumbLd = (site: URL | undefined, items: { name: string; href: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: new URL(item.href, site).href,
  })),
});

export const faqLd = (faq: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
});
