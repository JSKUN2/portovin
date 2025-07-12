import React, { useState, useEffect } from 'react';
import ScrollVelocity from './ScrollVelocity.jsx';
import ScrollReveal from './ScrollReveal.jsx';
import '../index.css'

const useCustomArray = () => {
  const [data, setData] = useState([
    "custom-scroll-text font-inter font-extrabold leading-[100%] tracking-[2%] text-[220px]",
    "text-[48px] leading-[157%] text-center w-[80vw] [word-spacing:0.4em] tracking-[12%] mb-10 font-bold",
    "text-[32px] leading-[157%] text-justify w-[80vw] [word-spacing:0.4em] tracking-[12%] font-semibold"
  ]);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 768) {
        setData([
            "custom-scroll-text font-inter font-extrabold leading-[100%] tracking-[2%] text-[130px]",
            "text-[28px] leading-[157%] text-left w-[80vw] [word-spacing:0.4em] tracking-[12%] mb-2 font-bold",
            "text-[16px] leading-[157%] text-justify w-[80vw] [word-spacing:0.4em] tracking-[12%] font-semibold",

        ]);
      } else {
        setData([
            "custom-scroll-text font-inter font-extrabold leading-[100%] tracking-[2%] text-[220px]",
            "text-[48px] leading-[157%] text-center w-[80vw] [word-spacing:0.4em] tracking-[12%] mb-10 font-bold",
            "text-[32px] leading-[157%] text-justify w-[80vw] [word-spacing:0.4em] tracking-[12%] font-semibold",
        ]);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return data;
};

export default function Top2() {
    const [Class, Class2, Class3] = useCustomArray();
    return(
        <div className='relative w-screen flex flex-col'>
            <div className="w-screen h-[35vh] bg-[linear-gradient(90deg,_#8EB2FF_50%,_#3776FF_100%)] flex justify-center items-center font-montserrat">
                <ScrollVelocity
                    texts={['UI/UX DESIGNER']} 
                    velocity={70} 
                    className={Class}                />
            </div>
            <div className="w-screen h-[65vh] max-md:h-fit bg-white flex justify-center items-center flex-col">
                <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={4}
                    blurStrength={9}
                    textClassName={Class2}
                >
                    About Me
                </ScrollReveal>
                <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={4}
                    blurStrength={9}
                    textClassName={Class3}
                >
                    I’m Glenndovin, I'm a designer with a deep curiosity for UI/UX design.
                    I mainly design using Figma, and I'm self-taught.
                    I love turning ideas into interactive, user-friendly interfaces.
                    Outside of UI/UX, I'm also involved in game character design
                    at a small indie studio, where I sharpen my creativity from a different angle.
                </ScrollReveal>
            </div>
        </div>
    );
}
