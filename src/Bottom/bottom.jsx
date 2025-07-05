import React from 'react';
import ScrollReveal from './ScrollReveal.jsx';
import Magnet from './Magnet'
import FadeContent from './FadeContent'
import '../index.css'
export default function Bottom() {
    return(
        <>
            <div className="relative w-screen h-[240vh] bg-white flex items-center flex-col font-montserrat">
                <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={4}
                    blurStrength={9}
                    textClassName='text-[clamp(1.6rem,4vw,48px)] leading-[157%] text-center font-[700] w-[80vw] [word-spacing:0.4em] tracking-[12%] mt-[170px] mb-[100px] '
                >
                    Recent Project
                </ScrollReveal>
                <div className='flex flex-col gap-[110px]'>

                <Magnet padding={200} disabled={false} magnetStrength={5}>
                        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} className='text-[black]'>
                            <div className='h-[77vh] w-[77vw] bg-[#BCD3FF] rounded-[30px] flex'>
                            <div className='flex-1 flex justify-center pl-[10%] flex flex-col w-[50%]'>
                                <p className='inline-block font-[500] text-transparent bg-clip-text bg-[linear-gradient(90deg,_#0048E5_1%,_#568BFF_30%,_#0048E5_70%)] font-(family-name:montserrat) text-[54px] leading-[100%] tracking-[2%] text-left mb-[20px] w-[80%] h-[70px]'>
                                    Movie App
                                </p>
                                <p className='inline-block font-[300] text-transparent bg-clip-text bg-[linear-gradient(18deg,_#0048E5_50%,_#568BFF_100%)] font-(family-name:montserrat) text-[18px] leading-[100%] tracking-[2%] text-justify w-[80%]'>
                                    This app concept was designed to make discovering and tracking movies more fun and intuitive. The goal was to create a clean and interactive UI that feels smooth and modern, while still being user-friendly for everyday use.
                                </p>
                            </div>
                            <div className="flex-1 w-[50%] bg-[url(../assets/img/project1.png)] bg-cover bg-no-repeat bg-center">     
                            </div>
                            </div>
                        </FadeContent>
                </Magnet>
                <Magnet padding={200} disabled={false} magnetStrength={5}>
                        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} className='text-[black]'>
                            <div className='h-[77vh] w-[77vw] bg-[#BCD3FF] rounded-[30px] flex'>
                            <div className='flex-1 flex justify-center pl-[10%] flex flex-col w-[50%]'>
                                <p className='inline-block font-[500] text-transparent bg-clip-text bg-[linear-gradient(90deg,_#0048E5_1%,_#568BFF_30%,_#0048E5_70%)] font-(family-name:montserrat) text-[54px] leading-[100%] tracking-[2%] text-left mb-[20px] w-[80%] h-[70px]'>
                                    Jobs App
                                </p>
                                <p className='inline-block font-[300] text-transparent bg-clip-text bg-[linear-gradient(18deg,_#0048E5_50%,_#568BFF_100%)] font-(family-name:montserrat) text-[18px] leading-[100%] tracking-[2%] text-justify w-[80%]'>
                                    A service marketplace app that allows users to explore and purchase skills offered by freelancers or professionals. Each provider showcases their service details, pricing, and portfolio. Users can easily browse categories, view profiles, and place orders directly through the platform with a smooth and intuitive user experience.
                                </p>
                            </div>
                            <div className="flex-1 w-[50%] bg-[url(../assets/img/project2.png)] bg-cover bg-no-repeat bg-center">   
                            </div>
                            </div>
                        </FadeContent>
                </Magnet>
                </div>
            </div>
        </>
    );
}
