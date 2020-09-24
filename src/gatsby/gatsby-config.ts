import tailwindcss from 'tailwindcss';

const tailwindConfig = require(`../../tailwind.config`);

const siteTitle = `hpp blog`;
const siteDescription = `Personal blog`;
const siteUrl = `https://blog.hpprc.dev`;

const siteMetadata = {
  siteTitle,
  siteTitleAlt: `hpp blog - @hppRC/blog`,
  siteHeadline: `@hppRC's personal blog`,
  siteUrl,
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
    site: { siteMetadata: SiteMetadata };
    allMdx: {
      nodes: Post[];
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
          return allMdx.nodes.map(({ excerpt, body, frontmatter, slug }) => ({
            ...frontmatter,
            description: excerpt,
            url: `${siteUrl}/posts/${slug}`,
            guid: `${siteUrl}/posts/${slug}`,
            custom_elements: [{ 'content:encoded': body }],
          }));
        },
        query: `
        {
          allMdx(filter: { slug: { ne: "dummy" } }, sort: { order: DESC, fields: [frontmatter___date] }) {
            nodes {
              excerpt
              body
              slug
              frontmatter {
                title
                date
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
      `gatsby-remark-embedder`,
    ],
  },
};

const SEOplugins = [
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-plugin-react-helmet-canonical-urls`,
    options: { siteUrl },
  },
  `gatsby-plugin-advanced-sitemap`,
  {
    resolve: `gatsby-plugin-robots-txt`,
    options: {
      host: siteUrl,
      sitemap: `${siteUrl}/sitemap.xml`,
      policy: [{ userAgent: `*`, allow: `/` }],
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      // replace "UA-XXXXXXXXX-X" with your own Tracking ID
      trackingId: `UA-149661454-2`,
    },
  },
  // gatsby-plugin-manifest should be described before gatsby-plugin-offline
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: siteTitle,
      short_name: siteTitle,
      description: siteDescription,
      Scope: `/`,
      start_url: `/?utm_source=homescreen`,
      background_color: `#fff`,
      theme_color: `#03030f`,
      display: `standalone`,
      // path from root directory
      icon: `contents/assets/icon.png`,
    },
  },
  `gatsby-plugin-offline`,
];

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
    ...SEOplugins,
    {
      resolve: `gatsby-plugin-webpack-bundle-analyzer`,
      options: {
        openAnalyzer: false,
      },
    },
  ],
};
