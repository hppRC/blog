import { graphql, useStaticQuery } from 'gatsby';

import type { FluidObject } from 'gatsby-image';

type AnyImageQuery = {
  allFile: Partial<{
    nodes: {
      relativePath: string;
      childImageSharp?: {
        fluid?: FluidObject;
      };
    }[];
  }>;
};

export const useAnyImage = (filename: string): FluidObject | undefined => {
  // relativePath: path from `image`
  // it is configured in gatsby-config.js of `gatsby-source-filesystem`
  const { allFile } = useStaticQuery<AnyImageQuery>(graphql`
    query {
      allFile {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1400, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);

  const targetImage = allFile.nodes?.find(({ relativePath }) => relativePath.includes(filename));
  return targetImage?.childImageSharp?.fluid;
};
