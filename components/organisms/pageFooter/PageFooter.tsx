import Socials from "@/components/atoms/socials/Socials"

const PageFooter = () => {
  return (
    <footer className="flex justify-center max-w-[100vw] bg-lightBlack">
      <div className="py-desktopY px-mobileX">
        <div className="flex flex-col items-center gap-3 reveal">
          <div className="text-lightBlue">&copy; 2024 Frontnerd. All rights reserved.</div>
          <Socials light />
        </div>
      </div>
    </footer>
  )
}

export default PageFooter
