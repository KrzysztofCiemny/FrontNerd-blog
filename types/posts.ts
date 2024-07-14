export type PostMetadata = {
  title: string;
  description: string;
  date: string;
  images: string[];
  slug: string;
  alt: string;
  category: string;
};

export type AllPostsMetadata = {
  allPostsMetadata: PostMetadata[];
};
