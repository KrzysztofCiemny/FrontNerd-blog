import Image from "next/image";

const styles = {
  sectionStyles: 'flex justify-center bg-lightBlack',
  container: 'content-max-width flex justify-center flex-col pt-mobileY lg:pt-desktopY pb-16 lg:pb-40 px-mobileX lg:px-desktopX',
  contentWrapper: 'flex flex-col lg:flex-row justify-center items-center gap-8 max-w-4xl reveal',
  paragraph: 'text-white leading-relaxed',
  title: 'text-postTitleH2Clamp font-bold mb-6 lg:mb-16 leading-tight text-white reveal',
  image: 'max-w-[3.125rem] lg:max-w-[18.75rem] h-auto',
}
const {sectionStyles, container, contentWrapper, paragraph, title, image} = styles

const GoalSection = () => {

  return (
    <section className={sectionStyles}>
      <div className={container}>
        <h2 className={title}>Cel</h2>
        <div className={contentWrapper}>
          <Image src='/images/aboutMe/Goal.png' alt="goal icon" width={416} height={383} className={image} />
          <div>
            <p className={`${paragraph} mb-4 lg:mb-6`}>
              Najważniejsze dla mnie jest zdobywanie doświadczenia i nowej wiedzy, oraz ciągły rozwój jako programista.
              Moim celem jest ugruntowanie swojej pozycji na rynku IT poprzez oferowanie coraz większych umiejętności i wartości w mojej pracy.
            </p>
            <p className={paragraph}>
              Drugim celem jest rozwijanie tego bloga. Chciałbym stworzyć wokół nazwy Frontnerd społeczność, w której każdy, niezależnie od
              doświadczenia, będzie mile widziany i będzie mógł dzielić się wiedzą.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoalSection