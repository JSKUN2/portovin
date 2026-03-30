import gmbr1 from "../assets/prev3.png";
import gmbr2 from "../assets/prev2.png";
import gmbr3 from "../assets/prev1.png";
import { useState } from "react";
import FadeContent from "./FadeContent"

function Game(items, setAktif){
        return(
          <div>
            <div className="mt-6 mb-5 flex flex-row gap-15 max-md:gap-5">
              <div className="h-[30px] bg-black text-white font-semibold text-[24px] flex flex-col justify-center align-center text-center p-8 rounded-[80px] cursor-pointer max-md:text-[12px] max-md:p-4">Game Development</div>
              <div onClick={() => setAktif("uiux")} className="flex flex-col justify-center align-center rounded-[80px] text-center h-[30px] p-8 text-black/40 font-semibold text-[24px] cursor-pointer hover:bg-black/40 hover:text-white max-md:text-[12px] max-md:p-4">UI/UX</div>
            </div>
            {items.map((key,idx) => {
              return(
                  <div className="flex flex-row w-[100%]">
                     <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} className="w-[10%]">
                    <h1 className="font-semibold text-[96px] max-md:text-[38px] max-md:pt-4">{idx+1}</h1></FadeContent>
                    <div className="w-[90%] flex flex-col gap-6">
                      <div className="pt-5 font-semibold">
                         <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} >
                        <lo>
                          {key.name}
                        </lo>
                        <p className="text-black/40 text-[26px] leading-[44px] max-md:text-[18px] max-md:leading-[32px]">{key.game}</p>
                        </FadeContent>
                         <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} >
                        <div className="mt-3 flex flex-row gap-[96px] max-md:gap-[38px] overflow-x-auto">
                          <img src={key.gmbr1} alt="" className="w-[640px] h-full max-md:w-[240px]"/>
                          <img src={key.gmbr2} alt="" className="w-[640px] h-full max-md:w-[240px]"/>
                        </div></FadeContent>
                      <div className="pt-5 font-semibold">
                         <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} >
                        <lo>
                          Concept
                        </lo>
                        <p className="text-black/40 text-[26px] leading-[44px] max-md:text-[18px] max-md:leading-[32px]">{key.Concept}</p>
                        </FadeContent>
                         <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} >
                        <div className="mt-3 flex flex-row gap-[96px] w-[100%] justify-center">
                          <img src={key.gmbr3} alt="" className="w-[1024px] h-full"/>
                        </div></FadeContent>
                      </div>
                      </div>
                      <div className="pt-5 font-semibold">
                      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} >

                        <lo>
                          Development
                        </lo>
                        <p className="text-black/40 text-[26px] leading-[44px] max-md:text-[18px] max-md:leading-[32px]">{key.Development}</p></FadeContent>
                      </div>
                      <div className="pt-5 font-semibold"><FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} >
                        <lo>
                          Result
                        </lo>
                        <p className="text-black/40 text-[26px] leading-[44px] max-md:text-[18px] max-md:leading-[32px]">{key.Result}</p></FadeContent>
                      </div>
                      <div className="pt-5 font-semibold"><FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} >
                        <lo>
                          Technical
                        </lo>
                        <ul className="text-black/100 text-[26px] leading-[44px] max-md:text-[18px] max-md:leading-[32px]">
                          <li>
                            Role: <span className="text-black/40">{key.Technical.Role}</span>
                          </li>
                          <li>
                            Tools: <span className="text-black/40">{key.Technical.Tools}</span>
                          </li>
                          <li>
                            Engine: <span className="text-black/40">{key.Technical.Engine}</span>
                          </li>
                          <li>
                            Style: <span className="text-black/40">{key.Technical.Style}</span>
                          </li>
                        </ul></FadeContent>
                      </div>
                      <div className="pt-5 font-semibold"><FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} >
                        <lo>
                          Learning
                        </lo>
                        <p className="text-black/40 text-[26px] leading-[44px] max-md:text-[18px] max-md:leading-[32px]">{key.Learning}</p></FadeContent>
                      </div>
                    </div>
                  </div>
              )
              })}</div>)
}
function Uiux(items, setAktif){
        return(
          <div>
            <div className="mt-6 mb-5 flex flex-row gap-15">
              <div onClick={() => setAktif("game")}  className="flex flex-col justify-center align-center text-center h-[30px] p-8 text-black/40 font-semibold text-[24px] cursor-pointer hover:bg-black/40 hover:text-white rounded-[80px]">Game Development</div>
              <div className="h-[30px] bg-black text-white font-semibold text-[24px] flex flex-col justify-center align-center text-center p-8 rounded-[80px] cursor-pointer">UI/UX</div>
            </div>
            </div>)
}

export default function Project() {
  const items = [
    {
      name:"Bladeable & Bladeable Series",
      game:
        "Bladeable is a fast-paced 2D action indie game that challenges players to master razor-sharp reflexes, fluid combat, and momentum-driven movement as they slash through enemies and overcome dynamic obstacles.",
      gmbr1: gmbr1,
      gmbr2: gmbr2,
      Concept:
        "A 2D action game set in a collapsing fantasy world where a mysterious black hole consumes everything — from cities to the sky. You play as one of the last survivors, fighting back with only a sword and unwavering determination.",
      gmbr3: gmbr3,
      Development:
        "The character was designed with a strong, readable silhouette, featuring a signature scarf to emphasize agility and motion.\nThe process began with defining the core design, followed by studying animation references and creating frame-by-frame animations for responsive gameplay.\nIn this project, I was responsible for character design, animation, UI, and overall game visuals.",
      Result:
        "The final result showcases in-game previews integrated in Unity, highlighting the character, atmosphere, and visual direction of the game.",
      Technical: {
        Role: "Game Artist",
        Tools: "Figma, Aseprite, Piskel",
        Engine: "Unity",
        Style: "Pixel + vector-based illustration",
      },
      Learning:
        "This being my first game project, I learned the fundamentals of character animation and how to translate visual concepts into a playable experience.",
    },
  ];
  const [aktif, setAktif] = useState("game")
  return (
                         <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} className="w-[10%]">

    <div className="w-[90vw] h-fit">
    <div>
        <h1 className="font-semibold text-[48px] mb-3 max-md:text-[40px]">Project.</h1>
        <hr className="border-2"/>
    </div>
      <div className="flex flex-col gap-6 font-sans text-black">
      {aktif == "game" ? Game(items, setAktif) : Uiux(items, setAktif)}</div>
    </div></FadeContent>
  );
}
