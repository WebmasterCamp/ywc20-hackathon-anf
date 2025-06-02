"use client"

import { motion } from "framer-motion"

export default function HeroFileLife() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <motion.div
          className="mx-auto mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <img
              src="/image/file.png"
              alt="File"
              width={600}
              height={600}
              // className="w-[500px] rounded-2xl shadow-xl ring-1 ring-gray-900/10"
            />
          </div>
        </motion.div>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
            className="mt-10 text-2xl font-bold tracking-tight text-foreground sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gradient">แฟ้มชีวิต</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground whitespace-nowrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            รวมทุกสิ่งสำคัญ เพื่อส่งต่อให้คนที่รักได้สานต่ออย่างวางใจ
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="/"
              rel="noopener noreferrer"
              className="text-sm font-semibold leading-6 rounded-4xl border-2 px-4 py-2 inline-block"
              style={{ borderColor: '#FFFFFF', backgroundColor: '#FFFFFF' }}
            >
              เริ่มต้นอัปโหลด <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}