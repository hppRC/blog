import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { PostFooterContents, SEO, SideContents } from 'src/components';

import type { FluidObject } from 'gatsby-image';

type ContainerProps = { path: string; data: PostData; pageContext: PostPageContext };
type Props = {
  body: string;
  headings: { value: string; depth: number }[];
  title?: string;
  date?: string;
  tags?: string[];
  fluid?: FluidObject;
  previous?: MdxNode;
  next?: MdxNode;
  slug: string;
  path: string;
};

const Component: React.FCX<Props> = ({ body, fluid, headings, path, next, previous, title }) => (
  <article className='lg:grid lg:grid-cols-5 pb-12 mx-auto'>
    <div className='col-start-2 col-span-3'>
      {fluid && <Img fluid={fluid} alt='cover image' />}
      <MDXRenderer>{body}</MDXRenderer>
      <PostFooterContents next={next} previous={previous} />
    </div>
    <div className=''>
      <SideContents headings={headings} path={path} title={title} />
    </div>
  </article>
);

const Container: React.FCX<ContainerProps> = ({ data, pageContext, path }) => {
  // while reloading page, data.mdx may be null because Gatsby's page query is asynchronous.
  if (!data.mdx) return <></>;

  const { body, headings, frontmatter } = data.mdx;
  const { title, date, tags, cover } = frontmatter;
  const fluid = cover?.childImageSharp?.fluid;
  const { previous, next, slug } = pageContext;

  return (
    <>
      <SEO title='Posts' pathname={path} image={fluid?.src} />
      <Component {...{ path, body, headings, title, date, tags, fluid, previous, next, slug }} />
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      excerpt
      headings {
        value
        depth
      }
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
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
`;

export default Container;
