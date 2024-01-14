import Image from "next/image";

const FirstStepsSection = () => {

  return (
    <section className="flex justify-center">
      <div className="content-max-width flex justify-center flex-col pt-mobileY lg:py-desktopY_Xl pb-16 px-mobileX lg:px-desktopX">
        <h2 className="text-postTitleH2Clamp font-bold mb-6 lg:mb-16 leading-tight reveal">Pierwsze kroki</h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 xl:gap-16 reveal">
          <Image src='/images/aboutMe/FirstSteps.png' alt='picture of first steps' width={410} height={410} priority={true} className="max-w-[50px] lg:max-w-none" />
          <div>
            <p className="mb-4 lg:mb-6 leading-relaxed">
              Nie jestem z tych ludzi, którzy byli zajarani kodem od dziecka. W moim życiu programowanie pojawiło się w chwili gdy zacząłem szukać dla siebie
              czegoś twórczego, ciekawego, przyszłościowego i czegoś co przyniesie mi dobrze płatną pracę w przyszłości. Na szczęście spodobało mi się to
              i jestem bardzo zadowolony, że 4 lata temu rozpocząłem tą przygodę.
            </p>
            <p className="mb-4 lg:mb-6 leading-relaxed">
              Pierwsze kroki nie były łatwe. Wchodziłem w całkiem nowy dla mnie świat. Przed rozpoczęciem nauki potrafiłem na komputerze co najwyżej włączyć jakąś grę,
              albo odpalić film na Youtube. Pomimo tego, dzięki wielu godzinom spędzonym przed ekranem udało mi się dojść do momentu, w którym potrafię stworzyć coś o własnych siłach i
              nieśmiało mogę zacząć nazywać siebie programistą.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstStepsSection