"use client"

import Image from "next/image"

export default function BlogContentPage() {
  return (
    <div className="bg-background min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <Image
          src="/image/blog-cover.png" // replace with your actual image path
          alt="Blog Cover"
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            หัวข้อบล็อกของคุณที่นี่
          </h1>
          <p className="text-muted-foreground text-base leading-7 mb-6">
            ย่อหน้าแรกของเนื้อหาบล็อกที่คุณต้องการใส่ สามารถเริ่มต้นได้ด้วยการเกริ่นเรื่อง
            หรือสร้างคำถามเพื่อชวนให้อ่านต่อไป
          </p>
          <p className="text-muted-foreground text-base leading-7 mb-4">
            ย่อหน้าต่อ ๆ ไปของเนื้อหา ควรแบ่งให้ผู้อ่านอ่านง่าย ใช้ประโยคสั้น
            และเรียงลำดับความคิดให้ดี อาจแทรกรูปภาพเพิ่มเติมหรือใส่ bullet list ถ้าจำเป็น
          </p>
          <p className="text-muted-foreground text-base leading-7">
            ปิดท้ายด้วยข้อคิด หรือ call-to-action เช่น การชวนแสดงความคิดเห็น หรือกดแชร์บทความ
          </p>
        </div>
      </div>
    </div>
  )
}
