import { Link } from 'gatsby';
import React from 'react';
import { SEO, SideContents } from 'src/components';
import { useAllTags } from 'src/hooks';

import type { PageProps } from 'gatsby';

type Props = {
  tags: string[];
};

const Component: React.FC<Props> = ({ tags }) => (
  <section className='px-4 sm:px-16 lg:px-0 lg:grid lg:grid-cols-5 pb-12 mx-auto w-full'>
    <div className='col-start-2 col-span-3'>
      <h1 className='border-b border-gray-300 pt-4 pb-8 mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight break-all'>
        Tags
      </h1>
      <ul className='md:py-8'>
        {tags.map((tagName) => (
          <li className='py-2 overflow-scroll no-scrollbar' key={tagName}>
            <Link
              className='whitespace-no-wrap underline text-indigo-600 font-bold hover:opacity-50'
              key={tagName}
              to={`/tags/${tagName}`}
            >
              {tagName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <div className='lg:pl-4'>
      <SideContents path='/tags' title='Tags' />
    </div>
  </section>
);

const Container: React.FC<PageProps> = ({ path }) => {
  const tags = useAllTags();
  return (
    <>
      <SEO title='Tags' pathname={path} />
      <Component tags={tags} />
    </>
  );
};

export default Container;
