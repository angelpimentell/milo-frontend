import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from './components/main/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Milo',
  description: 'Milo Ecommerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
