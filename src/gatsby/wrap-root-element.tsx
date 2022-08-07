import type { WrapRootElementBrowserArgs } from 'gatsby';
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import Helmet from 'react-helmet';
import { MDXProvider } from '@mdx-js/react';

import { Layout } from 'src/layout';

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
        p: (props) => <p {...props} className='mb-6 md:mb-8 leading-loose' />,
        ul: (props) => <ul {...props} className='list-disc pl-6 lg:pl-8 space-y-2' />,
        ol: (props) => <ol {...props} className='list-decimal pl-8 lg:pl-10 space-y-2' />,
        li: (props) => <li {...props} className='space-y-2' />,
        blockquote: (props) => (
          <blockquote
            {...props}
            className='bg-gray-50 border-l-2 border-gray-300 mb-8 py-2 pl-3 mr-1 pr-3 md:ml-3 md:pr-3 md:mr-3 md:pr-4 lg:pl-4 lg:pr-4 lg:mr-4'
          />
        ),
      }}
    >
      <Helmet>
        <script async src='//cdn.iframe.ly/embed.js' charSet='utf-8' />
      </Helmet>
      <Layout>{element}</Layout>
    </MDXProvider>
  );
};
