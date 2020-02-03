import sindreSlugify, { Options } from '@sindresorhus/slugify';

const occurrences: Map<string, number> = new Map();
const defaultOpts = { decamelize: false };

export const slugify = (string: string, options?: Options): string => {
  let slug = sindreSlugify(string, { ...defaultOpts, ...options });
  const slugLower = slug.toLowerCase();
  const numberless =
    occurrences.get(slugLower.replace(/(?:-\d+?)+?$/, '')) ?? 0;
  const counter = occurrences.get(slugLower);
  occurrences.set(slugLower, typeof counter === 'number' ? counter + 1 : 1);
  const newCounter = occurrences.get(slugLower) ?? 2;
  return newCounter >= 2 || numberless > 2 ? `${slug}-${newCounter}` : slug;
};

slugify.reset = () => {
  occurrences.clear();
};
