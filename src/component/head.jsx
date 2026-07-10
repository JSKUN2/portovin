import Grainient from '../animasi/Grainient';     

export default function Head({scrollToAnggota}){
    return(
    <Grainient
        color1="#1e1e1e"
        color2="#005AF1"
        color3="#A9C9FF"
        timeSpeed={0.75}
        colorBalance={0.05}
        warpStrength={1.45}
        warpFrequency={1.2}
        warpSpeed={1.4}
        warpAmplitude={56}
        blendAngle={86}
        blendSoftness={0.11}
        rotationAmount={70}
        noiseScale={0.35}
        grainAmount={0}
        grainScale={1}
        grainAnimated={false}
        contrast={1.5}
        gamma={1}
        saturation={1}
        centerX={0.16}
        centerY={0}
        zoom={1.8}
        className='flex flex-col items-center rounded-es-[3.5vw] rounded-ee-[3.5vw] max-md:rounded-ee-[8vw] max-md:rounded-es-[8vw]'
      >
      <div className='absolute md:bottom-[15%] max-md:bottom-60 z-20 pr-10 pl-10 max-md:pr-5 max-md:pl-5 w-[100%]'>
        <div className='flex flex-row max-md:flex-col max-md:items-center'>
          <h1 className="text-[4.5vw] max-md:text-[9vw] font-semibold text-white">
            Grooth Studio
          </h1>
          <h1 class="jepun" className='font-extrabold text-white text-[1.5vw] ml-3 leading-[8vw] max-md:text-[3vw]'>ブレードエーブル</h1>
        </div>
        <hr className='border-white border-1' />
        <div className='flex flex-row justify-between mt-5.5'>
          <div className='flex flex-col max-md:items-center max-md:text-center max-md:gap-3 max-md:w-[100vw]'>
            <p className='font-light text-[1.5vw] text-white max-md:text-[3.4vw] max-md:w-[70vw]'>Started as a passion project, now building the worlds we always wanted</p>
            <p class="jepun" className='font-light text-[1.1vw] text-white/60 max-md:text-[2.6vw]'>情熱から始まり、ずっと遊びたかった世界を創り続ける。</p>
            <button className='font-light w-[12vw] h-[3vw] max-md:h-[9vw] max-md:w-[35vw] bg-white mt-10 max-md:mt-3 cursor-pointer text-[1.1vw] max-md:text-[3vw]' onClick={scrollToAnggota}>Meet The Team</button>
          </div>
          <div className='inline-grid grid-cols-2 font-light gap-x-0 text-center items-center gap-y-0 max-md:hidden'>
            <h1 className='text-white text-[5.5vw] m-0 leading-none'>2</h1>
            <h1 className='text-white text-[5.5vw] m-0 leading-none'>100+</h1>
            <h1 className='text-white text-[1.5vw] m-0'>Games</h1>
            <h1 className='text-white text-[1.5vw] m-0'>Players</h1>
            <h1 className='text-white/60 text-[1.1vw] m-0'>ゲーム</h1>
            <h1 className='text-white/60 text-[1.1vw] m-0'>プレイヤー</h1>
          </div>
        </div>
      </div>
      </Grainient>
      )
}