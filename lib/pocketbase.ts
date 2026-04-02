export type Post = {
  id: string
  created: string
  updated: string
  hero_image_url: string
  date: string
  card_title: string
  heading: string
  intro_heading: string
  intro_body: string
  thumbnail: string
  detail_heading: string
  detail_body: string
  detail_quote: string
  source_link: string
  published: boolean
}

type PBListResponse = {
  page: number
  perPage: number
  totalPages: number
  totalItems: number
  items: Post[]
}

const PB_URL = process.env.POCKETBASE_URL

if (!PB_URL) {
  throw new Error("POCKETBASE_URL environment variable is not set")
}

export function thumbnailUrl(post: Post): string {
  if (!post.thumbnail) return ""
  return `${PB_URL}/api/files/socials/${post.id}/${post.thumbnail}`
}

export async function getPosts(page = 1): Promise<PBListResponse> {
  const res = await fetch(
    `${PB_URL}/api/collections/socials/records?filter=(published=true)&sort=-date&page=${page}&perPage=6`,
    { cache: "no-store" }
  )
  if (!res.ok) throw new Error(`PocketBase error: ${res.status}`)
  return res.json()
}

export async function getPost(id: string): Promise<Post | null> {
  const res = await fetch(
    `${PB_URL}/api/collections/socials/records/${id}`,
    { cache: "no-store" }
  )
  if (res.status === 404) return null
  if (!res.ok) throw new Error(`PocketBase error: ${res.status}`)
  const post: Post = await res.json()
  return post.published ? post : null
}
