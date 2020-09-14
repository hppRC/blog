import { graphql, useStaticQuery } from 'gatsby';

type SiteMetadataQuery = {
  site: {
    siteMetadata: SiteMetadata;
  };
};

export const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery<SiteMetadataQuery>(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteTitleAlt
          siteHeadline
          siteUrl
          siteDescription
          siteLanguage
          author
          social {
            twitter
            github
            qiita
          }
        }
      }
    }
  `);

  return site.siteMetadata;
};
