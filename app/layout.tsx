import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Explain it GPT',
  description: 'Ask AI to explain things for you.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-gray-200 bg-gray-900`}>
        <Header/>
        {children}
        <Footer/>
        <Analytics />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2814923421329618"
        crossOrigin="anonymous"></script>
        </body>
    </html>
  )
}
