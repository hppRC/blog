import { graphql, useStaticQuery } from 'gatsby';

type SiteBuildtimeQuery = {
  site: {
    buildTime: string;
  };
};

export const useSiteBuildTime = (): string => {
  const { site } = useStaticQuery<SiteBuildtimeQuery>(graphql`
    query {
      site {
        buildTime(formatString: "YYYY/MM/DD")
      }
    }
  `);

  return site.buildTime;
};
