import CurvedLoop from "../animasi/CurvedLoop";
import FadeContent from "../animasi/FadeContent";
export default function Supporter() {
  return (
    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} >

        <div className="w-screen text-white flex flex-col items-center py-25 text-center">
        <h1 className="text-[1.55vw] max-md:text-[6vw] text-center">Special Thanks to Our Donors</h1>
        <h1 className="opacity-[0.6] text-[1.2vw] max-md:text-[3.2vw] text-center">
            ご支援いただいた皆様、ありがとうございます。
        </h1>
        <CurvedLoop
            marqueeText="Fredrick⠀Grookey⠀Alvin Lim⠀Steven Chen⠀Ezio Pasaribu⠀Jimmy⠀Tohiro Wong⠀Denny⠀Christine⠀Welly"
            speed={2}
            curveAmount={0}
            direction="right"
            interactive={false}
            className="custom-text-style mt-10 max-md:mt-6 text-[1.1vw] max-md:text-[4vw]"
        />
        </div>
    </FadeContent>
  );
}
