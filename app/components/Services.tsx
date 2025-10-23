export function Services() {
  const segments = [
    {
      title: "Marcas & Negocios",
      emoji: "🏪",
      img: "img/negocio.png",
      description:
        "¿Publica constantemente y nadie pregunta? Le ayudamos a crear contenido estratégico que convierta vistas en clientes reales y ventas constantes.",
      categories: ["Restaurantes", "Gimnasios", "Tiendas", "Servicios"],
      benefits: [
        "Creamos contenido con estrategia y propósito, no al azar.",
        "Desarrollamos anuncios optimizados para atraer al cliente correcto.",
        "Implementamos embudos de venta que convierten seguidores en compradores.",
        "Fortalezca su marca y genere confianza con una imagen profesional.",
      ],
    },
    {
      title: "Bienes Raíces (fincas, casas, lotes)",
      emoji: "🏠",
      img: "img/bienes.png",
      description:
        "Si su propiedad lleva semanas publicada sin resultados, producimos videos y campañas publicitarias que atraen compradores listos para visitar y cerrar.",
      categories: ["Casas", "Apartamentos", "Lotes", "Fincas"],
      benefits: [
        "Diseñamos contenido visual que resalta el valor real de su propiedad.",
        "Utilizamos estrategias publicitarias para llegar a compradores calificados.",
        "Creamos embudos de venta que filtran curiosos y priorizan interesados reales.",
        "Acelere la venta de su propiedad sin estrés ni negociaciones innecesarias.",
      ],
    },
    {
      title: "Vehículos (autos, motos premium)",
      emoji: "🚗",
      img: "img/vehiculos.png",
      description:
        "Fotos oscuras y publicaciones sin estrategia limitan sus ventas. Nosotros creamos contenido profesional y campañas que generan consultas de compradores reales.",
      categories: ["Carros", "Motos", "Pickups", "4x4"],
      benefits: [
        "Creamos videos y fotografías que destacan lo mejor de su vehículo.",
        "Aplicamos campañas publicitarias para llegar a personas interesadas en su zona.",
        "Diseñamos embudos de venta que convierten clics en consultas reales.",
        "Logre vender más rápido y con una imagen de confianza y profesionalismo.",
      ],
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-20 text-center bg-white">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Contenido que vende, no que entretiene.</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
        Creamos videos, fotos y anuncios para que su negocio, propiedad o vehículo destaque y atraiga compradores reales. Sin complicaciones, sin perder tiempo.
      </p>

      <div className="grid gap-10 md:grid-cols-3">
        {segments.map((seg, i) => (
          <div
            key={i}
            className="rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 flex flex-col"
          >
            <div className="relative w-full h-56 overflow-hidden">
              <img src={seg.img} alt={seg.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <h2 className="absolute bottom-4 left-4 text-white text-2xl font-bold drop-shadow-md">
                {seg.title}
              </h2>
            </div>

            <div className="p-6 text-left flex flex-col flex-grow">
              <p className="text-gray-700 mb-4 leading-relaxed">{seg.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {seg.categories.map((c) => (
                  <span key={c} className="text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full border border-gray-200">
                    {c}
                  </span>
                ))}
              </div>

              <ul className="list-disc pl-5 space-y-1 text-gray-800 flex-grow">
                {seg.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between">
                <a href="#contacto" className="px-5 py-2.5 rounded-xl bg-black text-white text-sm font-semibold hover:bg-gray-800 transition">
                  Quiero resultados
                </a>
                {/* <a href="#portafolio" className="text-sm underline text-gray-600 hover:text-black">
                  Ver ejemplos
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
