import { PostData } from '@/service/posts';
import PostNavigator from './post-navigator';

export default function PostNavigation({ post }: { post: PostData }) {
  const { prevPost, nextPost } = post;

  return (
    <section className="bg-background2 flex max-sm:flex-col h-32 mt-5">
      {prevPost && <PostNavigator post={prevPost} isPrev />}
      {nextPost && <PostNavigator post={nextPost} isPrev={false} />}
    </section>
  );
}
