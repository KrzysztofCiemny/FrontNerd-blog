"use client"

import Image from "next/image"
import Link from "next/link"
import ArticlesNavigation from "@/components/molecules/articlesNavigation/ArticlesNavigation"
import { useEffect, useState } from "react"
import { AllPostsMetadata } from "@/models/models"
import revealElementsOnScroll from "@/utils/scrollAnimations"

const allArticlesCategory = 'Wszystko';

const styles = {
  sectionStyles: 'w-full my-mobileY lg:my-desktopY',
  horizontal: 'h-px mb-mobileY  text-slate-300 w-full',
  container: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-16 lg:gap-x-9 my-mobileY lg:my-desktopY',
  paragraph: 'text-slate-700 lg:text-lg leading-8',
  title: 'text-sm font-medium uppercase mb-1 mt-8',
  articleStyles: 'flex flex-col reveal',
  articleTitle: 'text-[1.8rem] font-semibold mb-4 leading-tight text-color-hover-animation',
  image: 'rounded-lg h-auto mb-6 img-highlight shadow-imageShadow',
}
const {sectionStyles, container, paragraph, title, image, horizontal, articleTitle, articleStyles} = styles

const AllArticlesSection = ({ allPostsMetadata }: AllPostsMetadata) => {
  const [selectedCategory, setSelectedCategory] = useState(allArticlesCategory);

  const filteredPosts = selectedCategory && selectedCategory !== allArticlesCategory
    ? allPostsMetadata.filter(post => post.category === selectedCategory) : allPostsMetadata;

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    revealElementsOnScroll()
  }, [selectedCategory]);

  return (
    <section className={sectionStyles}>
      <h2 className={title}>Więcej artykułów</h2>
      <hr className={horizontal} />
      <ArticlesNavigation onCategoryClick={handleCategoryClick} />
      <ul className={container}>
        {filteredPosts.map(({slug, title, images, alt, description}) => (
            <li key={slug}>
              <article className={articleStyles}>
                <Link href={`/posts/${slug}`}>
                  <h3 className={articleTitle}>{title}</h3>
                </Link>
                <Link href={`/posts/${slug}`} className="-order-1">
                  <Image src={images[2]} alt={alt} width={1680} height={1200} className={image} />
                </Link>
                <p className={paragraph}>{description} </p>
              </article>
            </li>
          )
        )}

      </ul>
    </section>
  )
}

export default AllArticlesSection
