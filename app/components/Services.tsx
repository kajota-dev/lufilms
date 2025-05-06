
const services = [
  {
    title: "Videos que Venden",
    description: "Contenido audiovisual pensado para captar atención, generar confianza y convertir vistas en clientes. Ideal para mostrar su valor de forma clara, directa y emocional.",
    icon: "🎬",
    img: "img/video.jpg"
  },
  {
    title: "Edición con Propósito",
    description: "Transforme cualquier grabación en una pieza visual que conecta. Cada corte, efecto y música están pensados para contar su historia con impacto y profesionalismo.",
    icon: "🎞️",
    img: "img/editar.jpg"
  },
  {
    title: "Perspectiva Aérea que Impacta",
    description: "Tome ventaja con tomas desde el aire que elevan su imagen, resaltan su proyecto y generan una percepción de marca sólida y memorable.",
    icon: "🎥",
    img: "img/drone.jpg"
  }
]




export function Services() {
  return (
    <section className="py-16 px-6 lg:px-20 text-center">
      {/* Título y descripción introductoria */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold">¿Ha invertido horas creando videos que no conectan ni generan resultados?</h2>
        <p className="mt-4 text-lg">
  Nos encargamos de todo: guion, grabación, edición y estrategia visual.
</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
        { title: "Ahorre Tiempo y Energía", color: "bg-black text-[#fffc04]" },         // En lugar de "Guion Estratégico"
        { title: "Consolide su Identidad Visual", color: "bg-[#fffc04] text-black" },   // En lugar de "Identidad Visual"
        { title: "Conecte Emocionalmente con su Audiencia", color: "bg-[#fffc04] text-black" }, // En lugar de "Cuenta tu Historia"
        { title: "Destaque Frente a su Competencia", color: "bg-black text-[#fffc04]" } // En lugar de "Diferénciate del Resto"

        ].map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-md ${item.color} flex items-center justify-center text-lg font-semibold`}
          >
            {item.title}
          </div>
        ))}
      </div>
      {/* Sección de servicios */}
      <div className="mt-12 space-y-20">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse md:flex-row items-center gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            {/* Contenedor de imagen */}
            <div className="">
            <img
              src={service.img}
              alt={service.title}
              className="w-full max-h-100 object-contain  rounded-xl"
            />
          </div>

            {/* Contenedor de título y descripción */}
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-3xl font-semibold flex items-center gap-2">
                {service.icon} {service.title}
              </h3>
              <p className="mt-4 text-lg">{service.description}</p>
              {/* <Button className="mt-6">Ver más</Button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

