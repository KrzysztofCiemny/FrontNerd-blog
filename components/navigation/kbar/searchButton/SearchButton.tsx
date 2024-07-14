import { useKBar, VisualState } from 'kbar';
import Image from 'next/image';

const styles = {
  button: 'ml-12',
  image: 'scale-animation',
};
const { button, image } = styles;

export const SearchButton = () => {
  const { query } = useKBar((state) => ({
    visualState: state.visualState,
  }));

  const showKbar = () => {
    document.documentElement.style.overflowY = 'hidden';
    query.setVisualState(VisualState.animatingIn);
  };

  return (
    <button type="button" className={button} onClick={showKbar}>
      <span className="sr-only">Otwórz kbar</span>
      <Image src="/images/kbar/search.svg" alt="search" width={20} height={20} className={image} />
    </button>
  );
};
