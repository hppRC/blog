import React from 'react';

import { Ad } from './ad';
import { NewPosts } from './new-posts';
import { ShareButtons } from './share-buttons';
import { TableOfContents } from './table-of-contents';

type Props = {
  path: string;
  title: string;
  headings?: {
    value: string;
    depth: number;
  }[];
};

// when you memolize this, you'll get an error to jump headdings(you will be able to jump only once)
export const SideContents: React.FCX<Props> = ({ headings, path, title }) => {
  const slug = path.split(`/`).pop() || ``;
  return (
    <div className='sticky top-0 pt-8'>
      {headings && <TableOfContents headings={headings} path={path} title={title} />}
      <NewPosts slug={slug} />
      <ShareButtons path={path} title={title} />
      <Ad />
    </div>
  );
};
