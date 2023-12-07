import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

import './globals.css'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'

const inter = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Loja',
  description: 'Ecommerce Ecommuna',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider/>
        <ToastProvider/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
