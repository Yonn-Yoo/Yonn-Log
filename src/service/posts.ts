import { readFile } from 'fs/promises';
import path from 'path';

export type PostType = {
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
  path: string;
};

export type PostData = PostType & {
  content: string;
  nextPost: PostType | null;
  prevPost: PostType | null;
};

export async function getRecentPosts(): Promise<PostType[]> {
  return getPosts().then((posts) => posts.slice(0, 8));
}

export async function getPosts(): Promise<PostType[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return readFile(filePath, 'utf-8')
    .then<PostType[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
  const posts = await getPosts(); //
  const post = posts.find((post) => post.path === fileName);

  if (!post)
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없습니다 🥲`);

  const index = posts.indexOf(post);
  const nextPost = index > 0 ? posts[index - 1] : null;
  const prevPost = index < posts.length - 1 ? posts[index + 1] : null;
  const content = await readFile(filePath, 'utf-8');
  return { ...post, content, nextPost, prevPost };
}
