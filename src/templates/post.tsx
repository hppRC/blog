import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { SEO, SideContents } from 'src/components';

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

const Component: React.FCX<Props> = ({ body, fluid, headings, path }) => (
  <main>
    {fluid && <Img fluid={fluid} alt='cover image' />}
    <article className='lg:flex max-w-screen-lg mx-auto'>
      <div className='lg:w-3/4'>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      <div className='lg:w-1/4 lg:pl-8'>
        <SideContents headings={headings} path={path} />
      </div>
    </article>
  </main>
);

const Container: React.FCX<ContainerProps> = ({ data, pageContext, path }) => {
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
