import tailwindcss from 'tailwindcss';

import tailwindConfig from '../../tailwind.config';

const siteTitle = `hpp blog`;
const siteDescription = `Personal blog`;

const siteMetadata = {
  siteTitle,
  siteTitleAlt: `hpp blog - @hppRC/blog`,
  siteHeadline: `@hppRC's blog`,
  siteUrl: `https://blog.hpprc.com`,
  siteDescription,
  siteLanguage: `ja`,
  siteImage: `/banner.jpg`,
  author: `@hpp_ricecake`, // twitter account id
  basePath: `/`,
  social: {
    twitter: `https://twitter.com/hpp_ricecake`,
    github: `https://github.com/hppRC`,
    qiita: `https://qiita.com/hppRC`,
  },
};

const mdxPlugins = {
  resolve: `gatsby-plugin-mdx`,
  options: {
    extensions: [`.mdx`, `.md`],
    gatsbyRemarkPlugins: [
      {
        resolve: `gatsby-remark-autolink-headers`,
        options: {
          offsetY: `500`,
          icon: false,
          className: `autolink-headers`,
        },
      },
      {
        resolve: `gatsby-remark-external-links`,
        options: {
          target: `_blank`,
          rel: `noopener noreferrer`,
        },
      },
      `gatsby-remark-relative-images`,
      {
        resolve: `gatsby-remark-images`,
        options: {
          maxWidth: 1400,
          quality: 90,
          linkImagesToOriginal: true,
        },
      },
      {
        resolve: `gatsby-remark-prismjs`,
        options: {
          classPrefix: `language-`,
          inlineCodeMarker: null,
          aliases: {},
          showLineNumbers: true,
          noInlineHighlight: false,
        },
      },
    ],
  },
};

export default {
  siteMetadata,
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: { checkSupportedExtensions: false },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [tailwindcss, tailwindConfig],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `contents/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `contents/assets`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-root-import`,
    mdxPlugins,
  ],
};
