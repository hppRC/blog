import { Link } from 'gatsby';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'src/components';

type PostFooterProps = {
  next?: Post;
  previous?: Post;
  pathFromProjectRoot: string;
};

export const PostFooter: React.FCX<PostFooterProps> = ({ next, previous, pathFromProjectRoot }) => (
  <div>
    <div className='py-8'>
      <ExternalLink href={`https://github.com/hppRC/blog/tree/master/${pathFromProjectRoot}`} className=''>
        <div className='inline-block underline'>
          <div className='flex hover:opacity-50'>
            <i className='mr-1'>
              <FaGithub fontSize='24' />
            </i>
            View on GitHub
          </div>
        </div>
      </ExternalLink>
    </div>
    <div className='flex w-full justify-between py-16'>
      <p className='w-1/2 my-1 text-sm underline'>
        <Link className='hover:opacity-50' to={`/posts/${next?.slug}`}>
          {next && `← ${next?.frontmatter?.title}`}
        </Link>
      </p>
      <p className='w-1/2 my-1 text-sm underline text-right'>
        <Link className='hover:opacity-50' to={`/posts/${previous?.slug}`}>
          {previous && `${previous?.frontmatter?.title} →`}
        </Link>
      </p>
    </div>
  </div>
);
