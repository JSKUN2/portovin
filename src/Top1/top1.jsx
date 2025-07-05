import React from 'react';
import BlurText from "./BlurText.jsx";
import TiltedCard from './TiltedCard';
import foto from '../assets/img/foto.png';
import '../index.css'
import './top1.css';

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

export default function Top1() {
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
            className="font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,_white_0%,_#4A95FF_10%,_#4A95FF_90%,_white_100%)] mb-4  text-[120px] leading-[100%] tracking-[2%] h-[140px]"
          />
        ))}
      </div>

      <div className="absolute inset-0 z-10 flex justify-center items-center">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle_at_center,#3776FF90_0%,transparent_74%)] blur-[100px]"></div>
            </div>
      </div>

      <div className="z-20">
        <TiltedCard
          imageSrc={foto}
          altText="Glenndovin Dherrel Junaidy"
          captionText="Glenndovin Dherrel Junaidy"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={false}
          overlayContent={
            <p className="tilted-card-demo-text">glenndovin</p>
          }
        />
      </div>

    </div>
  );
}
