import HeroSection from '@/components/hero-section';
import FeaturedPosts from '@/components/posts/featured-posts';
import { getPosts } from '@/service/posts';

export default async function HomePage() {
  const posts = await getPosts();
  return (
    <main className="px-5">
      <HeroSection />
      <FeaturedPosts />
    </main>
  );
}
