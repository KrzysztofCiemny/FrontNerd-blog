import Socials from "@/components/atoms/socials/Socials"

const styles = {
  footer: 'flex justify-center max-w-[100vw] bg-lightBlack',
  paddings: 'py-desktopY px-mobileX',
  contentWrapper: 'flex flex-col items-center gap-3 reveal',
  rights: 'text-white',
}
const {footer, contentWrapper, paddings, rights} = styles

const PageFooter = () => {
  return (
    <footer className={footer}>
      <div className={paddings}>
        <div className={contentWrapper}>
          <div className={rights}>&copy; 2024 Frontnerd. All rights reserved.</div>
          <Socials light />
        </div>
      </div>
    </footer>
  )
}

export default PageFooter
