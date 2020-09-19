import { Link } from 'gatsby';
import React from 'react';
import { SEO } from 'src/components';
import { useAllTags } from 'src/hooks';

import type { PageProps } from 'gatsby';

type Props = {
  tags: string[];
};

const Component: React.FC<Props> = ({ tags }) => (
  <ul>
    {tags.map((tagName) => (
      <Link to={`/tags/${tagName}`}>
        <li key={tagName}>{tagName}</li>
      </Link>
    ))}
  </ul>
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
