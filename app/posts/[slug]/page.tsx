import { getPostMetadata, getPostContent } from "@/utils/getPost";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import formatDate from "@/utils/formatDate";

export const generateStaticParams = async () => {
  const posts = await getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = async ({ params }: any) => {
  const slug = params.slug;
  const post = await getPostContent(slug);

  if (!post) {
    return <div>Coś poszło nie tak :/. Nie możemy wyświetlić danych posta.</div>
  }

  return (
    <main className="md:flex flex-col items-center">
      <div className="flex flex-col items-center max-w-7xl my-8">
        <p className="text-slate-500 px-mobileX">{formatDate(post.data.date)}</p>
        <h1 className="text-heroHClamp font-bold text-center mb-8 px-mobileX lg:px-desktopX">{post.data.title}</h1>
        <Image src={post.data.images[1]} alt={post.data.alt} width={1984} height={1200} priority={true} className="postMax:rounded-lg h-auto" />
      </div>
      <div className="max-w-6xl px-mobileX lg:px-desktopX">
        <article className="prose lg:prose-lg max-w-[60rem]">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    </main>
  )
}

export default PostPage;