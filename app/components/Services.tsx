const services = [
  {
    title: "Oferta de Valor",
    description:
      "Antes de grabar, trabajamos juntos en definir una oferta irresistible enfocada en resultados. Esto asegura que todo el contenido tenga una base clara, persuasiva y enfocada en conversión.",
    icon: "🎯",
    img: "img/bombillo.png",
  },
  {
    title: "Planeación de Contenido Mensual",
    description:
      "Organizamos su calendario de contenido con ideas de alto impacto y guiones estratégicos. Incluye recomendaciones para videos, carruseles e imágenes informativas pensadas para atraer y educar a su audiencia.",
    icon: "📋",
    img: "img/planeacion.png",
  },
  {
    title: "Edición Profesional con Enfoque Comercial",
    description:
      "Transformamos sus grabaciones en piezas de alto impacto. Con edición moderna, subtítulos, música y ritmo dinámico, logramos que su contenido comunique valor, aumente visualizaciones y genere más interacción.",
    icon: "🎞️",
    img: "img/editar.png",
  },
  {
    title: "Regalia",
    description:
      "Recibirá materiales extra como fotos, clips B-roll y una guía para optimizar su perfil en redes sociales. Todo pensado para fortalecer su presencia y posicionar su marca con una imagen sólida y atractiva.",
    icon: "🎁",
    img: "img/regalo.png",
  },
];

export function Services() {
  return (
    <section className="py-16 px-6 lg:px-20 text-center">
      {/* Título y descripción introductoria */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold">
          ¿Ha invertido horas creando videos que no conectan ni generan
          resultados?
        </h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Nosotros definimos su oferta irresistible, diseñamos contenido
          alineado con los intereses de su cliente ideal y lo transformamos en
          una herramienta visual que vende por usted, incluso cuando usted no
          está.
        </p>

        {/* Pregunta + respuesta: ¿Qué es una oferta irresistible? */}
        <div className="mt-10 max-w-3xl mx-auto px-4 md:px-0">
          <div className="bg-black text-white rounded-2xl shadow-lg p-6 md:p-8">
            <h4 className="text-2xl font-bold mb-3">
              ¿Qué es una{" "}
              <span className="text-[#fffc04]">oferta irresistible</span>?
            </h4>
            <p className="text-lg leading-relaxed text-gray-200">
              Es una propuesta que suena como un{" "}
              <span className="text-[#fffc04] font-semibold">“SÍ LÓGICO”</span>.
              Tan clara, relevante y enfocada en{" "}
              <span className="text-[#fffc04] font-semibold">resultados</span>,
              que el cliente siente que pierde si no la acepta.
            </p>
            <p className="text-lg leading-relaxed text-gray-200 mt-3">
              No se trata solo de{" "}
              <span className="text-[#fffc04] font-semibold">
                bajar el precio
              </span>
              , sino de{" "}
              <span className="text-[#fffc04] font-semibold">
                aumentar el valor percibido
              </span>
              ,{" "}
              <span className="text-[#fffc04] font-semibold">
                resolver objeciones antes de que aparezcan
              </span>{" "}
              y destacar beneficios que conecten con sus{" "}
              <span className="text-[#fffc04] font-semibold">
                dolores y deseos reales
              </span>
              . Así, el precio deja de ser el problema.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {[
          {
            title: "Ahorre Tiempo y Energía",
            color: "bg-black text-[#fffc04]",
          },
          {
            title: "Consolide su Identidad Visual",
            color: "bg-[#fffc04] text-black",
          },
          {
            title: "Conecte Emocionalmente con su Audiencia",
            color: "bg-[#fffc04] text-black",
          },
          {
            title: "Destaque Frente a su Competencia",
            color: "bg-black text-[#fffc04]",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-md ${item.color} flex items-center justify-center text-lg font-semibold`}
          >
            {item.title}
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold">
        ¿Está listo para llevar su marca al siguiente nivel?
      </h2>
      <p className="text-lg leading-relaxed mt-3 text-gray-700">
        Esto es todo lo que recibirá para lograrlo.
      </p>

      {/* Sección de servicios */}
      <div className="mt-12 space-y-20">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse md:flex-row items-center gap-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Contenedor de imagen */}
            <div className="">
              <img
                src={service.img}
                alt={service.title}
                className="w-full max-h-100 object-contain rounded-xl"
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
          <div className="bg-black p-6 rounded-lg">
  <h2 className="text-2xl font-bold leading-snug text-white">
    ¿El siguiente paso? <br /><br />
    <span>
      Reunirnos para{" "}
      <span className="text-yellow-400 font-semibold">alinear su propuesta</span> y empezar a{" "}
      <span className="text-yellow-400 font-semibold">atraer clientes</span> que realmente{" "}
      <span className="text-yellow-400 font-semibold">valoran</span> lo que usted ofrece.
    </span>
  </h2>
</div>


            </div>
    </section>
  );
}
