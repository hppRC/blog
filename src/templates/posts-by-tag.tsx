import { Link } from 'gatsby';
import React from 'react';
import { SEO } from 'src/components';

type ContainerProps = { pageContext: PostsByTagPageContext; path: string };
type Props = {
  posts: Post[];
  tagName: string;
};

const Component: React.FCX<Props> = ({ className, tagName, posts }) => (
  <main className={className}>
    <ul>
      {posts.map(({ excerpt, slug }) => (
        <Link key={slug} to={`/posts/${slug}`}>
          <li>
            {tagName}
            {excerpt}
          </li>
        </Link>
      ))}
    </ul>
  </main>
);

const Container: React.FCX<ContainerProps> = ({ pageContext, path }) => {
  const { posts, tagName }: PostsByTagPageContext = pageContext;

  return (
    <>
      <SEO title={tagName} pathname={path} />
      <Component tagName={tagName} posts={posts} />
    </>
  );
};

export default Container;
