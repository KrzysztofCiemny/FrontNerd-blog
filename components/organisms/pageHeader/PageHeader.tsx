"use client"

import Logo from "../../atoms/logo/Logo"
import Navigation from "../../molecules/navigation/Navigation"
import Hamburger from "../../atoms/hamburger/Hamburger"
import { useState, useEffect } from "react"
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
} from "kbar";
import RenderResults from "@/components/molecules/RenderResults/RenderResults"

const styles = {
  header: 'sticky top-0 flex justify-center z-20 max-w-[100vw] py-5 mb-4 px-mobileX transition duration-200',
  contentWrapper: 'content-max-width justify-between',
}
const {header, contentWrapper} = styles

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

  const actions = [
    {
      id: "blog",
      name: "Blog",
      shortcut: ["b"],
      keywords: "writing words",
      perform: () => (window.location.pathname = "blog"),
    },
    {
      id: "contact",
      name: "Contact",
      shortcut: ["c"],
      keywords: "email",
      perform: () => (window.location.pathname = "contact"),
    },
  ]
  

  return (
  <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner> 
          <KBarAnimator> 
            <KBarSearch />
            <RenderResults/>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
    <header className={`${header} ${isScrolled ? 'shadow-md bg-veryLightBlue' : 'bg-lightBlue'}`}>
        <div className={`${contentWrapper}`}>
          <Logo />
          {/* <button type="button" onClick={handleOpenModal}>Search</button> */}
          <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </header>
  </KBarProvider>
  )
}

export default PageHeader
