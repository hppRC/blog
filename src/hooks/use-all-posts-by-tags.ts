import { useAllPosts } from './use-all-posts';

export const useAllPostsByTags = (): PostsByTag => {
  const nodes = useAllPosts();
  const postsByTag: PostsByTag = {};

  nodes.forEach((node) => {
    node.frontmatter.tags?.forEach((tag) => {
      if (!postsByTag[tag]) postsByTag[tag] = [];

      postsByTag[tag].push(node);
    });
  });

  return postsByTag;
};
