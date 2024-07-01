import './globals.css';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import PageHeader from '@/components/organisms/pageHeader/PageHeader';
import PageFooter from '@/components/organisms/pageFooter/PageFooter';
import Script from 'next/script';
import { AppContextClientProvider } from '@/context/AppContextClientProvider';
import { getAllPostsMetadata } from '@/utils/getPost';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: 'Frontnerd', template: '%s | Frontnerd' },
  description:
    'Frontnerd to blog o programowaniu frontendowym i miejsce dla wszystkich pasjonatów frontendu.',
  applicationName: 'Frontnerd',
  authors: [{ name: 'Krzysztof Ciemny', url: 'https://www.linkedin.com/in/krzysztofciemny/' }],
  creator: 'Krzysztof Ciemny',
  keywords: [
    'Frontend',
    'Front-end',
    'Programming',
    'Next.js',
    'React',
    'JavaScript',
    'Vue',
    'Typescript',
    'CSS',
    'HTML',
    'Tailwind',
  ],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const posts = getAllPostsMetadata();

  return (
    <html lang="pl">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-TVFN3DJ8T8"></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TVFN3DJ8T8');
        `}
      </Script>
      <body className={`${rubik.className} bg-lightBlue text-black min-h-screen`}>
        <AppContextClientProvider posts={posts}>
          <PageHeader />
          {children}
          <PageFooter />
        </AppContextClientProvider>
      </body>
    </html>
  );
}
