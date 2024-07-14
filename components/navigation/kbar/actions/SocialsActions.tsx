import { useRegisterActions } from 'kbar';
import { useMemo } from 'react';

export const SocialsActions = () => {
  const actions = useMemo(
    () => [
      {
        id: 'github',
        name: 'Github',
        keywords: 'github',
        perform: () => window.open('https://github.com/KrzysztofCiemny', '_blank'),
        section: 'Sociale',
        icon: '/images/kbar/github.svg',
      },
      {
        id: 'linkedin',
        name: 'Linkedin',
        keywords: 'linkedin',
        perform: () => window.open('https://www.linkedin.com/in/krzysztofciemny', '_blank'),
        section: 'Sociale',
        icon: '/images/kbar/linkedin.svg',
      },
    ],
    []
  );

  return useRegisterActions(actions);
};
