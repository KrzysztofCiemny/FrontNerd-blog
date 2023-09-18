import HeroSection from "@/components/organisms/heroSection/HeroSection"
import LatestPostsSection from "@/components/organisms/latestPostsSection/LatestPostsSection"
import AboutABlogSection from "@/components/organisms/aboutABlog/AboutABlogSection"

const HomePage = () => {

  return (
    <main>
      <HeroSection />
      <LatestPostsSection />
      <AboutABlogSection />
    </main>
  )
}

export default HomePage;