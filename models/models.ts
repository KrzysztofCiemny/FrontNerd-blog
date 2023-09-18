export interface PostMetadata {
  title: string;
  description: string;
  date: string;
  images: string[];
  slug: string;
  alt: string
}

export interface LogoBody {
  path: string;
  alt: string;
}

export interface MobileMenuOpen {
  isMenuOpen: Boolean,
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}