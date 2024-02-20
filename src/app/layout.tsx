import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'

const roboto = Roboto({ weight: ['400', '500', '700', '900'], subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Rick and Morty API consumer',
  description: 'Rick and Morty API consumer project Developed by Alexandre Rayol',
  icons: 'https://www.svgrepo.com/show/452092/react.svg', 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
