'use client';

import { KBarProvider } from 'kbar';
import Kbar from './kbar/Kbar';
import { SearchButton } from './kbar/searchButton/SearchButton';
import { NavLinks } from './navLinks/NavLinks';

const styles = {
  nav: 'flex flex-row justify-center items-center py-0 gap-8',
};
const { nav } = styles;

const kbarOptions = {
  enableHistory: true,
  disableDocumentLock: true,
  callbacks: {
    onOpen: () => (document.documentElement.style.overflowY = 'hidden'),
    onClose: () => {
      document.documentElement.style.overflowY = 'scroll';
    },
    onSelectAction: (action: { id: string }) => {
      if (action.id !== 'blogSearch') document.documentElement.style.overflowY = 'scroll';
    },
  },
};

const Navigation = () => {
  return (
    <KBarProvider options={kbarOptions}>
      <Kbar />
      <nav className={nav}>
        <SearchButton />
        <NavLinks />
      </nav>
    </KBarProvider>
  );
};

export default Navigation;
