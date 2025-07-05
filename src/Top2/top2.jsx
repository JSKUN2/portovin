import React from 'react';
import ScrollVelocity from './ScrollVelocity.jsx';
import ScrollReveal from './ScrollReveal.jsx';
import '../index.css'
export default function Top2() {
    return(
        <>
            <div className="relative w-screen h-[35vh] bg-[linear-gradient(90deg,_#8EB2FF_50%,_#3776FF_100%)] flex justify-center items-center font-montserrat">
                <ScrollVelocity
                    texts={['UI/UX DESIGNER']} 
                    velocity={70} 
                    className="custom-scroll-text font-inter font-extrabold italic text-[220px] leading-[100%] tracking-[2%]"
                />
            </div>
            <div className="relative w-screen h-screen bg-white flex justify-center items-center flex-col">
                <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={4}
                    blurStrength={9}
                    textClassName='text-[clamp(1.6rem,4vw,48px)] leading-[157%] text-center font-[700] w-[80vw] [word-spacing:0.4em] tracking-[12%] mb-10 '
                >
                    About Me
                </ScrollReveal>
                <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={4}
                    blurStrength={9}
                    textClassName='text-[clamp(1.6rem,4vw,32px)] leading-[157%] text-justify font-normal w-[80vw] [word-spacing:0.4em] tracking-[12%] '
                >
                    I’m Glenndovin, I'm a designer with a deep curiosity for UI/UX design.
                    I mainly design using Figma, and I'm self-taught.
                    I love turning ideas into interactive, user-friendly interfaces.
                    Outside of UI/UX, I'm also involved in game character design
                    at a small indie studio, where I sharpen my creativity from a different angle.
                </ScrollReveal>
            </div>
        </>
    );
}
