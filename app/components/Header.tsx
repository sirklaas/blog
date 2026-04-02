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
            className="w-[22px] h-[22px] rounded-full bg-black/15 block"
            aria-label="Facebook"
          />
          <a
            href="https://www.instagram.com/quizmasterklaas/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[22px] h-[22px] rounded-full bg-black/15 block"
            aria-label="Instagram"
          />
          <a
            href="mailto:klaas@pinkmilk.eu"
            className="w-[22px] h-[22px] rounded-full bg-black/15 block"
            aria-label="Email"
          />
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
