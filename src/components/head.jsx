import PP from "../assets/pp.webp"
import TiltedCard from './TiltedCard';
import FadeContent from './FadeContent'
import { useState,useEffect } from "react";
import StaggeredMenu from './StaggeredMenu';

export default function Head({ 
  scrollToHead, 
  scrollToBiografi, 
  scrollToProject,
  active
}) {

    const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
    ];

    const socialItems = [
    { label: 'Instagram', link: 'https://www.instagram.com/glenndovin' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/glenndovin-dherrel-junaidy-27a251349/' }
    ];
const [a, setA] = useState(window.innerWidth > 768 ? "24vw" : "58vw");

useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 769px)");

    const handleValueChange = (e) => {
        setA(e.matches ? "24vw" : "58vw");
    };

    mediaQuery.addEventListener("change", handleValueChange);

    handleValueChange(mediaQuery);

    return () => mediaQuery.removeEventListener("change", handleValueChange);
}, []);
    return(
        <div className="max-md:h-[100vh] md:h-screen w-screen flex flex-col justify-center items-center p-0 relative">
              <StaggeredMenu
    position="right"
    items={menuItems}
    socialItems={socialItems}
    displaySocials
    displayItemNumbering={true}
    menuButtonColor="rgba(0, 0, 0, 1)"
    openMenuButtonColor="#ffffff"
    changeMenuColorOnOpen={true}
    colors={['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.8)']}
    accentColor="#ffffff"
    onMenuOpen={() => console.log('Menu opened')}
    onMenuClose={() => console.log('Menu closed')}
    scrollToHead={scrollToHead}
    scrollToBiografi={scrollToBiografi}
    scrollToProject={scrollToProject}
    active={active}
  />
            <div className="flex w-[80vw] flex-row max-md:flex-col h-[360px] absolute top-88 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center items-center">
                    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
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
                          showTooltip={true}
                          displayOverlayContent={false}
                          overlayContent={<p className="tilted-card-demo-text">Glenndovin</p>}
                        /></FadeContent>
                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className="ml-[32px] max-md:mt-8 max-md:ml-0 flex flex-col gap-[12px] h-[100%] max-md:w-[80vw]">
                    <h1 className="font-semibold text-[44px] max-md:text-[24px]">I'm Glenndovin Dherrel Junaidy,</h1>
                    <div className="w-[32vw] bg-black h-fit pt-2 pb-2 font-semibold text-[24px] text-white text-center justify-center max-md:text-[4vw] flex flex-col max-md:w-[100%]">Game Developer & UI/UX Designer</div>
                    <p className="font-semibold text-[24px] text-black/40 leading-[32px] w-[40vw] max-md:w-[100%] max-md:text-[14px]">Creating stylized game worlds, characters, and intuitive digital experiences.</p>
                </div></FadeContent>
            </div>
                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} className="flex flex-row w-[90%] h-[64px] absolute bottom-0 justify-between">
                    <div className="text-[24px] font-semibold leading-[44px] flex flex-row gap-[20px] justify-center items-center text-center"><div className="text-[48px] max-md:text-[28px]"></div> <div className="mt-1 max-md:text-[16px]">Indonesia</div></div><div className="font-medium text-[16px] flex flex-col max-md:text-[16px] max-md:mt-2.5"><a href="https://www.instagram.com/glenndovin" className=" max-md:text-[14px]">Instagram</a><a href="https://www.linkedin.com/in/glenndovin-dherrel-junaidy-27a251349/" className="max-md:text-[14px]">Linkedin</a></div></FadeContent></div>
    )
}
