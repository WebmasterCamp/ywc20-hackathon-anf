import "./globals.css"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import type React from "react"

export const metadata = {
  title: "เจตจรรโลง",
  description: "ลาลับอย่างวางใจ เพราะทุกอย่างวางแผนได้ด้วยตัวคุณ ",
  icons: {
    icon: "/image/WhiteLogo.png", // ✅ relative to public/
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
