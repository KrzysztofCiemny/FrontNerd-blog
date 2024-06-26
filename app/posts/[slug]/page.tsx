import { getAllPostsMetadata, getPostContent } from "@/utils/getPost";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import formatDate from "@/utils/formatDate";
import { Metadata } from "next";

type PageParams = {
  slug: string;
};
type PageProps = {
  params: PageParams;
};

export async function generateMetadata({ params: { slug } }: PageProps): Promise<Metadata> {
  const post = getPostContent(slug);
  const metadata: Metadata = {
    title: post.data.title,
    description: post.data.description
  }

  return metadata
}

export const generateStaticParams = () => {
  const posts = getAllPostsMetadata();
  const staticParams = posts.map((post) => ({
    slug: post.slug,
  }));

  return staticParams
};

const styles = {
  pageWrapper: 'md:flex flex-col items-center',
  postDataContainer: 'flex flex-col items-center max-w-7xl my-8',
  postContentContainer: 'max-w-6xl px-mobileX lg:px-desktopX',
  dateStyles: 'text-slate-500 px-mobileX',
  titleStyles: 'text-heroHClamp font-bold text-center mb-8 px-mobileX lg:px-desktopX',
  imageStyles: 'postMax:rounded-lg h-auto',
  articleStyles: 'prose lg:prose-lg 2xl:prose-xl max-w-[60rem] mb-10',
}
const {pageWrapper, articleStyles, imageStyles, dateStyles, postContentContainer, postDataContainer, titleStyles} = styles

const PostPage = ({ params: { slug } }: PageProps) => {
  const post = getPostContent(slug);
  const {date, title, alt, images} = post.data

  if (!post) {
    return <div>Coś poszło nie tak :/. Nie możemy wyświetlić danych posta.</div>
  }

  return (
    <main className={pageWrapper}>
      <div className={postDataContainer}>
        <p className={dateStyles}>{formatDate(date)}</p>
        <h1 className={titleStyles}>{title}</h1>
        <Image src={images[1]} alt={alt} width={1984} height={1200} priority={true} className={imageStyles} />
      </div>
      <div className={postContentContainer}>
        <article className={articleStyles}>
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    </main>
  )
}

export default PostPage;