import { Link } from 'gatsby';
import React from 'react';

type Props = { post: Post };

export const ArticleCard: React.FC<Props> = ({ post: { excerpt, frontmatter } }) => (
  <section className=''>
    <Link to={`/posts/${frontmatter.slug}`}>
      <div>
        <h2 className='text-xl'>{frontmatter.title}</h2>
        <p>{frontmatter.date}</p>
        <p>{excerpt}</p>
      </div>
    </Link>
  </section>
);
