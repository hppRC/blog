import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'src/components';

export const Footer: React.FC = () => (
  <footer>
    Copyright©2020.
    <ExternalLink href='https://twitter.com/hpp_ricecake'>hpp</ExternalLink>
    <ExternalLink href='https://github.com/hppRC' aria-label='Github Link'>
      <i>
        <FaGithub />
      </i>
    </ExternalLink>
  </footer>
);
