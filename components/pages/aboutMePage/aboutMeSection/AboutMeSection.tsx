"use client"

import Socials from "@/components/atoms/socials/Socials";
import revealElementsOnScroll from "@/utils/scrollAnimations";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

const AboutMeSection = () => {
  useEffect(() => {
    revealElementsOnScroll()
  }, []);

  return (
    <section className="flex justify-center pt-mobileY px-mobileX lg:px-desktopX">
      <div className="content-max-width lg:items-center flex flex-col lg:flex-row gap-5 lg:gap-16 2xl:gap-[6.25rem]">
        <div className="flex flex-col lg:max-w-3xl pb-5 lg:pb-desktopY reveal">
          <h1 className="text-aboutMeTitleClamp font-bold mb-4 leading-tight">Cześć! Jestem Krzysztof</h1>
          <p className="text-slate-700 mb-4 lg:mb-6 leading-relaxed">
            Jestem frontend developerem i aktualnie pracuję w <Link href="https://publicislepont.com/" className="font-semibold underline" target="_blank"> Publicis&nbsp;Le&nbsp;Pont</Link>.
            Programowaniem zajmuję się od około 4 lat. W tym czasie zdążyłem poznać kawałek świata frontendu.
            Na ten moment bliżej mi do Reacta/Nexta, ale z tyłu głowy zawsze mam Vue, z którym rozpocząłem swoją zawodową przygodę.
          </p>
          <p className="text-slate-700 mb-4 lg:mb-6 leading-relaxed">
            Poza byciem Frontnerdem lubię grać na gitarze elektrycznej i w koszykówkę ze znajomymi.
            Wracam też czasami do gierek z dzieciństwa takich jak Tibia czy Lol.
          </p>
          <p className="text-slate-700 mb-4 lg:mb-6 leading-relaxed">
            Więcej można dowiedzieć się na moich socialach. 😋
          </p>
          <Socials />
        </div>
        <Image src='/images/aboutMe/PhotoOfMe.png' alt="picture of the author of this blog" width={593} height={844} priority={true} className="rounded-lg reveal lg:max-w-[50%]" />
      </div>
    </section>
  )
}

export default AboutMeSection