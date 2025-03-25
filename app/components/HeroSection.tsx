import { Button } from "../components/ui/button";

export function HeroSection({ scrollToContact }: { scrollToContact: () => void }) {
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
        <h1 className="text-4xl md:text-6xl font-bold max-w-4xl">
          Potencia tu negocio con contenido que{" "}
          <span className="text-[#fffc04]">conecta</span>,{" "}
          <span className="text-[#fffc04]">impacta</span> y{" "}
          <span className="text-[#fffc04]">vende</span>.
        </h1>

        {/* Subtítulo */}
        <p className="mt-6 text-lg max-w-2xl px-4 md:px-20">
          Haz que tu negocio se vea, se escuche y se elija.
        </p>

        {/* Botón */}
        <div className="mt-8">
          <Button
            className="bg-[#fffc04] text-black hover:bg-[#fffc04] hover:opacity-80 px-6 py-2 rounded-md"
            onClick={scrollToContact} // Llamar a la función que hace scroll
          >
            Agenda ahora
          </Button>
        </div>
      </div>
    </section>
  );
}
