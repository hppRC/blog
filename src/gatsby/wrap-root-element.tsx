import type { WrapRootElementBrowserArgs } from 'gatsby';
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import { Layout } from 'src/layout';

import { MDXProvider } from '@mdx-js/react';

export const wrapRootElement: React.FC<WrapRootElementBrowserArgs> = ({ element }) => {
  if (typeof window !== `undefined`) {
    // eslint-disable-next-line global-require
    require(`smooth-scroll`)(`a[href*="#"]`);
  }
  return (
    <MDXProvider
      components={{
        h1: (props) => (
          <h1 {...props} className='text-2xl lg:text-4xl font-bold pt-6 lg:pt-12 mb-8 border-b-2 border-indigo-500' />
        ),
        h2: (props) => (
          <h2 {...props} className='text-xl lg:text-3xl font-bold pt-6 lg:pt-12 mb-8 border-b-2 border-indigo-500' />
        ),
        h3: (props) => (
          <h3 {...props} className='text-xl lg:text-2xl font-bold pt-6 lg:pt-12 mb-8 border-b-2 border-indigo-500' />
        ),
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        a: (props) => <a {...props} className='underline font-bold text-indigo-500' />,
        p: (props) => <p {...props} className='mb-8 leading-loose' />,
      }}
    >
      <Layout>{element}</Layout>
    </MDXProvider>
  );
};
