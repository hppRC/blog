import { graphql, useStaticQuery } from 'gatsby';

type AllPostsQuery = {
  allMdx: {
    nodes: Post[];
  };
};

export const useAllPosts = (): Post[] => {
  const { allMdx } = useStaticQuery<AllPostsQuery>(graphql`
    {
      allMdx(filter: { slug: { ne: "dummy" } }, sort: { order: DESC, fields: [frontmatter___date] }) {
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
                gatsbyImageData(quality: 90, layout: CONSTRAINED, placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
  `);

  return allMdx.nodes;
};
