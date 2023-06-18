import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/Footer'

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
        </body>
    </html>
  )
}
