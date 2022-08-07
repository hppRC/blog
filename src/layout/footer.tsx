import React, { memo } from 'react';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'src/components';

export const Footer: React.FC = memo(() => (
  <footer
    id='footer'
    className='lg:p-4 text-xs flex flex-col items-center justify-center w-full h-full text-center border-t border-grey'
  >
    <div className=''>
      This site uses{` `}
      <ExternalLink
        className='underline hover:opacity-50 mr-1'
        href='https://policies.google.com/technologies/partner-sites'
      >
        Google Analytics
      </ExternalLink>
      .
    </div>
    <div className='flex items-center flex-col lg:flex-row'>
      <div className="flex">
        ©2022
        <ExternalLink className='underline hover:opacity-50 mx-1' href='https://twitter.com/hpp_ricecake'>
          hpp / Hayato Tsukagoshi
        </ExternalLink>
        <ExternalLink className='underline hover:opacity-50 mr-1' href='https://github.com/hppRC' aria-label='GitHub'>
          <i>
            <FaGithub className='text-gray-800' fontSize='16' />
          </i>
        </ExternalLink>
      </div>
      <div>
      Developed and designed by hpp.
      </div>
    </div>
    <div className='flex items-center'>
      Built with
      <ExternalLink className='underline hover:opacity-50 mx-1' href='https://www.gatsbyjs.com/'>
        Gatsby.js
      </ExternalLink>
      .
    </div>
  </footer>
));
