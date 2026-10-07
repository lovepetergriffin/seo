export const CATEGORIES = [
  {
    slug: 'chatbots',
    name: 'AI Chatbots & Assistants',
    short: 'Chatbots',
    description: 'General-purpose AI assistants for answering questions, drafting, analysis and research.',
    intro:
      'General-purpose assistants are where most people start with AI. They differ less in raw capability than in how they fit your work: which apps they connect to, how they handle long documents, and whether they cite sources. Pick the one that matches the tasks you repeat every week.',
  },
  {
    slug: 'writing',
    name: 'AI Writing Tools',
    short: 'Writing',
    description: 'Tools for drafting, rewriting, proofreading and scaling marketing copy.',
    intro:
      'Writing tools sit on top of the same large language models as chatbots, but add templates, brand voice controls and editors built for a specific job. They earn their price when a team needs consistent output, not when you just need one paragraph fixed.',
  },
  {
    slug: 'image',
    name: 'AI Image Generators',
    short: 'Image',
    description: 'Text-to-image and image editing tools for art, marketing visuals and product shots.',
    intro:
      'Image generators trade off three things: visual quality out of the box, control over the result, and how safe the output is to use commercially. Hosted tools are fastest to start with; open models reward the time you put into them.',
  },
  {
    slug: 'video',
    name: 'AI Video Tools',
    short: 'Video',
    description: 'Generate clips, AI avatars and edits without a camera crew or a timeline.',
    intro:
      'AI video splits into two camps: generative tools that create footage from a prompt, and production tools that speed up editing or replace a presenter with an avatar. Know which problem you have before comparing prices.',
  },
  {
    slug: 'coding',
    name: 'AI Coding Assistants',
    short: 'Coding',
    description: 'Editors, agents and autocomplete that write, explain and refactor code.',
    intro:
      'Coding assistants range from inline autocomplete to agents that plan and edit across a whole repository. The best choice depends on your editor, your codebase size and how much autonomy you want to hand over.',
  },
  {
    slug: 'audio',
    name: 'AI Voice & Music Tools',
    short: 'Audio',
    description: 'Text-to-speech, voice cloning and music generation.',
    intro:
      'Voice and music models have improved quickly, and licensing terms matter as much as sound quality. Check what each plan lets you do commercially before you publish anything.',
  },
  {
    slug: 'productivity',
    name: 'AI Productivity Tools',
    short: 'Productivity',
    description: 'Meeting notes, presentations, workspace assistants and automation.',
    intro:
      'Productivity tools put AI inside the work you already do: meetings, documents, slides and the glue between apps. The value is in time saved on routine tasks, so favour the tool that lives where your team already works.',
  },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];
export const CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug) as [CategorySlug, ...CategorySlug[]];
export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug)!;
