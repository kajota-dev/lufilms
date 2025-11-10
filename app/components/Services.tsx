import React from "react";

function Accordion({
  label = "Ver beneficios",
  items,
  defaultOpen = false,
}: {
  label?: string;
  items: string[];
  defaultOpen?: boolean;
}) {
  return (
    <details className="group border border-gray-200 rounded-xl overflow-hidden" open={defaultOpen}>
      <summary className="flex items-center justify-between cursor-pointer select-none px-4 py-3 bg-gray-50 hover:bg-gray-100">
        <span className="text-sm font-semibold text-gray-900">{label}</span>
        <svg
          className="h-4 w-4 transition-transform duration-300 group-open:rotate-180"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.856a.75.75 0 111.08 1.04l-4.24 4.41a.75.75 0 01-1.08 0l-4.24-4.41a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </summary>
      <div className="px-5 py-4 bg-white">
        <ul className="list-disc pl-5 space-y-2 text-gray-800">
          {items.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </details>
  );
}

export function Services() {
  const segments = [
    {
      title: "Marcas & Negocios",
      emoji: "🏪",
      img: "img/negocio.png",
      description:
        "¿Publica constantemente y nadie pregunta? Creamos contenido estratégico que convierte vistas en clientes reales y ventas constantes.",
      categories: ["Restaurantes", "Gimnasios", "Tiendas", "Servicios"],
      benefits: [
        "Contenido con estrategia y propósito, no al azar.",
        "Anuncios optimizados para atraer al cliente correcto.",
        "Embudos que convierten seguidores en compradores.",
        "Más confianza e imagen profesional para vender más.",
      ],
    },
    {
      title: "Bienes Raíces (fincas, casas, lotes)",
      emoji: "🏠",
      img: "img/bienes.png",
      description:
        "¿Semanas sin resultados? Producimos videos y campañas que atraen compradores listos para visitar y cerrar.",
      categories: ["Casas", "Apartamentos", "Lotes", "Fincas"],
      benefits: [
        "Visuales que resaltan el valor real de su propiedad.",
        "Alcance a compradores calificados, no curiosos.",
        "Embudos que filtran y priorizan interesados reales.",
        "Venta más rápida y con menos fricción.",
      ],
    },
    {
      title: "Vehículos (autos, motos premium)",
      emoji: "🚗",
      img: "img/vehiculos.png",
      description:
        "Fotos oscuras y publicaciones sin estrategia limitan sus ventas. Hacemos contenido y campañas que generan consultas reales.",
      categories: ["Carros", "Motos", "Pickups", "4x4"],
      benefits: [
        "Fotos y videos que destacan lo mejor del vehículo.",
        "Campañas para gente interesada en su zona.",
        "Embudos que convierten clics en consultas reales.",
        "Venta más rápida con imagen de confianza.",
      ],
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-20 text-center bg-white">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">
        Venda más pero con estrategía
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
        Transformamos la imagen de su negocio en resultados: más clientes, más confianza y más ventas.
      </p>

      <div className="grid gap-10 md:grid-cols-3">
        {segments.map((seg, i) => (
          <div
            key={i}
            className="rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 flex flex-col"
          >
            <div className="relative w-full h-56 overflow-hidden">
              <img src={seg.img} alt={seg.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <h2 className="absolute bottom-4 left-4 text-white text-2xl font-bold drop-shadow-md">
                {seg.title}
              </h2>
            </div>

            <div className="p-6 text-left flex flex-col gap-4 flex-grow">
              <p className="text-gray-700 leading-relaxed">{seg.description}</p>

              <div className="flex flex-wrap gap-2">
                {seg.categories.map((c) => (
                  <span
                    key={c}
                    className="text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full border border-gray-200"
                  >
                    {c}
                  </span>
                ))}
              </div>

              {/* Acordeón de beneficios */}
              <Accordion label="Beneficios clave" items={seg.benefits} />

              <div className="pt-2 flex items-center justify-between">
                <a
                  href="#contacto"
                  className="px-5 py-2.5 rounded-xl bg-black text-white text-sm font-semibold hover:bg-gray-800 transition"
                >
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
