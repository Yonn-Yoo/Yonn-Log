import MarkdownViewer from '@/components/lib/markdown-viewer';
import PostContent from '@/components/posts/post-content';
import PostNavigation from '@/components/posts/post-navigation';
import { getPostData } from '@/service/posts';

type Props = {
  params: { path: string };
};

export default async function PostDetailPage({ params: { path } }: Props) {
  const post = await getPostData(path);

  return (
    <article className="max-w-4xl w-full mx-auto mt-5 md:mt-8 xl:mt-14 px-5">
      <PostContent post={post} />
      <MarkdownViewer content={post.content} />
      <PostNavigation post={post} />
    </article>
  );
}
