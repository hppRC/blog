import React from 'react';
import { ArticleCard, SEO, SideContents } from 'src/components';
import { useAllPosts } from 'src/hooks';

import type { PageProps } from 'gatsby';

type Props = {
  posts: Post[];
};

const Component: React.FC<Props> = ({ posts }) => (
  <div className='lg:grid lg:grid-cols-5 pb-12 mx-auto w-full'>
    <ul className='col-start-2 col-span-3'>
      {posts.map((post) => (
        <li className='my-4 border-b border-gray-300' key={post.slug}>
          <ArticleCard post={post} />
        </li>
      ))}
    </ul>
    <div className='px-2'>
      <SideContents path='/' />
    </div>
  </div>
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
