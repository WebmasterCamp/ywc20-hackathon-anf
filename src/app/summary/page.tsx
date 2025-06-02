"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation";

export default function SummaryPage() {
  const router = useRouter();
  // Mock data
  const religion = "พุทธ"
  const location = "วัดพระแก้ว"
  const decoration = "ดอกไม้สด"
  const coffin = "ลายทอง"
  const attire = "ขาว"

  const priceReligion = 0
  const priceLocation = 12000
  const priceDecoration = 8000
  const priceCoffin = 20000
  const priceAttire = 3000

  const summaryItems = [
    { title: "ศาสนา", value: religion, price: priceReligion },
    { title: "สถานที่", value: location, price: priceLocation },
    { title: "ของตกแต่ง", value: decoration, price: priceDecoration },
    { title: "หีบศพ", value: coffin, price: priceCoffin },
    { title: "การแต่งกาย", value: attire, price: priceAttire },
  ]

  const totalPrice = summaryItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          สรุปผลการกรอกข้อมูล
        </motion.h2>

        <div className="overflow-x-auto">
  <table className="min-w-full table-auto rounded-[20px] overflow-hidden shadow-sm bg-white">
  <thead className="bg-muted">
    <tr>
      <th className="px-4 py-3 text-left font-semibold text-primary">หัวข้อ</th>
      <th className="px-4 py-3 text-left font-semibold text-primary">รายการ</th>
      <th className="px-4 py-3 text-right font-semibold text-primary">ราคา (บาท)</th>
    </tr>
  </thead>
  <tbody className="divide-y divide-gray-200">
    {summaryItems.map((item, index) => (
      <tr key={index} className="hover:bg-accent/20 transition-colors">
        <td className="px-4 py-3">{item.title}</td>
        <td className="px-4 py-3">{item.value || "-"}</td>
        <td className="px-4 py-3 text-right">{item.price.toLocaleString()}</td>
      </tr>
    ))}
    <tr className="font-bold text-foreground bg-gray-50">
      <td className="px-4 py-4" colSpan={2}>รวม</td>
      <td className="px-4 py-4 text-right text-primary">{totalPrice.toLocaleString()} บาท</td>
    </tr>
  </tbody>
</table>

</div>
    <motion.div
        className="mt-8 flex justify-end gap-5 p-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        >
        <button
          className="px-6 py-3 bg-[#34bee0] text-white hover:bg-primary-dark transition-colors border border-gray-300 rounded-lg shadow-sm"
          onClick={() => router.push('/')}
        >
          ไว้วางใจให้เราดูแล
        </button>
        <button
          className="px-6 py-3 text-black bg-white hover:bg-primary-dark transition-colors border border-gray-300 rounded-lg shadow-sm"
        >
          แชร์
        </button>
    </motion.div>

      </div>
    </section>
  )
}
