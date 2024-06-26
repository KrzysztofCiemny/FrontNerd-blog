import LatestPostSection from "@/components/pages/articlesPage/latestPostSection/LatestPostSection"
import AllArticlesSection from "@/components/pages/articlesPage/allArticlesSection/AllArticlesSection"
import { getAllPostsMetadata } from "@/utils/getPost"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "W tym miejscu możesz znaleźć wiele przydatnej wiedzy, gdyż znajdują się tu wszystkie artykuły Frontnerdu."
}

const styles = {
  pageWrapper: 'flex justify-center pt-2 lg:pt-mobileY px-mobileX md:px-desktopX',
  sectionsContainer: 'content-max-width flex-col'
}
const {pageWrapper, sectionsContainer} = styles

const AllPosts = () => {
  const allPostsMetadata = getAllPostsMetadata();
  return (
    <main className={pageWrapper}>
      <div className={sectionsContainer}>
        <LatestPostSection allPostsMetadata={allPostsMetadata} />
        <AllArticlesSection allPostsMetadata={allPostsMetadata} />
      </div>
    </main>
  )
}

export default AllPosts
