import LatestPostSection from "@/components/organisms/latestPostSection/LatestPostSection"
import AllArticlesSection from "@/components/organisms/allArticlesSection/AllArticlesSection"

const AllPosts = () => {
  return (
    <main className="flex justify-center pt-2 lg:pt-mobileY px-mobileX md:px-desktopX">
      <div className="content-max-width flex-col">
        <LatestPostSection />
        <AllArticlesSection />
      </div>
    </main>
  )
}

export default AllPosts
