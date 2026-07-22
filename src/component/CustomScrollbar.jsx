import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

export default function CustomScrollbar() {
  const [thumbTop, setThumbTop] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);

  useEffect(() => {
    const updateScrollbar = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      // Tinggi thumb diatur fix 20% dari viewport height (windowHeight * 0.2)
      const thumbHeight = windowHeight * 0.2;

      // Hitung posisi top thumb
      const maxScroll = documentHeight - windowHeight;
      const maxThumbTop = windowHeight - thumbHeight;
      const currentThumbTop = maxScroll > 0 ? (scrollTop / maxScroll) * maxThumbTop : 0;

      setThumbTop(currentThumbTop);
    };

    window.addEventListener("scroll", updateScrollbar);
    window.addEventListener("resize", updateScrollbar);
    updateScrollbar();

    return () => {
      window.removeEventListener("scroll", updateScrollbar);
      window.removeEventListener("resize", updateScrollbar);
    };
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const windowHeight = window.innerHeight;
    const thumbHeight = windowHeight * 0.2;
    setStartY(e.clientY - thumbTop);
    document.body.style.userSelect = "none";
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const thumbHeight = windowHeight * 0.2;
      const maxThumbTop = windowHeight - thumbHeight;
      
      let newThumbTop = e.clientY - startY;
      if (newThumbTop < 0) newThumbTop = 0;
      if (newThumbTop > maxThumbTop) newThumbTop = maxThumbTop;

      const maxScroll = documentHeight - windowHeight;
      const scrollTarget = (newThumbTop / maxThumbTop) * maxScroll;

      window.scrollTo({ top: scrollTarget, behavior: "auto" });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.userSelect = "auto";
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startY, thumbTop]);

  return (
    /* md:hidden untuk menyembunyikan scrollbar ini di layar desktop */
    <div className="fixed top-0 right-0 w-[5px] h-screen z-50 pointer-events-none md:hidden">
      <div
        onMouseDown={handleMouseDown}
        style={{
          height: `20vh`, // Tinggi pas 20% dari vh secara manual
          transform: `translateY(${thumbTop}px)`,
        }}
        className="w-full bg-white/80 hover:bg-white rounded-full cursor-pointer pointer-events-auto transition-colors"
      />
    </div>
  );
}