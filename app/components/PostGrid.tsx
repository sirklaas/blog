"use client"

import { useState } from "react"
import Link from "next/link"
import type { Post } from "@/lib/pocketbase"

type PostGridProps = {
  initialPosts: Post[]
  totalPages: number
}

function PostCard({ post }: { post: Post }) {
  const formattedDate = new Date(post.date).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "short",
  })

  return (
    <Link href={`/${post.id}`} className="group block">
      <div className="border border-[#eee] rounded-[2px] overflow-hidden hover:shadow-md transition-shadow">
        <div className="aspect-[4/3] overflow-hidden bg-[#f0f0f0]">
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
          <p className="font-nunito text-[9px] text-[#bbb] tracking-wide">{formattedDate}</p>
          <p className="font-barlow font-light text-[13px] text-[#333] leading-tight mt-[2px]">
            {post.card_title}
          </p>
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
    const nextPage = currentPage + 1
    const res = await fetch(`/api/posts?page=${nextPage}`)
    const data = await res.json()
    setPosts((prev) => [...prev, ...data.items])
    setCurrentPage(nextPage)
    setLoading(false)
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-[12px] px-[20px] py-[16px] bg-white">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {hasMore && (
        <div className="text-center py-[14px] border-t border-[#eee] bg-white">
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
