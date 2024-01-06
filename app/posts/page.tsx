import LatestPostSection from "@/components/organisms/latestPostSection/LatestPostSection"
import AllArticlesSection from "@/components/organisms/allArticlesSection/AllArticlesSection"
import { getPostMetadata } from "@/utils/getPost"

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
