import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL(`https://explain-it-gpt.vercel.app/`),
  title: 'Explain it GPT',
  description: 'Generate Explanations of any Term.',
  openGraph: {
    title: 'Explain it GPT',
    description: 'Generate Explanations of any Term.',
    url: `/`,
    siteName: 'Explain it GPT',
    images: [
      {
        url: `/screenshot.png`
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Explain it GPT',
    description: 'Generate Explanations of any Term.',
    creator: '@urwah1248',
    images: [`/screenshot.png`],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2814923421329618"
        crossOrigin="anonymous"></script>
      <body className={`${inter.className} text-gray-200 bg-gray-900`}>
        <Header/>

        {children}

        <Footer/>

        <Analytics />
      </body>
    </html>
  )
}
