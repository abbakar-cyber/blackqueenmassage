import type { Metadata } from 'next';
import {Roboto} from '@next/font/google';
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


const roboto = Roboto({
  subsets:['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Black Queen Massage',
  description: 'Black Queen Massage and Escort',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
        </head>
      <body className={roboto.className} >
        
        <main className="relative overflow-hidden bg-gray-700">
          {children}
        </main>
        
      </body>
    </html>
  )
}
