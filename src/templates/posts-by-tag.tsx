import React from 'react';
import { ArticleCard, SEO, SideContents } from 'src/components';

type ContainerProps = { pageContext: PostsByTagPageContext; path: string };
type Props = {
  posts: Post[];
  tagName: string;
  path: string;
};

const Component: React.FCX<Props> = ({ tagName, posts, path }) => (
  <div className='px-4 sm:px-16 lg:px-8 lg:grid lg:grid-cols-12 pb-12 mx-auto w-full'>
    <div className='lg:col-start-2 lg:col-span-8 xl:col-start-3 xl:col-span-7'>
      <h1 className='border-b border-gray-300 pt-4 pb-8 mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight break-all'>
        # {tagName}
      </h1>
      <ul className='md:py-8'>
        {posts.map((post) => (
          <li className='border-b border-gray-300' key={`${post.slug} + ${post.frontmatter.date}`}>
            <ArticleCard post={post} />
          </li>
        ))}
      </ul>
    </div>
    <div className='border-t lg:border-none lg:pr-2 lg:col-span-3'>
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
