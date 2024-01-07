import Image from "next/image"
import Link from "next/link"

const AboutMePage = () => {

  return (
    <main className="flex justify-center pt-mobileY lg:pt-desktopY px-mobileX md:px-desktopX">
      <div className="content-max-width flex-col">
        <section className="flex flex-col lg:flex-row gap-5 lg:gap-[5rem] 2xl:gap-[6.25rem] pb-mobileY lg:pb-desktopY">
          <div className="flex flex-col lg:max-w-3xl">
            <h3 className="text-aboutMeTitleClamp font-bold mb-4 leading-tight">Cześć! Jestem Krzysztof</h3>
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
          <Image src='/images/aboutMe/KrzysztofSmile.jpg' alt="picture of the author of this blog" width={900} height={1240} priority={true} className="rounded-lg" />
        </section>
      </div>
    </main>
  )
}

export default AboutMePage