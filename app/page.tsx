import HeroSection from "@/components/pages/homePage/heroSection/HeroSection"
import LatestPostsSection from "@/components/pages/homePage/latestPostsSection/LatestPostsSection"
import AboutABlogSection from "@/components/pages/homePage/aboutABlog/AboutABlogSection"
import { getPostMetadata } from "@/utils/getPost";

const HomePage = () => {
  const postMetadata = getPostMetadata();

  return (
    <main>
      <HeroSection />
      <LatestPostsSection postMetadata={postMetadata} />
      <AboutABlogSection />
    </main>
  )
}

export default HomePage;