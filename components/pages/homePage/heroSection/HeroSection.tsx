"use client"

import LogosSlider from "../../../molecules/logosSlider/LogosSlider"
import revealElementsOnScroll from "@/utils/scrollAnimations"
import { useEffect } from "react"

const styles = {
  sectionStyles: 'flex justify-center pt-mobileY px-mobileX lg:pt-desktopY lg:px-desktopX',
  container: 'content-max-width flex-col text-center overflow-hidden',
  paragraph: 'max-w-md text-heroPClamp text-slate-500 reveal',
  title: 'flex flex-col mb-4 text-heroHClamp font-bold reveal',
}
const {sectionStyles, container, paragraph, title} = styles

const HeroSection = () => {
  useEffect(() => {
    revealElementsOnScroll()
  }, []);

  return (
    <section className={sectionStyles}>
      <div className={container}>
        <h1 className={title}>
          <span>Get better at the Front&#8209;end</span>
          <span>Be the Front Nerd</span>
        </h1>
        <p className={paragraph}>
          FrontNerd to miejsce, w którym publikowane są treści ze świata Front&#8209;endu i nie tylko.
        </p>
        <LogosSlider />
      </div>
    </section>
  )
}

export default HeroSection
