import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Petition To help Hamas Free Palestine.',
  description: 'Palestinian Islamic Resistance Movement. From the river to the seש, Palestine will be free!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#080808] text-green-100`}>{children}</body>
    </html>
  )
}
