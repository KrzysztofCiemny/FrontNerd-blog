import Image from "next/image";

const GoalSection = () => {

  return (
    <section className="flex justify-center bg-lightBlack">
      <div className="content-max-width flex justify-center flex-col pt-mobileY lg:pt-desktopY pb-16 lg:pb-40 px-mobileX lg:px-desktopX">
        <h2 className="text-postTitleH2Clamp font-bold mb-6 lg:mb-16 leading-tight text-white reveal">Cel</h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 max-w-4xl reveal">
          <Image src='/images/aboutMe/Goal.png' alt="goal icon" width={416} height={383} className="max-w-[3.125rem] lg:max-w-[18.75rem] h-auto" />
          <div>
            <p className="text-white mb-4 lg:mb-6 leading-relaxed">
              Najważniejsze dla mnie jest zdobywanie doświadczenia i nowej wiedzy, oraz ciągły rozwój jako programista.
              Moim celem jest ugruntowanie swojej pozycji na rynku IT poprzez oferowanie coraz większych umiejętności i wartości w mojej pracy.
            </p>
            <p className="text-white leading-relaxed">
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