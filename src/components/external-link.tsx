import React from 'react';

type ExternalLinkProps = {
  href: string;
};

export const ExternalLink: React.FC<ExternalLinkProps> = ({ children, ...props }) => (
  <a target='_blank' rel='noopener noreferrer' {...props}>
    {children}
  </a>
);
