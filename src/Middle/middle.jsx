import React, { useState, useEffect } from 'react';
import AnimatedList from './AnimatedList';
import SpotlightCard from './SpotlightCard';
import './style.css';
import '../index.css';
import Grooth from '../assets/img/grooth.svg';

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
        { type: 'passive' },
        { type: 'passive' },
      ];

  return (
    <div className="w-screen overflow-x-hidden relative flex flex-col justify-center items-center">
      <AnimatedList
        items={spotlightItems.map((item, index) => {
          if (item.type === 'active') {
            return (
              <SpotlightCard
                key={index}
                className={`custom-spotlight-card w-[420px] h-[260px] shrink-0 active text-[#FFF9F8]`}
                spotlightColor="#BAD1FF"
              >
                {(
                  <>
                    <div className="flex flex-row items-center mb-2">
                      <img src={item.icon} alt="" width="70px" height="70px" />
                      <p className="ml-3 font-montserrat font-bold text-[26px] leading-[157%] tracking-[0%]">
                        {item.title}
                      </p>
                    </div>
                    <div>
                      <p className="font-montserrat font-medium text-[16px] leading-[157%] tracking-[0%] w-[90%]">
                        {item.description}
                      </p>
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-[12px] leading-[157%] tracking-[0%] text-right mt-[25px]">
                        {item.role}
                      </p>
                    </div>
                  </>
                )}
              </SpotlightCard>
            );
          } else {
            return (
              <SpotlightCard
                key={index}
                className={`custom-spotlight-card w-[420px] h-[260px] shrink-0 passive`}
                spotlightColor="#BAD1FF"
              />
            );
          }
        })}
        onItemSelect={(item, index) => console.log(item, index)}
        showGradients={false}
        enableArrowNavigation={true}
        displayScrollbar={true}
        className='w-screen'
      />
    </div>
  );
}
