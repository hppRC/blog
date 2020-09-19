import { graphql, useStaticQuery } from 'gatsby';

type AllPostsQuery = {
  allMdx: {
    nodes: MdxNode[];
  };
};

export const useNewest6Posts = (): MdxNode[] => {
  const { allMdx } = useStaticQuery<AllPostsQuery>(graphql`
    query {
      allMdx(limit: 6, sort: { order: DESC, fields: [frontmatter___date] }) {
        nodes {
          body
          excerpt(pruneLength: 100)
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            slug
            tags
            cover {
              childImageSharp {
                fluid(maxWidth: 1400, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);

  return allMdx.nodes;
};
