import { MobileMenuOpen } from "@/models/models"

const Hamburger = ({ isMenuOpen, setIsMenuOpen }: MobileMenuOpen) => {
  return (
    <div className="flex flex-col justify-between gap-1 w-5 cursor-pointer z-10 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} data-testid="hamburger">
      <div className={`w-full h-[0.125rem] bg-darkBlue transition-all ease-in ${isMenuOpen ? 'translate-y-[0.2rem] rotate-45' : ''}`} data-testid="first-line" />
      <div className={`h-[0.125rem] bg-darkBlue transition-all ease-in ${isMenuOpen ? '-translate-y-[0.2rem] -rotate-45 w-full' : 'w-[70%]'}`} data-testid="second-line" />
    </div>
  )
}

export default Hamburger
