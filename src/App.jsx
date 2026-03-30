import './App.css'
import Head from './components/head'
import Biografi from './components/biografi'
import Project from './components/project'
import React, { useRef, useState, useEffect } from 'react';

function App() {
  const headRef = useRef(null);
  const biografiRef = useRef(null);
  const projectRef = useRef(null);

  const [active, setActive] = useState('head');

  const scrollToHead = () => {
    headRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActive('head');
  };

  const scrollToBiografi = () => {
    biografiRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActive('biografi');
  };

  const scrollToProject = () => {
    projectRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActive('project');
  };

  useEffect(() => {
    const onLoad = () => {
      headRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    window.addEventListener('load', onLoad);

    return () => window.removeEventListener('load', onLoad);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === headRef.current) setActive('head');
          else if (entry.target === biografiRef.current) setActive('biografi');
          else if (entry.target === projectRef.current) setActive('project');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    if (headRef.current) observer.observe(headRef.current);
    if (biografiRef.current) observer.observe(biografiRef.current);
    if (projectRef.current) observer.observe(projectRef.current);

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const projectTop = projectRef.current.offsetTop;
      const projectHeight = projectRef.current.offsetHeight;

      if (scrollPosition >= projectTop + projectHeight / 2) {
        setActive('project');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className='flex flex-col items-center relative w-full pb-20'>
      <div className="fixed top-[3.5vh] z-50 flex flex-row w-[384px] bg-black h-[58px] rounded-[22px] text-white items-center justify-around px-[16px] max-md:hidden">
        <h4
          className={`ml-[16px] cursor-pointer ${active === 'head' ? 'font-bold' : ''}`}
          onClick={scrollToHead}
        >
          Head
        </h4>
        <h4
          className={`cursor-pointer ${active === 'biografi' ? 'font-bold' : ''}`}
          onClick={scrollToBiografi}
        >
          Biografi
        </h4>
        <h4
          className={`mr-[16px] cursor-pointer ${active === 'project' ? 'font-bold' : ''}`}
          onClick={scrollToProject}
        >
          Project
        </h4>
      </div>
      <div ref={headRef}>
        <Head
          scrollToHead={scrollToHead}
          scrollToBiografi={scrollToBiografi}
          scrollToProject={scrollToProject}
          active={active}
        />
      </div>

      <div ref={biografiRef}>
        <Biografi/>
      </div>

      <div ref={projectRef}>
        <Project/>
      </div>
    </div>
  );
}

export default App;