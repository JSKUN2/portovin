import { useRef, useEffect, useState } from "react";

const FadeContent = ({
  children,
  blur = false,
  duration = 1000,
  easing = "ease-out",
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  className = "",
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setInView(true);
          }, delay);
        } else {
          // Reset agar animasi bisa muncul ulang saat scroll
          setInView(false);
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold, delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : initialOpacity,
        transform: inView ? "translateY(0px)" : "translateY(20px)",
        transition: `opacity ${duration}ms ${easing}, filter ${duration}ms ${easing}, transform ${duration}ms ${easing}`,
        filter: blur ? (inView ? "blur(0px)" : "blur(10px)") : "none",
      }}
    >
      {children}
    </div>
  );
};

export default FadeContent;
