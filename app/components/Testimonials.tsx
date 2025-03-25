import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const logos = [
  { src: "https://www.fitmanageapp.com/logo.ico", alt: "FitManage App" },
  { src: "https://res.cloudinary.com/djmhhp7hp/image/upload/v1708539310/favico_kpdami.png", alt: "Cloudinary" },
  { src: "img/tenisturri.jpg", alt: "Tenis Turri" },
];

export function Testimonials() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <section className="py-16 px-6 bg-gray-100 text-center">
      {/* Título y descripción */}
      <div className="px-4 md:px-10">
        <h2 className="text-3xl font-bold">
          Potencia tu marca con las últimas tendencias y crea contenido auténtico que realmente impacte.
        </h2>
        <p className="mt-4 text-lg">
          No dejes que tu marca se quede atrás. Descubre cómo nuestros clientes están destacando con contenido visual innovador que capta la atención.
        </p>
      </div>

      {/* Carrusel de logos con autoplay */}
      <Carousel plugins={[plugin.current]} className="w-full max-w-5xl mx-auto mt-8">
        <CarouselContent className="flex gap-4">
          {logos.map((logo, index) => (
            <CarouselItem key={index} className="flex justify-center items-center w-1/3">
              <Card className="shadow-lg">
                <CardContent className="flex items-center justify-center p-6">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-38 object-contain w-full"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <p className="mt-6 text-lg italic">
        ¡Únete a los líderes del mercado! Transforma tu marca y comienza ahora.
      </p>
    </section>
  );
}
