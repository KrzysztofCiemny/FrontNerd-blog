import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostMetadata } from '@/types/posts';

const postsDirectory = 'posts/';
const mdExtension = '.md';

const sortPostsByDate = (posts: PostMetadata[]) => {
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

const getPostMetadata = (fileName: string) => {
  const matterResult = getPostContent(fileName);

  const postMetadata: PostMetadata = {
    title: matterResult.data.title,
    description: matterResult.data.description,
    date: matterResult.data.date,
    images: matterResult.data.images,
    slug: fileName.replace(mdExtension, ''),
    alt: matterResult.data.alt,
    category: matterResult.data.category,
  };

  return postMetadata;
};

export const getPostContent = (fileName: string) => {
  const isFileNameWithExtension = fileName.endsWith(mdExtension);
  const fullFileName = isFileNameWithExtension ? fileName : `${fileName}${mdExtension}`;

  const fullPath = path.join(postsDirectory, fullFileName);
  const content = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(content);
  return matterResult;
};

export const getAllPostsMetadata = (): PostMetadata[] => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: PostMetadata[] = fileNames.map((fileName) => getPostMetadata(fileName));

  const sortedPostsData = sortPostsByDate(allPostsData);

  return sortedPostsData;
};
