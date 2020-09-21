/* eslint-disable indent */
/* eslint-disable prettier/prettier */

import React from 'react';
import {
    FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon,
    TwitterShareButton
} from 'react-share';
import { ExternalLink } from 'src/components';
import { useSiteMetadata } from 'src/hooks';

type HatebuProps = { url: string; title: string };

const HatebuButton: React.FCX<HatebuProps> = ({ className, url, title }) => (
  <button className={`${className} custom-hatebu-button`} type='button'>
    <ExternalLink href={`http://b.hatena.ne.jp/add?mode=confirm&url=${url}&title=${title}`}>B!</ExternalLink>
  </button>
);

export const ShareButtons: React.FC<{ slug: string; title?: string }> = ({ slug, title }) => {
  const { siteUrl, social } = useSiteMetadata();
  const twitter = social?.twitter || `https://twitter.com/hpp_ricecake`;
  const twitterAccount = twitter.split(`/`).pop(); // @hpp_ricecaeke -> hpp_ricecake
  const articleUrl = `${siteUrl}/posts/${slug}`;

  return (
    <div className='border-b px-2 py-4'>
      <p className='font-medium'>Share</p>
      <div className='flex center pt-2 px-2'>
        <FacebookShareButton url={articleUrl} className='mx-1 hover:opacity-50'>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <LinkedinShareButton url={articleUrl} className='mx-1 hover:opacity-50'>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <TwitterShareButton
          title={`${title}\n`}
          via={twitterAccount}
          url={articleUrl}
          className='mx-1 hover:opacity-50'
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <HatebuButton url={articleUrl} title={title || `hpp blog`} className='mx-1 hover:opacity-50' />
      </div>
    </div>
  );
};