import HeroSection from '@/components/pages/homePage/heroSection/HeroSection';
import LatestPostsSection from '@/components/pages/homePage/latestPostsSection/LatestPostsSection';
import AboutABlogSection from '@/components/pages/homePage/aboutABlog/AboutABlogSection';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <LatestPostsSection />
      <AboutABlogSection />
    </main>
  );
};

export default HomePage;
