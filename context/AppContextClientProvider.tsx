'use client';

import { AppContextProvider } from '@/context/appContext';
import { PostMetadata } from '@/models/models';

type Props = {
  children: React.ReactNode;
  posts: PostMetadata[];
};

export const AppContextClientProvider = ({ children, posts }: Props) => {
  return <AppContextProvider posts={posts}>{children}</AppContextProvider>;
};
