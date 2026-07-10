import { useMemo } from "react";

export default function CurvedLoop({
  marqueeText = "",
  speed = 1000, // detik
  direction = "left",
  className = "",
}) {
  const text = useMemo(
    () => `${marqueeText}\u00A0\u00A0\u00A0`,
    [marqueeText]
  );

  const animationName =
    direction === "right"
      ? "marquee-right"
      : "marquee-left";

  return (
    <>
      <style>{`
        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>

      <div
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",

          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
        className="w-[24.5vw] max-md:w-[84vw]"
      >
        <div
          className={className}
          style={{
            display: "inline-flex",
            width: "max-content",
            animation: `${animationName} 80s linear infinite`,
            fontWeight: 500,
            color: "white",
          }}
        >
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </div>
      </div>
    </>
  );
}