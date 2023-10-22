'use client';

import { CategoryType } from '@/array/categoryArray';
import { PostType } from '@/service/posts';
import { useEffect, useState } from 'react';
import Filter from './filter';
import PostsGrid from './post-grid';

export default function FilteredPosts({ posts }: { posts: PostType[] }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [category, setCategory] = useState<CategoryType['value']>('all');

  useEffect(() => {
    if (category === 'all') {
      setFilteredPosts(posts);
    } else {
      const test = posts.filter((post) => post.category === category);
      setFilteredPosts(test);
    }
  }, [category, posts]);

  return (
    <section className="relative mt-10 md:mt-14 max-w-screen-2xl mx-auto lg:px-10">
      <Filter category={category} setCategory={setCategory} />
      <PostsGrid posts={filteredPosts} />
    </section>
  );
}
