import { h } from "preact";
import { useRef, useState, useEffect } from "preact/hooks";
import StaggeredMenu from "./animasi/StaggeredMenu";
import Head from "./component/head";
import Deskrispi from "./component/deskripsi";
import News from "./component/news";
import Game from "./component/game";
import Anggota from "./component/anggota";
import Faq from "./component/faq";
import Supporter from "./component/supporter";
import Footer from "./component/footer";
export default function App() {
  const headRef = useRef(null);
  const deskripsiRef = useRef(null);
  const newsRef = useRef(null);
  const gameRef = useRef(null);
  const anggotaRef = useRef(null);
  const faqRef = useRef(null);
  const [active, setActive] = useState("home");
  const scrollToSection = (ref, sectionName) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActive(sectionName);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target === headRef.current) setActive("home");
          else if (entry.target === deskripsiRef.current)
            setActive("about");
          else if (entry.target === newsRef.current)
            setActive("news");
          else if (entry.target === gameRef.current)
            setActive("game");
          else if (entry.target === anggotaRef.current)
            setActive("anggota");
          else if (entry.target === faqRef.current)
            setActive("faq");
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );
    [
      headRef,
      deskripsiRef,
      newsRef,
      gameRef,
      anggotaRef,
      faqRef,
    ].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <div className="relative w-screen bg-black overflow-hidden flex flex-col">
      {}
      <StaggeredMenu
        active={active}
        isFixed={true}
        position="right"
        colors={["#5227FF", "#2E0CB7", "#111111"]}
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        accentColor="#5227FF"
        scrollHome={() => scrollToSection(headRef, "home")}
        scrollAbout={() => scrollToSection(deskripsiRef, "about")}
        scrollServices={() => scrollToSection(newsRef, "news")}
        scrollGames={() => scrollToSection(gameRef, "game")}
        scrollTeam={() => scrollToSection(anggotaRef, "anggota")}
        scrollFaq={() => scrollToSection(faqRef, "faq")}
      />
      {}
      <div className="absolute top-2.5 left-14 z-30 max-md:hidden">
            <img
              src="/grooth.png"
              alt="Grooth Studio"
              className="w-[37.55px] h-[34px] max-md:w-[28.55px] max-md:h-[25px]"
            />
        </div>
      <div className="fixed top-0 left-0 z-20 hidden md:flex w-full items-center justify-center gap-20 py-5 text-[17px] font-light text-white backdrop-blur-md">
        <h1
          className={`cursor-pointer transition ${
            active === "home"
              ? "font-medium"
              : "font-light opacity-70"
          }`}
          onClick={() => scrollToSection(headRef, "home")}
        >
          Home
        </h1>
        <h1
          className={`cursor-pointer transition ${
            active === "news"
              ? "font-medium"
              : "font-light opacity-70"
          }`}
          onClick={() => scrollToSection(newsRef, "news")}
        >
          Services
        </h1>
        <h1
          className={`cursor-pointer transition ${
            active === "faq"
              ? "font-medium"
              : "font-light opacity-70"
          }`}
          onClick={() => scrollToSection(faqRef, "faq")}
        >
          FAQ
        </h1>
      </div>
      {}
      <div ref={headRef} className="px-5 max-md:px-0">
        <Head
          scrollToAnggota={() =>
            scrollToSection(anggotaRef, "anggota")
          }
        />
      </div>
      <main className="px-5 max-md:px-0">
        <div ref={deskripsiRef}>
          <Deskrispi />
        </div>
        <div ref={newsRef}>
          <News />
        </div>
        <div ref={gameRef}>
          <Game />
        </div>
        <div ref={anggotaRef}>
          <Anggota />
        </div>
        <div ref={faqRef}>
          <Faq />
        </div>
        <Supporter />
      </main>
      {}
      <Footer
        scrollHome={() => scrollToSection(headRef, "home")}
        scrollAbout={() => scrollToSection(deskripsiRef, "about")}
        scrollServices={() => scrollToSection(newsRef, "news")}
        scrollGames={() => scrollToSection(gameRef, "game")}
        scrollTeam={() => scrollToSection(anggotaRef, "anggota")}
        scrollFaq={() => scrollToSection(faqRef, "faq")}
      />
    </div>
  );
}
