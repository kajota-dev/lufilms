import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"

export function InfiniteCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true }) // Acelerando el movimiento a 1 segundo
  )

  // Lista de logos de marcas
  const logos = [
    { src: "app/img/software/gopro.png", alt: "GoPro", name: "GoPro" },
    { src: "app/img/software/dji.png", alt: "DJI", name: "DJI" },
    { src: "app/img/software/nikon.png", alt: "Nikon", name: "Nikon" },
    { src: "app/img/software/adobe.png", alt: "Adobe", name: "Adobe" },
    { src: "app/img/software/davinci.png", alt: "DaVinci Resolve", name: "DaVinci Resolve" },
    { src: "app/img/software/after.png", alt: "After Effects", name: "After Effects" },
  ]

  return (
    <section className="py-16 px-6 text-center">

              {/* Título con enfoque en calidad y herramientas */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        Herramientas Profesionales para Mejorar la Calidad de tu Contenido
      </h2>
      <p className="text-lg mb-8 text-gray-700">
        Utilizamos equipos y software de las mejores marcas para ofrecerte contenido de la más alta calidad.
      </p>

      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent className="flex gap-4">
          {logos.map((logo, index) => (
            <CarouselItem key={index} className="flex justify-center items-center w-1/1"> 
              <img
                src={logo.src} // Ruta de la imagen del logo
                alt={logo.alt} // Texto alternativo
                className="w-32 md:w-40" // Ajusta el tamaño del logo
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
