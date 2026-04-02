const PB_URL = process.env.POCKETBASE_URL
const PB_EMAIL = process.env.PB_ADMIN_EMAIL
const PB_PASSWORD = process.env.PB_ADMIN_PASSWORD

if (!PB_URL || !PB_EMAIL || !PB_PASSWORD) {
  throw new Error("Set POCKETBASE_URL, PB_ADMIN_EMAIL, PB_ADMIN_PASSWORD in .env.local")
}

async function getAdminToken(): Promise<string> {
  const res = await fetch(`${PB_URL}/api/admins/auth-with-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ identity: PB_EMAIL, password: PB_PASSWORD }),
  })
  const data = await res.json()
  if (!data.token) throw new Error(`Auth failed: ${JSON.stringify(data)}`)
  return data.token
}

const FAKE_POSTS = [
  {
    card_title: "Social content that converts every time",
    heading: "Why most social content fails — and how to fix it",
    intro_heading: "The findings",
    intro_body: "We spent six months analyzing 10,000 social posts across Instagram, LinkedIn, and TikTok. Here's what separates the posts that get traction from the ones that disappear into the feed.",
    detail_heading: "The three-second rule",
    detail_body: "Every scroll takes about three seconds. If your content doesn't earn attention in that window, it's gone. The posts that perform consistently aren't the prettiest or the longest — they're the ones that create an immediate reason to stop.\n\nThe most common mistake is leading with context instead of value. 'We've been working on something exciting' is context. 'Here's how we cut our content creation time by 80%' is value. Start with the payoff.\n\nConsistency matters more than quality at the start. An imperfect post published daily outperforms a perfect post published monthly. Volume gives you feedback. Feedback gives you signal. Signal gives you quality.",
    detail_quote: "Start with the payoff, not the context.",
    source_link: "https://www.pinkmilk.eu",
    hero_image_url: "https://picsum.photos/seed/post1/1260/540",
    date: "2026-03-28",
    published: true,
  },
  {
    card_title: "Building an AI content pipeline",
    heading: "From webhook to published post in under 60 seconds",
    intro_heading: "The system",
    intro_body: "The pinkmilk socials generator started as a weekend experiment. Eight months later it's publishing 40+ pieces of content per week across five channels with minimal human input.",
    detail_heading: "How it works",
    detail_body: "The pipeline starts with a trigger — a new show booking, a press mention, a seasonal hook. The trigger fires a webhook that kicks off a Claude prompt with the context it needs: show name, audience, tone, platform.\n\nThe generated draft goes into PocketBase with published set to false. A lightweight review step — usually under two minutes — catches anything off-brand before it goes live.\n\nThe whole system costs about €15/month to run. The ROI compared to a single hour of a copywriter's time makes the math obvious.",
    detail_quote: "A two-minute review is all that stands between idea and published post.",
    source_link: "https://www.pinkmilk.eu",
    hero_image_url: "https://picsum.photos/seed/post2/1260/540",
    date: "2026-03-21",
    published: true,
  },
  {
    card_title: "Why brand voice matters more than ever",
    heading: "In a world full of AI content, voice is the differentiator",
    intro_heading: "The problem",
    intro_body: "When anyone can generate ten blog posts in an hour, the question stops being 'can you produce content?' and becomes 'does your content sound like you?' Brand voice is no longer a nice-to-have.",
    detail_heading: "What voice actually means",
    detail_body: "Voice isn't a list of adjectives in a brand guide. It's the specific way you frame problems, the jokes you do and don't make, the things you refuse to say. It shows up in word choice, sentence length, what you leave out.\n\nThe pinkmilk voice is direct and warm — we explain things the way you'd explain them to a friend who happens to be smart. We don't use jargon unless we're making fun of jargon.\n\nDocumenting voice for AI means giving examples, not rules. 'Write conversationally' is useless. 'Write like this paragraph, not like that paragraph' is how you get consistent output at scale.",
    detail_quote: "Give AI examples, not rules.",
    source_link: "https://www.pinkmilk.eu",
    hero_image_url: "https://picsum.photos/seed/post3/1260/540",
    date: "2026-03-14",
    published: true,
  },
  {
    card_title: "From idea to reel in 10 minutes",
    heading: "The fastest content format we've found — and how to systemize it",
    intro_heading: "The opportunity",
    intro_body: "Reels and short video are the highest-reach format on every platform right now. The barrier isn't creativity — it's the time between having an idea and having something publishable.",
    detail_heading: "The template approach",
    detail_body: "We maintain twelve reel templates — structure, pacing, hook type — that cover 90% of the content we produce. When a new idea comes in, we match it to a template instead of starting from scratch.\n\nThe edit is the bottleneck, not the shoot. Single-take vertical video filmed on a phone, edited in CapCut with saved style presets, captioned automatically. The human time is about four minutes.\n\nThe system works because we removed decisions. You don't choose the template — the content type chooses it. Fewer decisions means more output.",
    detail_quote: "The content type chooses the template, not the other way around.",
    source_link: "https://www.pinkmilk.eu",
    hero_image_url: "https://picsum.photos/seed/post4/1260/540",
    date: "2026-03-07",
    published: true,
  },
  {
    card_title: "The pinkmilk content loop",
    heading: "Create once, distribute everywhere",
    intro_heading: "The system",
    intro_body: "Most content teams work in silos. We treat all channels as one loop with one source of truth.",
    detail_heading: "One piece, seven formats",
    detail_body: "Every piece of content starts as a core idea in PocketBase. From that seed we generate: a blog post, a LinkedIn article, three Instagram captions, a reel hook, and an email subject line. Same idea, seven touchpoints.\n\nThe repurposing isn't copy-paste. Each format has its own structure, its own audience expectation, its own length. The AI handles the transformation with the brand voice prompt as a constant.\n\nThe loop closes when performance data feeds back into content planning. After six months the system gets smarter than any individual could.",
    detail_quote: "Same idea. Seven touchpoints. One voice.",
    source_link: "https://www.pinkmilk.eu",
    hero_image_url: "https://picsum.photos/seed/post5/1260/540",
    date: "2026-02-28",
    published: true,
  },
  {
    card_title: "Automating your socials: where to start",
    heading: "The beginner's roadmap to content automation",
    intro_heading: "Start here",
    intro_body: "You don't need a 15-step pipeline to start automating. You need one bottleneck removed. Here's how to find yours.",
    detail_heading: "Find the bottleneck first",
    detail_body: "Most content bottlenecks are one of three things: generation (getting ideas and drafts), production (editing, designing, formatting), or distribution (scheduling, posting, tracking). Automation tools exist for all three.\n\nIf you're spending hours writing captions, start with AI generation. If you're spending hours in Canva, start with templates. If you're manually posting to six platforms, start with a scheduler. One bottleneck at a time.\n\nThe goal for month one isn't a fully automated pipeline. It's one hour saved per week. Speed compounds — but only if you start.",
    detail_quote: "One bottleneck removed. That's all month one needs to be.",
    source_link: "https://www.pinkmilk.eu",
    hero_image_url: "https://picsum.photos/seed/post6/1260/540",
    date: "2026-02-21",
    published: true,
  },
]

async function seed() {
  console.log("Getting admin token...")
  const token = await getAdminToken()

  for (const post of FAKE_POSTS) {
    const res = await fetch(`${PB_URL}/api/collections/socials/records`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(post),
    })

    if (!res.ok) {
      const err = await res.json()
      console.error(`Failed to create "${post.card_title}":`, err)
      continue
    }

    const record = await res.json()
    console.log(`✓ Created: ${record.id} — ${post.card_title}`)
  }

  console.log("Seed complete.")
}

seed().catch(console.error)
