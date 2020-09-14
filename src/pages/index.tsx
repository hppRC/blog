import React from 'react';
import { SEO } from 'src/components';
import { useAllPosts } from 'src/hooks';

import type { PageProps } from 'gatsby';

type Props = {
  posts: Post[];
};

const Component: React.FC<Props> = () => <h1 className=''>this is test</h1>;

const Container: React.FC<PageProps> = ({ path }) => {
  const nodes = useAllPosts();
  return (
    <>
      <SEO title='Top' pathname={path} />
      <Component posts={nodes} />
    </>
  );
};

export default Container;
