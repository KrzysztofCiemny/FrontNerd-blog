import Image from "next/image";
import Link from "next/link";

const FirstProjectSection = () => {

  return (
    <section className="flex justify-center bg-lightBlue2">
      <div className="content-max-width flex justify-center flex-col pt-mobileY lg:py-desktopY_Xl pb-16 px-mobileX lg:px-desktopX">
        <h3 className="text-postTitleH2Clamp font-bold mb-6 lg:mb-12 leading-tight reveal">Pierwszy projekt</h3>
        <div className="flex flex-col xl:flex-row xl:items-center gap-5 xl:gap-16 mt-mobileY xl:mt-desktopY">
          <div className="flex flex-col xl:max-w-lg order-2 xl:order-1">
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold mb-4 leading-tight reveal">Memory Game</h3>
              <p className="text-slate-700 mb-8 lg:mb-12 reveal">
                Jest to projekt, po którym poczułem, że to co robię ma sens. Jest to gra memory napisana przy użyciu HTML, CSS i JS.
                Proponuję zagrać, mojej 6-letniej siostrze bardzo się podoba 😄
              </p>
            </div>
            <Link href='https://github.com/KrzysztofCiemny/Memory' target="_blank">
              <div className="flex items-center gap-3">
                <Image src='/images/socials/github.svg' alt="github logo" width={20} height={20} className="scale-animation" />
              </div>
            </Link>
          </div>
          <Link href='https://krzysztofciemny.github.io/Memory/' className="xl:max-w-[41.25rem] xl:order-2 reveal" target="_blank">
            <Image src='/images/aboutMe/Memory-snap.png' alt='picture of memory game' width={1299} height={841} priority={true} className="rounded-lg h-auto xl:max-w-[41.25rem] img-highlight shadow-imageShadow" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FirstProjectSection