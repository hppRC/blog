import { Link } from 'gatsby';
import React, { memo } from 'react';
import { AiFillTags } from 'react-icons/ai';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { ImBlog } from 'react-icons/im';
import { IoMdDocument } from 'react-icons/io';
import { MdRssFeed } from 'react-icons/md';
import { ExternalLink } from 'src/components';

const TagsIcon: React.FC = () => (
  <Link to='/tags'>
    <i>
      <AiFillTags fontSize='32' />
    </i>
  </Link>
);

const PostsIcon: React.FC = () => (
  <Link to='/posts'>
    <i>
      <ImBlog fontSize='32' />
    </i>
  </Link>
);

const RssIcon: React.FC = () => (
  <ExternalLink href='/rss.xml'>
    <i>
      <MdRssFeed fontSize='36' />
    </i>
  </ExternalLink>
);

const DocumentIcon: React.FC = () => (
  <ExternalLink href='https://hpprc.dev' aria-label='ProfileSite'>
    <i>
      <IoMdDocument fontSize='34' />
    </i>
  </ExternalLink>
);

const GitHubIcon = () => (
  <ExternalLink href='https://github.com/hppRC' aria-label='GitHub'>
    <i>
      <FaGithub fontSize='32' />
    </i>
  </ExternalLink>
);

const TwitterIcon: React.FC = () => (
  <ExternalLink href='https://twitter.com/hpp_ricecake' aria-label='Twitter'>
    <i>
      <FaTwitter fontSize='32' />
    </i>
  </ExternalLink>
);

export const Header: React.FC = memo(() => (
  <header className='border-b w-full h-16 px-1 md:px-2 lg:px-4'>
    <nav className='flex pl-2 lg:px-0 h-16 max-w-screen-xl mx-auto items-center justify-between'>
      <Link to='/' className=''>
        <h1 className='hidden xs:block font-extrabold text-2xl md:text-3xl lg:text-4xl'>blog.hpprc.dev</h1>
        <h1 className='xs:hidden font-extrabold text-2xl'>hpprc.dev</h1>
      </Link>
      <ul className='flex items-center'>
        <li className='mx-1 hidden sm:block'>
          <RssIcon />
        </li>
        <li className='mx-1 hidden sm:block'>
          <PostsIcon />
        </li>
        <li className='mx-1 hidden sm:block'>
          <TagsIcon />
        </li>
        <li className='mx-1'>
          <DocumentIcon />
        </li>
        <li className='mx-1'>
          <GitHubIcon />
        </li>
        <li className='mx-2'>
          <TwitterIcon />
        </li>
      </ul>
    </nav>
  </header>
));
