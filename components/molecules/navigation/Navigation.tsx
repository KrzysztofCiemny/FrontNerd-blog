import { useEffect } from "react";
import Link from "next/link"
import { MobileMenuOpen } from "@/models/models"
import Socials from "@/components/atoms/socials/Socials";

const Navigation = ({ isMenuOpen, setIsMenuOpen }: MobileMenuOpen) => {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <nav className={`flex flex-col md:flex-row justify-between md:justify-center items-center pt-32 pb-20 md:py-0 z-[9] mobileMax:mobile-nav md:translate-x-0 ${isMenuOpen ? 'translate-x-0' : 'translate-x-[100vw]'}`}>
      <ul className="flex flex-col items-center gap-6 md:flex-row">
        <li className="group nav-link_container md:hidden">
          <Link href="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Strona główna
          </Link>
          <div className="nav-link_bottom-line"></div>
        </li>
        <li className="group nav-link_container">
          <Link href="/posts" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Artykuły
          </Link>
          <div className="nav-link_bottom-line"></div>
        </li>
        <li className="group nav-link_container">
          <Link href="/o-mnie" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            O mnie
          </Link>
          <div className="nav-link_bottom-line"></div>
        </li>
      </ul>
      <div className="md:hidden">
        <Socials />
      </div>
    </nav>
  )
}

export default Navigation
