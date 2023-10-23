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

export type PostData = PostType & { content: string };

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
  const metaData = await getPosts() //
    .then((posts) => posts.find((post) => post.path === fileName));
  if (!metaData)
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없습니다 🥲`);

  const content = await readFile(filePath, 'utf-8');
  return { ...metaData, content };
}
