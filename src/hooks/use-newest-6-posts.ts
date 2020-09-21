import { graphql, useStaticQuery } from 'gatsby';

type AllPostsQuery = {
  allMdx: {
    nodes: Post[];
  };
};

export const useNewest6Posts = (): Post[] => {
  const { allMdx } = useStaticQuery<AllPostsQuery>(graphql`
    query {
      allMdx(filter: { slug: { ne: "dummy" } }, limit: 6, sort: { order: DESC, fields: [frontmatter___date] }) {
        nodes {
          body
          excerpt(pruneLength: 400)
          slug
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
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
