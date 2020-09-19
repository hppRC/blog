import tailwindcss from 'tailwindcss';

import tailwindConfig from '../../tailwind.config';

const siteTitle = `hpp blog`;
const siteDescription = `Personal blog`;

const siteMetadata = {
  siteTitle,
  siteTitleAlt: `hpp blog - @hppRC/blog`,
  siteHeadline: `@hppRC's blog`,
  siteUrl: `https://blog.hpprc.dev`,
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

type RSSQueryResult = {
  query: {
    site: SiteMetadata;
    allMdx: {
      nodes: MdxNode[];
    };
  };
};

const RSSFeedPlugin = {
  resolve: `gatsby-plugin-feed`,
  options: {
    query: `
    {
      site {
        siteMetadata {
          siteTitle
          siteDescription
          siteUrl
        }
      }
    }
  `,
    feeds: [
      {
        serialize: (result: RSSQueryResult): unknown => {
          const {
            query: { site, allMdx },
          } = result;
          const { siteUrl } = site.siteMetadata;
          return allMdx.nodes.map(({ excerpt, body, frontmatter }) => {
            const { slug, date } = frontmatter;
            return {
              ...frontmatter,
              description: excerpt,
              date,
              url: `${siteUrl}/posts/${slug}`,
              guid: `${siteUrl}/posts/${slug}`,
              custom_elements: [{ 'content:encoded': body }],
            };
          });
        },
        query: `
        {
          allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
            nodes {
              excerpt
              body
              frontmatter {
                title
                date
                slug
              }
            }
          }
        }
      `,
        output: `/rss.xml`,
        title: `${siteTitle} RSS feed`,
      },
    ],
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
      `gatsby-remark-katex`,
      `gatsby-remark-graphviz`,
      `gatsby-remark-code-titles`,
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
    RSSFeedPlugin,
  ],
};
