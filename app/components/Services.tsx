
const services = [
  {
    "title": "Producción de Video",
    "description": "Aumenta tu impacto con contenido visual que vende. Captamos la esencia de tu negocio y creamos videos profesionales que convierten espectadores en clientes.",
    "icon": "🎬",
    "img": "/app/img/video.jpg"
  },
  {
    "title": "Edición y Postproducción",
    "description": "Transforma grabaciones en contenido irresistible. Pulimos cada detalle para que tu mensaje sea claro, atractivo y profesional.",
    "icon": "🎞️",
    "img": "/app/img/editar.jpg"
  },
  {
    "title": "Fotografía Comercial",
    "description": "Convierte miradas en ventas. Capturamos imágenes de alto impacto que elevan la percepción de tu marca y generan confianza inmediata.",
    "icon": "📸",
    "img": "/app/img/camara.jpg"
  },
  {
    "title": "Producción Aérea de Contenido con Dron",
    "description": "Haz que tu negocio se vea como nunca antes. Con tomas aéreas impresionantes, mostramos tu proyecto desde perspectivas que cautivan y generan mayor interés.",
    "icon": "🎥",
    "img": "/app/img/drone.jpg"
  }
]



export function Services() {
  return (
    <section className="py-16 px-6 lg:px-20 text-center">
      {/* Título y descripción introductoria */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold">Tu negocio merece ser visto.</h2>
        <p className="mt-4 text-lg">
          Potencia tu marca y hazla destacar con contenido visual de calidad.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {[
    { title: "Guion Estratégico", color: "bg-black text-[#fffc04]" },
    { title: "Identidad Visual", color: "bg-[#fffc04] text-black" },
    { title: "Cuenta tu Historia", color: "bg-[#fffc04] text-black" },
    { title: "Diferénciate del Resto", color: "bg-black text-[#fffc04]" },
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

