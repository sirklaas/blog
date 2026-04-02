export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] mt-auto">
      <div className="px-[20px] pt-[24px] pb-[16px]">
        <div className="flex flex-wrap gap-[24px]">
          {/* Logo */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.pinkmilk.eu/lp/images/ShowbirdLogo.webp"
              alt="Showbird"
              className="h-[36px] w-auto opacity-80"
            />
          </div>

          {/* Links */}
          <div className="flex gap-[24px] flex-wrap">
            <div>
              <h4 className="font-nunito text-[9px] font-bold text-white/40 tracking-[0.1em] uppercase mb-[6px]">
                Spelshows
              </h4>
              <ul className="space-y-[2px]">
                <li><a href="https://www.pinkmilk.eu/lp/ikhouzovanholland" className="font-nunito text-[9px] text-white/55 hover:text-[#ff69b4] transition-colors">Ik Hou zo van Holland</a></li>
                <li><a href="https://www.pinkmilk.eu/lp/deallerleukstepubquiz" className="font-nunito text-[9px] text-white/55 hover:text-[#ff69b4] transition-colors">De Allerleukste PubQuiz</a></li>
              </ul>
              <h4 className="font-nunito text-[9px] font-bold text-white/40 tracking-[0.1em] uppercase mb-[6px] mt-[10px]">
                City games
              </h4>
              <ul className="space-y-[2px]">
                <li><a href="https://www.pinkmilk.eu/lp/crazy88" className="font-nunito text-[9px] text-white/55 hover:text-[#ff69b4] transition-colors">Crazy 88</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-nunito text-[9px] font-bold text-white/40 tracking-[0.1em] uppercase mb-[6px]">
                Dinershows
              </h4>
              <ul className="space-y-[2px]">
                <li><a href="https://www.pinkmilk.eu/lp/escapediner" className="font-nunito text-[9px] text-white/55 hover:text-[#ff69b4] transition-colors">Escape Diner</a></li>
              </ul>
              <h4 className="font-nunito text-[9px] font-bold text-white/40 tracking-[0.1em] uppercase mb-[6px] mt-[10px]">
                Divers
              </h4>
              <ul className="space-y-[2px]">
                <li><a href="https://www.pinkmilk.eu/lp/djeneventpresenter" className="font-nunito text-[9px] text-white/55 hover:text-[#ff69b4] transition-colors">DJ en Event presenter</a></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-nunito text-[9px] font-bold text-white/40 tracking-[0.1em] uppercase mb-[6px]">
              Contact
            </h4>
            <p className="font-nunito text-[9px] text-white/70 font-semibold">Pink Milk Entertainment</p>
            <p className="font-nunito text-[9px] text-white/50 leading-[1.7]">
              Schipholweg 101 A<br />
              2316 XC Leiden
            </p>
            <p className="font-nunito text-[9px] text-white/50 leading-[1.7] mt-[4px]">
              0031619399297
            </p>
            <a
              href="mailto:klaas@pinkmilk.eu"
              className="font-nunito text-[9px] text-[#F9A826] hover:text-[#ff69b4] transition-colors"
            >
              klaas@pinkmilk.eu
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-[14px] pt-[10px]">
          <p className="font-nunito text-[8px] text-white/30">
            © {new Date().getFullYear()} PinkMilk. All rights reserved.{" "}
            <a href="https://www.pinkmilk.eu" className="hover:text-white/50 transition-colors">
              pinkmilk.eu
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
