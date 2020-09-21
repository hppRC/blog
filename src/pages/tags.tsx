import { Link } from 'gatsby';
import React from 'react';
import { SEO, SideContents } from 'src/components';
import { useAllTags } from 'src/hooks';

import type { PageProps } from 'gatsby';

type Props = {
  tags: string[];
};

const Component: React.FC<Props> = ({ tags }) => (
  <div>
    <ul>
      {tags.map((tagName) => (
        <Link key={tagName} to={`/tags/${tagName}`}>
          <li key={tagName}>{tagName}</li>
        </Link>
      ))}
    </ul>
    <div className='px-2'>
      <SideContents path='/tags' />
    </div>
  </div>
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
