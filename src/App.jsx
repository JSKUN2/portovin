import './App.css'
import Top1 from './Top1/top1.jsx'
import Top2 from './Top2/top2.jsx'
import Middle from './Middle/middle.jsx'
import Bottom from './Bottom/bottom.jsx'
import './index.css'
function App() {
  return (
    <div className='overflow-x-hidden w-[100vw] mt-0 mb-0 pt-0 pd-0 font-montserrat bg-[white]'>
      <Top1/>
      <Top2/>
      <Middle/>
      <Bottom/>
    </div>
  )
}

export default App
