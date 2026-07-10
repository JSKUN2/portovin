import Part from "./part"
import FadeContent from "../animasi/FadeContent"
export default function News(){
    return(
    <Part nama1="News" nama2="ニュース">
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} >
            <div className="flex flex-row gap-10 items-start overflow-x-auto mb-35 max-md:flex-col">
                <img src="/Frame1.webp" alt="" className="w-[45vw] h-auto max-md:w-[100%]"/>
                <img src="/Frame2.webp" alt="" className="w-[45vw] h-auto max-md:w-[100%]" />
            </div>
        </FadeContent>
    </Part>)
}