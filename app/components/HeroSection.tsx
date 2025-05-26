import { Button } from "../components/ui/button";
import CountdownTimer from "./CountdownTimer";

export function HeroSection({
  scrollToContact,
}: {
  scrollToContact: () => void;
}) {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-white bg-cover bg-center px-6 md:px-12"
      style={{ backgroundImage: "url('img/fondo.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-85"></div>

      {/* Contenido */}
      <div className="relative w-full text-center flex flex-col items-center">
        {/* Título */}
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
          ¿Necesita <span className="text-[#fffc04]">MÁS</span> ventas y{" "}
          <span className="text-[#fffc04]">MÁS</span> visibilidad?
        </h1>

        {/* Subtítulo corto */}
        <p className="mt-4 text-lg text-gray-300 max-w-xl">
          Entonces requiere de videos estratégicos que posicionan su marca y aumentan sus ventas.
        </p>

        {/* Promoción */}
        <div className="mt-6 text-sm text-gray-200 text-center space-y-2">
          <p className="text-gray-400">Solo quedan:</p>
          <CountdownTimer />
          <p className="text-[#fffc04] font-semibold text-base">
            Para obtener el 30% de descuento
          </p>
          <p>
            En el <strong>Paquete Emprendedor</strong> +{" "}
            <strong>8 fotografías profesionales GRATIS</strong>.
          </p>
        </div>

        {/* Botón */}
        <div className="mt-8">
          <Button
            className="bg-[#fffc04] text-black  px-6 py-2 rounded-md text-lg font-semibold shadow-md transition"
            onClick={scrollToContact}
          >
            Agendar mi promoción
          </Button>
        </div>
      </div>
    </section>
  );
}
