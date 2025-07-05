import React from 'react';
import SpotlightCard from './SpotlightCard';
import './style.css';
import '../index.css'
export default function Middle(){
    return(
        <div className='bg-[white] w-[100vw] font-montserrat'>
            <div className='translate-x-40 flex flex-row gap-[22px]'>
                <SpotlightCard className="custom-spotlight-card w-[520px] h-[221px] active text-[20px] leading-[157%] tracking-[12%] text-[#FFF9F8] align-center justify-end" spotlightColor="#BAD1FF">
                    <br className='mb-[17px]'/>Currently working at Grooth Studio, developing a 2D pixel-based game with Unity Engine. Project still in progress.
                </SpotlightCard>
                <SpotlightCard className="custom-spotlight-card w-[540px] h-[221px] passive" spotlightColor="#BAD1FF">
                </SpotlightCard>
                <SpotlightCard className="custom-spotlight-card w-[540px] h-[221px] passive" spotlightColor="#BAD1FF">
                </SpotlightCard>
            </div>
        </div>
    )
}
