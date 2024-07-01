import { useRegisterActions } from 'kbar';
import { useRouter } from 'next/navigation';

export const NavActions = () => {
  const router = useRouter();

  const actions = [
    {
      id: 'home',
      name: 'Strona główna',
      shortcut: ['h'],
      keywords: 'strona główna',
      perform: () => router.push('/'),
      section: 'Nawigacja',
    },
    {
      id: 'posts',
      name: 'Artykuły',
      shortcut: ['a'],
      keywords: 'blog',
      perform: () => router.push('/posts'),
      section: 'Nawigacja',
    },
    {
      id: 'about',
      name: 'O mnie',
      keywords: 'o mnie',
      perform: () => router.push('/o-mnie'),
      section: 'Nawigacja',
    },
  ];

  return useRegisterActions(actions);
};
