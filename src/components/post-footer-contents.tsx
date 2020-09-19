import { Link } from 'gatsby';
import React from 'react';

type Props = {
  next?: MdxNode;
  previous?: MdxNode;
};

export const PostFooterContents: React.FCX<Props> = ({ next, previous }) => (
  <div className='w-full flex justify-between py-4'>
    <Link to={`/posts/${previous?.frontmatter.slug}`}>
      <p className='underline'>{previous?.frontmatter.title}</p>
    </Link>
    <Link className='block' to={`/posts/${next?.frontmatter.slug}`}>
      <p className='underline'>{next?.frontmatter.title}</p>
    </Link>
  </div>
);
