import Image from "next/image"
import Link from "next/link"

const AboutMePage = () => {

  return (
    <main>
      <section className="flex justify-center pt-mobileY pb-desktopY lg:py-desktopY px-mobileX lg:px-desktopX">
        <div className="content-max-width lg:items-start flex flex-col lg:flex-row gap-5 lg:gap-16 2xl:gap-[6.25rem]">
          <div className="flex flex-col lg:max-w-3xl">
            <h1 className="text-aboutMeTitleClamp font-bold mb-4 leading-tight">Cześć! Jestem Krzysztof</h1>
            <p className="text-slate-700 text-postPClamp mb-8 lg:mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id tellus est.
              Cras pellentesque bibendum magna non accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse id tellus est. Cras pellentesque bibendum magna non accumsan.
            </p>
            <div className="flex gap-3 mb-5">
              <Link href='https://www.linkedin.com/in/krzysztofciemny/'>
                <Image src='/images/socials/linkedin.svg' alt="linkedin logo" width={24} height={24} />
              </Link>
              <Link href='https://github.com/KrzysztofCiemny'>
                <Image src='/images/socials/github.svg' alt="github logo" width={24} height={24} />
              </Link>
            </div>
          </div>
          <Image src='/images/aboutMe/KrzysztofSmile.jpg' alt="picture of the author of this blog" width={572} height={630} priority={true} className="rounded-lg" />
        </div>
      </section>

      <section className="flex justify-center bg-lightBlack">
        <div className="content-max-width flex justify-center flex-col pt-mobileY lg:pt-desktopY pb-16 lg:pb-40 px-mobileX lg:px-desktopX">
          <h2 className="text-postTitleH2Clamp font-bold mb-6 lg:mb-16 leading-tight text-lightBlue">Cel</h2>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 max-w-2xl">
            <Image src='/images/aboutMe/group.svg' alt="goal icon" width={120} height={120} className="max-w-[30px] lg:max-w-none" />
            <p className="text-lightBlue text-postPClamp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id tellus est.
              Cras pellentesque bibendum magna non accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse id tellus est. Cras pellentesque bibendum magna non accumsan.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutMePage