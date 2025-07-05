import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal.jsx';
import FadeContent from './FadeContent'
import '../index.css'
import project1 from '../assets/img/project1.webp';
import project2 from '../assets/img/project2.webp';
const useCustomArray = () => {
  const [data, setData] = useState([
    "h-[77vh] w-[77vw] bg-[#BCD3FF] rounded-[30px] flex flex-row",
    "text-[48px] leading-[157%] text-center w-[80vw] [word-spacing:0.4em] tracking-[12%] mb-10 font-bold",
    "flex-1 flex justify-center pl-[10%] flex flex-col w-[50%]",
    "inline-block font-[500] text-transparent bg-clip-text bg-[linear-gradient(90deg,_#0048E5_1%,_#568BFF_30%,_#0048E5_70%)] font-(family-name:montserrat) text-[54px] leading-[100%] tracking-[2%] text-left mb-[20px] w-[80%] h-[70px]",
    "inline-block font-[300] text-transparent bg-clip-text bg-[linear-gradient(18deg,_#0048E5_50%,_#568BFF_100%)] font-(family-name:montserrat) text-[18px] leading-[100%] tracking-[2%] text-justify w-[80%]",
    "flex-1 w-[50%] bg-[url(/img/project2.webp)] bg-cover bg-no-repeat bg-center",
    "flex-1 w-[50%]"
  ]);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 768) {
        setData([
            "h-[100vh] w-[90vw] bg-[#BCD3FF] rounded-[30px] flex flex-col-reverse",
            "text-[28px] leading-[157%] text-left w-[80vw] [word-spacing:0.4em] tracking-[12%] mb-2 font-bold mt-10",
            "flex-1 flex flex-justify-center align-center flex flex-col w-[100%] pl-[10%]",
            "inline-block text-transparent bg-clip-text bg-[linear-gradient(90deg,_#0048E5_1%,_#568BFF_30%,_#0048E5_70%)] font-(family-name:montserrat) text-[32px] leading-[100%] tracking-[2%] text-left mb-[12px] w-[80%] h-[36px]",
            "inline-block font-[300] text-transparent bg-clip-text bg-[linear-gradient(18deg,_#0048E5_50%,_#568BFF_100%)] font-(family-name:montserrat) text-[12px] leading-[100%] tracking-[2%] text-justify w-[90%] text-light",
            "flex-1 w-[100%] bg-[url(/img/project2.webp)] bg-cover bg-no-repeat bg-center",
            "flex-1 w-[100%]"
        ]);
      } else {
        setData([
            "h-[77vh] w-[77vw] bg-[#BCD3FF] rounded-[30px] flex flex-row",
            "text-[48px] leading-[157%] text-center w-[80vw] [word-spacing:0.4em] tracking-[12%] mb-10 font-bold",
            "flex-1 flex justify-center pl-[10%] flex flex-col w-[50%]",
            "inline-block font-[500] text-transparent bg-clip-text bg-[linear-gradient(90deg,_#0048E5_1%,_#568BFF_30%,_#0048E5_70%)] font-(family-name:montserrat) text-[54px] leading-[100%] tracking-[2%] text-left mb-[20px] w-[80%] h-[70px]",
            "inline-block font-[300] text-transparent bg-clip-text bg-[linear-gradient(18deg,_#0048E5_50%,_#568BFF_100%)] font-(family-name:montserrat) text-[18px] leading-[100%] tracking-[2%] text-justify w-[80%]",
            "flex-1 w-[50%] bg-[url(/img/project2.webp)] bg-cover bg-no-repeat bg-center",
            "flex-1 w-[50%]"
        ]);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return data;
};
export default function Bottom() {
    const [Class, Class2, Class3, Class4, Class5, Class6] = useCustomArray()
    return(
        <>
            <div className="relative w-screen h-[240vh] bg-white flex items-center flex-col font-montserrat">
                <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={4}
                    blurStrength={9}
                    textClassName={Class2}
                >
                    Recent Project
                </ScrollReveal>
                <div className='flex flex-col gap-[110px]'>
                        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} className='text-[black]'>
                            <div className={Class}>
                            <div className={Class3}>
                                <p className={Class4}>
                                    Movie App
                                </p>
                                <p className={Class5}>
                                    This app concept was designed to make discovering and tracking movies more fun and intuitive. The goal was to create a clean and interactive UI that feels smooth and modern, while still being user-friendly for everyday use.
                                </p>
                            </div>
                            <div className={Class6}>
                                <img src={project1} alt="" width="100%" height="100%"/>     
                            </div>
                            </div>
                        </FadeContent>
                        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} className='text-[black]'>
                            <div className={Class}>
                            <div className={Class3}>
                                <p className={Class4}>
                                    Jobs App
                                </p>
                                <p className={Class5}>
                                    A service marketplace app that allows users to explore and purchase skills offered by freelancers or professionals. Each provider showcases their service details, pricing, and portfolio. Users can easily browse categories, view profiles, and place orders directly through the platform with a smooth and intuitive user experience.
                                </p>
                            </div>
                            <div className={Class6}>
                                <img src={project2} alt="" width="100%" height="100%"/>   
                            </div>
                            </div>
                        </FadeContent>
                </div>
            </div>
        </>
    );
}
