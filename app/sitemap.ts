import { MetadataRoute } from "next";
import { getAllPostsMetadata } from "@/utils/getPost";

const defaultUrl = "https://www.frontnerd.pl";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: defaultUrl,
      lastModified: new Date("2024-01-15"),
    },
    {
      url: `${defaultUrl}/posts`,
      lastModified: new Date("2024-01-15"),
    },
    {
      url: `${defaultUrl}/o-mnie`,
      lastModified: new Date("2024-01-15"),
    },
  ];

  const posts = getAllPostsMetadata();
  posts.map((post) => {
    routes.push({
      url: `${defaultUrl}/posts/${post.slug}`,
      lastModified: new Date(post.date),
    });
  });

  return routes;
}
