import React from 'react';
import { useKBar, VisualState } from 'kbar';
import Image from 'next/image';
import Logo from '@/components/logo/Logo';

const styles = {
  header: 'w-full py-4 px-4 flex justify-between items-center',
};
const { header } = styles;

export const KbarHeader = () => {
  const { query } = useKBar((state) => ({
    visualState: state.visualState,
  }));

  const hideNavigationActionsMenu = () => {
    document.documentElement.style.overflowY = 'unset';
    query.setVisualState(VisualState.animatingOut);
  };

  return (
    <header className={header}>
      <Logo fontSize="text-xs" />
      <button onClick={hideNavigationActionsMenu} aria-controls="kbar-navigation">
        <span className="sr-only">Zamknij</span>
        <Image src="/images/kbar/close.svg" alt="close button" width={16} height={16} />
      </button>
    </header>
  );
};
