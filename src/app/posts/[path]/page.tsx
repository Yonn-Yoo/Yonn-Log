import MarkdownViewer from '@/components/lib/markdown-viewer';
import PostContent from '@/components/posts/post-content';
import PostNavigator from '@/components/posts/post-navigator';
import { getPostData } from '@/service/posts';

type Props = {
  params: { path: string };
};

export default async function PostDetailPage({ params: { path } }: Props) {
  const post = await getPostData(path);
  const { prevPost, nextPost } = post;

  return (
    <article className="max-w-4xl w-full mx-auto mt-5 md:mt-8 xl:mt-14 px-5">
      <PostContent post={post} />
      <MarkdownViewer content={post.content} />
      <section className="bg-background2 flex max-sm:flex-col h-32 mt-5">
        {prevPost && <PostNavigator post={prevPost} isPrev />}
        {nextPost && <PostNavigator post={nextPost} isPrev={false} />}
      </section>
    </article>
  );
}
