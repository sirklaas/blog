"use client"

import { useState } from "react"
import Link from "next/link"
import type { Post } from "@/lib/pocketbase"

type PostGridProps = {
  initialPosts: Post[]
  totalPages: number
}

function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/${post.id}`} className="group block">
      <div className="border border-[#eee] rounded-[2px] overflow-hidden hover:shadow-md transition-shadow">
        <div className="h-[110px] overflow-hidden bg-[#f0f0f0]">
          {post.hero_image_url && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.hero_image_url}
              alt={post.card_title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
        </div>
        <div className="p-[8px] bg-white">
          <h3 className="font-nunito text-[9px] font-bold text-[#e84e1b] tracking-[0.12em] uppercase mb-[5px] text-center">
            {post.intro_heading}
          </h3>
          <h4 className="font-barlow text-[20px] leading-none text-[#1a1a1a] text-center" style={{ fontWeight: 900 }}>
            {post.heading}
          </h4>
          {post.sub_heading && (
            <h2 className="font-barlow text-[13px] font-semibold text-[#666] mt-[6px] leading-relaxed text-center">
              {post.sub_heading}
            </h2>
          )}
          {post.intro_body && (
            <p className="font-nunito text-[11px] text-[#666] mt-[12px] leading-relaxed text-center">
              {post.intro_body}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}

export default function PostGrid({ initialPosts, totalPages }: PostGridProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const hasMore = currentPage < totalPages

  async function loadMore() {
    setLoading(true)
    try {
      const nextPage = currentPage + 1
      const res = await fetch(`/api/posts?page=${nextPage}`)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      setPosts((prev) => [...prev, ...data.items])
      setCurrentPage(nextPage)
    } catch (err) {
      console.error("Failed to load more posts:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-[repeat(3,260px)] justify-center gap-[30px] py-[16px]">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        </div>
      </div>

      {hasMore && (
        <div className="w-[840px] mx-auto text-center py-[14px] border-t border-[#eee]">
          <button
            onClick={loadMore}
            disabled={loading}
            className="font-nunito text-[9px] font-semibold tracking-[0.12em] uppercase text-[#aaa] border border-[#ddd] px-[18px] py-[7px] rounded-[2px] hover:border-[#bbb] hover:text-[#888] transition-colors disabled:opacity-50"
          >
            {loading ? "laden…" : "↓ meer laden"}
          </button>
        </div>
      )}
    </div>
  )
}
