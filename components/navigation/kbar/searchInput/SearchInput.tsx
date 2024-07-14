import { KBarSearch } from 'kbar';
import Image from 'next/image';

const styles = {
  label: 'w-full flex items-center justify-start bg-lightBlue mb-2 px-5 pb-1 sm:rounded-s-xl',
  search: 'text-base outline-none border-none bg-lightBlue text-gray p-2 sm:rounded-s-xl',
};
const { label, search } = styles;

export const SearchInput = () => {
  return (
    <label className={label}>
      <Image src="/images/kbar/search.svg" alt="search" width={20} height={20} />
      <KBarSearch defaultPlaceholder="Szukaj" className={search} />
    </label>
  );
};
