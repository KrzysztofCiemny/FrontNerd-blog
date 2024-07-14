import Link from 'next/link';
import { navLinksData } from './navLinksData';

const styles = {
  list: 'md:flex items-center gap-6 flex-row hidden',
  item: 'group nav-link_container',
  link: 'nav-link',
  linkBottomLine: 'nav-link_bottom-line',
};
const { item, link, list, linkBottomLine } = styles;

export const NavLinks = () => {
  return (
    <ul className={list}>
      {navLinksData.map(({ href, name }) => (
        <li key={name} className={`${item} ${href === '/' ? 'md:hidden' : ''}`}>
          <Link href={href} className={link}>
            {name}
          </Link>
          <div className={linkBottomLine}></div>
        </li>
      ))}
    </ul>
  );
};
