import { useMemo } from "react";

export default function CurvedLoop({
  marqueeText = "",
  speed = 1000, 
  direction = "left",
  className = "",
}) {
  // 1. Membersihkan karakter khusus dan memecah string untuk mendapatkan bagian-bagian teks
  // Kita split berdasarkan karakter U+2800 (⠀)
  const segments = useMemo(() => {
    return marqueeText.split("\u2800");
  }, [marqueeText]);

  const animationName = direction === "right" ? "marquee-right" : "marquee-left";

  return (
    <>
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .text-segment {
          display: inline-flex;
          align-items: center;
        }
        .wide-space {
          width: 2em; /* Atur lebar ini sesuai kebutuhan visual spasi Anda */
        }
      `}</style>

      <div
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
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
          {/* Mapping untuk membuat render teks dengan spasi pengganti */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="text-segment">
              {segments.map((seg, index) => (
                <span key={index} className="text-segment">
                  {seg}
                  {index < segments.length - 1 && <span className="wide-space" />}
                </span>
              ))}
              {/* Spasi tambahan di akhir setiap blok marquee */}
              <span style={{ width: "3em" }} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}