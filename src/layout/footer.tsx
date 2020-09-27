import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'src/components';

export const Footer: React.FC = () => (
  <footer
    id='footer'
    className='p-4 pb-8 lg:pb-4 text-sm lg:text-base flex flex-col items-center justify-center w-full h-16 sm:h-20 text-center border-t border-grey'
  >
    <div className='leading-relaxed'>This site uses Google Analytics.</div>
    <div className='flex items-center leading-relaxed'>
      ©2020
      <ExternalLink className='underline hover:opacity-50 mx-1' href='https://twitter.com/hpp_ricecake'>
        hpp_ricecake
      </ExternalLink>
      <ExternalLink className='underline hover:opacity-50 mr-1' href='https://github.com/hppRC'>
        <i>
          <FaGithub className='text-gray-800' fontSize='18' />
        </i>
      </ExternalLink>
      built with
      <ExternalLink className='underline hover:opacity-50 mx-1' href='https://www.gatsbyjs.com/'>
        Gatsby.js
      </ExternalLink>
    </div>
  </footer>
);
