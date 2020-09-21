import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'src/components';

export const Footer: React.FC = () => (
  <footer className='flex flex-col items-center justify-center w-full text-center border-t border-grey p-4 pin-b pointer-events-auto text-sm lg:text-base'>
    <div className='flex items-center'>
      Copyright©2020.
      <ExternalLink className='hover:opacity-50 mx-1' href='https://twitter.com/hpp_ricecake'>
        hpp_ricecake
      </ExternalLink>
      <ExternalLink className='hover:opacity-50' href='https://github.com/hppRC'>
        <i>
          <FaGithub className='text-gray-800' fontSize='18' />
        </i>
      </ExternalLink>
    </div>

    <div>
      Built with
      <ExternalLink className='hover:opacity-50 mx-1' href='https://www.gatsbyjs.com/'>
        Gatsby.js
      </ExternalLink>
    </div>
  </footer>
);
