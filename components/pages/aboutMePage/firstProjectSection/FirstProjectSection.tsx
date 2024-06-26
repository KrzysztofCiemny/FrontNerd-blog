import Image from "next/image";
import Link from "next/link";

const styles = {
  sectionStyles: 'flex justify-center bg-lightBlue2',
  container: 'content-max-width flex justify-center flex-col pt-mobileY lg:py-desktopY_Xl pb-16 px-mobileX lg:px-desktopX',
  contentWrapper: 'flex flex-col xl:flex-row xl:items-center gap-5 xl:gap-16 mt-mobileY xl:mt-desktopY',
  paragraph: 'text-slate-700 mb-8 lg:mb-12 reveal',
  textWrapper: 'xl:max-w-lg order-2 xl:order-1',
  title: 'text-postTitleH2Clamp font-bold mb-6 lg:mb-12 leading-tight reveal',
  projectTitle: 'text-2xl font-bold mb-4 leading-tight reveal',
  link: 'xl:max-w-[41.25rem] xl:order-2 reveal',
  image: 'rounded-lg h-auto xl:max-w-[41.25rem] img-highlight shadow-imageShadow',
  flexCol: 'flex flex-col'
}
const {sectionStyles, container, contentWrapper, paragraph, title, textWrapper, link, image, flexCol, projectTitle} = styles

const FirstProjectSection = () => {

  return (
    <section className={sectionStyles}>
      <div className={container}>
        <h3 className={title}>Pierwszy projekt</h3>
        <div className={`${flexCol} ${contentWrapper}`}>
          <div className={`${flexCol} ${textWrapper}`}>
            <div className={flexCol}>
              <h3 className={projectTitle}>Memory Game</h3>
              <p className={paragraph}>
                Jest to projekt, po którym poczułem, że to co robię ma sens. Jest to gra memory napisana przy użyciu HTML, CSS i JS.
                Proponuję zagrać, mojej 6-letniej siostrze bardzo się podoba 😄
              </p>
            </div>
            <Link href='https://github.com/KrzysztofCiemny/Memory' target="_blank">
                <Image src='/images/socials/github.svg' alt="github logo" width={20} height={20} className="scale-animation" />
            </Link>
          </div>
          <Link href='https://krzysztofciemny.github.io/Memory/' className={link} target="_blank">
            <Image src='/images/aboutMe/Memory-snap.png' alt='picture of memory game' width={1299} height={841} priority={true} className={image} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FirstProjectSection