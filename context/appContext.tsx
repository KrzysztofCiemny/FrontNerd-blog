import { createContext, useContext } from 'react';
import { PostMetadata } from '@/types/posts';

type Props = {
  children: React.ReactNode;
  posts: PostMetadata[];
};

const AppContext = createContext<PostMetadata[] | undefined>(undefined);

export const useAppContext = () => {
  const posts = useContext(AppContext);
  if (!posts) throw new Error('Posts are undefined');

  return posts;
};

export function AppContextProvider({ children, posts }: Props) {
  return <AppContext.Provider value={posts}>{children}</AppContext.Provider>;
}
