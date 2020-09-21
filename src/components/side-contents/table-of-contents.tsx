import { Link } from 'gatsby';
import React from 'react';

const GithubSlugger = require(`github-slugger`);
const slugger = new GithubSlugger();

type Props = {
  path: string;
  title?: string;
  headings: {
    value: string;
    depth: number;
  }[];
};

export const TableOfContents: React.FC<Props> = ({ headings, path }) => {
  slugger.reset();
  return (
    <div className='border-b px-2'>
      <p className='font-medium'>Headdings</p>
      <ul className=''>
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
