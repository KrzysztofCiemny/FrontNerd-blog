import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostMetadata } from "@/models/models";

export const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const fileNames = fs.readdirSync(folder);
  const allPostsData = fileNames.map((fileName) => {
    const fullPath = path.join(folder, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      description: matterResult.data.description,
      date: matterResult.data.date,
      images: matterResult.data.images,
      slug: fileName.replace(".md", ""),
      alt: matterResult.data.alt,
      category: matterResult.data.category,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};
