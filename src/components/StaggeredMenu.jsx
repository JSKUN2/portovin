import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './StaggeredMenu.css';
import { circle } from 'framer-motion/client';

export const StaggeredMenu = ({
  position = 'right',
  colors = ['#B19EEF', '#5227FF'],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  className,
  menuButtonColor = '#fff',
  openMenuButtonColor = '#fff',
  accentColor = '#5227FF',
  changeMenuColorOnOpen = true,
  isFixed = false,
  closeOnClickAway = true,
  onMenuOpen,
  onMenuClose,
  scrollToHead,
  scrollToBiografi,
  scrollToProject,
  active,
}) => {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const panelRef = useRef(null);
  const preLayersRef = useRef(null);
  const preLayerElsRef = useRef([]);
  
  // Ref untuk ikon khusus
  const iconRef = useRef(null);
  const toggleBtnRef = useRef(null);
  const busyRef = useRef(false);
  
  const openTlRef = useRef(null);
  const closeTweenRef = useRef(null);
  const spinTweenRef = useRef(null);
  const colorTweenRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;
      const icon = iconRef.current;
      
      if (!panel || !icon) return;

      let preLayers = [];
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer'));
      }
      preLayerElsRef.current = preLayers;

      const offscreen = position === 'left' ? -100 : 100;
      gsap.set([panel, ...preLayers], { xPercent: offscreen });
      
      // Initial state untuk ikon 
      gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%', display: 'inline-block' });
      
      if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: menuButtonColor });
    });
    return () => ctx.revert();
  }, [menuButtonColor, position]);

  // --- LOGIKA ANIMASI PANEL (Tetap Sama) ---
  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    openTlRef.current?.kill();
    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
    const tl = gsap.timeline({ paused: true });

    layers.forEach((layer, i) => {
      tl.to(layer, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.07);
    });

    tl.to(panel, { xPercent: 0, duration: 0.65, ease: 'power4.out' }, "-=0.3");
    
    if (itemEls.length) {
      tl.fromTo(itemEls, 
        { yPercent: 140, rotate: 5 }, 
        { yPercent: 0, rotate: 0, duration: 0.8, stagger: 0.1, ease: 'power4.out' }, 
        "-=0.4"
      );
    }

    openTlRef.current = tl;
    return tl;
  }, []);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    const tl = buildOpenTimeline();
    tl?.eventCallback('onComplete', () => { busyRef.current = false; }).play(0);
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    const offscreen = position === 'left' ? -100 : 100;
    
    gsap.to([...layers, panel], {
      xPercent: offscreen,
      duration: 0.4,
      ease: 'power3.inOut',
      stagger: 0.05,
      onComplete: () => { busyRef.current = false; }
    });
  }, [position]);

  // --- ANIMASI IKON  ---
  const animateIcon = useCallback(opening => {
    const icon = iconRef.current;
    if (!icon) return;
    spinTweenRef.current?.kill();
    
    // Animasi putar atau skala saat diklik
    if (opening) {
      spinTweenRef.current = gsap.to(icon, { 
        content:"󰖭", 
        scale: 1.2, 
        duration: 0.6, 
        ease: 'back.out(1.7)' 
      });
    } else {
      spinTweenRef.current = gsap.to(icon, { 
        rotate: 0, 
        scale: 1, 
        duration: 0.4, 
        ease: 'power2.inOut' 
      });
    }
  }, []);

  const animateColor = useCallback(opening => {
    const btn = toggleBtnRef.current;
    if (!btn || !changeMenuColorOnOpen) return;
    colorTweenRef.current?.kill();
    colorTweenRef.current = gsap.to(btn, {
      color: opening ? openMenuButtonColor : menuButtonColor,
      duration: 0.3
    });
  }, [openMenuButtonColor, menuButtonColor, changeMenuColorOnOpen]);

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);
    
    if (target) {
      onMenuOpen?.();
      playOpen();
    } else {
      onMenuClose?.();
      playClose();
    }
    animateIcon(target);
    animateColor(target);
  }, [playOpen, playClose, animateIcon, animateColor, onMenuOpen, onMenuClose]);

  const closeMenu = useCallback(() => {
    if (openRef.current) {
      openRef.current = false;
      setOpen(false);
      onMenuClose?.();
      playClose();
      animateIcon(false);
      animateColor(false);
    }
  }, [playClose, animateIcon, animateColor, onMenuClose]);

  return (
    <div
      className={`${className || ''} staggered-menu-wrapper ${isFixed ? 'fixed-wrapper' : ''},  md:hidden max-md:block`}
      style={{ '--sm-accent': accentColor }}
      data-position={position}
    >
      <div ref={preLayersRef} className="sm-prelayers">
        {colors.slice(0, 3).map((c, i) => (
          <div key={i} className="sm-prelayer" style={{ background: c }} />
        ))}
      </div>

      <header className="staggered-menu-header">
        <div className="sm-logo"></div>
        
        {/* TOMBOL DENGAN IKON  */}
        <button
          ref={toggleBtnRef}
          className="sm-toggle"
          onClick={toggleMenu}
          type="button"
          style={{ fontSize: '1.8rem', rotate: "180deg", background:"rgba(0,0,0,0.2)", padding:8, width:"3.5rem", height:"3.5rem", display:"flex",textAlign:"center", alignItems:"center", justifyContent:"center", borderRadius:"1000px"}} // Sesuaikan ukuran ikon di sini
        >
          <span 
            ref={iconRef} 
            className="sm-custom-icon" 
            style={{ display: 'inline-block' }}
          >
            
          </span>
        </button>
      </header>

<aside id="staggered-menu-panel" ref={panelRef} className="staggered-menu-panel" aria-hidden={!open}>
  <div className="sm-panel-inner">
    {/* 1. DAFTAR NAVIGASI DENGAN PENOMORAN */}
    <ul 
      className="sm-panel-list" 
      role="list" 
      data-numbering={displayItemNumbering ? "true" : undefined}
    >
      {[
        { label: 'Head', action: scrollToHead, id: 'head' },
        { label: 'Biografi', action: scrollToBiografi, id: 'biografi' },
        { label: 'Project', action: scrollToProject, id: 'project' }
      ].map((item, index) => (
        <li key={item.id} className="sm-panel-itemWrap">
          <button
            onClick={() => { item.action(); closeMenu(); }}
            className={`sm-panel-item ${active === item.id ? 'active' : ''}`}
          >
            {/* Label ini yang akan dianimasikan muncul dari bawah */}
            <span className="sm-panel-itemLabel">{item.label}</span>
          </button>
        </li>
      ))}
    </ul>

    {/* 2. MENU SOCIALS */}
    {displaySocials && socialItems && socialItems.length > 0 && (
      <div className="sm-socials" aria-label="Social links">
        <h3 className="sm-socials-title">Socials</h3>
        <ul className="sm-socials-list" role="list">
          {socialItems.map((s, i) => (
            <li key={s.label + i} className="sm-socials-item">
              <a 
                href={s.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="sm-socials-link"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
</aside>
    </div>
  );
};

export default StaggeredMenu;