'use client';

import { CategoryType } from '@/array/categoryArray';
import { PostType } from '@/service/posts';
import { useState } from 'react';
import Filter from './filter';
import PostsGrid from './post-grid';

const ALL_POSTS = 'all';

export default function FilteredPosts({ posts }: { posts: PostType[] }) {
  const [category, setCategory] = useState<CategoryType['value']>(ALL_POSTS);
  const filteredPosts =
    category === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === category);

  return (
    <section className="relative mt-10 md:mt-14 max-w-screen-2xl mx-auto lg:px-10">
      <Filter
        category={category}
        onClick={(category) => setCategory(category)}
      />
      <PostsGrid posts={filteredPosts} />
    </section>
  );
}
