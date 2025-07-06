import React, { useState, useEffect } from 'react';
import BlurText from "./BlurText.jsx";
import TiltedCard from './TiltedCard';
import foto from '../assets/img/foto.webp';
import '../index.css';
import './top1.css';
const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const useCustomArray = () => {
  const [data, setData] = useState([
    300,
    "font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,_white_0%,_#4A95FF_10%,_#4A95FF_90%,_white_100%)] mb-4 text-[120px] leading-[100%] tracking-[2%] h-[140px]",
    "h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle_at_center,#3776FF90_0%,transparent_74%)] blur-[100px]",
  ]);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 768) {
        setData([
          "40vw",
          "font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,_white_0%,_#4A95FF_10%,_#4A95FF_90%,_white_100%)] mb-0.5 text-[12vw] leading-[100%] tracking-[2%]",
          "h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle_at_center,#3776FF90_0%,transparent_74%)] blur-[100px]",
        ]);
      } else {
        setData([
          300,
          "font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,_white_0%,_#4A95FF_10%,_#4A95FF_90%,_white_100%)] mb-4 text-[120px] leading-[100%] tracking-[2%] h-[140px]",
          "h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle_at_center,#3776FF90_0%,transparent_74%)] blur-[100px]",
        ]);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return data;
};

export default function Top1() {
  const [size, Class, Class2] = useCustomArray();

  return (
    <div className="relative w-screen h-screen bg-white flex justify-center items-center font-montserrat">
      <div className="absolute inset-0 z-0 flex flex-col justify-center items-center text-center">
        {["GLENNDOVIN", "DHERREL", "JUNAIDY"].map((word, idx) => (
          <BlurText
            key={idx}
            text={word}
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className={Class}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-10 flex justify-center items-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={Class2} />
        </div>
      </div>

      <div className="z-20">
        <TiltedCard
          imageSrc={foto}
          altText=" "
          captionText="Glenndovin Dherrel Junaidy"
          containerHeight={size}
          containerWidth={size}
          imageHeight={size}
          imageWidth={size}
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={false}
          overlayContent={<p className="tilted-card-demo-text">glenndovin</p>}
        />
      </div>
    </div>
  );
}
