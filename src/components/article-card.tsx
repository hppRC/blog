import React from 'react';
import { Link } from 'gatsby';
import { normalizeTag } from 'src/lib';

type Props = { post: Post };

export const ArticleCard: React.FC<Props> = ({ post: { excerpt, frontmatter, slug } }) => (
  <section className='py-4 lg:pb-8 lg:pt-0'>
    <Link to={`/posts/${slug}`}>
      <h2 className='inline-block pb-2 text-2xl sm:text-3xl lg:text-4xl hover:opacity-50 font-extrabold leading-tight'>
        {frontmatter?.title}
      </h2>
    </Link>
    <ul className='py-0.5 flex overflow-scroll'>
      {Array.from(new Set(frontmatter.tags)).map((tagName) => (
        <li className='rounded border border-gray-800 mr-2 hover:bg-gray-200' key={`${slug}/${tagName}`}>
          <Link
            className='block whitespace-no-wrap text-xs font-bold px-1 lg:px-2 lg:py-1'
            to={`/tags/${normalizeTag(tagName)}`}
          >
            {tagName}
          </Link>
        </li>
      ))}
    </ul>
    <p className='p-0.5 md:py-1 font-medium'>{frontmatter?.date}</p>
    <p className='hidden lg:block py-2 leading-relaxed'>{`${excerpt.slice(0, 200)}...`}</p>
    <p className='hidden sm:block lg:hidden py-2 leading-relaxed'>{`${excerpt.slice(0, 150)}...`}</p>
    <p className='sm:hidden py-1 leading-relaxed'>{`${excerpt.slice(0, 120)}...`}</p>
    <div className='text-right p-2'>
      <Link className='hover:opacity-50 rounded p-2 bg-gray-900 text-white' to={`/posts/${slug}`}>
        view more
      </Link>
    </div>
  </section>
);
