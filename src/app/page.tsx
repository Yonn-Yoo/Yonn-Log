import HeroSection from '@/components/hero-section';
import RecentPosts from '@/components/posts/recent-posts';

export default async function HomePage() {
  return (
    <main className="px-5">
      <HeroSection />
      <RecentPosts />
    </main>
  );
}
