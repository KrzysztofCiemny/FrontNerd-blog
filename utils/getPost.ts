import fs from 'fs/promises'
import path from 'path';
import matter from 'gray-matter';
import { PostMetadata } from '@/models/models';

export const getPostContent = async (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  try {
    const content = await fs.readFile(file, 'utf8');
    const matterResult = matter(content);
    return matterResult;
  } catch (error) {
    console.error('Błąd podczas odczytu pliku:', error);
    return null;
  }
};

export const getPostMetadata = async (): Promise<PostMetadata[]> => {
  const folder = 'posts/';
  try {
    const fileNames = await fs.readdir(folder);
    const allPostsData = await Promise.all(
      fileNames.map(async (fileName) => {
        const fullPath = path.join(folder, fileName);
        const fileContents = await fs.readFile(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        return {
          title: matterResult.data.title,
          description: matterResult.data.description,
          date: matterResult.data.date,
          images: matterResult.data.images,
          slug: fileName.replace('.md', ''),
          alt: matterResult.data.alt,
        };
      })
    );

    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error('Błąd podczas odczytu plików:', error);
    return [];
  }
};