'use client';

import { AppContextProvider } from '@/context/appContext';
import { PostMetadata } from '@/types/posts';

type Props = {
  children: React.ReactNode;
  posts: PostMetadata[];
};

export const AppContextClientProvider = ({ children, posts }: Props) => {
  return <AppContextProvider posts={posts}>{children}</AppContextProvider>;
};
