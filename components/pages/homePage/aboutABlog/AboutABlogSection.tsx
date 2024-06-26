import Image from "next/image"

const styles = {
  sectionStyles: 'flex flex-col items-center text-center px-mobileX py-desktopY lg:py-desktopY_Xl lg:px-desktopX bg-lightBlue2',
  container: 'flex flex-col justify-center items-center lg:flex-row gap-5 lg:gap-16 2xl:gap-[6.25rem] content-max-width',
  textContainer: 'flex flex-col order-2 lg:order-first text-left reveal',
  paragraph: 'max-w-md text-heroPClamp mb-4 font-medium',
  paragraph2: 'lg:max-w-[37.5rem] leading-relaxed tracking-wide',
  title: 'mb-mobileY lg:mb-desktopY mt-0 text-heroHClamp font-semibold reveal',
  image: 'rounded-lg h-auto shadow-imageShadow',
  pictureStyles: 'max-w-full lg:max-w-[37.5rem] reveal'
}
const {sectionStyles, container, paragraph, paragraph2, title, image, textContainer, pictureStyles} = styles

const WhatIsThisBlogForSection = () => {

  return (
    <section className={sectionStyles}>
      <h2 className={title}>O blogu</h2>
      <div className={container}>
        <div className={textContainer}>
          <p className={paragraph}>
            Tworzenie tych treści przynosi korzyści zarówno mnie, jak i Wam.
          </p>
          <p className={paragraph2}>
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
        <picture className={pictureStyles}>
          <source srcSet="/images/whatIsThisBlogFor/sharingKnowledge2.webp" media="(max-width: 992px)" />
          <Image src="/images/whatIsThisBlogFor/sharingKnowledge1.webp" alt="image" width={1200} height={1200} className={image} />
        </picture>
      </div>
    </section>
  )
}

export default WhatIsThisBlogForSection