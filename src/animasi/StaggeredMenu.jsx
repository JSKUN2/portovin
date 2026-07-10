import { h } from "preact";
import { useCallback, useLayoutEffect, useRef, useState } from "preact/hooks";
import { gsap } from "gsap";
import "./StaggeredMenu.css";

export default function StaggeredMenu({
  position = "right",
  colors = ["#B19EEF", "#5227FF"],

  socialItems = [
    {
      label: "Instagram",
      link: "https://www.instagram.com/grooth_studio/",
    },
    {
      label: "Email",
      link: "mailto:studiogrooth@gmail.com",
    },
  ],

  displaySocials = true,
  displayItemNumbering = true,

  className,

menuButtonBackground = "rgba(255,255,255,.50)",
openMenuButtonBackground = "#0f0f0f",

menuIconColor = "#0f0f0f",
openMenuIconColor = "#ffffff",

  accentColor = "#5227FF",

  changeMenuColorOnOpen = true,

  isFixed = true,

  closeOnClickAway = true,

  onMenuOpen,
  onMenuClose,

  scrollHome,
  scrollAbout,
  scrollServices,
  scrollGames,
  scrollTeam,
  scrollFaq,

  active,
}) {
  const [open, setOpen] = useState(false);

  const openRef = useRef(false);

  const panelRef = useRef(null);

  const preLayersRef = useRef(null);

  const preLayerElsRef = useRef([]);

  const toggleBtnRef = useRef(null);

  const busyRef = useRef(false);

  const openTlRef = useRef(null);

  const spinTweenRef = useRef(null);

  const colorTweenRef = useRef(null);

  const topRef = useRef(null);

  const middleRef = useRef(null);

  const bottomRef = useRef(null);
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;

      const preContainer = preLayersRef.current;

      if (!panel) return;

        gsap.set([topRef.current, middleRef.current, bottomRef.current], {
        transformOrigin: "50% 50%",
        });
      const layers = Array.from(
        preContainer.querySelectorAll(".sm-prelayer")
      );

      preLayerElsRef.current = layers;

      const offscreen = position === "left" ? -100 : 100;

      gsap.set([panel, ...layers], {
        xPercent: offscreen,
      });

      if (toggleBtnRef.current) {
        gsap.set(toggleBtnRef.current, {
          backgroundColor: menuButtonBackground,
          color: "#0f0f0f"
        });
      }
    });

    return () => ctx.revert();
  }, [position]);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;

    const layers = preLayerElsRef.current;

    if (!panel) return;

    openTlRef.current?.kill();

    const labels = Array.from(
      panel.querySelectorAll(".sm-panel-itemLabel")
    );

    const tl = gsap.timeline({
      paused: true,
    });

    layers.forEach((layer, i) => {
      tl.to(
        layer,
        {
          xPercent: 0,
          duration: 0.5,
          ease: "power4.out",
        },
        i * 0.07
      );
    });

    tl.to(
      panel,
      {
        xPercent: 0,
        duration: 0.65,
        ease: "power4.out",
      },
      "-=0.3"
    );

    tl.fromTo(
      labels,
      {
        yPercent: 140,
        rotate: 5,
      },
      {
        yPercent: 0,
        rotate: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power4.out",
      },
      "-=0.45"
    );

    openTlRef.current = tl;

    return tl;
  }, []);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;

    busyRef.current = true;

    const tl = buildOpenTimeline();

    tl.eventCallback("onComplete", () => {
      busyRef.current = false;
    });

    tl.play(0);
  }, []);

  const playClose = useCallback(() => {
    const panel = panelRef.current;

    const layers = preLayerElsRef.current;

    const offscreen = position === "left" ? -100 : 100;

    gsap.to([...layers, panel], {
      xPercent: offscreen,
      duration: 0.45,
      stagger: 0.05,
      ease: "power3.inOut",
      onComplete: () => {
        busyRef.current = false;
      },
    });
  }, [position]);

const animateIcon = useCallback((opening) => {
  if (opening) {
    gsap.to(topRef.current, {
      attr: {
        x1: 8,
        y1: 12.5,
        x2: 28,
        y2: 12.5,
      },
      rotate: 45,
      duration: 0.35,
      ease: "power2.out",
      svgOrigin: "18 12.5",
    });

    gsap.to(middleRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: "power2.out",
    });

    gsap.to(bottomRef.current, {
      attr: {
        x1: 8,
        y1: 12.5,
        x2: 28,
        y2: 12.5,
      },
      rotate: -45,
      duration: 0.35,
      ease: "power2.out",
      svgOrigin: "18 12.5",
    });
  } else {
    gsap.to(topRef.current, {
      attr: {
        x1: 12,
        y1: 2,
        x2: 34,
        y2: 2,
      },
      rotate: 0,
      duration: 0.35,
      ease: "power2.out",
      svgOrigin: "18 12.5",
    });

    gsap.to(middleRef.current, {
      opacity: 1,
      duration: 0.25,
      ease: "power2.out",
    });

    gsap.to(bottomRef.current, {
      attr: {
        x1: 20,
        y1: 23,
        x2: 34,
        y2: 23,
      },
      rotate: 0,
      duration: 0.35,
      ease: "power2.out",
      svgOrigin: "18 12.5",
    });
  }
}, []);

const animateColor = useCallback(
  (opening) => {
    if (!changeMenuColorOnOpen) return;

    colorTweenRef.current?.kill();

    colorTweenRef.current = gsap.to(toggleBtnRef.current, {
      backgroundColor: opening
        ? openMenuButtonBackground
        : menuButtonBackground,

      color: opening
        ? openMenuIconColor
        : menuIconColor,

      duration: 0.3,
      ease: "power2.out",
    });
  },
  [
    changeMenuColorOnOpen,
    menuButtonBackground,
    openMenuButtonBackground,
    menuIconColor,
    openMenuIconColor,
  ]
);

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
  }, []);

  const closeMenu = useCallback(() => {
    if (!openRef.current) return;

    openRef.current = false;

    setOpen(false);

    playClose();

    animateIcon(false);

    animateColor(false);

    onMenuClose?.();
  }, []);

  useLayoutEffect(() => {
    if (!closeOnClickAway) return;

    function handle(e) {
      if (!openRef.current) return;

      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(e.target)
      ) {
        closeMenu();
      }
    }

    document.addEventListener("mousedown", handle);

    document.addEventListener("touchstart", handle);

    return () => {
      document.removeEventListener("mousedown", handle);
      document.removeEventListener("touchstart", handle);
    };
  }, [closeMenu, closeOnClickAway]);

  const menuItems = [
    {
      id: "home",
      label: "HOME",
      jp: "ホーム",
      action: scrollHome,
    },
    {
      id: "about",
      label: "ABOUT",
      jp: "私たちについて",
      action: scrollAbout,
    },
    {
      id: "news",
      label: "Services",
      jp: "ニュース",
      action: scrollServices,
    },
    {
      id: "faq",
      label: "FAQ",
      jp: "よくある質問",
      action: scrollFaq,
    },
  ];
  return (
    <div
      className={`${className || ""} staggered-menu-wrapper ${
        isFixed ? "fixed-wrapper" : ""
      } md:hidden max-md:block`}
      style={{ "--sm-accent": accentColor }}
      data-position={position}
      data-open={open ? "" : undefined}
    >
      {/* Background Layers */}
      <div ref={preLayersRef} className="sm-prelayers">
        {colors.slice(0, 3).map((color, index) => (
          <div
            key={index}
            className="sm-prelayer"
            style={{ background: color }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="staggered-menu-header">
        <div className="sm-logo">
          <img
            alt=""
            className="sm-logo-img"
          />
        </div>

        <button
          ref={toggleBtnRef}
          type="button"
          className="sm-toggle"
          onClick={toggleMenu}
          aria-label={open ? "Close Menu" : "Open Menu"}
          aria-expanded={open}
          style={{
            fontSize: "1.8rem",
            width: "3.5rem",
            height: "3.5rem",
            borderRadius: "9999px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
<svg
  width="36"
  height="25"
  viewBox="0 0 36 25"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style={{
    overflow: "visible",
  }}
>
  <line
    ref={topRef}
    x1="12"
    y1="2"
    x2="34"
    y2="2"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
  />

  <line
    ref={middleRef}
    x1="2"
    y1="12.5"
    x2="34"
    y2="12.5"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
  />

  <line
    ref={bottomRef}
    x1="20"
    y1="23"
    x2="34"
    y2="23"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
  />
</svg>
        </button>
      </header>

      {/* Panel */}
      <aside
        ref={panelRef}
        className="staggered-menu-panel"
        aria-hidden={!open}
      >
        <div className="sm-panel-inner">
          <ul
            className="sm-panel-list"
            role="list"
            data-numbering={
              displayItemNumbering ? "true" : undefined
            }
          >
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="sm-panel-itemWrap"
              >
                <button
                  className={`sm-panel-item ${
                    active === item.id ? "active" : ""
                  }`}
                  onClick={() => {
                    item.action?.();
                    closeMenu();
                  }}
                  type="button"
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    textAlign: "left",
                    width: "100%",
                  }}
                >
                  <span className="sm-panel-itemLabel">
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.8em",
                        lineHeight: 1,
                      }}
                    >
                      {item.label}
                    </span>

                    <span
                      style={{
                        display: "block",
                        marginTop: ".45rem",
                        fontSize: "16px",
                        fontWeight: 300,
                        color: "rgba(255,255,255,.55)",
                        letterSpacing: 0,
                        textTransform: "none",
                      }}
                    >
                      {item.jp}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}