import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FadeContent from './FadeContent'

const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

export default function Contact() {
  const svgContainerRef = useRef(null);
  const [height, setHeight] = useState(40); // in vh
  const heightRef = useRef(30); // current height
  const targetHeightRef = useRef(30); // target height

  useEffect(() => {
    const handleScroll = () => {
      if (!svgContainerRef.current) return;

      const rect = svgContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const distanceFromTop = rect.top;
      const visible = Math.max(0, Math.min(1, 1 - distanceFromTop / windowHeight));
      const maxHeight = 40; // in vh

      const target = maxHeight * (1 - visible);
      targetHeightRef.current = target;
    };

    const animate = () => {
      const current = heightRef.current;
      const target = targetHeightRef.current;
      const newHeight = lerp(current, target, 0.1);

      heightRef.current = newHeight;
      setHeight(newHeight);
      requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen min-h-[100vh] bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300">
      <motion.div
        ref={svgContainerRef}
        style={{ height: `${height}vh` }}
        className="w-screen overflow-hidden transition-all"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1920 1024"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_27_19"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1920"
            height="1024"
          >
            <rect width="1920" height="1024" fill="white" />
          </mask>
          <g mask="url(#mask0_27_19)">
            <g filter="url(#filter0_d_27_19)">
              <path
                d="M2455 -323.718C2455 206.32 1785.89 636 960.5 636C135.111 636 -534 206.32 -534 -323.718C866.315 -755.591 -534 -107.282 960.5 -1067C2395.06 -107.282 866.315 -755.591 2455 -323.718Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_27_19"
              x="-538"
              y="-1067"
              width="2997"
              height="1711"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_27_19"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_27_19"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </motion.div>
    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
    <div className="ml-[20%] mt-[16%] max-md:mt-[250px] max-md:ml-[10%] w-[60vw] w-[80vw] text-left flex flex-col z-10">
        <h1 className="text-[48px] max-md:text-[32px] mb-4 font-bold text-white font-montserrat">
          Contact Me!
        </h1>
        <p className="text-[18px] max-md:text-[16px] text-white font-montserrat">
          Like what you see? Don’t hesitate to contact me...
        </p>
        <a href="mailto:glenndherrel@gmail.com">
          <button className="bg-white rounded w-[150px] h-[60px] text-[20px] mt-6 font-montserrat font-medium">
            Say Hello!!
          </button>
        </a>
      </div>
      </FadeContent>
    </div>
  );
}
