"use client"

import Image from "next/image"
import Link from "next/link"
import ArticlesNavigation from "@/components/molecules/articlesNavigation/ArticlesNavigation"
import { useEffect, useState } from "react"
import { PostMetadata } from "@/models/models"
import revealElementsOnScroll from "@/utils/scrollAnimations"

type Props = {
  postMetadata: PostMetadata[];
}

const allArticlesCategory = 'Wszystko'

const AllArticlesSection = ({ postMetadata }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState(allArticlesCategory);

  const filteredPosts = selectedCategory && selectedCategory !== allArticlesCategory
    ? postMetadata.filter(post => post.category === selectedCategory) : postMetadata;

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    revealElementsOnScroll()
  }, [selectedCategory]);

  return (
    <section className="w-full my-mobileY lg:my-desktopY">
      <h2 className="text-sm font-medium uppercase mb-1 mt-8">Więcej artykułów</h2>
      <hr className="h-px mb-mobileY  text-slate-300 w-full" />
      <ArticlesNavigation onCategoryClick={handleCategoryClick} />
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-16 lg:gap-x-9 my-mobileY lg:my-desktopY">
        {filteredPosts.map(post => {
          return (
            <li key={post.slug}>
              <article className="flex flex-col reveal">
                <Link href={`/posts/${post.slug}`}>
                  <h3 className="text-[1.8rem] font-semibold mb-4 leading-tight text-color-hover-animation">{post.title}</h3>
                </Link>
                <Link href={`/posts/${post.slug}`} className="-order-1">
                  <Image src={post.images[2]} alt={post.alt} width={1680} height={1200} className="rounded-lg h-auto mb-6 img-highlight shadow-imageShadow" />
                </Link>
                <p className="text-slate-700 lg:text-lg leading-8">{post.description} </p>
              </article>
            </li>
          )
        })}

      </ul>
    </section>
  )
}

export default AllArticlesSection
