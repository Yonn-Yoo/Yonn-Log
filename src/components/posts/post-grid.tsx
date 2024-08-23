'use client';

import { PostType } from '@/service/posts';
import PostCard from './post-card';

export default function PostsGrid({ posts }: { posts: PostType[] }) {
  return (
    <ul className="grid gap-5 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {posts.map((post) => (
        <li
          className="bg-background3 border border-background3 rounded-lg shadow group hover:shadow-xl hover:-translate-y-1.5 duration-200 ease-out cursor-pointer"
          key={`post-${post.path}`}
        >
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
