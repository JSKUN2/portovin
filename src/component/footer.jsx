export default function Footer({
  scrollHome,
  scrollAbout,
  scrollServices,
  scrollGames,
  scrollTeam,
  scrollFaq,
}) {
  const year = new Date().getFullYear();
  const itemClass =
    "group cursor-pointer transition-all duration-300 hover:opacity-70";
  return (
    <footer className="w-full bg-[#0f0f0f] h-screen mt-20 px-14 max-md:px-5 py-14 max-md:pb-4 max-md:pt-7 text-white font-light relative">
      <div className="flex flex-col">
        <div className="flex flex-row items-start max-md:flex-col">
          <div className="flex flex-row w-[50vw] max-md:w-full">
            <img
              src="/grooth.png"
              alt="Grooth Studio"
              className="w-[37.55px] h-[34px] max-md:w-[28.55px] max-md:h-[25px]"
            />
            <h1 className="ml-2 font-[650] leading-9 max-md:text-[12px] max-md:leading-7">
              Grooth Studio
            </h1>
          </div>
          <div className="flex flex-col">
            <div className="flex items-end gap-4 mb-10 max-md:gap-3">
              <h1 className="text-[2.9vw] font-extralight leading-none tracking-tight mt-24 max-md:text-[6.5vw] max-md:mt-32">
                QUICK ACCESS
              </h1>
              <span className="text-[1.4vw] text-white/60 mb-1 leading-[10px] max-md:text-[3.3vw] max-md:leading-[2px]">
                クイックアクセス
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-7 max-w-[25.385vw] max-md:max-w-[73vw] max-md:gap-x-0 max-md:grid-cols-[30vw_43vw]">
              <div className={itemClass} onClick={scrollHome}>
                <h2 className="text-[1.4vw] max-md:text-[4.4vw] leading-none">
                  HOME
                </h2>
                <p className="text-[1vw] text-white/50 max-md:text-[3vw]">
                  ホーム
                </p>
              </div>
              <div className={itemClass} onClick={scrollGames}>
                <h2 className="text-[1.4vw] max-md:text-[4.4vw] leading-none">
                  OUR GAMES
                </h2>
                <p className="text-[1vw] text-white/50 max-md:text-[3vw]">
                  ゲーム一覧
                </p>
              </div>
              <div className={itemClass} onClick={scrollAbout}>
                <h2 className="text-[1.4vw] max-md:text-[4.4vw] leading-none">
                  ABOUT
                </h2>
                <p className="text-[1vw] text-white/50 max-md:text-[3vw]">
                  私たちについて
                </p>
              </div>
              <div className={itemClass} onClick={scrollTeam}>
                <h2 className="text-[1.4vw] max-md:text-[4.4vw] leading-none">
                  OUR MEMBERS
                </h2>
                <p className="text-[1vw] text-white/50 max-md:text-[3vw]">
                  メンバー
                </p>
              </div>
              <div className={itemClass} onClick={scrollServices}>
                <h2 className="text-[1.4vw] max-md:text-[4.4vw] leading-none">
                  NEWS
                </h2>
                <p className="text-[1vw] text-white/50 max-md:text-[3vw]">
                  ニュース
                </p>
              </div>
              <div className={itemClass} onClick={scrollFaq}>
                <h2 className="text-[1.4vw] max-md:text-[4.4vw] leading-none">
                  FAQ
                </h2>
                <p className="text-[1vw] text-white/50 max-md:text-[3vw]">
                  よくある質問
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-14 right-14 flex items-start max-md:static max-md:flex-col max-md:pt-24 max-md:px-0">
          <div className="w-[50vw] max-md:w-full flex flex-col max-md:flex-row max-md:gap-3">
            <h1 className="text-[2.1vw] font-extralight tracking-tight leading-none max-md:text-[6.2vw]">
              ABOUT CONTACT
            </h1>
            <span className="mt-2 text-[1vw] text-white/60 leading-none max-md:text-[3.3vw]">
              お問い合わせ
            </span>
            <p className="hidden md:block mt-8 text-[0.95vw] text-white/45">
              © {year} Grooth Studio. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-start max-md:mt-3">
            <a
              href="mailto:studiogrooth@gmail.com"
              className="text-[1.2vw] mt-3 max-md:text-[5vw] underline underline-offset-4 hover:text-white/70 transition"
            >
              studiogrooth@gmail.com
            </a>
            <a
              href="https://www.instagram.com/grooth_studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[1.3vw] max-md:text-[5vw] hover:text-white/70 transition"
            >
              INSTAGRAM
            </a>
          </div>
          <p className="md:hidden w-full text-center text-white/45 text-[3.6vw] mt-27">
            © {year} Grooth Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
