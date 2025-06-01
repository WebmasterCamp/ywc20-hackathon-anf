import "./globals.css"
import { Inter } from "next/font/google"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ywc20",
  description: "Apple-inspired design portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        
          <Header />
          <main>{children}</main>
          <Footer />
        
      </body>
    </html>
  )
}
