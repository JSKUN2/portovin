import React, { useState, useEffect } from 'react';
import SpotlightCard from './SpotlightCard';
import './style.css';
import '../index.css'


const useMobile = (breakpoint = 768) => {
  const [Mobile, setMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return Mobile;
};

export default function Middle(){
    const Mobile = useMobile()
    return(<>
      {Mobile ? (
        <div className="w-screen overflow-x-hidden relative">
        <div className="flex flex-row gap-[12px] translate-x-[-180px]">
            <SpotlightCard className="custom-spotlight-card w-[240px] h-[132px] shrink-0 passive" spotlightColor="#BAD1FF" />
            
            <SpotlightCard className="custom-spotlight-card w-[240px] h-[132px] shrink-0 active text-[12px] leading-[157%] tracking-[12%] text-[#FFF9F8] align-center justify-center" spotlightColor="#BAD1FF">
            Currently working at Grooth Studio, developing a 2D pixel-based game with Unity Engine. Project still in progress.
            </SpotlightCard>
            
            <SpotlightCard className="custom-spotlight-card w-[240px] h-[132px] shrink-0 passive" spotlightColor="#BAD1FF" />
        </div>
        </div>


      ) : (
        <div className='translate-x-40 flex flex-row gap-[22px]'>
          <SpotlightCard className="custom-spotlight-card w-[520px] h-[221px] shrink-0 active text-[20px] leading-[157%] tracking-[12%] text-[#FFF9F8] align-center justify-end" spotlightColor="#BAD1FF">
            <br className='mb-[17px]' />
            Currently working at Grooth Studio, developing a 2D pixel-based game with Unity Engine. Project still in progress.
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card w-[540px] h-[221px] passive" spotlightColor="#BAD1FF" />
          <SpotlightCard className="custom-spotlight-card w-[540px] h-[221px] passive" spotlightColor="#BAD1FF" />
        </div>
      )}
      </>
    )
}
