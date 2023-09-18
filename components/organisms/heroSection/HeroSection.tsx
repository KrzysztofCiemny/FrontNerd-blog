import LogosSlider from "../../molecules/logosSlider/LogosSlider"

const HeroSection = () => {
  return (
    <section className="flex justify-center pt-mobileY px-mobileX lg:pt-desktopY lg:px-desktopX">
      <div className="content-max-width flex-col text-center overflow-hidden">
        <h1 className="flex flex-col mb-4 text-heroHClamp font-bold">
          <span>Get better at the Front&#8209;end</span>
          <span>Be the Front Nerd</span>
        </h1>
        <p className="max-w-md text-heroPClamp text-slate-500">
          FrontNerd to miejsce w którym publikowane są treści ze świata Front&#8209;endu i nie tylko.
        </p>
        <LogosSlider />
      </div>
    </section>
  )
}

export default HeroSection
