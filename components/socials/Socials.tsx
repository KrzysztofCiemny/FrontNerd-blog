import Link from "next/link"
import Image from "next/image"
import { socialsData } from "./socialsData"

type Props = {
  light?: boolean
}

const styles = {
  container: 'flex gap-3',
  image: 'scale-animation'
}
const {container, image} = styles

const Socials = ({ light }: Props) => {
  return (
    <div className={container}>
      {socialsData.map(({href, lightImage, darkImage, alt, name}) => (
        <Link key={name} href={href} target="_blank">
          <Image src={light ? lightImage : darkImage} alt={alt} width={20} height={20} className={image} />
        </Link>
      ))}
    </div>
  )
}

export default Socials