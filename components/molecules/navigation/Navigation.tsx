import { useEffect } from "react";
import Link from "next/link"
import { MobileMenuOpen } from "@/models/models"
import Socials from "@/components/atoms/socials/Socials";
import { navLinks } from "./navLinks";

const styles = {
  nav: 'flex flex-col md:flex-row justify-between md:justify-center items-center pt-32 pb-20 md:py-0 z-[9] mobileMax:mobile-nav md:translate-x-0',
  list: 'flex flex-col items-center gap-6 md:flex-row',
  item: 'group nav-link_container',
  link: 'nav-link',
  linkBottomLine: 'nav-link_bottom-line',
  socials: 'md:hidden',
}
const {nav, item, link, list, socials, linkBottomLine} = styles

const Navigation = ({ isMenuOpen, setIsMenuOpen }: MobileMenuOpen) => {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <nav className={`${nav} ${isMenuOpen ? 'translate-x-0' : 'translate-x-[100vw]'}`}>
      <ul className={list}>
        {navLinks.map(({href, name}) => (
          <li key={name} className={`${item} ${href === '/' ? 'md:hidden' : ''}`}>
            <Link href={href} className={link} onClick={() => setIsMenuOpen(false)}>
              {name}
            </Link>
            <div className={linkBottomLine}></div>
          </li>
        ))}
      </ul>
      <div className={socials}>
        <Socials />
      </div>
    </nav>
  )
}

export default Navigation
