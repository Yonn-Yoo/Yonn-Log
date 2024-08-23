import FilteredPosts from '@/components/posts/filtered-posts';
import { getPosts } from '@/service/posts';

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <section className="px-5">
      <FilteredPosts posts={posts} />
    </section>
  );
}
