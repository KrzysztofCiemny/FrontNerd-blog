import { MobileMenuOpen } from "@/models/models"

const Hamburger = ({ isMenuOpen, setIsMenuOpen }: MobileMenuOpen) => {

  const styles = {
    container: 'flex flex-col justify-between gap-1 w-5 cursor-pointer z-10 md:hidden',
    firstLine: `w-full h-[0.125rem] bg-black transition-all ease-in ${isMenuOpen ? 'translate-y-[0.2rem] rotate-45' : ''}`,
    secondLine: `h-[0.125rem] bg-black transition-all ease-in ${isMenuOpen ? '-translate-y-[0.2rem] -rotate-45 w-full' : 'w-[70%]'}`,
  }
  
  const {container, firstLine, secondLine} = styles
  
  return (
    <div className={container} onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <div className={firstLine} />
      <div className={secondLine} />
    </div>
  )
}

export default Hamburger
