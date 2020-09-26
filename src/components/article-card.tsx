import { Link } from 'gatsby';
import React from 'react';

type Props = { post: Post };

export const ArticleCard: React.FC<Props> = ({ post: { excerpt, frontmatter, slug } }) => (
  <section className='py-4 lg:pb-8 lg:pt-0'>
    <Link to={`/posts/${slug}`}>
      <h2 className='inline-block pb-4 text-2xl sm:text-3xl lg:text-4xl hover:opacity-50 font-extrabold'>
        {frontmatter?.title}
      </h2>
    </Link>
    <ul className='flex overflow-scroll'>
      {Array.from(new Set(frontmatter.tags)).map((tagName) => (
        <Link
          key={`${slug}/${tagName}`}
          className='block rounded border border-gray-800 mr-2 hover:bg-gray-200'
          to={`/tags/${tagName}`}
        >
          <li className='whitespace-no-wrap inline-block text-xs px-1 lg:px-2 lg:pb-1 font-bold'>{tagName}</li>
        </Link>
      ))}
    </ul>
    <p className='p-1 font-medium'>{frontmatter?.date}</p>
    <p className='hidden lg:block py-2 leading-relaxed'>{excerpt}</p>
    <p className='hidden sm:block lg:hidden py-2 leading-relaxed'>{`${excerpt.slice(0, 200)}...`}</p>
    <p className='sm:hidden py-2 leading-relaxed'>{`${excerpt.slice(0, 100)}...`}</p>
    <div className='text-right py-2 lg:px-2'>
      <Link className='hover:opacity-50 rounded p-3 bg-gray-900 text-white' to={`/posts/${slug}`}>
        view more
      </Link>
    </div>
  </section>
);
