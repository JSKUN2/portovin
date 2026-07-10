import Part from "./part";
import FadeContent from "../animasi/FadeContent";

export default function Game() {
  const a = [
    {
      nama: "Bladeable",
      logo: "/bladeable1.webp",
      desk1:
        "Bladeable is a fast-paced 2D action indie game that challenges players to master razor-sharp reflexes, fluid combat, and momentum-driven movement as they slash through enemies and overcome dynamic obstacles.",
      desk2:
        "Bladeableは、テンポの速い2Dアクションインディーゲームで、プレイヤーは鋭い反射神経、流れるような戦闘、そして勢いを活かした動きをマスターしながら、敵を切り裂き、変化に富んだ障害物を乗り越えていくことが求められます。",
      star: "5.0",
      download: "50+",
      gmbr1: "/1_1.webp",
      gmbr2: "/1_2.webp",
      link: "https://play.google.com/store/apps/details?id=com.groothstudio.app",
    },
    {
      nama: "Bladeable : Escape The Universe",
      logo: "/bladeable2.webp",
      desk1:
        "Run as far as you can in this fast-paced 2D endless runner set in a universe on the brink of collapse. There are no coins and no distractions — only your skill, timing, and reflexes stand between survival and extinction.",
      desk2:
        "崩壊寸前の宇宙を舞台にした、ハイスピードな2Dエンドレスランナーゲームで、できる限り遠くまで走り続けよう。コインも邪魔なものも一切なし。生き残りをかけた戦いは、君のスキル、タイミング、そして反射神経だけ。",
      star: "5.0",
      download: "50+",
      gmbr1: "/2_1.webp",
      gmbr2: "/2_2.webp",
      link: "https://play.google.com/store/apps/details?id=com.groothstudio.BladeableEscapeTheUniverse",
    },
  ];

return (
    <Part nama1="Our Games" nama2="ゲーム一覧">
      {a.map((anggota, index) => (
        <div key={anggota.nama} className="flex flex-col max-md:flex-col-reverse">
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            
            {/* --- TAMPILAN DESKTOP (Kondisi Normal Sebelumnya) --- */}
            <div className="max-md:hidden">
              <div className="flex flex-row justify-between mt-5.5">
                <div className="flex flex-row">
                  <h1 className="text-[5vw] text-white">{index + 1}</h1>
                  <img src={anggota.logo} alt="" className="w-[6.5vw] h-[6.5vw] rounded-[24px] ml-15" />
                  <div className="flex flex-col justify-start text-white font-light ml-5">
                    <h1 className="text-[1.8vw] mt-4">{anggota.nama}</h1>
                    <h1 className="text-[1.05vw]">Developed by Grooth Studio</h1>
                  </div>
                </div>
                <div className="flex flex-row justify-center gap-x-10 text-center items-end font-light">
                  <div className="flex flex-col items-center">
                    <h1 className="text-white text-[2.6vw] m-0">{anggota.star}<span className="text-[1.15vw] align-middle ml-1">★</span></h1>
                    <h1 className="text-white text-[1.6vw] m-0">Reviews</h1>
                    <h1 className="text-white/60 text-[1.1vw] m-0">レビュー</h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <h1 className="text-white text-[2.6vw] m-0">{anggota.download}</h1>
                    <h1 className="text-white text-[1.6vw] m-0">Downloaded</h1>
                    <h1 className="text-white/60 text-[1.1vw] m-0">ダウンロード</h1>
                  </div>
                </div>
              </div>

              <div className="mt-10 mb-10 w-full bg-[#272727] p-8 rounded-[24px] md:rounded-[0]">
                <h2 className="text-white text-[1.5vw] font-medium mb-4 md:hidden">About this game</h2>
                <p className="font-light text-[1.3vw] text-white mb-2">{anggota.desk1}</p>
                <p className="jepun font-light text-[1.11vw] text-white/60">{anggota.desk2}</p>
              </div>
            </div>

            {/* --- TAMPILAN MOBILE (Card Gabung) --- */}
            <div className="md:hidden bg-[#0F0F0F] rounded-[18px] p-5 mb-10 mt-5">
              <div className="flex justify-around px-4 pb-4 mb-4 font-light">
                <div className="text-center">
                  <h1 className="text-[6vw] text-white">{anggota.download}</h1>
                  <h1 className="text-[3.8vw] text-white/60">Downloaded</h1>
                  <h1 className="text-white/60 text-[2.8vw] m-0">ダウンロード</h1>
                </div>
                <div className="h-[64px] bg-white/80 w-[1px]"></div>
                <div className="text-center">
                  <h1 className="text-white text-[6vw] m-0">{anggota.star}<span className="text-[3vw] align-middle ml-1">★</span></h1>
                  <h1 className="text-[3.8vw] text-white/60">Reviews</h1>                    
                  <h1 className="text-white/60 text-[2.8vw] m-0">レビュー</h1>
                </div>
              </div>
            <div className="flex flex-row gap-5 overflow-x-auto">
              <img src={anggota.gmbr1} className="w-[46vw] max-md:w-[62vw] h-auto" />
              <img src={anggota.gmbr2} className="w-[46vw] max-md:w-[62vw] h-auto" />
            </div>
              <h2 className="text-white/80 text-[4vw] mb-4 mt-8 border-b pb-2">About this game</h2>
              <p className="text-[3.2vw] text-white/80 mb-2">{anggota.desk1}</p>
              <p className="text-[2.8vw] text-white/60">{anggota.desk2}</p>
            </div>

          </FadeContent>

          {/* Screenshot Section (Tetap tampil di keduanya) */}
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
              <div className="flex flex-row items-center mb-5 md:hidden">
                <img src={anggota.logo} alt="" className="w-[16vw] h-[16vw] rounded-[16px]" />
                <div className="ml-3">
                  <h1 className="text-[4.4vw] text-white">{anggota.nama}</h1>
                  <h1 className="text-[2.4vw] text-white/60">Developed by Grooth Studio</h1>
                </div>
              </div>
              <a href={anggota.link} className="block mt-5 md:hidden">
                <button className="w-full py-1.5 bg-white text-black rounded-full font-medium text-[3.2vw]">Download</button>
              </a>
            
            {/* Tombol download desktop */}
            <div className="flex justify-end p-10 max-md:hidden">
              <a href={anggota.link} target="_blank"><button className="w-[16vw] h-[3vw] bg-white rounded-full">Download</button></a>
            </div>
          </FadeContent>
        </div>
      ))}
    </Part>
  );
}