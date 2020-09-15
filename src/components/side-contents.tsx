import { Link } from 'gatsby';
import React from 'react';

const GithubSlugger = require(`github-slugger`);

const slugger = new GithubSlugger();

type Props = {
  path: string;
  headings: {
    value: string;
    depth: number;
  }[];
};

export const TableOfContents: React.FC<Props> = ({ headings, path }) => {
  slugger.reset();
  return (
    <ul className=''>
      {headings.map(({ value, depth }) => (
        <li className='hover:bg-gray-300 my-1' key={value} style={{ paddingLeft: `${(depth - 1) * 1.2}rem` }}>
          <Link className='block truncate' to={`${path}#${slugger.slug(value)}`}>
            {value}
          </Link>
        </li>
      ))}
    </ul>
  );
};

// when you memolize this, you'll get an error to jump headdings(you will be able to jump only once)
export const SideContents: React.FCX<Props> = ({ headings, path }) => (
  <div className='sticky top-0 pt-12'>
    <TableOfContents headings={headings} path={path} />
  </div>
);
