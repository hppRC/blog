import type { GatsbyNode } from 'gatsby';

const imageFragment = `
tracedSVG
base64
sizes
srcSet
src
srcSetWebp
srcWebp
aspectRatio
`;

const blogData = `
excerpt(pruneLength: 400)
slug
frontmatter {
  title
  date(formatString: "YYYY/MM/DD")
  tags
  cover {
    childImageSharp {
      fluid(maxWidth: 1400, quality: 90) {
        ${imageFragment}
      }
    }
  }
}
`;

// you can't use QraphQL query fragments to get fluid object in gatsby-node.
const allMdxQuery = `
query {
  allMdx(filter: { slug: { ne: "dummy" } }, sort: { order: DESC, fields: [frontmatter___date] }) {
    edges {
      previous {
        ${blogData}
      }
      next {
        ${blogData}
      }
      node {
        ${blogData}
      }
    }
  }
}
`;

type Query = {
  allMdx: {
    edges: {
      previous?: Post;
      next?: Post;
      node: Post;
    }[];
  };
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions: { createPage } }) => {
  const postTemplate = require.resolve(`../templates/post.tsx`);
  const postsByTagTemplate = require.resolve(`../templates/posts-by-tag.tsx`);

  const result = await graphql<Query>(allMdxQuery);
  if (!result.data?.allMdx.edges) return;

  const { edges } = result.data.allMdx;
  const postsByTag: { [key: string]: Post[] } = {}; // Store posts for each tags

  edges.forEach(({ previous, next, node }) => {
    const { frontmatter, slug } = node;
    const { tags } = frontmatter;

    tags?.forEach((tag) => {
      if (!postsByTag[tag]) postsByTag[tag] = [];
      if (!postsByTag[tag].includes(node)) postsByTag[tag].push(node);
    });

    createPage({
      path: `posts/${slug}`,
      component: postTemplate,
      context: {
        previous,
        next,
        slug,
      },
    });
  });

  // generate each tag's posts page if the template exits
  const tags = Object.keys(postsByTag);

  tags.forEach((tagName) => {
    const posts = postsByTag[tagName];
    createPage({
      path: `tags/${tagName}`,
      component: postsByTagTemplate,
      context: {
        posts,
        tagName,
      },
    });
  });
};

// export const onCreateNode: GatsbyNode['onCreateNode'] = (args) => {
//   const { node } = args;
//   if (node.internal.type !== `Mdx`) return;
//   fmImagesToRelative(node);
// };
