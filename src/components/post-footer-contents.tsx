import { Link } from 'gatsby';
import React from 'react';

type Props = {
  next?: MdxNode;
  previous?: MdxNode;
};

export const PostFooterContents: React.FCX<Props> = ({ next, previous }) => (
  <div className='w-full flex justify-between py-4'>
    <Link to={`/posts/${next?.frontmatter.slug}`}>
      <div>{next?.excerpt}</div>
    </Link>
    <Link to={`/posts/${previous?.frontmatter.slug}`}>
      <div>{previous?.excerpt}</div>
    </Link>
  </div>
);
