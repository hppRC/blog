import React from 'react';
import { ArticleCard, SEO, SideContents } from 'src/components';

type ContainerProps = { pageContext: PostsByTagPageContext; path: string };
type Props = {
  posts: Post[];
  tagName: string;
  path: string;
};

const Component: React.FCX<Props> = ({ tagName, posts, path }) => (
  <div className='lg:grid lg:grid-cols-5 pb-12 mx-auto w-full'>
    <div className='col-start-2 col-span-3'>
      <h1 className='pt-4 lg:py-4 text-2xl lg:text-4xl font-extrabold leading-tight break-all'>{tagName}</h1>
      <ul>
        {posts.map((post) => (
          <li className='border-b border-gray-300' key={`${post.slug} + ${post.frontmatter.date}`}>
            <ArticleCard post={post} />
          </li>
        ))}
      </ul>
    </div>
    <div className='lg:pl-4'>
      <SideContents path={path} title={tagName} />
    </div>
  </div>
);

const Container: React.FCX<ContainerProps> = ({ pageContext, path }) => {
  const { posts, tagName }: PostsByTagPageContext = pageContext;

  return (
    <>
      <SEO title={tagName} pathname={path} />
      <Component tagName={tagName} posts={posts} path={path} />
    </>
  );
};

export default Container;
