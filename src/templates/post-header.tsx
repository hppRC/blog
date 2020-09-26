import { Link } from 'gatsby';
import React from 'react';

type PostHeaderProps = {
  title?: string;
  tags?: string[];
  date?: string;
};

export const PostHeader: React.FC<PostHeaderProps> = ({ title, tags, date }) => (
  <div className='pb-4'>
    <h1 className='py-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold'>{title}</h1>
    <ul className='flex overflow-scroll'>
      {Array.from(new Set(tags)).map((tagName) => (
        <Link
          key={tagName}
          className='block rounded border border-gray-800 mr-2 hover:bg-gray-200'
          to={`/tags/${tagName}`}
        >
          <li className='whitespace-no-wrap inline-block text-xs px-1 lg:px-2 lg:pb-1 font-bold'>{tagName}</li>
        </Link>
      ))}
    </ul>
    <p className='p-1 font-medium'>{date}</p>
  </div>
);
