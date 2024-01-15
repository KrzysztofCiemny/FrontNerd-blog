import Link from "next/link"
import Image from "next/image"

type Props = {
  light?: boolean
}

const Socials = ({ light }: Props) => {
  return (
    <div className="flex gap-3">
      <Link href='https://www.linkedin.com/in/krzysztofciemny/' target="_blank">
        <Image src={light ? '/images/socials/linkedin_light.svg' : '/images/socials/linkedin.svg'} alt="linkedin logo" width={20} height={20} className="scale-animation" />
      </Link>
      <Link href='https://github.com/KrzysztofCiemny' target="_blank">
        <Image src={light ? '/images/socials/github_light.svg' : '/images/socials/github.svg'} alt="github logo" width={20} height={20} className="scale-animation" />
      </Link>
    </div>
  )
}

export default Socials