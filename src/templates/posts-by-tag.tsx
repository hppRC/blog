import { Link } from 'gatsby';
import React from 'react';
import { SEO } from 'src/components';

type ContainerProps = { pageContext: PostsByTagPageContext; path: string };
type Props = {
  posts: { frontmatter: Frontmatter; excerpt: string }[];
  tagName: string;
};

const Component: React.FCX<Props> = ({ className, tagName, posts }) => (
  <main className={className}>
    <ul>
      {posts.map(({ excerpt, frontmatter }) => {
        const { slug } = frontmatter;
        const fluid = frontmatter.cover?.childImageSharp.fluid;
        return (
          <Link to={`/posts/${slug}`}>
            <li key={slug}>
              {tagName}
              {excerpt}
            </li>
          </Link>
        );
      })}
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
