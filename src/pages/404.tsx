import { Link } from 'gatsby';
import React from 'react';
import { ExternalLink, SEO, SideContents } from 'src/components';

import type { PageProps } from 'gatsby';

type Props = {
  path: string;
};

const Component: React.FC<Props> = ({ path }) => (
  <div className='px-4 sm:px-16 lg:px-0 lg:grid lg:grid-cols-5 pb-12 mx-auto w-full'>
    <div className='col-start-2 col-span-3'>
      <h1 className='pt-4 mb-8 lg:py-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight break-all'>
        404 NotFound
      </h1>
      <ul>
        <li className='py-2'>
          <Link className='underline text-indigo-600 font-bold hover:opacity-50' to='/'>
            Home
          </Link>
        </li>
        <li className='py-2'>
          <Link className='underline text-indigo-600 font-bold hover:opacity-50' to='/posts'>
            Posts
          </Link>
        </li>
        <li className='py-2'>
          <Link className='underline text-indigo-600 font-bold hover:opacity-50' to='/tags'>
            Tags
          </Link>
        </li>
        <li className='py-2'>
          <ExternalLink
            className='underline text-indigo-600 font-bold hover:opacity-50'
            href='https://blog.hpprc.dev/rss.xml'
          >
            RSS
          </ExternalLink>
        </li>
        <li className='py-2'>
          <ExternalLink className='underline text-indigo-600 font-bold hover:opacity-50' href='https://hpprc.dev'>
            Profile page
          </ExternalLink>
        </li>
        <li className='py-2'>
          <ExternalLink
            className='underline text-indigo-600 font-bold hover:opacity-50'
            href='https://generative-react.hpprc.com'
          >
            Artworks
          </ExternalLink>
        </li>
        <li className='py-2'>
          <ExternalLink
            className='underline text-indigo-600 font-bold hover:opacity-50'
            href='https://twitter.com/hpp_ricecake'
          >
            Twitter: @hpp_ricecake
          </ExternalLink>
        </li>
        <li className='py-2'>
          <ExternalLink
            className='underline text-indigo-600 font-bold hover:opacity-50'
            href='https://github.com/hppRC'
          >
            GitHub: hppRC
          </ExternalLink>
        </li>
      </ul>
    </div>
    <div className='lg:pl-4'>
      <SideContents path={path} title='Posts' />
    </div>
  </div>
);

const Container: React.FC<PageProps> = ({ path }) => (
  <>
    <SEO title='NotFound' pathname={path} />
    <Component path={path} />
  </>
);

export default Container;
