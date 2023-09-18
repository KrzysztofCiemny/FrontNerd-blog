import "./globals.css"
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import PageHeader from "@/components/organisms/pageHeader/PageHeader"
import PageFooter from "@/components/organisms/pageFooter/PageFooter"
import Script from "next/script"

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Frontnerd',
  description: 'Blog about front-end development',
}

export default async function RootLayout({ children }: {
  children: React.ReactNode
}) {


  return (
    <html lang='pl'>
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
        <PageHeader />
        {children}
        <PageFooter />
      </body>
    </html>
  )
}
