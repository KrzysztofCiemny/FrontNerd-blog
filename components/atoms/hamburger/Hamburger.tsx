import { MobileMenuOpen } from "@/models/models"

const Hamburger = ({ isMenuOpen, setIsMenuOpen }: MobileMenuOpen) => {
  return (
    <div className="flex flex-col justify-between gap-1 w-5 cursor-pointer z-10 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <div className={`w-full h-[0.125rem] bg-darkBlue transition-all ease-in ${isMenuOpen ? 'translate-y-[0.2rem] rotate-45' : ''}`} />
      <div className={`h-[0.125rem] bg-darkBlue transition-all ease-in ${isMenuOpen ? '-translate-y-[0.2rem] -rotate-45 w-full' : 'w-[70%]'}`} />
    </div>
  )
}

export default Hamburger
