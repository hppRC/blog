import { Link } from 'gatsby';
import React, { memo } from 'react';
import { useNewest6Posts } from 'src/hooks';

export const NewPosts: React.FC<{ slug: string }> = memo(({ slug }) => {
  const posts = useNewest6Posts().filter((post) => post.slug !== slug);
  return (
    <div className='pt-4 pb-6 lg:pl-2 lg:pr-8'>
      <p className='font-medium'>New posts</p>
      <ul className='text-sm'>
        {posts.map((post) => (
          <li className='m-2' key={post.slug}>
            <Link to={`/posts/${post.slug}`}>
              <p className='hover:opacity-50 underline'>{post.frontmatter?.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});
