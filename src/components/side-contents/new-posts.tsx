import { Link } from 'gatsby';
import React from 'react';
import { useNewest6Posts } from 'src/hooks';

export const NewPosts: React.FC<{ slug: string }> = ({ slug }) => {
  const posts = useNewest6Posts().filter((post) => post.frontmatter.slug !== slug);
  return (
    <div className='py-4 px-2 border-t'>
      <p className='font-medium'>New posts</p>
      <ul>
        {posts.map((post) => (
          <li className='hover:bg-gray-300' key={post.frontmatter.slug}>
            <Link className='block m-2 underline' to={`/posts/${post.frontmatter.slug}`}>
              {post.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
