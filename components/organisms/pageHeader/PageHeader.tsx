"use client"

import Logo from "../../atoms/logo/Logo"
import Navigation from "../../molecules/navigation/Navigation"
import Hamburger from "../../atoms/hamburger/Hamburger"
import { useState, useEffect } from "react"

const PageHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const headerScrollAnimation = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', headerScrollAnimation);

    return () => {
      window.removeEventListener('scroll', headerScrollAnimation);
    };
  }, []);

  return (
    <header className={`sticky top-0 flex justify-center z-20 max-w-[100vw] py-5 mb-4 px-mobileX transition duration-200 ${isScrolled ? 'shadow-md bg-veryLightBlue' : 'bg-lightBlue'}`}>
      <div className="content-max-width justify-between">
        <Logo />
        <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  )
}

export default PageHeader
