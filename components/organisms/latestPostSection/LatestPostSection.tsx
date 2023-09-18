import PageLink from "@/components/atoms/pageLink/PageLink"
import Image from "next/image"
import Link from "next/link"
import { getPostMetadata } from "@/utils/getPost"

const LatestPostSection = async () => {
  const postMetadata = await getPostMetadata();
  const [latestPostMetadata] = postMetadata;

  return (
    <section className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-16 2xl:gap-[6.25rem]">
      <div className="flex flex-col order-2 lg:order-first lg:max-w-lg">
        <Link href={`/posts/${latestPostMetadata.slug}`} >
          <h3 className="text-postTitleH2Clamp font-bold mb-4 leading-tight text-color-hover-animation">{latestPostMetadata.title}</h3>
        </Link>
        <p className="text-slate-700 text-postPClamp mb-8 lg:mb-12">{latestPostMetadata.description}</p>
        <PageLink to={`/posts/${latestPostMetadata.slug}`} dark>Przeczytaj post</PageLink>
      </div>
      <Link href={`/posts/${latestPostMetadata.slug}`} className="max-w-full lg:max-w-[41.25rem]">
        <picture>
          <source srcSet={latestPostMetadata.images[1]} media="(max-width: 992px)" />
          <Image src={latestPostMetadata.images[0]} alt={latestPostMetadata.alt} width={1320} height={1640} priority={true} className="rounded-lg h-auto img-highlight" />
        </picture>
      </Link>
    </section>
  )
}

export default LatestPostSection
