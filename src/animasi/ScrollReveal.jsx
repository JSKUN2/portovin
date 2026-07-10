import { useEffect, useRef, useMemo } from "preact/hooks";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollReveal.css";
gsap.registerPlugin(ScrollTrigger);
const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}) => {
  const containerRef = useRef(null);
  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);
    const segmenter =
      typeof Intl !== "undefined" && Intl.Segmenter
        ? new Intl.Segmenter(undefined, {
            granularity: "word",
          })
        : null;
    const elements = [];
    let key = 0;
    parts.forEach((part) => {
      if (
        part.startsWith("*") &&
        part.endsWith("*") &&
        part.length > 2
      ) {
        elements.push(
          <span
            key={key++}
            className="word text-[2.1vw] max-md:text-[6.5vw] text-white"
            style={{
              display: "inline",
              transition: "color 0.3s",
            }}
          >
            {part.slice(1, -1)}
          </span>
        );
        return;
      }
      const containsCJK =
        /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/.test(
          part
        );
      let segments;
      if (containsCJK) {
        segments = [...part];
      }
      else if (segmenter) {
        segments = [...segmenter.segment(part)].map(
          (s) => s.segment
        );
      }
      else {
        segments = part.split(/(\s+)/);
      }
      segments.forEach((segment) => {
        if (segment === "\n") {
          elements.push(
            <div
              key={`newline-${key++}`}
              className="block h-[0.5vw] max-md:h-[4vw]"
            />
          );
          return;
        }
        if (/^\s+$/.test(segment)) {
          elements.push(segment);
          return;
        }
        if (!segment.length) return;
        elements.push(
          <span
            key={key++}
            className="word text-[1.707vw] max-md:text-[5vw] text-white/60"
            style={{
              display: "inline-block",
              transition: "color 0.3s",
            }}
          >
            {segment}
          </span>
        );
      });
    });
    return elements;
  }, [children]);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const scroller =
      scrollContainerRef?.current || window;
    const animations = [];
    animations.push(
      gsap.fromTo(
        el,
        {
          transformOrigin: "0% 50%",
          rotate: baseRotation,
        },
        {
          rotate: 0,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom",
            end: rotationEnd,
            scrub: true,
          },
        }
      )
    );
    const wordElements =
      el.querySelectorAll(".word");
    animations.push(
      gsap.fromTo(
        wordElements,
        {
          opacity: baseOpacity,
          willChange:
            "opacity, filter, transform",
        },
        {
          opacity: 1,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom-=20%",
            end: wordAnimationEnd,
            scrub: true,
          },
        }
      )
    );
    if (enableBlur) {
      animations.push(
        gsap.fromTo(
          wordElements,
          {
            filter: `blur(${blurStrength}px)`,
          },
          {
            filter: "blur(0px)",
            stagger: 0.05,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              scroller,
              start: "top bottom-=20%",
              end: wordAnimationEnd,
              scrub: true,
            },
          }
        )
      );
    }
    return () => {
      animations.forEach((a) => a.kill());
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ]);
  return (
    <div
      ref={containerRef}
      className={`scroll-reveal ${containerClassName}`}
    >
      <div
        className={`scroll-reveal-text ${textClassName}`}
      >
        {splitText}
      </div>
    </div>
  );
};
console.log(
  document.querySelectorAll(".word").length
);
export default ScrollReveal;