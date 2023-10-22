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

export async function getRecentPosts(): Promise<PostType[]> {
  return getPosts().then((posts) => posts.slice(0, 8));
}

export async function getPosts(): Promise<PostType[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return readFile(filePath, 'utf-8')
    .then<PostType[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}
