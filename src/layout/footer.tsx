import React, { memo } from 'react';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'src/components';

export const Footer: React.FC = memo(() => (
  <footer
    id='footer'
    className='p-4 pb-8 lg:pb-4 lg:text-base flex flex-col items-center justify-center w-full h-16 sm:h-20 text-center border-t border-grey'
  >
    <div className='text-sm leading-relaxed py-1 lg:py-0'>This site uses Google Analytics.</div>
    <div className='text-sm flex items-center leading-relaxed py-1 lg:py-0'>
      ©2021
      <ExternalLink className='text-sm underline hover:opacity-50 mx-1' href='https://twitter.com/hpp_ricecake'>
        hpp_ricecake
      </ExternalLink>
      <ExternalLink
        className='text-sm underline hover:opacity-50 mr-1'
        href='https://github.com/hppRC'
        aria-label='GitHub'
      >
        <i>
          <FaGithub className='text-gray-800' fontSize='18' />
        </i>
      </ExternalLink>
      built with
      <ExternalLink className='text-sm underline hover:opacity-50 mx-1' href='https://www.gatsbyjs.com/'>
        Gatsby.js
      </ExternalLink>
    </div>
  </footer>
));
