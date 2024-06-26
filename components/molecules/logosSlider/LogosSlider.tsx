import logosSet from "./LogosSet"
import Image from "next/image"

const styles = {
  container: 'relative flex flex-nowrap overflow-hidden max-w-full py-4 my-14 lg:py-8 lg:my-20',
  shadow: 'absolute top-0 w-sliderShadowWidthClamp h-full z-[2] from-transparent to-lightBlue',
  shadowL: 'left-0 bg-gradient-to-l',
  shadowR: 'right-0 bg-gradient-to-r',
  icon: 'pacity-90 h-sliderLogoHeightClamp mx-sliderLogoMarginClamp w-auto max-w-none',
  iconsContainer: 'flex animate-slide'
}

const {container, shadow, icon, shadowL, shadowR, iconsContainer} = styles

const LogosSlider = () => {
  return (
    <section className={container}>
      <div className={`${shadow} ${shadowL}`}  />
      <div className={`${shadow} ${shadowR}`} />
      <div className={iconsContainer}>
        {/* Icons by Icons8 */}
        {logosSet.map((logo, index) => (
          <Image src={logo.path} alt={logo.alt} width={48} height={48} key={index} loading="eager" className={icon} />
        ))}
      </div>
      <div className={iconsContainer}>
        {/* Icons by Icons8 */}
        {logosSet.map((logo, index) => (
          <Image src={logo.path} alt={logo.alt} width={48} height={48} key={index} loading="eager" className={icon} />
        ))}
      </div>
      <div className={iconsContainer}>
        {/* Icons by Icons8 */}
        {logosSet.map((logo, index) => (
          <Image src={logo.path} alt={logo.alt} width={48} height={48} key={index} loading="eager" className={icon} />
        ))}
      </div>
    </section>
  )
}

export default LogosSlider
