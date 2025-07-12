import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import "./Carousel.css";

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
  items,
  baseWidth = 400,
  autoplay = true,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = true,
  round = false,
  mobile = false
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      container.addEventListener("mouseenter", () => setIsHovered(true));
      container.addEventListener("mouseleave", () => setIsHovered(false));
      return () => {
        container.removeEventListener("mouseenter", () => setIsHovered(true));
        container.removeEventListener("mouseleave", () => setIsHovered(false));
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) return prev + 1;
          if (prev === carouselItems.length - 1) return loop ? 0 : prev;
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) =>
        loop && prev === items.length - 1 ? prev + 1 : Math.min(prev + 1, carouselItems.length - 1)
      );
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) =>
        loop && prev === 0 ? items.length - 1 : Math.max(prev - 1, 0)
      );
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0,
        },
      };

  return (
    <div
      ref={containerRef}
      className={`carousel-container ${round ? "round" : ""}`}
      style={{
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px`, borderRadius: "50%" }),
      }}
    >
      <motion.div
        className="carousel-track"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [
            -(index + 1) * trackItemOffset,
            -index * trackItemOffset,
            -(index - 1) * trackItemOffset,
          ];
          const outputRange = [90, 0, -90];
          const rotateY = useTransform(x, range, outputRange, { clamp: false });

          return (
            <motion.div
              key={index}
              className={`carousel-item ${round ? "round" : ""}`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : "100%",
                rotateY: rotateY,
                ...(round && { borderRadius: "50%" }),
              }}
              transition={effectiveTransition}
            >
              <SpotlightCard
                className={`custom-spotlight-card w-full h-[220px] ${
                  item.type === "passive" ? "passive" : "active text-[#FFF9F8]"
                }`}
                spotlightColor="#BAD1FF"
              >
                {item.type === "active" && (
                  <>
                    <div className="flex flex-row items-center mb-2 max-md:mb-0 max-md:mt-0 max-md:h-[35px]">
                      <img src={item.icon} alt="" className="w-[70px] h-[70px] max-md:w-[60px] max-md:h-[60px]" />
                      <p className="ml-3 font-montserrat font-bold text-[26px] leading-[157%] tracking-[0%] max-md:text-[20px] max-md:ml-0">
                        {item.title}
                      </p>
                    </div>
                    <div>
                      <p className="font-montserrat font-medium text-[20px] leading-[157%] tracking-[0%] w-[100%] max-md:text-[12px] mt-[20px]">
                        {item.description}
                      </p>
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-[13px] leading-[157%] tracking-[0%] text-right mt-[30px] max-md:text-[10px]">
                        {item.role}
                      </p>
                    </div>
                  </>
                )}
              </SpotlightCard>
            </motion.div>
          );
        })}
      </motion.div>

      <div className={`carousel-indicators-container ${round ? "round" : ""}`}>
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`carousel-indicator ${
                currentIndex % items.length === index ? "active" : "inactive"
              }`}
              animate={{
                scale: currentIndex % items.length === index ? 1 : 1,
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
