import ScrollReveal from "../animasi/ScrollReveal";

export default function Deskripsi() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 max-md:px-10 md:px-78 py-20 text-white">
      <div className="w-full max-w-7xl">
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={0}
          blurStrength={8}
          textClassName="
            w-full
            leading-7
            md:leading-tight
            whitespace-pre-wrap
          "
        >
          {
            "*Grooth* *Studio* *is* *an* *indie* *game* *development* *team* *founded* *on* *April* *19,* *2024,* *creating* *immersive* *and* *innovative* *games* *driven* *by* *creativity,* *passion,* *and* *unique* *experiences.*\n\nGrooth Studioは、2024年4月19日に設立されたインディーゲーム開発チームで、創造性、情熱、そしてユニークな体験を原動力とした、没入感のある革新的なゲームを制作しています。"
          }
        </ScrollReveal>
      </div>
    </section>
  );
}