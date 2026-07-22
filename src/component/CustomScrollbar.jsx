import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

export default function CustomScrollbar() {
  const [thumbTop, setThumbTop] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // State untuk mengatur visibilitas

  useEffect(() => {
    let scrollTimer;

    const updateScrollbar = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      // Tinggi thumb 20% dari viewport height
      const thumbHeight = windowHeight * 0.2;

      // Hitung posisi top thumb
      const maxScroll = documentHeight - windowHeight;
      const maxThumbTop = windowHeight - thumbHeight;
      const currentThumbTop = maxScroll > 0 ? (scrollTop / maxScroll) * maxThumbTop : 0;

      setThumbTop(currentThumbTop);

      // Munculkan scrollbar saat discroll
      setIsVisible(true);

      // Sembunyikan kembali setelah 1 detik tidak ada aktivitas scroll
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        if (!isDragging) {
          setIsVisible(false);
        }
      }, 1000); // Waktu dalam milidetik sebelum scrollbar memudar (1 detik)
    };

    window.addEventListener("scroll", updateScrollbar);
    window.addEventListener("resize", updateScrollbar);

    return () => {
      window.removeEventListener("scroll", updateScrollbar);
      window.removeEventListener("resize", updateScrollbar);
      clearTimeout(scrollTimer);
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.clientY - thumbTop);
    document.body.style.userSelect = "none";
    setIsVisible(true); // Tetap tampil saat sedang ditarik
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
      // Beri jeda kecil setelah dilepas sebelum di-hide
      setTimeout(() => setIsVisible(false), 1000);
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
    <div className="fixed top-0 right-0 w-[5px] h-screen z-50 pointer-events-none md:hidden">
      <div
        onMouseDown={handleMouseDown}
        style={{
          height: `20vh`,
          transform: `translateY(${thumbTop}px)`,
        }}
        className={`w-full bg-white/80 hover:bg-white rounded-full cursor-pointer pointer-events-auto transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
