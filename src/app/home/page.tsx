"use client"
import HeroFuneral from "@/components/Hero/Hero";
import HeroWilling from "@/components/Willing/Willing";
import HeroFileLife from "@/components/HeroFile/HeroFile";

export default function Home() {
  return (
    <div>
      <HeroFuneral />
      <HeroWilling />
      <HeroFileLife />
    </div>
  )
}
