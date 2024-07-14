import { useRegisterActions } from 'kbar';
import { useMemo } from 'react';
import { useRouter } from 'next/navigation';

export const HelperActions = () => {
  const router = useRouter();

  const actions = useMemo(
    () => [
      {
        id: 'undo',
        name: 'Wróć',
        shortcut: ['Backspace'],
        keywords: 'wróć',
        perform: () => router.back(),
        section: 'Akcje',
        icon: '/images/kbar/arrowBack.svg',
      },
    ],
    []
  );

  return useRegisterActions(actions);
};
