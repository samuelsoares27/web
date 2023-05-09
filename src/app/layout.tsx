'use client'
import './globals.scss'
import { Poppins } from 'next/font/google'
import AppBar from '../app/components/appBar/appBar' 

const PoppinsFonts = Poppins({
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets:['latin']
})

export const metadata = {
  title: 'Website',
  description: 'Website generic to modify',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">     
      <body className={PoppinsFonts.className}>
        <AppBar/>   
        {children}
      </body>
    </html>
  )
}
