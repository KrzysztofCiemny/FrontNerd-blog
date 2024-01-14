import Image from "next/image"

const WhatIsThisBlogForSection = () => {

  return (
    <section className="flex flex-col items-center text-center px-mobileX py-desktopY lg:py-desktopY_Xl lg:px-desktopX bg-lightBlue2">
      <h2 className="mb-mobileY lg:mb-desktopY mt-0 text-heroHClamp font-semibold reveal">O blogu</h2>
      <div className="flex flex-col justify-center items-center lg:flex-row gap-5 lg:gap-16 2xl:gap-[6.25rem] content-max-width">
        <div className="flex flex-col order-2 lg:order-first text-left reveal">
          <p className="max-w-md text-heroPClamp mb-4 font-medium">
            Tworzenie tych treści przynosi korzyści zarówno mnie, jak i Wam.
          </p>
          <p className="lg:max-w-[600px] leading-relaxed tracking-wide">
            Chęć poszerzania swojej własnej wiedzy i chęć dzielenia się nią z innymi.
            Są to dwa powody dla których powstał ten blog. Mam nadzieję że każdy znajdzie tutaj coś dla siebie i wyjdzie stąd bogatszy o nową wiedzę.
            <br></br>
            Tworząc artykuły i robiąc research do nich
            utrwalam i poszerzam swoją wiedzę z Front-endu i nie tylko, a w tych artykułach, kilku
            z was może znajdzie coś dla siebie, nauczy się czegoś lub rozwiąże problem z którym się borykał.
            <br></br>
            Miłego czytania.
          </p>
        </div>
        <picture className="max-w-full lg:max-w-[600px] reveal">
          <source srcSet="/images/whatIsThisBlogFor/sharingKnowledge2.webp" media="(max-width: 992px)" />
          <Image src="/images/whatIsThisBlogFor/sharingKnowledge1.webp" alt="image" width={1200} height={1200} className="rounded-lg h-auto" />
        </picture>
      </div>
    </section>
  )
}

export default WhatIsThisBlogForSection