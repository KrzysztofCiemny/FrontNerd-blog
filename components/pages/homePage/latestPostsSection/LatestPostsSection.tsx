import PostPreviewCard from "@/components/molecules/postPreviewCard/PostPreviewCard";
import PageLink from "@/components/atoms/pageLink/PageLink";
import { PostMetadata } from "@/models/models";

type Props = {
  postMetadata: PostMetadata[];
}

const LatestPostsSection = ({ postMetadata }: Props) => {
  const latestThreePostsMetadata = postMetadata.slice(0, 3);

  return (
    <section className="relative flex justify-center px-mobileX lg:px-desktopX ">
      <div className="content-max-width flex-col mb-desktopY lg:mb-desktopY_Xl">
        <h2 className="md:self-start font-medium text-sm uppercase mb-2 z-[3] reveal">Ostatnie Artykuły</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8 mb-mobileY reveal">
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
