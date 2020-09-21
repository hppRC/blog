import { Link } from 'gatsby';
import React from 'react';
import { SEO, SideContents } from 'src/components';
import { useAllTags } from 'src/hooks';

import type { PageProps } from 'gatsby';

type Props = {
  tags: string[];
};

const Component: React.FC<Props> = ({ tags }) => (
  <section className='lg:grid lg:grid-cols-5 pb-12 mx-auto w-full'>
    <div className='col-start-2 col-span-3'>
      <h1 className='py-4 text-2xl lg:text-4xl font-extrabold leading-tight'>Tags</h1>
      <ul className=''>
        {tags.map((tagName) => (
          <Link className='underline whitespace-no-wrap text-indigo-700' key={tagName} to={`/tags/${tagName}`}>
            <li className='overflow-scroll my-2 list-inside whitespace-no-wrap' key={tagName}>
              {tagName}
            </li>
          </Link>
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
