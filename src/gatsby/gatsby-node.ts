import type { GatsbyNode } from 'gatsby';
import { normalizeTag } from '../lib';

const blogData = `
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
`;

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

  edges.forEach(({ node }) => {
    const { tags } = node.frontmatter;
    tags?.map(normalizeTag).forEach((tag) => {
      if (!postsByTag[tag]) postsByTag[tag] = [];
      if (!postsByTag[tag].includes(node)) postsByTag[tag].push(node);
    });
  });

  const pagesPromises = edges.map(async ({ previous, next, node }) => {
    const { slug } = node;
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

  const tagsPromises = tags.map(async (tagName) => {
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

  await Promise.all([...pagesPromises, ...tagsPromises]);
};

// export const onCreateNode: GatsbyNode['onCreateNode'] = (args) => {
//   const { node } = args;
//   if (node.internal.type !== `Mdx`) return;
//   fmImagesToRelative(node);
// };
