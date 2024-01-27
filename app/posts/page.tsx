import LatestPostSection from "@/components/pages/articlesPage/latestPostSection/LatestPostSection"
import AllArticlesSection from "@/components/pages/articlesPage/allArticlesSection/AllArticlesSection"
import { getPostMetadata } from "@/utils/getPost"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "W tym miejscu możesz znaleźć wiele przydatnej wiedzy, gdyż znajdują się tu wszystkie artykuły Frontnerdu."
}

const AllPosts = () => {
  const postMetadata = getPostMetadata();
  return (
    <main className="flex justify-center pt-2 lg:pt-mobileY px-mobileX md:px-desktopX">
      <div className="content-max-width flex-col">
        <LatestPostSection postMetadata={postMetadata} />
        <AllArticlesSection postMetadata={postMetadata} />
      </div>
    </main>
  )
}

export default AllPosts
