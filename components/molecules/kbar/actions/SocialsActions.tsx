import { useRegisterActions } from 'kbar';

export const SocialsActions = () => {
  const actions = [
    {
      id: 'github',
      name: 'Github',
      keywords: 'github',
      perform: () => window.open('https://github.com/KrzysztofCiemny', '_blank'),
      section: 'Sociale',
    },
    {
      id: 'linkedin',
      name: 'Linkedin',
      keywords: 'linkedin',
      perform: () => window.open('https://www.linkedin.com/in/krzysztofciemny', '_blank'),
      section: 'Sociale',
    },
  ];

  return useRegisterActions(actions);
};
