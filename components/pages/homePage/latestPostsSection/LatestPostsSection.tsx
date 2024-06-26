import PostPreviewCard from "@/components/molecules/postPreviewCard/PostPreviewCard";
import PageLink from "@/components/atoms/pageLink/PageLink";
import { AllPostsMetadata } from "@/models/models";

const styles = {
  sectionStyles: 'relative flex justify-center px-mobileX lg:px-desktopX',
  container: 'content-max-width flex-col mb-desktopY lg:mb-desktopY_Xl',
  postsContainer: 'grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8 mb-mobileY',
  paragraph: 'max-w-md text-heroPClamp text-slate-500 reveal',
  title: 'md:self-start font-medium text-sm uppercase mb-2 z-[3] reveal',
}
const {sectionStyles, container, postsContainer, title} = styles

const LatestPostsSection = ({ allPostsMetadata }: AllPostsMetadata) => {
  const latestThreePostsMetadata = allPostsMetadata.slice(0, 3);

  return (
    <section className={sectionStyles}>
      <div className={container}>
        <h2 className={title}>Ostatnie Artykuły</h2>
        <div className={postsContainer}>
          {latestThreePostsMetadata.map(post => {
            return (
              <PostPreviewCard key={post.slug} {...post} />
            )
          })}

        </div>
        <PageLink to="/posts" dark>Zobacz wszystkie posty</PageLink>
      </div>
    </section>
  )
}

export default LatestPostsSection
