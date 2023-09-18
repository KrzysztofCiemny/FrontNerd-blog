import { getPostMetadata } from "@/utils/getPost";
import PostPreviewCard from "@/components/molecules/postPreviewCard/PostPreviewCard";
import PageLink from "@/components/atoms/pageLink/PageLink";

const LatestPostsSection = async () => {
  const postMetadata = await getPostMetadata();
  const latestThreePostsMetadata = postMetadata.slice(0, 3);

  return (
    <section className="relative flex justify-center px-mobileX lg:px-desktopX bg-darkBlue">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 500">
          <path
            fill="#E6F3FF"
            fillOpacity="1"
            d="M2000,180 C1500,310 500,310 0,180 L0,0 L2000,0 Z"
          ></path>
        </svg>
      </div>
      <div className="content-max-width flex-col">
        <h2 className="md:self-start font-medium text-sm uppercase mb-2 z-[3]">Ostatnie Artykuły</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8 mb-mobileY">
          {latestThreePostsMetadata.map(post => {
            return (
              <PostPreviewCard key={post.slug} {...post} />
            )
          })}

        </div>
        <PageLink to="/posts">Zobacz wszystkie posty</PageLink>
      </div>
    </section>
  )
}

export default LatestPostsSection
