import { useRegisterActions } from 'kbar';
import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/context/appContext';

export const PostsActions = () => {
  const posts = useAppContext();
  const router = useRouter();

  const actions = useMemo(
    () =>
      posts.map(({ title, category, slug }) => ({
        id: title,
        name: title,
        parent: 'blogSearch',
        keywords: category,
        perform: () => router.push(`/posts/${slug}`),
        section: 'Artykuły',
      })),
    [router, posts]
  );

  const searchPostsActions = useMemo(
    () => ({
      id: 'blogSearch',
      name: 'Szukaj artykułów',
      shortcut: ['/'],
      keywords: 'artykuł',
      section: 'Akcje',
      icon: '/images/kbar/pencil.svg',
    }),
    []
  );

  return useRegisterActions([searchPostsActions, ...actions]);
};
