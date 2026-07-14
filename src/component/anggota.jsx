import { useEffect, useState } from "preact/hooks";
import Part from "./part";
import FadeContent from "../animasi/FadeContent";
export default function Anggota() {
  const glenn = {
    nama: "Glenndovin Dherrel Junaidy",
    jabatan: "Designer  ",
    jabatan2: "デザイナー",
    keterangan:
      "Glenndovin is the visionary who shapes the world’s aesthetics. From UI layout to environment concept art, he ensures that everything not only looks beautiful but also feels intuitive.",
    link: "https://gln.grooths.com/",
    profil: "/glendovinn.webp",
    since: "19, April 2024",
  };
  const boltbert = {
    nama: "Boltbert",
    jabatan: "Unity Developer  ",
    jabatan2: "Unity開発者",
    keterangan:
      "Boltbert brings the game to life—literally. As the Unity developer, he transforms design and code into an interactive experience that players can touch, see, and feel. He crafts the gameplay mechanics, visual effects, and player controls that define how the world behaves and responds. His expertise turns ideas into a fully playable reality.",
    link: "https://boltbert.grooths.com/",
    profil: "/boltbert.webp",
    since: "19, April 2024",
  };
  const gabriel = {
    nama: "Gabriel",
    jabatan: "Music Engineer  ",
    jabatan2: "音楽エンジニア",
    keterangan:
      "Gabriel is the soul of the project. Through melodies and soundscapes, he evokes emotion, tension, and wonder. His compositions breathe life into every scene—from epic battles to quiet reflection. The world wouldn’t feel the same without his music guiding the player’s heart through every moment.",
    link: "",
    profil: "/gabriel.webp",
    since: "",
  };
  const timothy = {
    nama: "Timothy",
    jabatan: "Backend Web Developer  ",
    jabatan2: "バックエンド Web 開発者",
    keterangan:
      "Timothy is the silent force powering everything behind the scenes. He builds and maintains the core systems that keep the game running smoothly, ensuring stability, performance, and security. From user authentication to database optimization, his code forms the invisible backbone of the entire experience. Without his work, none of it would function as intended.",
    link: "",
    profil: "/timothy.webp",
    since: "",
  };
  const joseph = {
    nama: "Joseph Tua Pratama Simbolon", 
    jabatan: "Frontend Web Developer ", 
    jabatan2: "フロントエンド Web 開発者", 
    keterangan: "Joseph is the mastermind behind this website. He designed the platform that serves as a bridge between the development team and the players, ensuring seamless communication. Additionally, he writes the lore that immerses players deeply into the world he has created, weaving stories that enhance their experience and connection to the game.", 
    link: "", 
    profil: "/joseph.webp", 
    since:"" };
  const raz = {
    nama: "Raz",
    jabatan: "Designer  ",
    jabatan2: "デザイナー",
    keterangan:
      "Raz is the person who gives the world its look and feel. They design characters, environments, props, and effects. They transform scripts and rough ideas into colors, textures, and shapes players can actually explore. They work closely with the designers and programmers, testing different styles until everything runs well in-game and feels alive.",
    link: "",
    profil: "/raz.webp",
    since: "",
  };
  const mobileMembers = [
    glenn,
    boltbert,
    gabriel,
    joseph,
    timothy,
    raz,
  ];
  const desktopMembers = [
    glenn,
    gabriel,
    timothy,
    boltbert,
    joseph,
    raz,
  ];
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const members = isMobile ? mobileMembers : desktopMembers;
  return (
    <Part nama1="Our Members" nama2="メンバー">
      <div className="columns-2 gap-8 w-full mb-20 max-md:columns-1">
        {members.map((anggota, index) => (
          <div
            key={index}
            className="break-inside-avoid mb-8"
          >
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <div className="bg-white p-10 max-md:p-5 max-md:px-5 shadow-lg flex flex-col gap-2 max-md:gap-0">
                <p className="text-black mb-5 max-md:text-[3.17vw]">
                  {anggota.jabatan}
                  {anggota.jabatan2}
                </p>
                <div className="flex flex-row items-center">
                  <img
                    src={anggota.profil}
                    alt={anggota.nama}
                    className="w-32 h-32 max-md:w-20 max-md:h-20 rounded-full object-cover"
                  />
                  <h3 className="ml-5 max-md:ml-4 text-[24px] max-md:text-[6vw] max-md:font-medium">
                    {anggota.nama}
                  </h3>
                </div>
                <p className="text-gray-800 mt-5 mb-4 text-[16px] max-md:text-[4vw] font-light">
                  Since {anggota.since}
                </p>
                <p className="text-black mb-4 text-[18px] max-md:text-[4vw] font-light">
                  {anggota.keterangan}
                </p>
                {anggota.link && (
                  <a
                    href={anggota.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-5"
                  >
                    <button className="w-full h-[48px] max-md:h-[32px] bg-black text-white font-light text-[18px] max-md:text-[1.8vh]">
                      Open Portfolio
                    </button>
                  </a>
                )}
              </div>
            </FadeContent>
          </div>
        ))}
      </div>
    </Part>
  );
}