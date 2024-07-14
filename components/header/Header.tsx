import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';

const styles = {
  header:
    'top-0 flex justify-center z-20 max-w-[100vw] py-5 mb-4 px-mobileX transition duration-200 bg-lightBlue',
  contentWrapper: 'content-max-width justify-between',
};
const { header, contentWrapper } = styles;

export const Header = () => {
  return (
    <header className={header}>
      <div className={`${contentWrapper}`}>
        <Logo fontSize="text-xl" />
        <Navigation />
      </div>
    </header>
  );
};
