import HeroSection from "@/components/pages/homePage/heroSection/HeroSection"
import LatestPostsSection from "@/components/pages/homePage/latestPostsSection/LatestPostsSection"
import AboutABlogSection from "@/components/pages/homePage/aboutABlog/AboutABlogSection"
import { getAllPostsMetadata } from "@/utils/getPost";

const HomePage = () => {
  const allPostsMetadata = getAllPostsMetadata();

  return (
    <main>
      <HeroSection />
      <LatestPostsSection allPostsMetadata={allPostsMetadata} />
      <AboutABlogSection />
    </main>
  )
}

export default HomePage;