import PP from "../assets/pp.webp";
import TiltedCard from "./TiltedCard";
import FadeContent from "./FadeContent";
import { useState, useEffect } from "react";
import StaggeredMenu from "./StaggeredMenu";

export default function Head({
  scrollToHead,
  scrollToBiografi,
  scrollToProject,
  active,
}) {
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about us", link: "/about" },
    { label: "Services", ariaLabel: "View our services", link: "/services" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    { label: "Instagram", link: "https://www.instagram.com/glenndovin" },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/glenndovin-dherrel-junaidy-27a251349/",
    },
  ];

  const [a, setA] = useState(
    window.innerWidth > 768 ? "24vw" : "58vw"
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 769px)");

    const handleValueChange = (e) => {
      setA(e.matches ? "24vw" : "58vw");
    };

    mediaQuery.addEventListener("change", handleValueChange);
    handleValueChange(mediaQuery);

    return () =>
      mediaQuery.removeEventListener("change", handleValueChange);
  }, []);

  return (
    <div className="w-screen min-h-[100dvh] flex flex-col justify-between items-center relative px-4 py-6">

      {/* MENU */}
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering={true}
        menuButtonColor="rgba(0, 0, 0, 1)"
        openMenuButtonColor="#ffffff"
        changeMenuColorOnOpen={true}
        colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}
        accentColor="#ffffff"
        scrollToHead={scrollToHead}
        scrollToBiografi={scrollToBiografi}
        scrollToProject={scrollToProject}
        active={active}
      />

      {/* MAIN CONTENT */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-[1200px] flex-1">

        {/* CARD */}
        <FadeContent blur duration={1000} easing="ease-out" initialOpacity={0}>
          <TiltedCard
            imageSrc={PP}
            altText=" "
            captionText="Glenndovin Dherrel Junaidy"
            containerHeight={a}
            containerWidth={a}
            imageHeight="inherit"
            imageWidth="inherit"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip
            displayOverlayContent={false}
          />
        </FadeContent>

        {/* TEXT */}
        <FadeContent
          blur
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="flex flex-col gap-4 max-w-[600px] text-center md:text-left">
            <h1 className="font-semibold text-[28px] md:text-[44px]">
              I'm Glenndovin Dherrel Junaidy,
            </h1>

            <div className="bg-black text-white py-2 px-4 font-semibold text-[16px] md:text-[24px] text-center">
              Game Developer & UI/UX Designer
            </div>

            <p className="font-semibold text-[14px] md:text-[20px] text-black/40 leading-relaxed">
              Creating stylized game worlds, characters, and intuitive digital experiences.
            </p>
          </div>
        </FadeContent>
      </div>

      {/* FOOTER */}
      <FadeContent
        blur
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
        className="w-full max-w-[1200px] flex justify-between items-center mt-6"
      >
        <div className="flex items-center gap-4">
          <div className="text-[32px] md:text-[48px]"></div>
          <div className="text-[16px] md:text-[20px] font-semibold">
            Indonesia
          </div>
        </div>

        <div className="flex flex-col text-right text-[14px] md:text-[16px]">
          <a href="https://www.instagram.com/glenndovin">Instagram</a>
          <a href="https://www.linkedin.com/in/glenndovin-dherrel-junaidy-27a251349/">
            LinkedIn
          </a>
        </div>
      </FadeContent>
    </div>
  );
}
