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
    <div className='pb-6 px-2 md:px-0 lg:px-2'>
      <p className='font-medium'>Table of Contents</p>
      <ul className='text-sm'>
        {headings?.map(({ value, depth }) => (
          <Link className='block hover:bg-gray-300 px-2 my-1' key={value} to={`${path}#${slugger.slug(value)}`}>
            <li className='truncate' style={{ paddingLeft: `${(depth - 1) * 1.2}rem` }}>
              {value}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
