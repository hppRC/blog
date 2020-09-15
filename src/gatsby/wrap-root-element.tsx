/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import { Layout } from 'src/layout';

import { MDXProvider } from '@mdx-js/react';

export const wrapRootElement = ({ element }: { element: React.FC }): JSX.Element => {
  if (typeof window !== `undefined`) {
    // eslint-disable-next-line global-require
    require(`smooth-scroll`)(`a[href*="#"]`);
  }
  return (
    <MDXProvider
      components={{
        h1: (props) => <h1 {...props} className='text-2xl font-bold pt-8 pb-4' />,
        h2: (props) => <h2 {...props} className='text-xl font-bold pt-8 pb-4' />,
        h3: (props) => <h3 {...props} className='text-lg font-medium pt-8 pb-4' />,
      }}
    >
      <Layout>{element}</Layout>
    </MDXProvider>
  );
};
