import React from 'react';

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const ExternalLink: React.FCX<ExternalLinkProps> = ({ children, ...props }) => (
  <a target='_blank' rel='noopener noreferrer' {...props}>
    {children}
  </a>
);
