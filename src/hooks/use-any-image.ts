import { graphql, useStaticQuery } from 'gatsby';

import type { IGatsbyImageData, ImageDataLike } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';

type AnyImageQuery = {
  allFile: Partial<{
    nodes: {
      relativePath: string;
      childImageSharp?: ImageDataLike;
    }[];
  }>;
};

export const useAnyImage = (filename: string): IGatsbyImageData | undefined => {
  // relativePath: path from `image`
  // it is configured in gatsby-config.js of `gatsby-source-filesystem`
  const { allFile } = useStaticQuery<AnyImageQuery>(graphql`
    {
      allFile {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(quality: 90, layout: FULL_WIDTH)
          }
        }
      }
    }
  `);

  const targetImage = allFile.nodes?.find(({ relativePath }) => relativePath.includes(filename));
  return getImage((targetImage as ImageDataLike) ?? null);
};
