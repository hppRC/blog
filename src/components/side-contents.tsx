/* eslint-disable indent */
/* eslint-disable prettier/prettier */

import { Link } from 'gatsby';
import React from 'react';
import {
    FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon,
    TwitterShareButton
} from 'react-share';
import { ExternalLink } from 'src/components';
import { useSiteMetadata } from 'src/hooks';

const GithubSlugger = require(`github-slugger`);

const slugger = new GithubSlugger();

type Props = {
  path: string;
  title?: string;
  headings: {
    value: string;
    depth: number;
  }[];
};

export const TableOfContents: React.FC<Props> = ({ headings, path }) => {
  slugger.reset();
  return (
    <ul className=''>
      {headings.map(({ value, depth }) => (
        <li className='hover:bg-gray-300 my-1' key={value} style={{ paddingLeft: `${(depth - 1) * 1.2}rem` }}>
          <Link className='px-4 block truncate' to={`${path}#${slugger.slug(value)}`}>
            {value}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const Ad: React.FC = () => <div className='p-4'>this is ad</div>;


type HatebuProps = { url: string; title: string };

const HatebuButton: React.FCX<HatebuProps> = ({ className, url, title }) => (
  <button className={className} id="custom-hatebu-button" type="button">
    <ExternalLink href={`http://b.hatena.ne.jp/add?mode=confirm&url=${url}&title=${title}`}>
      B!
    </ExternalLink>
  </button>
);

export const ShareButtons: React.FC<{path:string, title?: string}> = ({ path, title }) => {
  const { siteUrl, social } = useSiteMetadata();
  const { twitter = `https://twitter.com/hpp_ricecake` } = social;
  const twitterAccount = twitter.split(`/`).pop(); // @hpp_ricecaeke -> hpp_ricecake
  const slug = path.split(`/`).pop();
  const articleUrl = `${siteUrl}/posts/${slug}`;

  return (
    <div className="flex center mt-8 px-4">
      <FacebookShareButton url={articleUrl} className="mx-1">
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <LinkedinShareButton url={articleUrl} className="mx-1">
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <TwitterShareButton title={`${title}\n`} via={twitterAccount} url={articleUrl} className="mx-1">
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <HatebuButton url={articleUrl} title={title || `hpp blog`} className="mx-1" />
    </div>
  );
};

// when you memolize this, you'll get an error to jump headdings(you will be able to jump only once)
export const SideContents: React.FCX<Props> = ({ headings, path, title }) => (
  <div className='sticky top-0 pt-12'>
    <TableOfContents headings={headings} path={path} title={title} />
    <ShareButtons path={path} title={title} />
    <Ad />
  </div>
);
