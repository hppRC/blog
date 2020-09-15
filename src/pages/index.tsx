import React from 'react';
import { ArticleCard, SEO } from 'src/components';
import { useAllPosts } from 'src/hooks';

import type { PageProps } from 'gatsby';

type Props = {
  posts: Post[];
};

const Component: React.FC<Props> = ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <li key={`${post.frontmatter.slug} + ${post.frontmatter.date}`}>
        <ArticleCard post={post} />
      </li>
    ))}
  </ul>
);

const Container: React.FC<PageProps> = ({ path }) => {
  const posts = useAllPosts();
  return (
    <>
      <SEO title='Top' pathname={path} />
      <Component posts={posts} />
    </>
  );
};

export default Container;
