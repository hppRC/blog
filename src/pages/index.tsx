import React from 'react';
import { ArticleCard, SEO } from 'src/components';
import { useAllPosts } from 'src/hooks';

import type { PageProps } from 'gatsby';

type Props = {
  posts: Post[];
};

const Component: React.FC<Props> = ({ posts }) => (
  <div className='px-4 sm:px-16 lg:px-0 lg:grid lg:grid-cols-5 pb-12 mx-auto w-full'>
    <ul className='lg:col-start-2 lg:col-span-3'>
      {posts.map((post) => (
        <li className='my-2 lg:my-4 border-b border-gray-300' key={post.slug}>
          <ArticleCard post={post} />
        </li>
      ))}
    </ul>
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
