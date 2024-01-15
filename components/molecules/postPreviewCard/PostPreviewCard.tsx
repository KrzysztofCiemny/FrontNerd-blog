import { PostMetadata } from "@/models/models"
import Image from "next/image"
import Link from "next/link"

const PostPreviewCard = (props: PostMetadata) => {
  return (
    <Link href={`/posts/${props.slug}`} className="reveal">
      <div className="relative z-[2] w-full rounded-lg">
        <Image src={props.images[2]} alt={props.alt} width={1680} height={1200} priority={true} className="rounded-lg h-auto shadow-imageShadow" />
        <div className="absolute bottom-0 z-[3] p-4 w-full rounded-b-lg text-lightBlue bg-halfTransparentBlack">
          <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold">{props.title}</h3>
        </div>
      </div>
    </Link>

  )
}

export default PostPreviewCard
