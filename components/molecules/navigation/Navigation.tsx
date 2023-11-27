import { useEffect } from "react";
import Link from "next/link"
import { MobileMenuOpen } from "@/models/models"

const Navigation = ({ isMenuOpen, setIsMenuOpen }: MobileMenuOpen) => {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <nav className={`flex justify-center items-center z-[9] mobileMax:mobile-nav md:translate-x-0 ${isMenuOpen ? 'translate-x-0' : 'translate-x-[100vw]'}`} data-testId='navigation'>
      <ul className="flex flex-col gap-6 md:flex-row">
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
      </ul>
    </nav>
  )
}

export default Navigation
