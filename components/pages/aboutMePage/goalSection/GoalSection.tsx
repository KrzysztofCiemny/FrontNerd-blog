import Image from "next/image";

const GoalSection = () => {

  return (
    <section className="flex justify-center bg-lightBlack">
      <div className="content-max-width flex justify-center flex-col pt-mobileY lg:pt-desktopY pb-16 lg:pb-40 px-mobileX lg:px-desktopX">
        <h2 className="text-postTitleH2Clamp font-bold mb-6 lg:mb-16 leading-tight text-veryLightBlue reveal">Cel</h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 max-w-2xl reveal">
          <Image src='/images/aboutMe/group.svg' alt="goal icon" width={120} height={120} className="max-w-[30px] lg:max-w-none" />
          <div>
            <p className="text-veryLightBlue mb-4 lg:mb-6 leading-relaxed">
              Najważniejsze dla mnie jest zdobywanie doświadczenia i nowej wiedzy, oraz ciągły rozwój jako programista.
              Moim celem jest ugruntowanie swojej pozycji na rynku IT poprzez oferowanie coraz większych umiejętności i wartości w mojej pracy.
            </p>
            <p className="text-veryLightBlue leading-relaxed">
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