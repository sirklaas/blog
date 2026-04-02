import { getPosts } from "@/lib/pocketbase"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import PostGrid from "@/app/components/PostGrid"

export default async function BlogMainPage() {
  const data = await getPosts(1)
  const heroPost = data.items[0]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero image — 21:9, from most recent post */}
        {heroPost?.hero_image_url && (
          <div className="w-full aspect-[21/9] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroPost.hero_image_url}
              alt={heroPost.card_title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Intro block */}
        <div className="px-[20px] py-[16px] border-b border-[#eee] bg-white">
          <p className="font-nunito text-[9px] font-bold text-[#e84e1b] tracking-[0.12em] uppercase mb-[5px]">
            Blog
          </p>
          <h1 className="font-barlow font-light text-[28px] leading-none text-[#1a1a1a]">
            Stories &amp; insights
          </h1>
          <p className="font-nunito text-[11px] text-[#666] mt-[6px] leading-relaxed max-w-[600px]">
            Ideas, experiments, and things we&apos;ve learned building the pinkmilk content machine.
          </p>
        </div>

        {/* Card grid + load more */}
        <PostGrid initialPosts={data.items} totalPages={data.totalPages} />
      </main>

      <Footer />
    </div>
  )
}
