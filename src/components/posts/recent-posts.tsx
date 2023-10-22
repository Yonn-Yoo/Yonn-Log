import { getRecentPosts } from '@/service/posts';
import PostsGrid from './post-grid';

export default async function RecentPosts() {
  const recentPosts = await getRecentPosts();

  return (
    <section className="mt-10 md:mt-14 max-w-screen-2xl mx-auto lg:px-10">
      <h2 className="font-semibold text-lg md:text-xl xl:text-2xl mb-3 md:mb-5">
        Recent Posts
      </h2>
      <PostsGrid posts={recentPosts} />
    </section>
  );
}
