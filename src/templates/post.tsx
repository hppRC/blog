import { graphql } from 'gatsby';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { memo } from 'react';
import { SEO, SideContents } from 'src/components';

import { isMobile } from 'react-device-detect';

import { PostFooter } from './post-footer';
import { PostHeader } from './post-header';

type Props = {
  body: string;
  headings: { value: string; depth: number }[];
  title?: string;
  date?: string;
  tags?: string[];
  image?: IGatsbyImageData;
  previous?: Post;
  next?: Post;
  slug: string;
  path: string;
};

const Body = memo(({ body }: { body: string }) => (
  <section className='custom-post-body'>
    <MDXRenderer>{body}</MDXRenderer>
  </section>
));

const Component: React.FCX<Props> = memo(({ body, image, headings, path, next, date, previous, title, tags, slug }) => (
  <div className='px-2 sm:px-16 lg:px-8 lg:grid lg:grid-cols-12 pb-12 mx-auto w-full'>
    <article className='pb-8 lg:pr-4 lg:pb-0 lg:col-start-2 lg:col-span-8 xl:col-start-3 xl:col-span-7'>
      <PostHeader date={date || `2022/01/01`} tags={tags || []} title={title || `blog.hpprc.dev`} />
      {image && <GatsbyImage image={image} className='-mx-4 lg:mx-0 mb-8 rounded-sm' alt='cover image' />}
      <Body body={body} />
      <PostFooter next={next} previous={previous} slug={slug} />
    </article>
    {isMobile ? (
      <div className='border-t'>
        <SideContents path={path} title={title || slug} />
      </div>
    ) : (
      <div className='pl-2 lg:pr-2 lg:col-span-3'>
        <SideContents headings={headings} path={path} title={title || slug} />
      </div>
    )}
  </div>
));

type PageProps = { path: string; data: PostData; pageContext: PostPageContext };
const Container: React.FCX<PageProps> = ({ data, pageContext, path }) => {
  // while reloading page, data.mdx can be null because Gatsby's page query is asynchronous.
  if (!data.mdx) return <></>;

  const { body, headings, frontmatter } = data.mdx;
  const { title, date, tags, cover } = frontmatter;
  const image = getImage(cover ?? null);
  const { previous, next, slug } = pageContext;

  return (
    <>
      <SEO title={title} pathname={path} image={image?.images.fallback?.src} />
      <Component {...{ path, body, headings, title, date, tags, image, previous, next, slug }} />
    </>
  );
};

export const query = graphql`
  query ($slug: String!) {
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
            gatsbyImageData(quality: 90, layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
`;

export default Container;
