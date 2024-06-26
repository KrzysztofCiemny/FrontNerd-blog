export type PostMetadata = {
  title: string;
  description: string;
  date: string;
  images: string[];
  slug: string;
  alt: string;
  category: string;
}

export type AllPostsMetadata = {
  allPostsMetadata: PostMetadata[];
}

export type LogoBody = {
  path: string;
  alt: string;
}

export type MobileMenuOpen = {
  isMenuOpen: Boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type PageLinkProps = {
  children: React.ReactNode,
  to: string,
  dark: boolean
}