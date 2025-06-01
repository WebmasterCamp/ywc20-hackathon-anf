"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/home" className="-m-1.5 p-1.5">
            <span className="sr-only">Flowers & Saints</span>
            <img
              className="h-10 w-auto"
              src="/image/WhiteLogo.png"
              alt="Flowers & Saints Logo"
            />
          </Link>
        </div>
        <div className="flex gap-x-12">
          <Link
            href="/"
            rel="noopener noreferrer"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"

          >
            Work
          </Link>
          <Link 
            href="/aboutus"
            rel="noopener noreferrer"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              login
            </button>
          
        </div>
      </nav>
    </motion.header>
  )
}
