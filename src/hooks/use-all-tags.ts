import { normalizeTag } from 'src/lib';
import { useAllPosts } from './use-all-posts';

export const useAllTags = (): string[] => {
  const nodes = useAllPosts();
  const tags = new Set<string>();

  nodes.forEach(({ frontmatter }) => {
    frontmatter.tags?.map(normalizeTag).forEach((tag) => tags.add(tag));
  });

  return Array.from(tags.values());
};
