import Link from 'next/link';

type Props = {
  fontSize: string;
};

const Logo = ({ fontSize }: Props) => {
  const styles = {
    logo: `no-underline text-black font-bold ${fontSize}`,
  };

  const { logo } = styles;

  return (
    <Link href="/" className={logo}>
      Frontnerd.
    </Link>
  );
};

export default Logo;
