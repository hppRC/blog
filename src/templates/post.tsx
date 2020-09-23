import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { SEO, SideContents } from 'src/components';

import { PostFooter } from './post-footer';
import { PostHeader } from './post-header';

// eslint-disable-next-line import/order
import type { FluidObject } from 'gatsby-image';

type Props = {
  body: string;
  headings: { value: string; depth: number }[];
  title?: string;
  date?: string;
  tags?: string[];
  fluid?: FluidObject;
  previous?: Post;
  next?: Post;
  slug: string;
  path: string;
};

const Component: React.FCX<Props> = ({ body, fluid, headings, path, next, date, previous, title, tags, slug }) => (
  <div className='lg:grid lg:grid-cols-5 pb-12 mx-auto w-full'>
    <article className='col-start-2 col-span-3'>
      <PostHeader date={date} tags={tags} title={title} />
      {fluid && <Img fluid={fluid} className='-mx-2 lg:mx-0 mb-8' alt='cover image' />}
      <section className='custom-post-body'>
        <MDXRenderer>{body}</MDXRenderer>
      </section>
      <PostFooter next={next} previous={previous} slug={slug} />
    </article>
    <div className='hidden lg:block lg:pl-4'>
      <SideContents headings={headings} path={path} title={title || slug} />
    </div>
    <div className='border-t mt-8 lg:hidden'>
      <SideContents path={path} title={title || slug} />
    </div>
  </div>
);

type PageProps = { path: string; data: PostData; pageContext: PostPageContext };
const Container: React.FCX<PageProps> = ({ data, pageContext, path }) => {
  // while reloading page, data.mdx may be null because Gatsby's page query is asynchronous.
  if (!data.mdx) return <></>;

  const { body, headings, frontmatter } = data.mdx;
  const { title, date, tags, cover } = frontmatter;
  const fluid = cover?.childImageSharp?.fluid;
  const { previous, next, slug } = pageContext;

  return (
    <>
      <SEO title={title} pathname={path} image={fluid?.src} />
      <Component {...{ path, body, headings, title, date, tags, fluid, previous, next, slug }} />
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      excerpt(pruneLength: 400)
      fileAbsolutePath
      slug
      headings {
        value
        depth
      }
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
`;

export default Container;
