import { notFound } from "next/navigation"
import { getPost, thumbnailUrl } from "@/lib/pocketbase"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"

type Props = {
  params: Promise<{ id: string }>
}

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params
  const post = await getPost(id)

  if (!post) notFound()

  const formattedDate = new Date(post.date).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const subPicSrc = thumbnailUrl(post)

  return (
    <div className="flex flex-col min-h-screen">
      <Header backLink />

      <main className="flex-1">
        {/* Hero */}
        {post.hero_image_url && (
          <div className="w-full aspect-[21/9] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.hero_image_url}
              alt={post.heading || post.card_title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <article className="bg-white max-w-[800px] mx-auto px-[24px] py-[24px]">
          {/* Date + heading + intro */}
          <p className="font-nunito text-[10px] font-bold text-[#e84e1b] tracking-[0.12em] uppercase mb-[6px]">
            {formattedDate}
          </p>
          {post.heading && (
            <h1 className="font-barlow font-light text-[36px] leading-none text-[#1a1a1a] mb-[6px]">
              {post.heading}
            </h1>
          )}
          {post.intro_heading && (
            <p className="font-nunito text-[11px] font-bold text-[#999] uppercase tracking-[0.1em] mb-[10px]">
              {post.intro_heading}
            </p>
          )}
          {post.intro_body && (
            <p className="font-nunito text-[14px] text-[#555] leading-relaxed mb-[20px]">
              {post.intro_body}
            </p>
          )}

          {/* Sub picture */}
          {subPicSrc && (
            <div className="w-full aspect-[16/9] overflow-hidden mb-[20px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={subPicSrc}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Detail section */}
          {post.detail_heading && (
            <h2 className="font-barlow font-light text-[22px] text-[#1a1a1a] mb-[10px]">
              {post.detail_heading}
            </h2>
          )}
          {post.detail_body && post.detail_body.split("\n\n").map((paragraph, i) => (
            <p key={i} className="font-nunito text-[13px] text-[#555] leading-relaxed mb-[14px]">
              {paragraph}
            </p>
          ))}

          {/* Pull quote */}
          {post.detail_quote && (
            <blockquote className="border-l-[3px] border-[#F9A826] pl-[16px] my-[20px]">
              <p className="font-barlow font-light text-[20px] text-[#1a1a1a] leading-snug italic">
                &ldquo;{post.detail_quote}&rdquo;
              </p>
            </blockquote>
          )}

          {/* Source link */}
          {post.source_link && (
            <a
              href={post.source_link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-nunito text-[12px] font-semibold text-[#1e429f] hover:text-[#ff69b4] transition-colors border-t border-[#eee] pt-[14px] block"
            >
              → {post.source_link}
            </a>
          )}
        </article>
      </main>

      <Footer />
    </div>
  )
}
