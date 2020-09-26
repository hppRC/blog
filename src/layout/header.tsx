import { Link } from 'gatsby';
import React from 'react';
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
  <ExternalLink href='https://hpprc.dev'>
    <i>
      <IoMdDocument fontSize='34' />
    </i>
  </ExternalLink>
);

const GitHubIcon = () => (
  <ExternalLink href='https://github.com/hppRC'>
    <i>
      <FaGithub fontSize='32' />
    </i>
  </ExternalLink>
);

const TwitterIcon: React.FC = () => (
  <ExternalLink href='https://twitter.com/hpp_ricecake'>
    <i>
      <FaTwitter fontSize='32' />
    </i>
  </ExternalLink>
);

export const Header: React.FC = () => (
  <header className='border-b w-full h-12 lg:h-16 lg:px-4'>
    <nav className='flex pl-2 lg:px-0 h-full max-w-screen-xl mx-auto items-center justify-between'>
      <Link to='/' className=''>
        <h1 className='hidden xs:block font-extrabold text-2xl lg:text-3xl'>blog.hpprc.dev</h1>
        <h1 className='xs:hidden font-extrabold text-2xl lg:text-3xl'>hpprc.dev</h1>
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
);
