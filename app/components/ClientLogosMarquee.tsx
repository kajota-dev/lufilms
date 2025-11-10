import React from "react";

type LogoItem = { img: string; title: string };

interface Props {
  logos: LogoItem[];
  speedMs?: number;
}

export default function ClientLogosMarquee({
  logos,
  speedMs = 18000,
}: Props) {
  const track = [...logos, ...logos];

  return (
    <section className="w-full bg-white py-6">
      {/* Alto fijo del carrusel */}
      <h1 className="text-m text-center  mb-6 text-gray-900">Algunos clientes</h1>
      <div className="relative overflow-hidden h-38 md:h-40">
        {/* Fades laterales (opcionales) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

        {/* Pista */}
        <div
          className="flex h-full items-center gap-8 animate-marquee will-change-transform"
          style={{ ["--speed" as any]: `${speedMs}ms` }}
        >
          {track.map((seg, i) => (
            <div
              key={`${seg.title}-${i}`}
              className="h-full w-[140px] md:w-[170px] flex-shrink-0 grid place-items-center overflow-hidden opacity-80 hover:opacity-100 transition"
              aria-label={seg.title}
              title={seg.title}
            >
              <img
                src={seg.img}
                alt={seg.title}
                loading="lazy"
                className="h-full w-auto object-contain p-3"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee var(--speed) linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
