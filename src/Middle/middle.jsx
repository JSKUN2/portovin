import React, { useState, useEffect } from 'react';
import './style.css';
import '../index.css';
import Grooth from '../assets/img/grooth.svg';
import Carousel from './Carousel.jsx';
import { vw } from 'framer-motion';

const useMobile = (breakpoint = 768) => {
  const [Mobile, setMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return Mobile;
};

export default function Middle() {
  const Mobile = useMobile();

  useEffect(() => {
    const container = document.querySelector(".scroll-list");
    if (container) {
      container.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);

  const spotlightItems = [
    {
      type: 'active',
      title: 'Grooth Studio',
      description:
        'I work on responsive web layouts and intuitive UI/UX, collaborating with the team to maintain a clear and consistent design style.',
      role: 'Website & UI/UX Design',
      icon: Grooth
    },
    {
      type: 'active',
      title: 'Grooth Studio',
      description:
        'I design and animate characters, from concept to final assets, ensuring they match the visual tone and feel of the game.',
      role: 'Character Design & Animation',
      icon: Grooth
    },
    { type: 'passive' },
    { type: 'passive' },
  ];

  return (
    <div className="w-screen h-40px overflow-x-hidden relative flex flex-col justify-start max-md:justify-start items-center">
      <Carousel
        items={spotlightItems}
        baseWidth={Mobile?(screen.width*80/100):(screen.width*77/100)}
        autoplay={true}
        pauseOnHover={true}
        loop={true}
        mobile={Mobile}
      />
    </div>
  );
}
