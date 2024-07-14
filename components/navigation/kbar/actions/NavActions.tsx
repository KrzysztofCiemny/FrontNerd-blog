import { useRegisterActions } from 'kbar';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

export const NavActions = () => {
  const router = useRouter();

  const actions = useMemo(
    () => [
      {
        id: 'home',
        name: 'Strona główna',
        shortcut: ['h'],
        keywords: 'strona główna',
        perform: () => router.push('/'),
        section: 'Nawigacja',
        icon: '/images/kbar/home.svg',
      },
      {
        id: 'posts',
        name: 'Artykuły',
        shortcut: ['a'],
        keywords: 'blog',
        perform: () => router.push('/posts'),
        section: 'Nawigacja',
        icon: '/images/kbar/pencil.svg',
      },
      {
        id: 'about me',
        name: 'O mnie',
        keywords: 'o mnie',
        perform: () => router.push('/o-mnie'),
        section: 'Nawigacja',
        icon: '/images/kbar/info.svg',
      },
    ],
    []
  );

  return useRegisterActions(actions);
};
