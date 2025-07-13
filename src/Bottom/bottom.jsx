import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal.jsx';
import FadeContent from './FadeContent'
import '../index.css'
import project1 from '../assets/img/project1.webp';
import project2 from '../assets/img/project2.webp';
import project3 from '../assets/img/project1_2.webp';
import project4 from '../assets/img/project2_2.webp';

const useCustomArray = () => {
  const getConfig = (isMobile) => ({
    classContainer: isMobile
      ? "h-[560px] max-md:h-[540px] w-[80vw] bg-blue-100 flex flex-col-reverse justify-start"
      : "h-[77vh] w-[77vw] bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 border-dashed border-1 border-[#0048E5] rounded-[30px] flex flex-row",

    classTitle: isMobile
      ? "text-[28px] leading-[157%] text-left w-[80vw] [word-spacing:0.4em] tracking-[12%] mb-2 font-bold mt-0"
      : "text-[48px] leading-[157%] text-center w-[80vw] [word-spacing:0.4em] tracking-[12%] mt-40 mb-10 font-bold",

    classLeft: isMobile
      ? "h-[30%] flex flex-col w-[100%] pl-[10%] justify-start align-start"
      : "flex-1 flex justify-center pl-[10%] flex flex-col w-[50%]",

    classH1: isMobile
      ? "inline-block text-transparent bg-clip-text bg-[linear-gradient(90deg,_#0048E5_1%,_#568BFF_30%,_#0048E5_70%)] font-[500] text-[32px] leading-[100%] tracking-[2%] text-left mb-[12px] w-[80%] h-[36px]"
      : "inline-block font-[500] text-transparent bg-clip-text bg-[linear-gradient(90deg,_#0048E5_1%,_#568BFF_30%,_#0048E5_70%)] text-[54px] leading-[100%] tracking-[2%] text-left mb-[20px] w-[80%] h-[70px]",

    classDesc: isMobile
      ? "inline-block font-[300] text-transparent bg-clip-text bg-[linear-gradient(18deg,_#0048E5_50%,_#568BFF_100%)] font-(family-name:montserrat) text-[12px] leading-[100%] tracking-[2%] text-justify w-[90%] text-light"
      : "inline-block font-[300] text-transparent bg-clip-text bg-[linear-gradient(18deg,_#0048E5_50%,_#568BFF_100%)] font-(family-name:montserrat) text-[18px] leading-[100%] tracking-[2%] text-justify w-[80%]",

    classRight: isMobile
      ? "h-[70%] w-[100%] flex flex-row justify-center p-auto items-start pt-[10px] overflow-hidden m-0"
      : "flex-1 w-[50%] flex justify-center items-center overflow-hidden",

    image1: isMobile ? project3 : project1,
    image2: isMobile ? project4 : project2,
  });

  const [config, setConfig] = useState(getConfig(window.innerWidth < 768));

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setConfig(getConfig(isMobile));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return config;
};
export default function Bottom() {
  const {
    classContainer,
    classTitle,
    classLeft,
    classH1,
    classDesc,
    classRight,
    image1,
    image2,
  } = useCustomArray();

  return (
    <div className="relative w-screen h-[220vh] max-md:h-fit pb-[40px] max-md:max-h-[140vh] mt-0 pt-0 max-md:mt-[80px] bg-white flex items-center flex-col justify-start font-montserrat">
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={4}
        blurStrength={9}
        textClassName={classTitle}
      >
        Recent Project
      </ScrollReveal>

      <div className="flex flex-col gap-[110px]">
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <div className={classContainer}>
            <div className={classLeft}>
              <p className={classH1}>Movie App</p>
              <p className={classDesc}>
                This app concept was designed to make discovering and tracking movies more fun and intuitive. The goal was to create a clean and interactive UI that feels smooth and modern, while still being user-friendly for everyday use.
              </p>
                <div className="flex items-center gap-2 mt-[30px] max-md:hidden">
                <div className="w-[10px] h-[10px] bg-[#0048E5] rounded-full"></div>
                <div className="flex-1 h-[2px] bg-gradient-to-r from-[#0048E5] to-transparent"></div>
              </div>
            </div>
            <div className={classRight}>
              <img src={image1} width="94%" height="90%"/>
            </div>
          </div>
        </FadeContent>

        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <div className={classContainer}>
            <div className={classLeft}>
              <p className={classH1}>Jobs App</p>
              <p className={classDesc}>
                A service marketplace app that allows users to explore and purchase skills offered by freelancers or professionals. Each provider showcases their service details, pricing, and portfolio. Users can easily browse categories, view profiles, and place orders directly through the platform with a smooth and intuitive user experience.
              </p>
              <div className="flex items-center gap-2 mt-[30px] max-md:hidden">
                <div className="w-[10px] h-[10px] bg-[#0048E5] rounded-full"></div>
                <div className="flex-1 h-[2px] bg-gradient-to-r from-[#0048E5] to-transparent"></div>
              </div>
            </div>
            <div className={classRight}>
              <img src={image2} width="94%" height="94%"/>
            </div>
          </div>
        </FadeContent>
      </div>
    </div>
  );
}