import Link from "next/link"

type HeaderProps = {
  backLink?: boolean
}

export default function Header({ backLink = false }: HeaderProps) {
  return (
    <header>
      {/* Notification bar */}
      <div className="h-[44px] bg-[#F9A826] flex items-center justify-between px-[20px]">
        <span className="font-nunito text-[10px] font-semibold text-black tracking-wide">
          pinkmilk entertainment
        </span>
        <div className="flex gap-[10px]">
          <a
            href="https://www.facebook.com/quizmasterklaas"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[22px] h-[22px] rounded-full bg-black/15 flex items-center justify-center"
            aria-label="Facebook"
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="rgba(0,0,0,0.6)" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/quizmasterklaas/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[22px] h-[22px] rounded-full bg-black/15 flex items-center justify-center"
            aria-label="Instagram"
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="2" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="rgba(0,0,0,0.6)" stroke="none"/>
            </svg>
          </a>
          <a
            href="mailto:klaas@pinkmilk.eu"
            className="w-[22px] h-[22px] rounded-full bg-black/15 flex items-center justify-center"
            aria-label="Email"
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="2" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Logo bar */}
      <div className="h-[50px] bg-[#e6e6e6] flex items-center justify-between px-[20px]">
        <Link href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.pinkmilk.eu/lp/images/CelebrateLife.webp"
            alt="PinkMilk"
            className="h-[30px] w-auto"
          />
        </Link>

        {backLink ? (
          <Link
            href="/"
            className="font-nunito text-[11px] font-semibold text-[#333] hover:text-[#ff69b4] transition-colors"
          >
            ← Blog
          </Link>
        ) : (
          <nav className="flex gap-[16px]">
            <a
              href="https://www.pinkmilk.eu/lp/info.php"
              className="font-nunito text-[11px] font-semibold text-[#333] hover:text-[#ff69b4] transition-colors"
            >
              Meer informatie
            </a>
            <a
              href="https://www.pinkmilk.eu/lp/impressies.html"
              className="font-nunito text-[11px] font-semibold text-[#333] hover:text-[#ff69b4] transition-colors"
            >
              Foto&apos;s en Video&apos;s
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
