import logosSet from "./LogosSet"
import Image from "next/image"

const LogosSlider = () => {
  return (
    <section className="relative flex flex-nowrap overflow-hidden max-w-full py-4 my-14 lg:py-8 lg:my-20" data-testid="slider">
      <div className="absolute top-0 left-0 w-sliderShadowWidthClamp h-full z-[2] bg-gradient-to-l from-transparent to-lightBlue" />
      <div className="absolute top-0 right-0 w-sliderShadowWidthClamp h-full z-[2] bg-gradient-to-r from-transparent to-lightBlue" />
      <div className="flex animate-slide">
        {/* Icons by Icons8 */}
        {logosSet.map((logo, index) => {
          return <Image src={logo.path} alt={logo.alt} width={48} height={48} key={index} loading="eager" className="opacity-90 h-sliderLogoHeightClamp mx-sliderLogoMarginClamp w-auto max-w-none" />
        })}
      </div>
      <div className="flex animate-slide">
        {/* Icons by Icons8 */}
        {logosSet.map((logo, index) => {
          return <Image src={logo.path} alt={logo.alt} width={48} height={48} key={index} loading="eager" className="opacity-90 h-sliderLogoHeightClamp mx-sliderLogoMarginClamp w-auto max-w-none" />
        })}
      </div>
      <div className="flex animate-slide">
        {/* Icons by Icons8 */}
        {logosSet.map((logo, index) => {
          return <Image src={logo.path} alt={logo.alt} width={48} height={48} key={index} loading="eager" className="opacity-90 h-sliderLogoHeightClamp mx-sliderLogoMarginClamp w-auto max-w-none" />
        })}
      </div>
    </section>
  )
}

export default LogosSlider
