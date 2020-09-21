import { Link } from 'gatsby';
import React from 'react';

type Props = { post: Post };

export const ArticleCard: React.FC<Props> = ({ post: { excerpt, frontmatter, slug } }) => (
  <section className='py-4'>
    <Link to={`/posts/${slug}`}>
      <h2 className='font-bold inline-block lg:py-2 text-2xl lg:text-3xl hover:opacity-50'>{frontmatter?.title}</h2>
    </Link>
    <div className='flex py-2'>
      <p className='font-medium mr-2'>{frontmatter?.date}</p>
      <ul className='flex overflow-scroll'>
        {Array.from(new Set(frontmatter.tags)).map((tagName) => (
          <Link
            key={`${slug}/${tagName}`}
            className='flex mx-2 rounded border border-gray-900 hover:bg-gray-200'
            to={`/tags/${tagName}`}
          >
            <li className='whitespace-no-wrap text-center my-auto text-xs px-1 font-bold'>{tagName}</li>
          </Link>
        ))}
      </ul>
    </div>
    <p className='hidden lg:block py-2 leading-relaxed'>{excerpt}</p>
    <p className='lg:hidden py-2 leading-relaxed'>{`${excerpt.slice(0, 100)}...`}</p>
    <div className='text-right py-2 lg:px-2'>
      <Link className='hover:opacity-50 rounded p-3 bg-gray-900 text-white' to={`/posts/${slug}`}>
        view more
      </Link>
    </div>
  </section>
);
