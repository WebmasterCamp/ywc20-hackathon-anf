"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "หากวันนี้คือวันสุดท้ายของชีวิต ได้จัดการสิ่งสำคัญไว้หรือยัง",
    description: "หากวันนี้คือวันสุดท้ายของชีวิต ได้จัดการสิ่งสำคัญไว้หรือยัง",
    imageUrl: "/image/image.png",
    category: "Branding",
  },
  {
    id: 2,
    title: "หนังสือแสดงเจตนาสำคัญกกว่าที่คิด",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
    imageUrl: "/image/White.png",
    category: "Web Design",
  },
  {
    id: 3,
    title: "วาระสุดท้ายคุณกำหนดได้",
    description: "หากวันนี้คือวันสุดท้ายของชีวิต ได้จัดการสิ่งสำคัญไว้หรือยัง",
    imageUrl: "/image/White.png",
    category: "Mobile App",
  },
  {
    id: 4,
    title: "วาระสุดท้าย การจากลาที่เปี่ยมความสุข",
    description: "หากวันนี้คือวันสุดท้ายของชีวิต ได้จัดการสิ่งสำคัญไว้หรือยัง",
    imageUrl: "/image/White.png",
    category: "Digital Marketing",
  },
  {
    id: 5,
    title: "z",
    description: "หากวันนี้คือวันสุดท้ายของชีวิต ได้จัดการสิ่งสำคัญไว้หรือยัง",
    imageUrl: "/image/White.png",
    category: "UI/UX",
  },
  {
    id: 6,
    title: "Minimalist Product Design",
    description: "หากวันนี้คือวันสุดท้ายของชีวิต ได้จัดการสิ่งสำคัญไว้หรือยัง",
    imageUrl: "/image/White.png",
    category: "Product Design",
  },
]

export default function PortfolioGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">บทความ</h2>
          {/* <p className="mt-4 text-lg text-muted-foreground">
            A showcase of our minimalist designs and creative solutions.
          </p> */}
        </motion.div>

        {/* Removed category filter buttons */}

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                //className="bg-white rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"

                className="bg-white rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  >
                    <p className="text-white text-center px-4">{project.description}</p>
                  </motion.div>
                </div>
                <div className="p-6">
                  {/* Removed category display */}
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <a
                    href="/content"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center"
                  >
                    อ่านเพิ่มเติม
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
