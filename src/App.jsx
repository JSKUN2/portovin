import './App.css'
import Top1 from './Top1/top1.jsx'
import Top2 from './Top2/top2.jsx'
import Middle from './Middle/middle.jsx'
import Bottom from './Bottom/bottom.jsx'
import Contact from './Bottom/contact.jsx'
import './index.css'
import { motion } from 'framer-motion';
function App() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      viewport={{ once: true }}
      className="min-h-screen bg-blue-100"
    >
      <div className='overflow-x-hidden w-[100vw] mt-0 mb-0 pt-0 pd-0 font-montserrat bg-[white]' data-scroll-section>
        <Top1 />
        <Top2 />
        <Middle />
        <Bottom />
        <Contact />
      </div>
      </motion.div>
  )
}

export default App
