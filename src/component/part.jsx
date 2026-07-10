export default function Part({nama1,nama2, children}){
    return(
    <div className={`flex min-h-fit flex-col px-14 max-md:px-5 `}>
        <div className="flex flex-row h-[16vh] max-md:h-[9vh] font-light items-center max-md:items-start">
            <h1 className="text-[3vw] text-white max-md:text-[8vw]">{nama1}</h1>
            <p className="text-[1.2vw] text-white/60 mt-[1.5vw] ml-4 max-md:mt-[3vw] max-md:ml-2 max-md:text-[3.6vw]">{nama2}</p>
        </div>
        <div>{children}</div>
    </div>)
}