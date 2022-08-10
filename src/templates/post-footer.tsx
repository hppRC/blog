import { Link } from 'gatsby';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'src/components';

type PostFooterProps = {
  next?: Post;
  previous?: Post;
  slug: string;
};

export const PostFooter: React.FCX<PostFooterProps> = ({ next, previous, slug }) => (
  <div>
    <div className='py-8'>
      <ExternalLink href={`https://github.com/hppRC/blog/blob/main/contents/posts/${slug}.md`} className=''>
        <div className='inline-block underline'>
          <div className='flex hover:opacity-50'>
            <i className='mr-1'>
              <FaGithub fontSize='24' />
            </i>
            View source on GitHub
          </div>
        </div>
      </ExternalLink>
    </div>
    <div className='lg:flex w-full justify-between lg:py-16'>
      <p className='lg:w-1/2 py-2 text-sm underline'>
        {next && (
          <Link className='hover:opacity-50' to={`/posts/${next?.slug}`}>
            {`← ${next?.frontmatter?.title}`}
          </Link>
        )}
      </p>
      <p className='lg:w-1/2 py-2 text-sm underline text-right'>
        {previous && (
          <Link className='hover:opacity-50' to={`/posts/${previous?.slug}`}>
            {`${previous?.frontmatter?.title} →`}
          </Link>
        )}
      </p>
    </div>
  </div>
);
