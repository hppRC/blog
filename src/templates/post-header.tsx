import { Link } from 'gatsby';
import React from 'react';
import { normalizeTag } from 'src/lib';

type PostHeaderProps = {
  title: string;
  tags: string[];
  date: string;
};

export const PostHeader: React.FC<PostHeaderProps> = ({ title, tags, date }) => (
  <div className='pb-4'>
    <h1 className='pt-4 pb-8 mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight break-all'>{title}</h1>
    <ul className='flex overflow-scroll no-scrollbar'>
      {Array.from(new Set(tags)).map((tagName) => (
        <li className='rounded border border-gray-800 mr-2 hover:bg-gray-200' key={tagName}>
          <Link
            className='block whitespace-no-wrap text-xs font-bold px-1 lg:px-2 lg:py-1'
            to={`/tags/${normalizeTag(tagName)}`}
          >
            {tagName}
          </Link>
        </li>
      ))}
    </ul>
    <p className='p-0.5 md:py-1 font-medium'>{date}</p>
  </div>
);
