import { PostMetadata } from "@/models/models"
import Image from "next/image"
import Link from "next/link"

const styles = {
  wrapper: 'relative z-[2] w-full rounded-lg',
  image: 'rounded-lg h-auto shadow-imageShadow',
  titleWrapper: 'absolute bottom-0 z-[3] p-4 w-full rounded-b-lg text-white bg-halfTransparentBlack',
  titleStyles: 'text-xl lg:text-2xl xl:text-3xl font-semibold',
}
const {wrapper, image, titleStyles, titleWrapper} = styles

const PostPreviewCard = ({slug, images, alt, title}: PostMetadata) => {
  return (
    <Link href={`/posts/${slug}`} className="reveal">
      <div className={wrapper}>
        <Image src={images[2]} alt={alt} width={1680} height={1200} priority={true} className={image} />
        <div className={titleWrapper}>
          <h3 className={titleStyles}>{title}</h3>
        </div>
      </div>
    </Link>

  )
}

export default PostPreviewCard
