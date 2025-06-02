"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Header() {

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md overscroll-none overflow-hidden"
      style={{ backgroundColor: '#ABE7EF' }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >

    <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-6 overflow-hidden" aria-label="Global">
      <div className="flex lg:flex-1">
        <Link href="/home" className="-m-1.5 p-1.5">
          <span className="sr-only">JadeJaanlong</span>
          <img
            className="h-10 w-auto"
            src="/image/WhiteLogo.png"
            alt="Flowers & Saints Logo"
          />
        </Link>
      </div>

      <div className="flex gap-x-12">
        <Link
          href="/blogs"
          rel="noopener noreferrer"
          className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
        >
          บทความ
        </Link>
        <Link
          href="/aboutus"
          rel="noopener noreferrer"
          className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
        >
          เกี่ยวกับเรา
        </Link>
        <Link
          href="/willingform"
          rel="noopener noreferrer"
          className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
        >
          เจตจำนง
        </Link>
        <Link
          href="/"
          rel="noopener noreferrer"
          className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
        >
          แฟ้มชีวิต
        </Link>
      </div>

      <div className="flex flex-1 justify-end">
        <button
          className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
        >
          ลงชื่อเข้าใช้
        </button>
      </div>
    </nav>

    </motion.header>
  )
}
