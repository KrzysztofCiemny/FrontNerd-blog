"use client"

import PageLink from "@/components/atoms/pageLink/PageLink"
import Image from "next/image"
import Link from "next/link"
import { AllPostsMetadata } from "@/models/models"
import { useEffect } from "react"
import revealElementsOnScroll from "@/utils/scrollAnimations"

const postsDirectory = '/posts/';

const styles = {
  sectionStyles: 'flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-16 2xl:gap-[6.25rem]',
  container: 'flex flex-col order-2 lg:order-first lg:max-w-lg reveal',
  paragraph: 'text-slate-700 text-postPClamp mb-8 lg:mb-12',
  titleStyles: 'text-postTitleH2Clamp font-bold mb-4 leading-tight text-color-hover-animation',
  image: 'rounded-lg h-auto img-highlight shadow-imageShadow',
  link: 'max-w-full lg:max-w-[41.25rem] reveal',
}
const {sectionStyles, container, paragraph, titleStyles, image, link} = styles

const LatestPostSection = ({ allPostsMetadata }: AllPostsMetadata) => {
  const [latestPostMetadata] = allPostsMetadata;
  const { title, slug, description, images, alt } = latestPostMetadata;

  useEffect(() => {
    revealElementsOnScroll()
  }, []);

  return (
    <section className={sectionStyles}>
      <div className={container}>
        <Link href={`${postsDirectory}${slug}`}>
          <h3 className={titleStyles}>{title}</h3>
        </Link>
        <p className={paragraph}>{description}</p>
        <PageLink to={`${postsDirectory}${slug}`} dark>Przeczytaj post</PageLink>
      </div>
      <Link href={`${postsDirectory}${slug}`} className={link}>
        <picture>
          <source srcSet={images[1]} media="(max-width: 992px)" />
          <Image src={images[0]} alt={alt} width={1320} height={1640} priority={true} className={image} />
        </picture>
      </Link>
    </section>
  )
}

export default LatestPostSection
