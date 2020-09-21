import React from 'react';
import { ArticleCard, SEO, SideContents } from 'src/components';
import { useAllPosts } from 'src/hooks';

import type { PageProps } from 'gatsby';

type Props = {
  posts: Post[];
  path: string;
};

const Component: React.FC<Props> = ({ posts, path }) => (
  <div className='lg:grid lg:grid-cols-5 pb-12 mx-auto w-full'>
    <div className='col-start-2 col-span-3'>
      <h1 className='py-4 text-2xl lg:text-4xl font-extrabold leading-tight'>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li className='border-b border-gray-300' key={`${post.slug} + ${post.frontmatter.date}`}>
            <ArticleCard post={post} />
          </li>
        ))}
      </ul>
    </div>
    <div className='lg:pl-4'>
      <SideContents path={path} title='Posts' />
    </div>
  </div>
);

const Container: React.FC<PageProps> = ({ path }) => {
  const posts = useAllPosts();
  return (
    <>
      <SEO title='Posts' pathname={path} />
      <Component posts={posts} path={path} />
    </>
  );
};

export default Container;
