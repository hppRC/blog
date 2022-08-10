import React, { memo } from 'react';

import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import { ExternalLink } from 'src/components';
import { useSiteMetadata } from 'src/hooks';

type HatebuProps = { url: string; title: string };

const HatebuButton: React.FCX<HatebuProps> = ({ className, url, title }) => (
  <button className={`${className} custom-hatebu-button`} type='button' aria-label='はてな'>
    <ExternalLink
      className='w-8 h-full flex items-center justify-center'
      href={`http://b.hatena.ne.jp/add?mode=confirm&url=${url}&title=${title}`}
    >
      B!
    </ExternalLink>
  </button>
);

export const ShareButtons: React.FC<{ title?: string; path?: string }> = memo(({ path, title }) => {
  const { siteUrl, social } = useSiteMetadata();
  const twitter = social?.twitter || `https://twitter.com/hpp_ricecake`;
  const twitterAccount = twitter.split(`/`).pop(); // @hpp_ricecaeke -> hpp_ricecake
  const articleUrl = `${siteUrl}${path}`;

  return (
    <div className='pt-4 pb-6 lg:px-2'>
      <p className='font-medium'>Share</p>
      <div className='flex center px-1 pt-2'>
        <FacebookShareButton url={articleUrl} className='mx-1 hover:opacity-50'>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <LinkedinShareButton url={articleUrl} className='mx-1 hover:opacity-50'>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <HatebuButton url={articleUrl} title={title || `blog.hpprc.dev`} className='mx-1 hover:opacity-50' />
        <TwitterShareButton
          title={`${title}\n`}
          via={twitterAccount}
          url={articleUrl}
          className='mx-1 hover:opacity-50'
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>
    </div>
  );
});
