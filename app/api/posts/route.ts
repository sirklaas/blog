import { NextRequest, NextResponse } from "next/server"
import { getPosts } from "@/lib/pocketbase"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const page = parseInt(searchParams.get("page") ?? "1", 10)

  try {
    const data = await getPosts(page)
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
