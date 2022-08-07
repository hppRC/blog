import React from 'react';
import Helmet from 'react-helmet';
import { useAnyImage, useSiteBuildTime, useSiteMetadata } from 'src/hooks';

type Props = {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
};

export const SEO: React.FC<Props> = ({ title = ``, description = ``, pathname = ``, image = `` }) => {
  const siteMetadata = useSiteMetadata();
  const buildTime = useSiteBuildTime();
  const iconPNG = useAnyImage(`icon.png`);
  const iconJPG = useAnyImage(`icon.jpg`);
  const bannerPNG = useAnyImage(`banner.png`);
  const bannerJPG = useAnyImage(`banner.jpg`);

  const icon = iconPNG || iconJPG;
  const banner = bannerPNG || bannerJPG;

  const {
    siteTitle,
    siteTitleAlt: defaultTitle,
    siteUrl,
    siteDescription: defaultDescription,
    siteLanguage,
    author,
    social = {},
  } = siteMetadata;

  const { twitter, github, qiita } = social;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: `${siteUrl}${image || ``}`,
  };

  // JSON+LD configurations
  const jsonLdAuthor = [
    {
      '@type': `Person`,
      name: author,
      description: defaultDescription,
      image: {
        '@type': `ImageObject`,
        url: icon?.images?.fallback?.src,
        width: 60,
        height: 60,
      },
      url: siteUrl,
      sameAs: [twitter, github, qiita],
    },
    {
      '@type': `thing`,
      name: author,
      sameas: siteTitle,
      url: siteUrl,
      image: {
        '@type': `ImageObject`,
        url: banner?.images?.fallback?.src,
        width: 60,
        height: 60,
      },
    },
  ];

  const publisher = {
    '@type': `Organization`,
    name: author,
    description: defaultDescription,
    logo: {
      '@type': `ImageObject`,
      url: icon?.images?.fallback?.src,
      width: 60,
      height: 60,
    },
  };

  const jsonLdConfigs: JsonLdConfig = [
    {
      '@context': `http://schema.org`,
      '@type': `WebSite`,
      inLanguage: siteLanguage,
      url: siteTitle,
      name: title,
      alternateName: seo.title,
      image: seo.image,
      description: seo.description,
      author: jsonLdAuthor,
      publisher,
      potentialAction: {
        '@type': `SearchAction`,
        target: `${siteUrl}/search?q={q}`,
        'query-input': `required name=q`,
      },
    },
  ];

  if (pathname !== `/`) {
    jsonLdConfigs.push({
      '@context': `http://schema.org`,
      '@type': `BreadcrumbList`,
      itemListElement: [
        {
          '@type': `ListItem`,
          position: 1,
          item: {
            '@id': seo.url,
            name: seo.title,
            image: seo.image,
          },
        },
      ],
    });

    jsonLdConfigs.push({
      '@context': `http://schema.org`,
      '@type': `BlogPosting`,
      url: seo.url,
      name: title,
      alternateName: seo.title,
      headline: title,
      image: {
        '@type': `ImageObject`,
        url: seo.image,
      },
      description,
      datePublished: buildTime,
      dateModified: buildTime,
      mainEntityOfPage: {
        '@type': `WebPage`,
        '@id': seo.url,
      },
      author: jsonLdAuthor,
      publisher,
    });
  }

  return (
    <Helmet title={title} defaultTitle={defaultTitle} titleTemplate={`%s | ${siteTitle}`}>
      <html lang={siteLanguage} />

      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />

      <meta property='og:type' content='website' />
      <meta property='og:title' content={seo.title} />
      <meta property='og:url' content={seo.url} />
      <meta property='og:description' content={seo.description} />
      <meta property='og:image' content={seo.image} />
      <meta property='og:image:alt' content={seo.description} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={seo.title} />
      <meta name='twitter:url' content={seo.url} />
      <meta name='twitter:description' content={seo.description} />
      <meta name='twitter:image' content={seo.image} />
      <meta name='twitter:image:alt' content={seo.description} />
      <meta name='twitter:creator' content={author} />
      <script type='application/ld+json'>{JSON.stringify(jsonLdConfigs)}</script>
    </Helmet>
  );
};
